import { readFileSync, writeFileSync } from 'fs';
import { request } from 'https';

// CAUTION: Simple script not taking errors and edge cases into account

interface PackageJson {
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
}

interface PackageDescription {
  license: string;
}

const BASE_URL = 'https://registry.npmjs.org';

async function fetchLicenseInfos(dependencies: string[]) {
  const packageInfoRequests = dependencies.map((dependency) => {
    return new Promise<[string, string]>((resolve) => {
      const req = request(`${BASE_URL}/${dependency}`, (response) => {
        const chunks: Uint8Array[] = [];

        response.on('data', (data: Uint8Array) => {
          chunks.push(data);
        });

        response.on('end', () => {
          const data = Buffer.concat(chunks);
          const info: PackageDescription = JSON.parse(data.toString());
          const licenseInfo = info.license;

          resolve([dependency, licenseInfo]);
        });
      });
      req.end();
    });
  });

  const result = await Promise.all(packageInfoRequests);
  return Object.fromEntries(result);
}

async function run() {
  const packageJsonFilePath = process.argv[2];
  const licenseFilePath = process.argv[3];

  const packageJsonFile = readFileSync(packageJsonFilePath);
  const packageJson: PackageJson = JSON.parse(packageJsonFile.toString());

  const dependencies = await fetchLicenseInfos(Object.keys(packageJson.dependencies));
  const devDependencies = await fetchLicenseInfos(Object.keys(packageJson.devDependencies));

  const licenseInfos = {
    dependencies,
    devDependencies,
  };

  writeFileSync(licenseFilePath, JSON.stringify(licenseInfos, null, 2));
}

run();
