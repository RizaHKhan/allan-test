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
          <p v-if="i !== updateIndex">{{ name }}</p>
          <Input v-else v-model="updateName" classes="mr2" />
          <p v-if="i !== updateIndex">{{ text }}</p>
          <Input v-else v-model="updateText" />
          <Button icon="trash" @click="removeTodo(i)" />
          <Button
            v-if="updateIndex !== i"
            icon="cogs"
            @click="handleUpdate(i, name, text)"
          />
          <Button
            v-else
            icon="save"
            @click="handleSave(i, updateName, updateText)"
          />
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
    const { filteredTodos, removeTodo, filter, saveTodo } = todosController();
    const updateIndex = ref<number>(-1);

    const updateName = ref<string>("");
    const updateText = ref<string>("");

    const handleUpdate = (i: number, name: string, text: string) => {
      updateIndex.value = i;
      updateName.value = name;
      updateText.value = text;
    };

    const handleSave = (i: number, name: string, text: string) => {
      if (!name || !text) {
        updateIndex.value = -1;
        return;
      }
      saveTodo(i, name, text);
      updateIndex.value = -1;
    };

    return {
      filteredTodos,
      setComponentName,
      removeTodo,
      filter,
      handleUpdate,
      updateIndex,
      handleSave,
      updateName,
      updateText,
    };
  },
});
</script>

<style lang="scss" scoped>
.todos {
  &__action {
    display: flex;
    justify-content: space-between;

    @include media-down(md) {
      flex-direction: column;
      .button {
        margin: 1rem 0;
      }
    }
  }

  &__data {
    &--header {
      border-bottom: 1px solid grey;

      @include media-down(md) {
        display: none;
      }

      p {
        font-weight: bold;
      }
    }
  }
}
</style>
