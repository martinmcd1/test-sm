<template lang="html">
  <section class='m-casestudyindexgrid'>
    <div class="container">
      <div class="item-container">
        <nuxt-link class="item" :to="item.link" v-for="(item, i) in items" :data="item" :key="`${i}-${item.id}`">
          <img :src="item.imgSrc" alt="">
          <h3>{{ item.title }}</h3>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'items'
  ]
}
</script>

<style lang="scss" scoped>
  @import '@/../scss/components/casestudyindex/casestudyindexgrid.scss';
</style>
