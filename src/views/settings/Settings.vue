<script setup lang="ts">
import {onMounted} from 'vue';
import { type RouterView } from 'vue-router'
import SettingsTab from "@/components/SettingsTab.vue";
import ValueChangeModal from "@/components/modal/ValueChangeModal.vue";

const tabs = [
  {
    label: "My Account",
    icon: "src/assets/icons/user.svg",
    path: "/settings/"
  },
  {
    label: "Security",
    icon: "src/assets/icons/lock.svg",
    path: "/settings/security"
  },
  {
    label: "Connected Services",
    icon: "src/assets/icons/plug.svg",
    path: "/settings/connectedservices"
  }
]

</script>

<script lang="ts">

import {ref} from "vue";

export default {
  methods: {
    back() {
      this.$router.back();
    },
  }
}
</script>

<template>
  <div class="back-container">
    <button v-on:click="back">
      <img src="../../assets/icons/back.svg" />
    </button>
  </div>
  <div class="content-container">
    <h1>Settings</h1>
    <div class="scaffold">
      <div class="settings-sidebar">
        <SettingsTab v-for="tab in tabs" :label="tab.label" :icon="tab.icon" :path="tab.path" />
      </div>
      <router-view class="settings-content"/>
    </div>
  </div>
</template>

<style scoped>
.settings-content {
  width: 100%;
}

.settings-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 10px;
}

.modal-blur {
  position: fixed;
  width: 100vh;
  height: 100vh;
  filter: blur(200px);
}

.content-container {
  height: calc(100vh - 128px);
  background-color: transparent;
  align-items: flex-start;
  transform: translateY(96px);
  margin: 0;
}

.content-container h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 0 32px;
}

.scaffold {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.settings-sidebar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 0;
  width: 290px;
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


</style>
