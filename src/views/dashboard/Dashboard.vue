<script setup lang="ts">

import AppHeader from "@/components/AppHeader.vue";
import FooterPlayerController from "@/components/FooterPlayerController.vue";
import SongCard from "@/components/SongCard.vue";
import * as sea from "node:sea";
</script>

<script lang="ts">
import {auth} from "@/Firebase";

export default {
  mounted() {
    if (!auth.currentUser)
      this.$router.push("/login");
  },
  methods: {
    search(value : string) {
      if (value.trim().length == 0) {
        this.$router.push("/dashboard");
        return;
      }

      let encoded = encodeURIComponent(value);

      this.$router.push(`/dashboard/search/${encoded}`);
    }
  }
}
</script>

<template>
  <main style="height: 100vh; margin: 0;">
    <div class="dashboard-container">
      <div class="header-box">
        <AppHeader @search-update="search" />
      </div>
      <div class="dashboard-content">
        <router-view />
      </div>
      <div class="footer-box">
        <FooterPlayerController />
      </div>
    </div>
  </main>
</template>

<style scoped>
.search-content {
  padding: 0 32px;
}
</style>
