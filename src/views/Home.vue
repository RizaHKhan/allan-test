<template>
  <div class="main">
    <div class="main__routes">
      <router-link to="/todos">Todos</router-link>
      <router-link to="/post">Post</router-link>
      <router-link to="/info">My Info</router-link>
    </div>
    <div class="main__view mt4">
      <router-view v-slot="{ Component }">
        <transition name="component-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Home",
  setup() {
    const { push } = useRouter();

    onMounted(() => {
      push("/todos");
    });
  },
});
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 2rem auto 0 auto;

  &__routes {
    display: flex;
    text-align: center;

    @include media-down(md) {
      display: none;
    }

    a {
      padding: 0.5rem 2rem;
      text-decoration: none;
      transition: all 0.2s ease;
      color: black;
      border-radius: 5px;
      margin-right: 0.2rem;
      border: 1px solid grey;

      @include media-down(md) {
        margin: 0.2rem 0;
      }

      &:hover {
        background: grey;
        color: white;
      }
    }
  }
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
