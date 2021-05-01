<template>
  <button class="button regular" v-if="!icon">{{ title }}</button>
  <button class="button icon" :type="type" v-else>
    <font-awesome-icon :icon="['fas', `${icon}`]" />
  </button>
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
    icon: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
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

.icon {
  margin: auto;
}
</style>
