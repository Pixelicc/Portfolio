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
      <UBadge variant="subtle" color="black" class="ml-2">
        <UIcon name="i-mdi-gpu" dynamic />
        <span class="ml-1">iGPU: {{ specs?.specs?.cpu?.specs?.gpu }}</span>
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
            }}{{ i + 1 === specs?.specs?.disks?.length ? "" : " + " }}
          </span>
        </span>
      </UBadge>
    </UCard>
    <UCard class="mt-4">
      <template #header>
        <span class="text-lg font-semibold">Metrics</span>
      </template>
      <UTooltip>
        <template #text>
          Last booted at:
          {{ new Date(metrics?.metrics?.lastBoot).toLocaleString("en-GB") }}
        </template>
        <UBadge variant="subtle" color="purple">
          <UIcon name="i-heroicons-clock-16-solid" />
          <span class="ml-1">
            Uptime: {{ metrics?.metrics?.uptime?.human ?? "N/A" }}
          </span>
        </UBadge>
      </UTooltip>
      <UTooltip>
        <template #text>
          Daily consumption resets everyday at 00:00 German time
        </template>
        <UBadge variant="subtle" color="yellow" class="mx-2">
          <UIcon name="i-heroicons-bolt-16-solid" />
          <span class="ml-1">
            Power: {{ metrics?.metrics?.power?.currentUsage ?? "0" }}W currently
            | {{ metrics?.metrics?.power?.dailyUsage ?? "0" }}kWh today
          </span>
        </UBadge>
      </UTooltip>
      <br />
      <br />
      <UBadge variant="subtle" color="green">
        <UIcon name="i-heroicons-cpu-chip-16-solid" dynamic />
        <span class="ml-1">
          CPU: {{ metrics?.metrics?.cpu?.usedPercentage.toFixed(2) ?? "0" }}% of
          {{ metrics?.metrics?.cpu?.threads ?? "0" }} Threads
        </span>
      </UBadge>
      <UBadge variant="subtle" color="green" class="mx-2">
        <UIcon name="i-ri-ram-2-line" dynamic />
        <span class="ml-1">
          RAM: {{ metrics?.metrics?.ram?.usedCapacity.toFixed(2) ?? "0" }}GB /
          {{ metrics?.metrics?.ram?.capacity ?? "0" }}GB
        </span>
      </UBadge>
      <UBadge variant="subtle" color="green">
        <UIcon name="i-heroicons-folder-16-solid" />
        <span class="ml-1">
          Disk:
          {{
            metrics?.metrics?.disks
              // @ts-ignore
              ?.reduce((acc, disk) => disk.usedCapacity, 0)
              .toFixed(2) ?? "0"
          }}GB /
          {{
            // @ts-ignore
            metrics?.metrics?.disks?.reduce((acc, disk) => disk.capacity, 0) ??
            "0"
          }}GB
        </span>
      </UBadge>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import type { HomelabSpecs, HomelabMetrics } from "~/types";

const { data: specs } = useFetch<{ specs: HomelabSpecs }>(
  "https://api.pixelic.dev/v2/homelab/specs",
);
const { data: metrics } = useFetch<{ metrics: HomelabMetrics }>(
  "https://api.pixelic.dev/v2/homelab/metrics",
);
</script>
