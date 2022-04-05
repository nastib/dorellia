<!-- Please remove this file from your project -->
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
import { title } from 'process';

export default {
  layout: 'homepage',
  name: 'starters',
  data() {
    return { pageTitle: 'Starters' };
  },
};
</script>

<style lang="scss" scoped></style>
