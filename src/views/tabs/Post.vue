<template>
  <div class="todos">
    <div class="todos__action">
      <Input placeholder="Search" v-model="filter" />
      <Button
        v-if="updateIndex === -1"
        title="Add New"
        @click="setComponentName('PostForm')"
      />
    </div>
    <div class="todos__data">
      <div class="todos__data--header post-row pb4 mt4">
        <p>Post Name</p>
        <p>Text</p>
        <p>Email</p>
        <p class="text-center">Actions</p>
      </div>
      <div class="todos__data--body mt4">
        <div
          class="todos__data--body--item post-row mt4"
          v-for="({ name, text, email }, i) in filteredPosts"
          :key="i"
        >
          <p v-if="i !== updateIndex">{{ name }}</p>
          <Input v-else v-model="updateName" classes="m1" />
          <p v-if="i !== updateIndex">{{ text }}</p>
          <Input v-else v-model="updateText" classes="m1" />
          <p v-if="i !== updateIndex">{{ email }}</p>
          <Input v-else v-model="updateEmail" classes="m1" />
          <Button icon="trash" @click="removePost(i)" />
          <Button
            v-if="updateIndex !== i"
            icon="cogs"
            @click="handleUpdate(i, name, text, email)"
          />
          <Button
            v-else
            icon="save"
            @click="handleSave(i, updateName, updateText, updateEmail)"
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
import { postController } from "@/controllers/postController.ts";

export default defineComponent({
  name: "Todos",
  components: { Input, Button },
  setup() {
    const updateIndex = ref<number>(-1);
    const updateName = ref<string>("");
    const updateText = ref<string>("");
    const updateEmail = ref<string>("");

    const { setComponentName } = modalController();
    const { removePost, filteredPosts, filter, savePost } = postController();

    const handleUpdate = (
      i: number,
      name: string,
      text: string,
      email: string
    ) => {
      updateIndex.value = i;
      updateName.value = name;
      updateText.value = text;
      updateEmail.value = email;
    };

    const handleSave = (i: number) => {
      if (!updateName.value || !updateText.value || !updateEmail.value) {
        updateIndex.value = -1;
        return;
      }
      savePost(i, updateName.value, updateText.value, updateEmail.value);
      updateIndex.value = -1;
    };

    return {
      setComponentName,
      removePost,
      filter,
      filteredPosts,
      updateName,
      updateText,
      updateEmail,
      handleUpdate,
      handleSave,
      updateIndex,
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

    &--body {
      &--item {
      }
    }
  }
}
</style>
