# Lizenz-Übersicht

Hier findet sich eine Liste aller Abhängigkeiten ersten Grade inklusive ihrer Lizenz-Information. Diese Infos werden bei jeder Generierung dieser Dokumentationsseite aktualisiert.

<script setup lang="ts">
import licenseInfos from './licenses.json'
import { DependencyLicenses } from '../.vitepress/components'
</script>

## Laufzeit Abhängigkeiten

<DependencyLicenses :license-infos="licenseInfos.dependencies" />

## Development Abhängigkeiten

<DependencyLicenses :license-infos="licenseInfos.devDependencies" />
