<template>
  <div class="todos">
    <div class="todos__action">
      <Input placeholder="Search" v-model="filter" />
      <Button title="Add New" @click="setComponentName('ToDoForm')" />
    </div>
    <div class="todos__data">
      <div class="todos__data--header row pb4 mt4">
        <p>Todo Name</p>
        <p>Text</p>
        <p class="text-center">Actions</p>
      </div>
      <div class="todos__data--body mt4">
        <div
          class="todos__data--body--item row mt4"
          v-for="({ name, text }, i) in filteredTodos"
          :key="i"
        >
          <p>{{ name }}</p>
          <p>{{ text }}</p>
          <Button icon="trash" @click="removeTodo(i)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Input from "@/components/core/Input.vue";
import Button from "@/components/core/Button.vue";
import { modalController } from "@/controllers/modalController.ts";
import { todosController } from "@/controllers/todosController.ts";

export default defineComponent({
  name: "Todos",
  components: { Input, Button },
  setup() {
    const { setComponentName } = modalController();
    const { filteredTodos, removeTodo, filter } = todosController();

    return { filteredTodos, setComponentName, removeTodo, filter };
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
