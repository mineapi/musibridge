<script setup lang="ts">

</script>

<script lang="ts">
export default {
  methods: {
    openPlayer() {
      this.$router.push("/player")
    }
  }
}
</script>

<template>
  <div class="controller-footer">
    <img style="width: 71px; height: 71px" v-on:click="openPlayer"/>
    <div class="controller-song-info">
      <h1 id="song-title">
        Song title
      </h1>
      <h2 id="artist-name">
        Artist name
      </h2>
    </div>
    <span style="flex-grow: 1;" />
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
          <div class="play-bar-fill"/>
        </div>
      </div>
    </div>
    <span style="flex-grow: 1;" />
    <div class="volume-control-container">
      <img src="../assets/icons/player/speaker.svg"/>
      <div class="volume-bar">
        <div class="volume-bar-fill"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.controller-footer {
  display: flex;
  flex-direction: row;
  padding: 10px 16px;
  height: 100%;
  align-items: center;
  gap: 10px;
  user-select: none;
}

.controller-song-info {
  display: flex;
  flex-direction: column;
}

.controller-song-info #song-title {
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  padding: 0;
}

.controller-song-info #artist-name {
  font-size: 12px;
  color: #8F8F8F;
  margin: 0;
  padding: 0;
}

.volume-control-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px;
}

.volume-bar {
  background-color: var(--vt-c-divider-dark-1);
  height: 4px;
  width: 116px;
  border-radius: 100px 100px 100px 100px;
}

.volume-bar-fill {
  background-color: var(--vt-c-white);
  width: 80%;
  height: 100%;
  border-radius: 100px 100px 100px 100px;
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

.play-bar .play-bar-fill {
  background-color: var(--vt-c-white);
  height: 100%;
  width: var(--playback-percent);
  border-radius: 100px 100px 100px 100px;
}
</style>