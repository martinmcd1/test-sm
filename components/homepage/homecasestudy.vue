<template>
  <section class='m-homecasestudy'>
    <div class="casestudy">
      <div class="bg-image">
        <picture>
          <!--[if IE 9]><video style="display: none;"><![endif]-->
          <source :srcset="image1920" media="(min-width: 1650px)">
          <source :srcset="image1650" media="(min-width: 1450px)">
          <source :srcset="image1450" media="(min-width: 1250px)">
          <source :srcset="image1250" media="(min-width: 1050px)">
          <source :srcset="image1050" media="(min-width: 767px)">
          <source :srcset="image767" media="(min-width: 400px)">
          <source :srcset="image400" media="(min-width: 0px)">
          <!--[if IE 9]></video><![endif]-->
          <img :src="image1920" alt="">
        </picture>
      </div>
      <div class="container">
        <div class="content">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
          <nuxt-link :to="link" class="btn">See case study</nuxt-link>
        </div>
      </div>
    </div>
    <div class="casestudy-info">
      <div class="container">
        <div class="image">
          <img :src="statImage" alt="">
        </div>
        <div class="content">
          <p class='preamble'>{{ infoPreamble }}</p>
          <h5>{{ infoName }}</h5>
          <p class='job-desc'>{{ infoJob }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
  'title',
  'description',
  'link',
  'image1920',
  'image1650',
  'image1450',
  'image1250',
  'image1050',
  'image767',
  'image400',
  'statImage',
  'infoPreamble',
  'infoName',
  'infoJob'
]
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/../scss/components/homepage/homecasestudy.scss';
</style>
