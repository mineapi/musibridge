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

      this.$emit("signup-submit", this.name, this.email, this.password);
    }
  }
}
</script>

<template>
  <div class="form-box">
    <GlyphLogo class="glyph-logo" href="/" />
    <h2>Sign up for Musibridge</h2>
    <div>
      <form v-on:submit="onSubmit">
        <fieldset>
          <label for="name">Full name</label>
          <input class="auth-field" type="text" id="name" v-model="name" />
        </fieldset>
        <fieldset>
          <label for="email">Email address</label>
          <input class="auth-field" type="email" id="email" v-model="email" />
        </fieldset>
        <fieldset>
          <label for="password">Password</label>
          <input class="auth-field" type="password" id="password" v-model="password" />
        </fieldset>
        <fieldset>
          <input class="button_filled" type="submit" value="Create account" onsubmit="" />
        </fieldset>
      </form>
    </div>
    <router-link class="link" to="/login">Already have an account? Log in.</router-link>
  </div>
</template>

<style scoped>

</style>
