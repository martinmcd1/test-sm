<template lang="html">
  <section class="m-thoughtleaders">
    <div class="container">
      <h2>{{ title }}</h2>
      <div class="item-container">
        <nuxt-link :to="item.link" class="item" v-for="(item, i) in items" :data="item" :key="`${i}-${item.id}`">
          <img :src="item.imgSrc" alt="">
          <h3 class='h4'>{{ item.title }}</h3>
          <h4 class='h5'>{{ item.author }}</h4>
          <p>{{ item.job}}</p>
        </nuxt-link>
      </div>

      <nuxt-link :to="link" class='btn solid-black'>{{ btnText }}</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    "title",
    "btnText",
    "link",
    "items"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/../scss/components/shared/thoughtleaders.scss';
</style>
