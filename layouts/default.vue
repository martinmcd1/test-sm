<template>
  <div>
    <app-navigation></app-navigation>

    <transition name="fade" mode="out-in">
      <nuxt/>
    </transition>

    <app-footer></app-footer>

    <script src="/plugins/enquire.min.js"></script>
  </div>
</template>

<script>
import navigation from '@/components/structure/navigation.vue';
import footer from '@/components/structure/footer.vue';

export default {
  components: {
    'app-navigation': navigation,
    'app-footer': footer
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../scss/global-styles.scss";
</style>
