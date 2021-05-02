<template>
  <div class="label" v-if="label">{{ label }}</div>
  <input
    class="input"
    :class="classes"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    :required="required"
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
    classes: {
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
    required: {
      type: Boolean,
      default: false,
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
