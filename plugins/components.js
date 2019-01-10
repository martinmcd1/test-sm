import Vue from 'vue';

Vue.component('News', () => import('@/pages/news/NewsIndex.vue'));
Vue.component('NewsPage', () => import('@/pages/news/NewsPage.vue'));
