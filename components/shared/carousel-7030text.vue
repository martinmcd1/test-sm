<template lang="html">
  <section class='m-carousel-7030text'>
    <div class="container">
      <div class="item-container">
        <div class="left">
          <h2>{{ title }}</h2>
        </div>

        <div class="right">
          <p class='preamble'>{{ preamble }}</p>
          <nuxt-link :to="link" class='btn solid-black'>{{ btnText }}</nuxt-link>
        </div>
      </div>
    </div>

    <div class="carousel">
      <div class="slide-container" id="slide-container">
        <div class="slide" v-for="(slide, i) in slides" :data="slide" :key="`${i}-${slide.id}`">
          <img :src="slide.imgSrc" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'title',
    'preamble',
    'link',
    'btnText',
    'slides'
  ],

  mounted: function () {
    this.$nextTick(function () {
      var id;
      var slideContainer = document.getElementById("slide-container");
      var slideWidth = slideContainer.firstChild.offsetWidth;
      var pos = 0;

      function frame() {
        if (pos == -slideWidth) {
          pos = 0;
          slideContainer.appendChild(slideContainer.firstChild);
        } else {
          pos--;
          slideContainer.style.left = pos + "px";
        }
      }

      enquire
      .register("screen and (max-width: 1050px)", function() {
        clearInterval(id);
        slideContainer.style.left = "0px";
      })
      .register("screen and (min-width: 1050px) and (max-width: 1450px)", function() {
        clearInterval(id);
        slideWidth = slideContainer.firstChild.offsetWidth;
        id = setInterval(frame, 20);
      })
      .register("screen and (min-width: 1450px)", function() {
        clearInterval(id);
        slideWidth = slideContainer.firstChild.offsetWidth;
        id = setInterval(frame, 20);
      })
    })
  },
}
</script>

<style lang="scss" scoped>
  @import '@/../scss/components/shared/carousel-7030text.scss';
</style>
