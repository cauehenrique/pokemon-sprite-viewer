<template>
  <div>
    <NuxtPage />
    <a href="//">
      <GitHub />
    </a>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.icon {
  @apply w-6 h-6;
}

.rendering-pixelated {
  image-rendering: pixelated;
}
</style>
