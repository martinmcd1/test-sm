<template lang="html">
  <section class='m-homepagebanner'>
    <div class="image">
      <picture>
        <!--[if IE 9]><video style="display: none;"><![endif]-->
        <source srcset="/img/homepage/banner/banner-test.jpg" media="(min-width: 1450px)">
        <source srcset="/img/homepage/banner/banner-test-1450.jpg" media="(min-width: 1250px)">
        <source srcset="/img/homepage/banner/banner-test-1250.jpg" media="(min-width: 1050px)">
        <source srcset="/img/homepage/banner/banner-test-1050.jpg" media="(min-width: 767px)">
        <source srcset="/img/homepage/banner/banner-test-xxs.jpg" media="(min-width: 0px)">

        <!--[if IE 9]></video><![endif]-->
        <img src="/img/homepage/banner/banner-test.jpg" alt="">
      </picture>
    </div>
    <div class="text">
      <div class="container">
        <h1>Designing the future</h1>
      </div>
    </div>

    <div class="client-solutions">
      <div class="container">
        <h5>We've built solutions for...</h5>
        <ul>
          <li>
            <img src="/img/homepage/banner/banner-honeywell.png" alt="">
          </li>
          <li>
            <img src="/img/homepage/banner/banner-bbc.png" alt="">
          </li>
          <li>
            <img src="/img/homepage/banner/banner-vodafone.png" alt="">
          </li>
          <li>
            <img src="/img/homepage/banner/banner-c4.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import '@/../scss/components/homepage/homepagebanner.scss';
</style>
