<template>
  <transition name="fade">
    <div
      class="modal"
      v-if="componentName"
      @click="handleClickOutside($event.target)"
    >
      <div class="modal__content p5">
        <component :is="componentName" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ToDoForm from "@/components/compound/ToDoForm.vue";
import PostForm from "@/components/compound/PostForm.vue";
import { modalController } from "@/controllers/modalController.ts";

export default defineComponent({
  name: "Modal",
  components: { ToDoForm, PostForm },
  setup() {
    const { handleClickOutside, componentName } = modalController();

    return { handleClickOutside, componentName };
  },
});
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.4);

  &__content {
    margin: auto;
    background: #fff;
    border-radius: 1rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  position: absolute;
  transform: translateX(400px);
  opacity: 0;
}
</style>
