<template lang="html">
  <section class='m-fullwidthimage'>
    <div class="image">
      <picture>
        <!--[if IE 9]><video style="display: none;"><![endif]-->
        <source :srcset="image1920" media="(min-width: 1450px)">
        <source :srcset="image1450" media="(min-width: 1050px)">
        <source :srcset="image1050" media="(min-width: 500px)">
        <source :srcset="image500" media="(min-width: 0px)">

        <!--[if IE 9]></video><![endif]-->
        <img :src="image1920" alt="">
      </picture>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'image1920',
    'image1450',
    'image1050',
    'image500'
  ]
}
</script>

<style lang="scss" scoped>
  @import '@/../scss/components/shared/fullwidthimage.scss';
</style>
