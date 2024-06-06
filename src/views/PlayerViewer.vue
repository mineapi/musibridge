<script setup lang="ts">

import PlaysetEntry from "@/components/PlaysetEntry.vue";
</script>

<script lang="ts">
import {getSongTitle} from "@/player/Player";

let songTitle : string = "Song Title" || getSongTitle();
let artistName : string = "Artist Name" || getSongTitle();



document.documentElement.style.setProperty("--playback-percent", '80%');

export default {
  methods: {
    back() {
      this.$router.back();
    }
  },
  mounted() {
    let backgroundCanvas : HTMLCanvasElement = document.getElementById("background-effect") as HTMLCanvasElement;
    let context : CanvasRenderingContext2D = backgroundCanvas.getContext("2d");

    setInterval(() => {
      context.reset();
      context.beginPath();
      context.fillStyle = '#ffffff';
      context.arc(backgroundCanvas.width / 2, backgroundCanvas.height / 2, 50, 0, Math.PI * 2);
      context.fill();
    }, 1);
  }
}
</script>
<template>
  <canvas id="background-effect" />

  <div class="back-container">
    <button v-on:click="back">
      <img src="../assets/icons/back.svg" />
    </button>
  </div>
  <div class="content-container">
    <img id="cover" />
    <h1>{{ songTitle }}</h1>
    <h2>{{ artistName }}</h2>

    <div class="controls-container">
      <div id="button-container">
        <button>
          <img src="../assets/icons/player/seek-backward.svg">
        </button>
        <button>
          <img src="../assets/icons/player/play.svg">
        </button>
        <button>
          <img src="../assets/icons/player/seek-forward.svg">
        </button>
      </div>
      <div id="play-bar-container">
        <div class="play-bar">
          <div id="play-bar-fill"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
root {
  --playback-percent: 0%;
}

#background-effect {
  position: fixed;
  width: 100%;
  height: 100%;
  filter: blur(256px);
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100vh - 128px);
  justify-content: center;
  background-color: transparent;
}

.content-container img {
  width: 308px;
  height: 308px;
}

.content-container h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.content-container h2 {
  font-size: 16px;
  margin: 0;
}

.controls-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 80px;
}

.controls-container #button-container {
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
}

#button-container button {
  background-color: transparent;
  border: none;
  margin-top: 9px;
  margin-bottom: 9px;
}

#button-container button img {
  filter: none;
  height: 16px;
  width: 16px;
}

#button-container button img:hover {
  filter: brightness(90%);
}

.controls-container #play-bar-container {
  align-items: center;
}

.play-bar {
  background-color: var(--vt-c-divider-dark-1);
  height: 4px;
  width: 548px;
  border-radius: 100px 100px 100px 100px;
}

.play-bar #play-bar-fill {
  background-color: var(--vt-c-white);
  height: 100%;
  width: var(--playback-percent);
  border-radius: 100px 100px 100px 100px;
}
</style>