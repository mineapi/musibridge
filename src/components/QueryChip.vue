<script setup lang="ts">

</script>

<script lang="ts">
export default {
  props: {
    name : String
  }
}
</script>

<template>
  <div class="chip">
    <p>{{ name }}</p>
  </div>
</template>

<style scoped>
.chip {
  display: flex;
  padding: 0 18px;
  height: 32px;
  width: auto;
  background-color: #302129;
  align-items: center;
  border-radius: 100px;
  user-select: none;
}

.chip:hover {
  background-color: #3b2a33;
}

.chip p {
  color: white;
  font-size: 14px;
  font-weight: bold;
}
</style>