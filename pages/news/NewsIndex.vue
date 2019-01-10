<template>
  <div>
    <app-homepagetextbanner></app-homepagetextbanner>

    <div class="container">
      <h1>News</h1>
      <div v-if="page.newsItemList">
        <div v-for="(news, index) in page.newsItemList.items" :key="index" class='news-item'>
          <p v-text="news.name"></p>
          <p v-text="news.type"></p>
          <nuxt-link :to="news.url">{{news.name}}</nuxt-link>
        </div>
      </div>
    </div>

    <app-contactCTA
    smalltitle="Contact"
    text="Let's build something amazing together"
    link="/rte"
    ></app-contactCTA>
  </div>
</template>

<script>
import homepagetextbanner from '@/components/homepage/homepagetextbanner.vue';
import contactCTA from '@/components/shared/contactCTA.vue';

export default {
  components: {
    'app-homepagetextbanner': homepagetextbanner,
    'app-contactCTA': contactCTA,
  },

  props: ['page'],

  //meta tags
  head () {
    return {
      title: 'News Index | Screenmedia',
      meta: [
        { hid: 'description', name: 'description', content: 'test description' },

        { itemprop: 'name', content: 'test title' },
        { itemprop: 'description', content: 'test description' },
        { itemprop: 'image', content: 'test image url' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'test title' },
        { name: 'twitter:description', content: 'test description' },
        { name: 'twitter:image:src', content: 'test image url' },

        { property: 'og:title', content: 'test title' },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: 'test url (this page url)' },
        { property: 'og:image', content: 'test image url' },
        { property: 'og:description', content: 'test description'},
      ],
    }
  },
};
</script>
