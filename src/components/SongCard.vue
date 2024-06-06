<script setup>

</script>

<template>
<div class="card-container">
  <img />
  <div class="album-info">
    <h1>
      Album title
    </h1>
    <h2>
      Artist name
    </h2>
  </div>
</div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  margin: 0 12px;
  gap: 10px;
  align-items: center;
  padding: 16px;
  user-select: none;
  border-radius: 8px;
}

.card-container:hover {
  background-color: #1c1c1c;
  cursor: pointer;
}

.card-container img {
  width: 146px;
  height: 146px;
  justify-self: center;
}

.card-container .album-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.album-info h1 {
  font-weight: bold;
  font-size: 14px;
}

.album-info h2 {
  color: #8F8F8F;
  font-size: 12px;

}
</style>