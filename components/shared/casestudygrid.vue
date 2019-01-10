<template lang="html">
  <section class='m-casestudygrid'>
    <div class="container">
      <div class="grid">
        <nuxt-link :to="item1link" class="grid-item">
          <img :src="item1imgsrc" alt="">
          <h2>{{ item1title }}</h2>
        </nuxt-link>

        <nuxt-link :to="item2link" class="grid-item">
          <img :src="item2imgsrc" alt="">
          <h2>{{ item2title }}</h2>
        </nuxt-link>

        <nuxt-link :to="item3link" class="grid-item">
          <img :src="item3imgsrc" alt="">
          <h2>{{ item3title }}</h2>
        </nuxt-link>

        <nuxt-link :to="item4link" class="grid-item">
          <img :src="item4imgsrc" alt="">
          <h2>{{ item4title }}</h2>
        </nuxt-link>
      </div>

      <nuxt-link class="btn solid-black" :to="link" v-if="link">See more work</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'item1link',
    'item1imgsrc',
    'item1title',

    'item2link',
    'item2imgsrc',
    'item2title',

    'item3link',
    'item3imgsrc',
    'item3title',

    'item4link',
    'item4imgsrc',
    'item4title',

    'link',
  ]
}
</script>

<style lang="scss" scoped>
@import '@/../scss/components/shared/casestudygrid.scss';
@import '@/../scss/components/casestudyindex/casestudygrid.scss';
</style>
