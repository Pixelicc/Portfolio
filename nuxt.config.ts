// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  nitro: {
    preset: "node",
  },
  site: {
    url: "https://pixelic.dev",
    name: "Pixelic's Portfolio",
    description: "Portfolio Website of Pixelic",
    defaultLocale: "en",
  },
  routeRules: {
    "/setup": {
      swr: 3600,
    },
    "/projects": {
      swr: 900,
    },
    "/projects/*": {
      swr: 900,
    },
    "/homelab": {
      swr: 30,
    },
    "/api/location": {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=30",
      },
    },
  },
  colorMode: {
    preference: "dark",
  },
  ui: {
    icons: {
      //@ts-ignore
      dynamic: true,
    },
  },
  ogImage: {
    enabled: false,
  },
  seoExperiments: {
    enabled: false,
  },
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  modules: ["@nuxt/ui", "@nuxtjs/seo", "@nuxtjs/google-fonts"],
  compatibilityDate: "2024-10-27",
});
