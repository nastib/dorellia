<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <div class="p-3">
      <Logo />
      <TopMenu />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
  layout: 'homepage',
  components: { Footer },
};
</script>

<style lang="scss" scoped></style>
