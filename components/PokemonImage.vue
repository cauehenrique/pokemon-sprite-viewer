<script setup lang="ts">
const { src, scaleFactor } = defineProps({
  src: String,
  scaleFactor: Number,
});
</script>

<template>
  <img :src="src" :width="scaleFactor * 96" class="rendering-pixelated" />
</template>
