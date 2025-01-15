<template>
  <div class="align-center mt-24 flex justify-center">
    <div class="ml-12">
      <h1
        class="bg-gradient-to-r from-rose-400 via-purple-500 to-pink-500 bg-clip-text text-4xl text-transparent">
        Hii! I'm Pixelic.
      </h1>
      <br />
      <div class="text-lg">
        <ClientOnly>
          <span>
            I currently reside in
            <span class="text-purple-300">
              {{ countryPrefix ? `${countryPrefix} ` : "" }}{{ country }}
            </span>
            and it's
            <span class="text-purple-300">{{ time }}</span
            >.
          </span>
          <br />
          <span>
            The weather here is
            <span class="text-purple-300">{{ weather }}</span>
            with temperatures of
            <span class="text-purple-300">{{ temperature }}°C</span>.
          </span>
          <template #fallback>
            <div class="animate-pulse shadow">
              <span
                class="h-2 rounded-md bg-purple-400 bg-opacity-15 text-transparent">
                I currently reside in xyz and it's xx:yy:zz
                <br />
              </span>
              <span
                class="h-2 rounded-md bg-purple-400 bg-opacity-15 text-transparent">
                The weather here is xyz with temperatures of xx.y°C.
              </span>
            </div>
          </template>
        </ClientOnly>
      </div>
    </div>
    <div class="ml-12 mt-0.5 text-lg">
      <span v-for="social in socials">
        <div>
          <UIcon class="-mt-1" :name="'i-' + social.icon" dynamic></UIcon>
          <a class="ml-2 text-pink-400 underline" :href="social.url">
            {{
              social.name === "E-Mail" || social.name === "Discord Server"
                ? social.name
                : social.text
            }}
          </a>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Socials } from "~/types";

// @ts-ignore
const { data: socials } = useFetch<{ socials: Socials }>(
  "https://api.pixelic.dev/v2/socials",
);
const { data: location } = await useFetch("/api/location");

const country = location.value?.country.name;
const countryPrefix = location?.value?.country.prefix;

const time = ref(
  new Date().toLocaleTimeString("en-GB", {
    timeZone: location.value?.time.timezone,
  }),
);

// @ts-ignore
let timeInterval = null;
onMounted(() => {
  timeInterval = setInterval(() => {
    time.value = new Date().toLocaleTimeString("en-GB", {
      timeZone: location.value?.time.timezone,
    });
  }, 1000);
});
// @ts-ignore
onUnmounted(() => clearInterval(timeInterval));
const weather = location.value?.weather.isRaining
  ? "rainy"
  : location.value?.weather.isSnowing
    ? "snowy"
    : (location?.value?.weather?.cloudCover ?? 0 > 95)
      ? "cloudy"
      : (location?.value?.weather?.cloudCover ?? 0 > 75)
        ? "partially cloudy"
        : "clear";
const temperature = location?.value?.weather?.temperature.current ?? "N/A";
</script>
