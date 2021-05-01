<template>
  <div class="form">
    <h2 class="form__title my2" v-if="type">New {{ type }}</h2>
    <div class="form__inputs my2">
      <Input />
      <Input />
    </div>
    <div class="form__action my2">
      <Button />
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/core/Button.vue";
import Input from "@/components/core/Input.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: { Button, Input },
  props: {
    type: {
      String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  &__inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
}
</style>
