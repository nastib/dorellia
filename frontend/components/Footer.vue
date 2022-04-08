<template>
  <div class="footer">
    <div class="d-flex flex-row justify-content-center align-items-center">
      <div class="left-ornament"></div>
      <Logo />
      <div class="rigth-ornament"></div>
    </div>
    <div class="foot-link d-flex flex-row justify-content-center align-items-center">
      <span>Copyright &copy 2022 d'Orellia</span>
      <span><i class="bi bi-diamond-fill"></i></span>
      <nuxt-link to="/policy">Privacy Policy</nuxt-link>
      <span><i class="bi bi-diamond-fill"></i></span>
      <nuxt-link to="/terms">Terms of Use</nuxt-link>
      <span><i class="bi bi-diamond-fill"></i></span>
      <nuxt-link to="/contact">Contact </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  align-items: bottom;
  .logo {
    margin-bottom: 0.5rem;
    img {
      max-height: 6rem;
      padding: 0 20px 0 20px;
    }
  }
  @import '../assets/scss/ornament.scss';
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
  .bi {
    margin: 0 1rem;
    font-size: 0.5rem;
    color: $primary;
  }
}
</style>
