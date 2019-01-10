<template lang="html">
  <section class='m-textbanner'>
    <div class="container">
      <div class="text">
        <h1>{{ title }}</h1>
        <p class='preamble'>{{ preamble }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'title',
    'preamble'
  ]
}
</script>

<style lang="scss" scoped>
  @import '@/../scss/components/shared/textbanner.scss';
</style>
