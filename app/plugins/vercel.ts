import { inject as injectAnalytics } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

export default defineNuxtPlugin(() => {
  injectAnalytics();
  injectSpeedInsights();
});
