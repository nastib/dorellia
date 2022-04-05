<template>
  <div class="footer text-center">
    <Logo />
    <span>Copyright &copy 2022 d'Orellia</span>
    <nuxt-link to="/">Privacy Policy</nuxt-link>
    <nuxt-link to="/">Terms of Use</nuxt-link>
    <nuxt-link to="/">Contact </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  .logo {
    img {
      max-height: 1.9rem;
    }
  }
}
</style>
