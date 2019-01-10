<template lang="html">
  <section class='m-latestlab'>
    <div class="container">
      <div class="top">
        <h2>{{ title }}</h2>
        <p class='preamble'>{{ preamble }}</p>

        <nuxt-link :to="link" class="btn solid-black">View all articles</nuxt-link>
      </div>

      <div class="item-container">
        <nuxt-link :to="item1link" class='item'>
          <img :src="item1imgSrc" alt="">
          <p class="author">{{ item1author }}</p>
          <p class='date'>{{ item1date }}</p>
          <h3>{{ item1text }}</h3>
        </nuxt-link>

        <nuxt-link :to="item2link" class='item'>
          <img :src="item2imgSrc" alt="">
          <p class="author">{{ item2author }}</p>
          <p class='date'>{{ item2date }}</p>
          <h3>{{ item2text }}</h3>
        </nuxt-link>

        <nuxt-link :to="item3link" class='item'>
          <img :src="item3imgSrc" alt="">
          <p class="author">{{ item3author }}</p>
          <p class='date'>{{ item3date }}</p>
          <h3>{{ item3text }}</h3>
        </nuxt-link>
      </div>

      <nuxt-link :to="link" class="btn solid-black mobile-btn">View all articles</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'title',
    'preamble',
    'link',

    'item1imgSrc',
    'item1author',
    'item1date',
    'item1text',
    'item1link',

    'item2imgSrc',
    'item2author',
    'item2date',
    'item2text',
    'item2link',

    'item3imgSrc',
    'item3author',
    'item3date',
    'item3text',
    'item3link',
  ]
}
</script>

<style lang="scss" scoped>
  @import '@/../scss/components/shared/latestlab.scss';
</style>
