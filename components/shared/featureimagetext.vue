<template lang="html">
  <section class='m-featureimagetext'>
    <div class="image">
      <picture>
        <!--[if IE 9]><video style="display: none;"><![endif]-->
        <source srcset="/img/homepage/featureimagetext/background-1920.jpg" media="(min-width: 1450px)">
        <source srcset="/img/homepage/featureimagetext/background-1450.jpg" media="(min-width: 1250px)">
        <source srcset="/img/homepage/featureimagetext/background-1250.jpg" media="(min-width: 1050px)">
        <source srcset="/img/homepage/featureimagetext/background-1050.jpg" media="(min-width: 767px)">
        <source srcset="/img/homepage/featureimagetext/background-767.jpg" media="(min-width: 400px)">
        <source srcset="/img/homepage/featureimagetext/background-400.jpg" media="(min-width: 0px)">

        <!--[if IE 9]></video><![endif]-->
        <img src="/img/homepage/featureimagetext/background-1920.jpg" alt="">
      </picture>
    </div>

    <div class="container">
      <div class="text">
        <h2>{{ title }}</h2>
        <p class='preamble'>{{ text }}</p>
        <nuxt-link class='btn solid-white' :to="link">Find out more</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'title',
    'text',
    'link'
  ]
}
</script>

<style lang="scss" scoped>
  @import '@/../scss/components/shared/featureimagetext.scss';
</style>
