<template>
  <div class="form">
    <h2 class="form__title my2">New Type</h2>
    <div class="form__inputs my2">
      <Input v-model="title" placeholder="Title" />
      <Input v-model="description" placeholder="Description" />
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
import { todosController } from "@/controllers/todosController.ts";
import { modalController } from "@/controllers/modalController.ts";

import { defineComponent, reactive, toRefs, ref } from "vue";
export default defineComponent({
  name: "ToDoForm",
  components: { Button, Input },
  setup() {
    const { addTodo } = todosController();
    const { componentName } = modalController();
    const errors = ref<boolean>(false);
    const todo = reactive({ title: "", description: "" });

    const handleSubmit = () => {
      if (!todo.title || !todo.description) {
        errors.value = true;
        return;
      }
      errors.value = false;
      addTodo(todo);
      componentName.value = "";
    };

    return { ...toRefs(todo), handleSubmit, errors };
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
