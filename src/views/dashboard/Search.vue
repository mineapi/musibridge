<script setup>

import QueryCard from "@/components/QueryCard.vue";
import QueryChip from "@/components/QueryChip.vue";
</script>

<template>
    <!--<h1>{{$route.params.query}}</h1>-->
  <div class="container">
    <div class="query-filter">
      <QueryChip name="Spotify" />
      <QueryChip name="YouTube" />
      <QueryChip name="Albums" />
      <QueryChip name="Artists" />
      <QueryChip name="Songs" />
      <QueryChip name="Playlists" />
    </div>
    <div class="results-container">
      <QueryCard />
      <QueryCard />
      <QueryCard />
      <QueryCard />
      <QueryCard />
      <QueryCard />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.query-filter {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.results-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: calc((100% - (384px * 4)) / 4);
  row-gap: 10px;
}
</style>