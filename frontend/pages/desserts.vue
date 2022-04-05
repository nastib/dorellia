<template>
  <div class="row">
    <div class="col-12 p-3">
      <PageTitle :pageTitle="pageTitle" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odit iure vero nulla, totam debitis accusamus cupiditate, aliquam,
        qui necessitatibus magni. Odit deleniti reprehenderit ab, sequi dignissimos doloremque recusandae tempore.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'homepage',
  name: 'desserts',
  data() {
    return { pageTitle: 'Desserts' };
  },
};
</script>

<style lang="scss" scoped></style>
