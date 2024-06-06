<script setup lang="ts">

</script>

<script lang="ts">
export default {
  methods: {
    searchUpdate(value : InputEvent) {
      this.$emit('search-update', (value.target as HTMLInputElement).value);
    },
    openSettings() {
      this.$router.push("/settings");
    }
  }
}
</script>

<template>
  <div class="row header">
    <img src="../assets/branding/Logo.svg" width="36" height="43" />
    <router-link to="/dashboard" class="header-link">Home</router-link>
    <router-link to="/library" class="header-link">Library</router-link>
    <span style="flex-grow: 1"/>
    <div class="search-bar">
      <img src="../assets/icons/search.svg">
      <input type="text" class="search-field" placeholder="Find music" v-on:input="searchUpdate"/>
    </div>
    <span style="flex-grow: 1"/>

    <img src="../assets/icons/user.svg" v-on:click="openSettings" />
  </div>
</template>

<style scoped>
.header-link {
  color: white;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
}

.search-bar {
  width: 60%;
  height: 52px;
  border-radius: 36px;
  background-color: var(--vt-c-white);
  display: flex;
  flex-direction: row;
  padding: 10px 18px 10px 18px;
  gap: 10px;
  align-items: center;
}

.search-bar img {
  width: 19px;
  height: 19px;
}

.search-field {
  margin: 0;
  font-size: 16px;
  font-family: inherit;
  background-color: transparent;
  border: none;
  height: 100%;
  width: 100%;
  align-self: center;
}

.search-field:focus { outline: none; }

.search-field::placeholder { color: black; }

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px;
  gap: 32px;
  user-select: none;
}
</style>