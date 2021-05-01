<template>
  <div class="label" v-if="label">{{ label }}</div>
  <textarea
    class="textarea"
    :placeholder="placeholder"
    :rows="rows"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";
export default defineComponent({
  name: "TextArea",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    rows: {
      type: Number,
      default: 8,
    },
  },
  setup(props, { emit }: SetupContext) {
    return { emit };
  },
  emits: ["update:modelValue"],
});
</script>

<style lang="scss" scoped>
.textarea {
  padding: 0.5rem 1rem;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 1rem;
}
</style>
