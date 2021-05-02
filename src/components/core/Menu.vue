<template>
  <div class="main__routes">
    <router-link to="/todos">Todos</router-link>
    <router-link to="/post">Post</router-link>
    <router-link to="/info">My Info</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Menu",
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
      flex-direction: column;
      margin: auto;
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
</style>
