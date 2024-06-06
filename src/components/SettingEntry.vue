<script lang="ts">
import FancyButton from "@/components/controls/FancyButton.vue";

export default {
  components: {FancyButton},
  props: ["label"],
  data() {
    return {
      value : "John"
    }
  },
  methods: {
    edit() {
      this.$emit("edit");
    }
  }
}
</script>

<template>
  <div class="container">
    {{ label + ":" }}
    <p class="value-text">{{ value }}</p>
    <FancyButton text="Edit" v-on:click="edit"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  width: 100%;
}

.value-text {
  flex-grow: 1;
}
</style>