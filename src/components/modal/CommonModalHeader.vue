<script lang="ts">
export default {
  props: ["title"],
  methods: {
    close() {
      this.$emit("modal-close");
    }
  }
}
</script>

<template>
  <div class="container">
    <p>{{ title }}</p>
    <img src="/src/assets/icons/close.svg" v-on:click="close"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px;
}

.container p {
  font-size: 24px;
  font-weight: bold;
  flex-grow: 1;
}

.container img {
  width: 18px;
  height: 18px;
  margin: 10px;
}
</style>