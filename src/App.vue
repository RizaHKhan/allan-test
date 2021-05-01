<template>
  <Navbar />
  <router-view />
  <Modal />
</template>

<script lang="ts">
import Navbar from "@/components/core/Navbar.vue";
import Modal from "@/components/core/Modal.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: { Navbar, Modal },
});
</script>
