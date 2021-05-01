<template>
  <form class="form" @submit="handleSubmit">
    <Input label="Name" />
    <Input label="Email" />
    <Input label="Password" />
    <TextArea label="Bio" />
    <Button />
  </form>
</template>

<script lang="ts">
import Input from "@/components/core/Input.vue";
import Button from "@/components/core/Button.vue";
import TextArea from "@/components/core/TextArea.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "Info",
  components: { Input, Button, TextArea },
});
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  max-width: 50%;
}
</style>
