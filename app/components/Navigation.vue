<template>
  <UNavigationMenu
    orientation="horizontal"
    :items="links"
    class="justify-center" />
</template>

<script setup lang="ts">
const links = [
  {
    label: "Home",
    icon: "i-heroicons-home-16-solid",
    to: "/",
  },
  {
    label: "Projects",
    icon: "i-heroicons-command-line-16-solid",
    to: "/projects",
  },
];
</script>
