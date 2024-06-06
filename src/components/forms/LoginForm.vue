<script setup lang="ts">
import GlyphLogo from "@/components/branding/GlyphLogo.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    }
  },
  methods: {
    onSubmit(e : any) {
      e.preventDefault();

      this.$emit("login-submit", this.email, this.password);
    }
  }
}
</script>

<template>
  <div class="form-box">
    <GlyphLogo class="glyph-logo" href="/" />
    <h2>Welcome back</h2>
    <div>
      <form v-on:submit="onSubmit">
        <fieldset>
          <label for="email">Email address</label>
          <input class="auth-field" type="email" id="email" v-model="email" />
        </fieldset>
        <fieldset>
          <label for="password">Password</label>
          <input class="auth-field" type="password" id="password" v-model="password" />
        </fieldset>
        <fieldset>
          <input class="button_filled" type="submit" value="Log in" onsubmit="" />
        </fieldset>
      </form>
    </div>
    <router-link class="link" to="/signup">No account? Create an account.</router-link>
  </div>
</template>

<style scoped>

</style>
