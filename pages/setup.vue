<template>
  <UContainer class="mt-4">
    <UCard>
      <template #header>
        <span class="text-lg font-semibold">Specifications</span>
      </template>
      <UBadge variant="subtle" color="black">
        <UIcon name="i-heroicons-cpu-chip-16-solid" />
        <span class="ml-1">CPU: {{ specs?.specs?.cpu?.name }}</span>
      </UBadge>
      <br />
      <br />
      <UBadge variant="subtle" color="black">
        <UIcon name="i-mdi-gpu" dynamic />
        <span class="ml-1">GPU: {{ specs?.specs?.gpu?.name }}</span>
      </UBadge>
      <br />
      <br />
      <UBadge variant="subtle" color="black">
        <UIcon name="i-ri-ram-2-line" dynamic />
        <span class="ml-1">RAM: {{ specs?.specs?.ram?.name }}</span>
      </UBadge>
      <br />
      <br />
      <UBadge variant="subtle" color="black">
        <UIcon name="i-heroicons-folder-16-solid" />
        <span class="ml-1">
          Disks:
          <span v-for="(disk, i) in specs?.specs?.disks">
            {{ disk.name
            }}{{ i + 1 === specs?.specs?.disks.length ? "" : " + " }}
          </span>
        </span>
      </UBadge>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import type { SetupSpecs } from "~/types";

const specs = await useFetch<{ specs: SetupSpecs }>(
  "https://api.pixelic.dev/v2/setup/specs",
);
</script>
