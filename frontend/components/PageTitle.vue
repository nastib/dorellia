<template>
  <div class="page-title">
    <div class="d-flex flex-row justify-content-center align-items-center">
      <div class="left-ornament"></div>
      <h1>{{ pageTitle }}</h1>
      <div class="rigth-ornament"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pageTitle'],
};
</script>

<style lang="scss">
.page-title {
  h1 {
    width: 60%;
    text-align: center;
    font-size: 3.222rem;
    color: $title;
  }
  @import '../assets/scss/ornament.scss';
}
</style>
