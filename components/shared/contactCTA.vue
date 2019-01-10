<template lang="html">
  <section class='m-contactCTA'>
    <div class="container">
      <p>{{ smalltitle }}</p>
      <h2>{{ text }}</h2>
      <nuxt-link :to="link" class="btn solid-black">Get in touch</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'smalltitle',
    'text',
    'link'
  ]
}
</script>

<style lang="scss" scoped>
  @import '@/../scss/components/shared/contactCTA.scss';
</style>
