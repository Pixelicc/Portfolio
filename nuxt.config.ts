// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-09-15",
  experimental: {
    inlineRouteRules: true,
  },
  modules: ["@nuxt/ui", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "dark",
  },
});
