<template>
  <div class="row">
    <div class="col-12 p-3">
      <PageTitle :pageTitle="pageTitle" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa maxime nihil id praesentium repudiandae ad hic vero nulla
        autem.
      </p>
      <p>
        <button type="button" class="btn btn-primary">Primary</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'homepage',
  name: 'lunch',
  data() {
    return { pageTitle: 'Lunch' };
  },
};
</script>

<style lang="scss" scoped></style>
