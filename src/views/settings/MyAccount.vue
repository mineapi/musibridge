<script lang="ts">
import SettingEntry from "@/components/SettingEntry.vue";
import ValueChangeModal from "@/components/modal/ValueChangeModal.vue";
import { ref } from 'vue';

export default {
  components: {
    SettingEntry,
    ValueChangeModal
  },
  setup() {
    const firstNameEditModal = ref(null);

    return {
      firstNameEditModal
    }
  },
  methods: {
    firstNameEdit() {
      this.firstNameEditModal.value.openModal();
    }
  }
}
</script>

<template>
  <div class="settings-list">
    <SettingEntry label="First name" @edit="firstNameEdit"/>
  </div>
  <br />
  <ValueChangeModal ref="firstNameEditModal" class="modal" />
</template>

<style scoped>
.settings-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>