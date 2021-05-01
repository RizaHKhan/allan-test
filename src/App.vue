<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss" scoped>
#nav {
  @include media-up(lg) {
    border: solid 1px red;
  }
}
</style>
