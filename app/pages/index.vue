<template>
  <div class="align-center mt-24 flex justify-center">
    <div class="ml-12">
      <h1
        class="bg-gradient-to-r from-rose-400 via-purple-500 to-pink-500 bg-clip-text text-4xl text-transparent">
        Hii! I'm Pixelic.
      </h1>
      <br />
      <div class="text-lg">
        <span>
          I reside in
          <span class="text-purple-300"> Germany </span>
          and it's

          <span class="text-purple-300">{{ time }}</span
          >.
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineRouteRules({
  ssr: false,
});

const time = ref(
  new Date().toLocaleTimeString(undefined, { timeZone: "Europe/Berlin" }),
);
onMounted(() =>
  setInterval(() => {
    time.value = new Date().toLocaleTimeString(undefined, {
      timeZone: "Europe/Berlin",
    });
  }, 1000),
);
</script>
