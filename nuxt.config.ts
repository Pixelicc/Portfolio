// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-03-01",
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    inlineRouteRules: true,
  },
  modules: ["@nuxt/ui", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "dark",
  },
});
