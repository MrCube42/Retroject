import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Retroject Dokumentation",
  description: " der Software Retroject",
  lang: "de-DE",
  themeConfig: {
    siteTitle: "Retroject",
    logo: "/images/logo.png",
    sidebar: [
      {
        text: "Onboarding",
        items: [
          {
            text: "Für Neulinge",
            link: "onboarding/",
          },
        ],
      },
      {
        text: "Technische Dokumentation",
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: "Architekturdokumentation",
            link: "technical/architecture",
          },
          {
            text: "Entscheidungen",
            link: "technical/decisions",
          },
        ],
      },
    ],
  },
});
