<template>
  <div class="app">
    <Navbar />
    <router-view />
    <Modal />
    <!-- <Snackbar /> -->
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/core/Navbar.vue";
import Modal from "@/components/core/Modal.vue";
/* import Snackbar from "@/components/compound/Snackbar.vue"; */

import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: { Navbar, Modal },
});
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
}
</style>
