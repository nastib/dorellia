<template>
  <div class="top-menu">
    <div class="d-flex flex-row justify-content-center align-items-center">
      <nuxt-link to="/">Starters</nuxt-link>
      <span class="square ms-4 me-4"><i class="bi bi-diamond-fill"></i></span>
      <nuxt-link to="/lunch">Lunch</nuxt-link>
      <span class="square"><i class="bi bi-diamond-fill"></i></span>
      <nuxt-link to="/desserts">Desserts</nuxt-link>
      <span class="square"><i class="bi bi-diamond-fill"></i></span>
      <nuxt-link to="/order">Your Order <i class="bi bi-cart4"></i>(0)</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.top-menu {
  margin: 2.5rem auto;
  .goldenline {
    border-bottom: 3px solid $primary;
    &::after {
      display: block;
      content: '';
      height: 3px;
      width: 80%;
      background-color: $primary;
      position: relative;
      top: 11px;
      margin: auto;
    }
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
    color: $menu;
    &.nuxt-link-exact-active {
      @extend .goldenline;
    }
  }
  a:hover {
    @extend .goldenline;
  }

  .square {
    display: inline-block;
    margin: 0 1rem 0 1rem;
    color: $primary;
    font-size: 0.7rem;
  }
}
</style>
