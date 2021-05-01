<template>
  <form class="form" @submit.prevent="handleSubmit">
    <Input label="Name" v-model="name" />
    <Input label="Email" v-model="email" />
    <Input label="Password" type="password" v-model="password" />
    <TextArea label="Bio" v-model="bio" />
    <Button type="submit" class="float-right" />
    <div class="errors" :class="errors ? 'has-errors' : ''">
      <p>All fields are required</p>
    </div>
  </form>
</template>

<script lang="ts">
import Input from "@/components/core/Input.vue";
import Button from "@/components/core/Button.vue";
import TextArea from "@/components/core/TextArea.vue";
import { userInfoController } from "@/controllers/userInfoController.ts";

import { defineComponent } from "vue";
export default defineComponent({
  name: "Info",
  components: { Input, Button, TextArea },
  setup() {
    const {
      name,
      email,
      password,
      bio,
      handleSubmit,
      errors,
    } = userInfoController();

    return { handleSubmit, errors, name, email, password, bio };
  },
});
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  max-width: 50%;

  @include media-down(md) {
    max-width: 100%;
  }
}

.errors {
  max-height: 0;
  transition: all 0.5s ease;
  overflow: hidden;

  p {
    color: red;
  }
}

.float-right {
  justify-self: end;
}

.has-errors {
  max-height: 50px;
}
</style>
