<template>
  <input
    class="input"
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

<style lang="scss" scoped>
.input {
  padding: 0.5rem 1rem;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 1rem;
}
</style>
