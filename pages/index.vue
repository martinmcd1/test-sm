<template>
  <div>
    <app-homepagebanner></app-homepagebanner>

    <app-homecasestudy v-bind="homecasestudyHumans"></app-homecasestudy>

    <app-homecasestudy v-bind="homecasestudyHoneywell"></app-homecasestudy>

    <app-homecasestudy v-bind="homecasestudyArnold"></app-homecasestudy>

    <app-featureimagetext v-bind="featureimagetext"></app-featureimagetext>

    <app-textgrid7030 v-bind="textgrid7030"></app-textgrid7030>

    <app-latestlab v-bind="latestlab"></app-latestlab>

    <app-contactCTA v-bind="contactCTA"></app-contactCTA>
  </div>

</template>

<script>
import homepagebanner from '@/components/homepage/homepagebanner.vue';
import homecasestudy from '@/components/homepage/homecasestudy.vue';
import featureimagetext from '@/components/shared/featureimagetext.vue';
import textgrid7030 from '@/components/shared/textgrid7030.vue';
import contactCTA from '@/components/shared/contactCTA.vue';
import latestlab from '@/components/shared/latestlab.vue';


export default {
  components: {
    'app-homepagebanner': homepagebanner,
    'app-homecasestudy': homecasestudy,
    'app-featureimagetext': featureimagetext,
    'app-textgrid7030': textgrid7030,
    'app-contactCTA': contactCTA,
    'app-latestlab': latestlab,
  },

  data() {
    return {
      homecasestudyHumans: {
        title: "Humans voice test for Channel 4",
        description: "A voice experience for Amazon Alexa and Google Assistant to bring the world of Channel 4's Humans to life.",
        link: "/rte",
        image1920: "/img/homepage/casestudy/humans/Humans-1920.jpg",
        image1650: "/img/homepage/casestudy/humans/Humans-1650.jpg",
        image1450: "/img/homepage/casestudy/humans/Humans-1450.jpg",
        image1250: "/img/homepage/casestudy/humans/Humans-1250.jpg",
        image1050: "/img/homepage/casestudy/humans/Humans-1050.jpg",
        image767: "/img/homepage/casestudy/humans/Humans-767.jpg",
        image400: "/img/homepage/casestudy/humans/Humans-400.jpg",
        statImage: "/img/homepage/casestudy/humans/award5.jpg",
        infoPreamble: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        infoName: "Cassey Watts",
        infoJob: "Lead Commisioner at 4Creative"
      },

      homecasestudyHoneywell: {
        title: "Honeywell home automation app",
        description: "An innovative home automation app featuring a cross-platform solution for smartphone and Pebble watch.",
        link: "/rte",
        image1920: "/img/homepage/casestudy/honeywell/honeywell-1920.jpg",
        image1650: "/img/homepage/casestudy/honeywell/honeywell-1650.jpg",
        image1450: "/img/homepage/casestudy/honeywell/honeywell-1450.jpg",
        image1250: "/img/homepage/casestudy/honeywell/honeywell-1250.jpg",
        image1050: "/img/homepage/casestudy/honeywell/honeywell-1050.jpg",
        image767: "/img/homepage/casestudy/honeywell/honeywell-767.jpg",
        image400: "/img/homepage/casestudy/honeywell/honeywell-400.jpg",
        statImage: "/img/homepage/casestudy/honeywell/stat.jpg",
        infoPreamble: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        infoName: "Chris Barrett",
        infoJob: "Chief Technology Officer at Honeywell"
      },

      homecasestudyArnold: {
        title: "Arnold Clark mileage app",
        description: "A mile tracker app which reduces fuel use, lowers emissions, and improves legal compliance for Arnold Clark.",
        link: "/rte",
        image1920: "/img/homepage/casestudy/arnoldclark/ac-1920.jpg",
        image1650: "/img/homepage/casestudy/arnoldclark/ac-1650.jpg",
        image1450: "/img/homepage/casestudy/arnoldclark/ac-1450.jpg",
        image1250: "/img/homepage/casestudy/arnoldclark/ac-1250.jpg",
        image1050: "/img/homepage/casestudy/arnoldclark/ac-1050.jpg",
        image767: "/img/homepage/casestudy/arnoldclark/ac-767.jpg",
        image400: "/img/homepage/casestudy/arnoldclark/ac-400.jpg",
        statImage: "/img/homepage/casestudy/arnoldclark/award.jpg",
        infoPreamble: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        infoName: "Kaz Smith",
        infoJob: "Head of digital at Arnold Clark"
      },

      featureimagetext: {
        title: "About us",
        text: "We work to make better products and services through human-centred innovation.",
        link: "/rte"
      },

      textgrid7030: {
        title: "Join our team",
        preamble: "Take your experience to a new level with our talented team of technology hungry creatives.",
        btnText: "All vacancies",
        link: "/rte",

        items: [
          {
            title: 'UX/UI design lead',
            text: 'Screenmedia is seeking a senior UX Designer to join our award winning practice and work directly with clients...',
            link: "/rte"
          },
          {
            title: 'Technical director',
            text: "Screenmedia are looking for a Technical Director / Architect with a broad range of technical skills and commercial vision…",
            link: "/rte"
          },
          {
            title: 'Freelance UX designer',
            text: "We're looking for experienced Freelance User Experience Designers to help gather business and user requirements…",
            link: "/rte"
          },
          {
            title: 'Android mobile developer',
            text: 'Our team works to the highest standards in responsive web and CMS application development.',
            link: "/rte"
          },
          {
            title: 'Digital marketing executive',
            text: 'We develop both natively for iOS, Android, and Windows and across platforms using Xamarin development framework',
            link: "/rte"
          },
          {
            title: 'Graduate iOS mobile developer',
            text: "Our UX process ensures that our client's products and services delight users and help them achieve their goals.",
            link: "/rte"
          },
        ]
      },

      latestlab: {
        title: "Latest from our lab",
        preamble: "Take your experience to a new level with our talented team of technology hungry creatives.",
        link: "/rte",

        item1imgSrc: "https://placehold.it/450x450",
        item1author: "Andrew Bruce",
        item1date: "04 November",
        item1text: "11 Tips for Testing Voice Skills on Alexa and Google Assistant",
        item1link: "/rte",

        item2imgSrc: "https://placehold.it/450x450",
        item2author: "Kenny Shaw",
        item2date: "20 November",
        item2text: "The creative concept: Where do great ideas come from?",
        item2link: "/rte",

        item3imgSrc: "https://placehold.it/450x450",
        item3author: "Jon Carlos",
        item3date: "22 October",
        item3text: "Artificially Intelligent Assistants: What's Next?",
        item3link: "/rte"
      },

      contactCTA: {
        smalltitle: "Contact",
        text: "Let's build something amazing together",
        link: "/rte"
      }
    }
  },

  // option for white nav
  mounted: function () {
    document.getElementById("mainnav").classList.add('white');
  },
  destroyed: function() {
    document.getElementById("mainnav").classList.remove('white');
  },
  // end

  //meta tags
  head () {
    return {
      title: 'Homepage | Screenmedia',
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
