<template>
  <div
    class="align-center fixed bottom-0 flex w-full justify-center bg-gray-800 p-4">
    <div>
      <span>
        © {{ new Date().getFullYear() }} -
        <a class="text-purple-300 underline" href="https://github.pixelic.dev">
          Pixelic
        </a>
      </span>
    </div>
    <div class="ml-12">
      <UIcon class="-mt-1" name="i-mdi-github" dynamic></UIcon>
      <a
        class="ml-2 text-purple-300 underline"
        href="https://github.com/Pixelicc/Portfolio"
        >Repository
      </a>
    </div>
  </div>
</template>
