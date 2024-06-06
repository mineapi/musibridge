<script setup lang="ts">

import PlaysetEntry from "@/components/PlaysetEntry.vue";
</script>

<script lang="ts">
const items = [
  {
    number: 1,
    name: "Skibidi",
    duration: "4:00"
  },
  {
    number: 2,
    name: "Ohio",
    duration: "10:00:00"
  },
  {
    number: 3,
    name: "Among Us",
    duration: "20:00:00"
  },
  {
    number: 4,
    name: "Guess Who's Back",
    duration: "3:00"
  },
  {
    number: 5,
    name: "Balls Yo Jaws",
    duration: "4:00"
  }
]

export default {
  methods: {
    back() {
      this.$router.back();
    }
  }
}
</script>

<template>
  <div class="back-container">
    <button v-on:click="back">
      <img src="../assets/icons/back.svg" />
    </button>
  </div>
  <div class="content-container">
    <div class="playset-info">
      <img />
      <div class="info-container">
        <h1>Name</h1>
        <h2>Author</h2>
        <h2>Creation</h2>
        <h2># Songs | Length</h2>
      </div>
    </div>
    <div class="list-header">
      <p id="number">Track</p>
      <p id="name">Track name</p>
      <p id="duration">Track duration</p>
    </div>
    <div class="track-list" v-for="i in items">
      <PlaysetEntry :track_name="i.name" :track_duration="i.duration" :track_number="i.number" />
    </div>
  </div>
</template>

<style scoped>
.track-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.list-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  gap: 10px;
  align-items: center;
}

.list-header #number {
  width: 58px;
  text-align: center;
  font-size: inherit;
  font-weight: inherit;
}

.list-header #name {
  width: 100%;
  font-size: inherit;
  font-weight: inherit;
}

.list-header #duration {
  width: 200px;
  font-size: inherit;
  font-weight: inherit;
  text-align: center;
}

.back-container {
  margin: 32px;
  height: 32px;
  position: fixed;
}

.back-container button {
  background: none;
  border: none;
}

.back-container img {
  height: 16px;
  width: 16px;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 64px;
  transform: translate(0, 64px);
  height: 100%;
}

.playset-info {
  display: flex;
  flex-direction: column;
  gap: 12px;

}

.playset-info img {
  width: 226px;
  height: 226px;
}

.playset-info .info-container {
  display: flex;
  flex-direction: column;
}

.info-container h1 {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}

.info-container h2 {
  font-size: 14px;
  color: #8F8F8F;
}
</style>
