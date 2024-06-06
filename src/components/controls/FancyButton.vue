<script lang="ts">
export default {
  props: ["text"]
}
</script>

<template>
  <div class="button-container">
    {{ text }}
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  background-color: var(--color-accent);
  border-radius: 100px;
  border-color: var(--color-primary);
  border-width: 2px;
  user-select: none;
  cursor: pointer;
}
</style>