<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <Logo />
    <TopMenu />
    <div class="main">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  layout: 'homepage',
};
</script>

<style lang="scss">
.container {
  .main {
    min-height: 69vh;
    width: 100%;
  }
}
</style>
