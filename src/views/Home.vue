<template>
  <div class="main">
    <div class="main__routes">
      <router-link to="/todos">Todos</router-link>
      <router-link to="/post">Post</router-link>
      <router-link to="/info">Info</router-link>
    </div>
    <div class="main__view mt4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
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

    a {
      padding: 0.5rem 2rem;
      text-decoration: none;
      transition: all 0.2s ease;
      color: black;
      border-radius: 5px;
      margin-right: 0.2rem;
      border: 1px solid grey;

      &:hover {
        background: grey;
        color: white;
      }
    }
  }

  &__view {
  }
}
</style>
