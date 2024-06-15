<template>
  <UContainer v-for="i in [1, 2]" class="mt-4 flex items-center space-x-4">
    <USkeleton
      v-for="j in [1, 2, 3]"
      class="h-[175px] w-[500px] !bg-purple-400 !bg-opacity-15" />
  </UContainer>
</template>
