<template>
  <div>
    <app-textbanner v-bind="textbanner"></app-textbanner>

    <app-casestudygrid v-bind="casestudygrid" class="casestudyindex"></app-casestudygrid>

    <app-icongrid7030 v-bind="icongrid7030Awards"></app-icongrid7030>

    <app-casestudyindexgrid v-bind="casestudyindexgrid"></app-casestudyindexgrid>

    <app-icongrid7030 v-bind="icongrid7030Clients"></app-icongrid7030>

    <app-thoughtleaders v-bind="thoughtleaders" class="black"></app-thoughtleaders>

    <app-contactCTA v-bind="contactCTA"></app-contactCTA>
  </div>

</template>

<script>
import textbanner from '@/components/shared/textbanner.vue';
import casestudygrid from '@/components/shared/casestudygrid.vue';
import icongrid7030 from '@/components/shared/icongrid7030.vue';
import casestudyindexgrid from '@/components/casestudyindex/casestudyindexgrid.vue';
import thoughtleaders from '@/components/shared/thoughtleaders.vue';
import contactCTA from '@/components/shared/contactCTA.vue';


export default {
  components: {
    'app-textbanner': textbanner,
    'app-casestudygrid': casestudygrid,
    'app-icongrid7030': icongrid7030,
    'app-casestudyindexgrid': casestudyindexgrid,
    'app-thoughtleaders': thoughtleaders,
    'app-contactCTA': contactCTA
  },

  data() {
    return {
      textbanner: {
        title: "Work",
        preamble: "We work in partnership with ambitious companies looking to innovate in their industry using beautiful design and cutting edge technology."
      },

      casestudygrid: {
        item1link: "/casestudyindex/casestudyitem/",
        item1imgsrc: "/img/he-test.jpg",
        item1title: "Honeywell",

        item2link: "/casestudyindex/casestudyitem/",
        item2imgsrc: "/img/c4-test.jpg",
        item2title: "Channel 4",

        item3link: "/casestudyindex/casestudyitem/",
        item3imgsrc: "/img/ac-test.jpg",
        item3title: "Arnold Clark",

        item4link: "/casestudyindex/casestudyitem/",
        item4imgsrc: "/img/gh-test.jpg",
        item4title: "Google Home",
      },

      icongrid7030Awards: {
        title: "Award winning work",

        items: [
          {
            imgSrc: "/img/lovie.png"
          },
          {
            imgSrc: "/img/herald.png"
          },
          {
            imgSrc: "/img/sxsw.png"
          },
          {
            imgSrc: "/img/bafta.png"
          },
          {
            imgSrc: "/img/webby.png"
          },
          {
            imgSrc: "/img/bima.png"
          },
          {
            imgSrc: "/img/promax.png"
          },
          {
            imgSrc: "/img/scotlandis.png"
          },
        ]
      },

      casestudyindexgrid: {
        items: [
          {
            link: "/",
            imgSrc: "/img/grid-1.jpg",
            title: "Amazon Alexa"
          },
          {
            link: "/",
            imgSrc: "/img/grid-2.jpg",
            title: "Matthew Algie"
          },
          {
            link: "/",
            imgSrc: "/img/grid-3.jpg",
            title: "Edinburgh Fringe"
          },
          {
            link: "/",
            imgSrc: "/img/grid-4.jpg",
            title: "Sprint GPS"
          },
          {
            link: "/",
            imgSrc: "/img/grid-5.jpg",
            title: "Abertay"
          },
          {
            link: "/",
            imgSrc: "/img/grid-6.jpg",
            title: "Vodafone"
          },
          {
            link: "/",
            imgSrc: "/img/grid-1.jpg",
            title: "Tate Modern"
          },
          {
            link: "/",
            imgSrc: "/img/grid-2.jpg",
            title: "Skills Development Scotland"
          },
          {
            link: "/",
            imgSrc: "/img/grid-3.jpg",
            title: "Honeywell Aerospace"
          },
        ]
      },

      icongrid7030Clients: {
        title: "World class clients",

        items: [
          {
            imgSrc: "/img/honeywell.png"
          },
          {
            imgSrc: "/img/bbc.png"
          },
          {
            imgSrc: "/img/aggreko.png"
          },
          {
            imgSrc: "/img/c4.png"
          },
          {
            imgSrc: "/img/rbs.png"
          },
          {
            imgSrc: "/img/next.png"
          },
          {
            imgSrc: "/img/cybg.png"
          },
          {
            imgSrc: "/img/fringe.png"
          },
          {
            imgSrc: "/img/gros.png"
          },
          {
            imgSrc: "/img/vodafone.png"
          },
          {
            imgSrc: "/img/scotgov.png"
          },
          {
            imgSrc: "/img/tate.png"
          },
        ]
      },

      thoughtleaders: {
        title: "Our Thought Leaders",
        link: "/rte",
        btnText: "visit our lab",

        items: [
          {
            imgSrc: "/img/TL-K.png",
            title: "The creative concept: Where do great ideas come from?",
            author: "Kenny Shaw",
            job: "Director of UX and visual design",
            link: "/rte"
          },
          {
            imgSrc: "/img/TL-A.png",
            title: "11 tips for testing voice skills on Alexa and Google Assistant",
            author: "Andrew Bruce",
            job: "Senior producer",
            link: "/rte"
          },
          {
            imgSrc: "/img/TL-S.png",
            title: "What enterprise businesses can learn from healthcare’s AI",
            author: "Sara Kinnear",
            job: "Director of strategy and planning",
            link: "/rte"
          },
          {
            imgSrc: "/img/TL-LA.png",
            title: "How chatbots, AR, and voice are disrupting ecommerce",
            author: "Lauren Jamieson",
            job: "UX planning lead",
            link: "/rte"
          },
          {
            imgSrc: "/img/TL-J.png",
            title: "Artificially intelligent assistants: what's next?",
            author: "Jon Carlos",
            job: "Technical director",
            link: "/rte"
          },
          {
            imgSrc: "/img/TL-D.png",
            title: "Is it time to evolve beyond design thinking?",
            author: "Derek Bowers",
            job: "Design director",
            link: "/rte"
          }
        ]
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
      title: 'Casestudy Index | Screenmedia',
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
