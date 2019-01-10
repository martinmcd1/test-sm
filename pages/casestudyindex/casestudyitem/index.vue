<template>
  <div>
    <app-textbanner v-bind="textbanner"></app-textbanner>

    <app-fullwidthimage v-bind="fullwidthimage"></app-fullwidthimage>

    <app-contactCTA v-bind="contactCTA"></app-contactCTA>
  </div>

</template>

<script>
import textbanner from '@/components/shared/textbanner.vue';
import fullwidthimage from '@/components/shared/fullwidthimage.vue';
import contactCTA from '@/components/shared/contactCTA.vue';

export default {
  components: {
    'app-textbanner': textbanner,
    'app-fullwidthimage': fullwidthimage,
    'app-contactCTA': contactCTA
  },

  data() {
    return {
      textbanner: {
        title: "Honeywell",
        preamble: "An innovative home automation app featuring a cross-platform solution for smartphone, Apple Watch and Google Home."
      },

      fullwidthimage: {
        image1920: "/img/honeywell-1920.jpg",
        image1450: "/img/honeywell-1450.jpg",
        image1050: "/img/honeywell-1050.jpg",
        image500: "/img/honeywell-500.jpg"
      },

      contactCTA: {
        smalltitle: "Contact",
        text: "Let's build something amazing together",
        link: "/rte"
      }
    }
  },

  //meta tags
  head () {
    return {
      title: 'Casestudy Item | Screenmedia',
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
