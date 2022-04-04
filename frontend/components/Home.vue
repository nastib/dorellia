<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 p-5">
        <Logo />
        <h1>Welcome to Orellia!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa maxime nihil id praesentium repudiandae ad hic vero nulla
          autem.
        </p>
        <p>
          <button type="button" class="btn btn-primary">Primary</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue';
export default {
  name: 'Home',
  components: { Logo },
};
</script>
