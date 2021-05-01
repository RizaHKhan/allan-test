<template>
  <form class="form" @submit.prevent="handleSubmit">
    <Input label="Name" />
    <Input label="Email" />
    <Input label="Password" />
    <TextArea label="Bio" />
    <Button type="submit" />
    <div class="errors" :class="errors ? 'has-errors' : ''">
      <p>All fields are required</p>
    </div>
  </form>
</template>

<script lang="ts">
import Input from "@/components/core/Input.vue";
import Button from "@/components/core/Button.vue";
import TextArea from "@/components/core/TextArea.vue";

import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Info",
  components: { Input, Button, TextArea },
  setup() {
    const errors = ref<boolean>(false);
    const handleSubmit = () => {
      errors.value = true;
    };

    return { handleSubmit, errors };
  },
});
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  max-width: 50%;
}

.errors {
  max-height: 0;
  transition: all 0.5s ease;
  overflow: hidden;

  p {
    color: red;
  }
}

.has-errors {
  max-height: 50px;
}
</style>
