<script setup>
const props = defineProps({
  data: String,
});

await new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});
</script>

<template>
  <div>
    <div>I'm a slow component ;)</div>
    <div>{{ props.data }}</div>
  </div>
</template>
