<template>
  <UHorizontalNavigation :links="links" class="justify-center" />
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
    badge: "Coming Soon",
  },
  {
    label: "Setup",
    icon: "i-heroicons-computer-desktop-16-solid",
    to: "/setup",
  },
  {
    label: "Homelab",
    icon: "i-heroicons-server-16-solid",
    to: "/homelab",
  },
];
</script>
