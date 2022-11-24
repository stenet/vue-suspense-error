<script setup>
import { useRenderSlowComponent } from "./use-render-slow-component";

const { Comp } = useRenderSlowComponent();
</script>

<template>
  <div>
    Test Suspense + render function + top level await
  </div>

  <Suspense>
    <Comp />
  </Suspense>
</template>

<style scoped>
</style>
