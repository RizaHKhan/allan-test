<template>
  <button>{{ title }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    title: {
      type: String,
      default: "Submit",
    },
  },
});
</script>

<style lang="scss" scoped></style>
