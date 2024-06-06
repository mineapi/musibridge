<script setup lang="ts">

</script>

<script lang="ts">
export default {
  methods: {
    onClick() {
      this.$router.push('/playset/a');
    }
  }
}
</script>

<template>
<div class="card" v-on:click="onClick">
  <img />
  <div class="info-body">
    <h1>
      Query Name
    </h1>
    <h2>
      Type | Artist Name
    </h2>
  </div>
</div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  width: 384px;
  padding: 12px;
  border-radius: 8px;
  user-select: none;
}

.card:hover {
  background-color: #1c1c1c;
  cursor: pointer;
}

.card .info-body {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.card img {
  width: 71px;
  height: 71px;
}

.card h1 {
  margin: 0;
  font-size: 16px;
  color: white;
  font-weight: bold;
}

.card h2 {
  margin: 0;
  font-size: 14px;
  color: #8f8f8f;
}
</style>
