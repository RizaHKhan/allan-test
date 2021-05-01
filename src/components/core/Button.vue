<template>
  <button class="button">{{ title }}</button>
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

<style lang="scss" scoped>
.button {
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: solid 1px black;
  background: 0;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    background: grey;
    color: white;
  }
}
</style>
