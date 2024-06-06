<script lang="ts">
  import * as path from "node:path";

  export default {
    props: ["label", "icon", "path"],
    methods: {
      changeNav() {
        this.$router.push(path);
      },
    }
  }
</script>

<template>
  <div ref="container" class="entry selected" v-on:click="changeNav">
    <div class="image-cont">
      <img :src="icon" />
    </div>
    {{ label }}
  </div>
</template>

<style scoped>
.entry {
  height: 44px;
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--color-text);
  font-size: 16px;
  user-select: none;
  cursor: pointer;

}

.entry .image-cont {
  width: 23px;
  height: 23px;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
