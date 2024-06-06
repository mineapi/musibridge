<script lang="ts">
import {ref} from "vue";
import CommonModalHeader from "@/components/modal/CommonModalHeader.vue";
import FancyButton from "@/components/controls/FancyButton.vue";



export default {
  components: {FancyButton, CommonModalHeader},
  props: ["header-text", "field-text"],
  data() {
    return {
      value: ""
    }
  },
  setup() {
    const shown = ref(false);

    function openModal() : void {
      shown.value = true;
    }

    function closeModal() : void {
      shown.value = false;
      console.log(isOpen());
    }

    function isOpen() : boolean {
      return shown.value;
    }

    return {
      openModal,
      closeModal,
      shown
    }
  },
  methods: {
    submit() {
      this.$emit("submit", this.value);
    },
    close() {
      this.closeModal();
    }
  }
}
</script>

<template>
  <div class="modal-container" v-if="shown">
    <CommonModalHeader title="Change first name" @modal-close="close" />
    <div class="modal-content">
      <div class="field-wrapper">
        New first name
        <input v-model="value" class="auth-field" />
      </div>
    </div>
    <span style="height: 24px;"/>
    <div class="modal-footer">
      <FancyButton text="Update" v-on:click="submit"/>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  width: 506px;
  height: fit-content;
  background-color: #211416;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  user-select: none;
}

.field-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin: 10px;
  gap: 10px;
}

.modal-content {
  flex-grow: 1;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>