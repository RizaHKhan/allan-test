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
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
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
}
</style>
