<template>
  <div class="label" v-if="label">{{ label }}</div>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";
export default defineComponent({
  name: "Input",
  emits: ["update:modelValue"],
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      required: false,
      default: "",
    },
  },
  setup(props, { emit }: SetupContext) {
    return { emit };
  },
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
