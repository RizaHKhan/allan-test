<template>
  <input :placeholder="placeholder" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Input",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped></style>
