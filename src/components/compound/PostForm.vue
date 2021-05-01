<template>
  <div class="form">
    <h2 class="form__title my2">New Type</h2>
    <div class="form__inputs my2">
      <Input v-model="name" placeholder="Name" />
      <Input v-model="text" placeholder="Text" />
      <Input v-model="email" placeholder="Email" />
    </div>
    <div class="form__errors" :class="errors ? 'has-errors' : ''">
      <p>All fields are required</p>
    </div>
    <div class="form__action my2">
      <Button @click="handleSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/core/Button.vue";
import Input from "@/components/core/Input.vue";
import { postController } from "@/controllers/postController.ts";
import { modalController } from "@/controllers/modalController.ts";

import { defineComponent, reactive, toRefs, ref } from "vue";
export default defineComponent({
  name: "PostForm",
  components: { Button, Input },
  setup() {
    const { addPost } = postController();
    const { componentName } = modalController();
    const errors = ref<boolean>(false);
    const post = reactive({ name: "", text: "", email: "" });

    const handleSubmit = () => {
      if (!post.name || !post.text) {
        errors.value = true;
        return;
      }
      errors.value = false;
      addPost(post);
      componentName.value = "";
    };

    return { ...toRefs(post), handleSubmit, errors };
  },
});
</script>

<style lang="scss" scoped>
.form {
  &__inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    @include media-down(md) {
      grid-template-columns: 1fr;
    }
  }

  &__errors {
    display: flex;
    justify-content: flex-end;
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s ease;

    p {
      color: red;
    }
  }

  &__action {
    display: flex;
    justify-content: flex-end;
  }
}

.has-errors {
  max-height: 50px;
}
</style>
