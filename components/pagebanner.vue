<template>
  <section class='m-headerstatement'>
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/components/headerstatement.scss';
</style>

<script>
export default {
  props: ['title']
};
</script>
