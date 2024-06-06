<script setup lang="ts">
import SignupForm from "../../components/forms/SignupForm.vue";
import MovingBackroundGlowEffect from "@/components/effects/MovingBackroundGlowEffect.vue";
</script>

<script lang="ts">
import {auth} from "@/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default {
  methods: {
    handleSignup(name : string, email : string, password : string) {
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name
            }).then(() => {
              this.$router.push("/");
            })
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }
}
</script>

<template>
  <MovingBackroundGlowEffect :x="100" :y="50" :glow-radius="100" :path-radius="60"/>

  <SignupForm @signup-submit="handleSignup" />
</template>

<style scoped>

</style>
