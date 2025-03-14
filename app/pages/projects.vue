<template>
  <div class="m-16 grid grid-cols-4 content-evenly gap-2">
    <UCard
      v-if="projects.length > 1"
      v-for="i in [0, 1, 2, 3]"
      class="max-w-xl">
      <template #header>
        <b>{{ projects[i].name }}</b>
        <UBadge
          v-if="projects[i].discontinued"
          color="error"
          variant="soft"
          class="ml-2"
          >Discontinued</UBadge
        >
      </template>
      <div class="flex flex-wrap justify-center">
        {{ projects[i].description }}
        <NuxtImg
          v-if="projects[i]?.image"
          :src="projects[i].image"
          width="384"
          class="mt-2 transform rounded-lg shadow-xl transition-transform duration-300 hover:scale-105" />
      </div>
      <template #footer>
        <UButton
          v-if="
            projects[i]?.link?.toLowerCase() !==
            projects[i]?.repository?.url?.toLowerCase()
          "
          color="primary"
          class="mr-2"
          variant="outline"
          size="xs"
          :to="projects[i].link"
          target="_blank"
          >Visit</UButton
        >
        <UButton
          v-if="projects[i]?.repository"
          color="secondary"
          variant="outline"
          size="xs"
          class="mr-2"
          :to="projects[i].repository.url"
          target="_blank"
          >View Repository</UButton
        >
        <!-- @vue-ignore -->
        <UDropdownMenu
          v-if="projects[i]?.archive"
          :items="[
            Object.entries(projects[i].archive)
              .sort(([a], [b]) => b - a)
              .map(([date, link]: string[]) => ({
                label: date,
                click: () =>
                  navigateTo(link, {
                    external: true,
                    open: {
                      target: '_blank',
                    },
                  }),
              })),
          ]"
          :popper="{ placement: 'bottom-start' }">
          <UButton
            color="warning"
            variant="outline"
            size="xs"
            trailing-icon="i-heroicons-chevron-down-20-solid"
            target="_blank"
            >View Archive(s)</UButton
          >
        </UDropdownMenu>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
defineRouteRules({
  ssr: false,
});

const { data: projects }: { data: any } = await useFetch(
  "https://api.pixelic.dev/v2/projects",
  { default: () => [] },
);
</script>
