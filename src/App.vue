<script lang="ts">
  export default {
    mounted() {
      this.$router.push('/dashboard');
    }
  }
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

