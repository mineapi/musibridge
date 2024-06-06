<script setup>

import SongCard from "@/components/SongCard.vue";
</script>

<template>
  <h1>Jump back in.</h1>
  <div class="card-carousel">
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 32px;
  user-select: none;
}
.card-carousel {
  display: flex;
  flex-direction: row;
  gap: calc(calc(100% - 200px * 8) / 8);
}
</style>