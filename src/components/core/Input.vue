<template>
  <input
    :placeholder="placeholder"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";
export default defineComponent({
  name: "Input",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }: SetupContext) {
    return { emit };
  },
  emits: ["update:modelValue"],
});
</script>

<style lang="scss" scoped></style>
