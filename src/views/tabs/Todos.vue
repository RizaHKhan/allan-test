<template>
  <div class="todos">
    <div class="todos__action">
      <Input placeholder="Search" />
      <Button />
    </div>
    <div class="todos__data">
      <div class="todos__data--header row pb4 mt4">
        <p>Todo Name</p>
        <p>Text</p>
        <p>Actions</p>
      </div>
      <div class="todos__data--body mt4">
        <div
          class="todos__data--body--item row mt4"
          v-for="({ title, description }, i) in todos"
          :key="i"
        >
          <p>{{ title }}</p>
          <p>{{ description }}</p>
          <Button title="Delete" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Input from "@/components/core/Input.vue";
import Button from "@/components/core/Button.vue";

interface Todo {
  title: string;
  description: string;
}

export default defineComponent({
  name: "Todos",
  components: { Input, Button },
  setup() {
    const todos = ref<Todo[]>([
      {
        title: "Put out the trash",
        description:
          "The trash gets stinky after a while so better to get rid of it now",
      },
      {
        title: "Do your homework",
        description: "Best to do our homework in order to get a good job",
      },
    ]);

    return { todos };
  },
});
</script>

<style lang="scss" scoped>
.todos {
  &__action {
    display: flex;
    justify-content: space-between;
  }
  &__data {
    &--header {
      border-bottom: 1px solid grey;

      p {
        font-weight: bold;
      }
    }

    &--body {
      &--item {
      }
    }
  }
}

.row {
  display: grid;
  grid-template-columns: 1fr 2fr 150px;
}
</style>
