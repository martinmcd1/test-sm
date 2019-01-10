<template lang="html">
  <section class='m-icongrid7030'>
    <div class="container">
      <div class="wrapper">
        <div class="featured">
          <h2 class="h4">{{ title }}</h2>
        </div>
        <div class="grid">
          <div class="item-container">
            <div class="item" v-for="(item, i) in items" :data="item" :key="`${i}-${item.id}`">
              <img :src="item.imgSrc" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'items',
    'title',
  ]
}
</script>

<style lang="scss" scoped>
  @import '@/../scss/components/shared/icongrid7030.scss';
</style>
