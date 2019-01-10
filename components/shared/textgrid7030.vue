<template lang="html">
  <section class='m-textgrid7030'>
    <div class="container">
      <div class="wrapper">
        <div class="featured">
          <h2>{{ title }}</h2>
          <p class='preamble'>{{ preamble }}</p>
          <nuxt-link class='btn solid-black' :to="link">{{ btnText }}</nuxt-link>
        </div>
        <div class="grid">
          <div class="item-container">
            <nuxt-link class="item" :to="item.link" v-for="(item, i) in items" :data="item" :key="`${i}-${item.id}`">
              <img :src="item.imgSrc" v-if="item.imgSrc" alt="">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
      <nuxt-link class='btn solid-black mobile-btn' :to="link">{{ btnText }}</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'items',
    'title',
    'preamble',
    'btnText',
    'link'
  ]
}
</script>

<style lang="scss" scoped>
  @import '@/../scss/components/shared/textgrid7030.scss';
</style>
