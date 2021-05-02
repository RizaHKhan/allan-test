<template>
  <div class="navbar">
    <div class="navbar__brand">
      <img
        class="navbar__brand--logo"
        alt="Vue logo"
        src="../../assets/logo.png"
      />
      <h1 class="ml4 navbar__brand--title">Vue-App</h1>
    </div>
    <div class="navbar__burger">
      <div class="burger" @click="toggleMenu">
        <div
          class="px"
          :class="componentName === 'Menu' ? 'px-close' : ''"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { modalController } from "@/controllers/modalController";

export default defineComponent({
  setup() {
    const { setComponentName, componentName } = modalController();

    const toggleMenu = () => {
      setComponentName("Menu");
    };

    return { toggleMenu, componentName };
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  padding: 1rem;
  justify-content: space-between;

  &__brand {
    display: flex;

    &--logo {
      transition: all 0.5s ease;
      height: 30px;
      margin: auto;
    }

    &--title {
      font-weight: 300;
      font-size: 1.5rem;

      @include media-down(sm) {
        display: none;
      }
    }
  }

  &:hover {
    .navbar__brand--logo {
      transform: rotateY(360deg);
    }
  }

  &__burger {
    display: none;

    @include media-down(md) {
      display: block;
    }
  }
}

.burger {
  display: flex;
  height: 30px;
  margin: auto 0;
}

// Extends

%bar {
  width: 30px;
  height: 3px;
  background: black;
  border-radius: 10px;
  transition: all 0.5s ease;
  margin: auto;
}

%base {
  position: relative;
  transition: all 0.5s ease;
}

.px {
  @extend %bar;
  @extend %base;

  &:before,
  &:after {
    @extend %bar;
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
  }

  &:after {
    top: 10px;
  }
}

.px-close {
  @extend .px;
  background: transparent;
  transition: all 0.75s ease;

  &:before,
  &:after {
    top: 0;
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(-140deg);
  }
}
</style>
