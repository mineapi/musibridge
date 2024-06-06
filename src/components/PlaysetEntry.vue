<script setup lang="ts">

</script>

<script lang="ts">
export default {
  props: ["track_number", "track_name", "track_duration"]
}
</script>

<template>
  <div class="list-header">
    <p id="number">{{ track_number }}</p>
    <p id="name">{{ track_name }}</p>
    <p id="duration">{{ track_duration }}</p>
  </div>
</template>

<style scoped>
.list-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  font-size: 14px;
  gap: 10px;
  align-items: center;
}

.list-header:hover {
  background-color: #1c1c1c;
  cursor: default;
}

.list-header #number {
  width: 58px;
  text-align: center;
  font-size: inherit;
}

.list-header #name {
  width: 100%;
  font-size: inherit;
}

.list-header #duration {
  width: 200px;
  font-size: inherit;
  text-align: center;
}
</style>