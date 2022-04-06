<template>
  <div class="footer">
    <Logo />
    <div class="foot-link d-flex flex-row justify-content-center align-items-center">
      <span>Copyright &copy 2022 d'Orellia</span>
      <nuxt-link to="/policy">Privacy Policy</nuxt-link>
      <span></span>
      <nuxt-link to="/terms">Terms of Use</nuxt-link>
      <span></span>
      <nuxt-link to="/contact">Contact </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  .logo {
    margin-bottom: 0.5rem;
    img {
      max-height: 2rem;
    }
  }
  .foot-link {
    font-size: 1.2rem;
    a {
      text-decoration: none;
      color: $menu;
      &.nuxt-link-exact-active {
        border-bottom: 2px solid $primary;
      }
    }
    a:hover {
      border-bottom: 2px solid $primary;
    }
  }
  span {
    margin: 0 1rem;
  }
}
</style>
