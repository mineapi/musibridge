<script setup lang="ts">
import LoginForm from '../../components/forms/LoginForm.vue';
import MovingBackroundGlowEffect from "@/components/effects/MovingBackroundGlowEffect.vue";
</script>

<script lang="ts">
import {auth} from "@/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  methods: {
    handleLogin(email : string, password : string) {
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;

            if (user)
              this.$router.push("/");
          }).catch((error: Error) => {
            console.log(error);
            console.log("Login failed, try again.");
      });
    }
  }
}
</script>

<template>
  <MovingBackroundGlowEffect :x="100" :y="50" :glow-radius="100" :path-radius="60"/>

  <LoginForm @login-submit="handleLogin" />
</template>

<style scoped>

</style>