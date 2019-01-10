<template>
  <div>
    <app-homepagetextbanner></app-homepagetextbanner>

    <app-casestudygrid></app-casestudygrid>

    <div class='container'>
      <h1>UX design (h1)</h1>
      <p class='preamble'>We understand your user needs and business goals to deliver user satisfaction through meaningful interactions.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
      <p>ip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <h2>What is UX design? (h2)</h2>
      <p class='preamble'>Outstanding User Experience (UX) is driven by a great number of details, ranging from interface an interaction deisng to accessibility and techincal performance.</p>

      <p>Using Design Thinking, we ideate and iterate possible solutions to address user challenges and pain points to ensure your products and services delight users and help them achieve their goals.</p>


      <h2>User research (h2)</h2>
      <p class='preamble'>User research is fundamental in creating a user experience which is useful, usable and desirable; to be able to make decisions tohelp your target audience, you must first understand their needs.</p>

      <h3>Our approach (h3)</h3>
      <ul>
        <li>This is an unordered list</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit amet, </br>consectetur adipisicing elit</li>
      </ul>

      <h3>Outcomes (h3)</h3>
      <ul>
        <li>This is an unordered list</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit amet, </br>consectetur adipisicing elit</li>
      </ul>


      <h4>This is a h4 title - Lorem ipsum</h4>
      <ol>
        <li>This is an ordered list</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
      </ol>

      <h2>The outcome of UX design (h2)</h2>
      <p class='preamble'>UX Design ensures a successful project outcome by putting your users at the centre of the entire process. From research to testing, every decision is informed by user behaviour and expectation, resulting in a design solution which solves your problem and provides a high quality experience for your users to accomplish their goals.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <h5>This is a h5 title - Lorem ipsum </h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <app-latestlab
    title="Latest from our lab"
    preamble="Take your experience to a new level with our talented team of technology hungry creatives."
    link="/rte"

    item1imgSrc="https://placehold.it/450x450"
    item1author="Andrew Bruce"
    item1date="04 November"
    item1text="11 Tips for Testing Voice Skills on Alexa and Google Assistant"
    item1link="/rte"

    item2imgSrc="https://placehold.it/450x450"
    item2author="Kenny Shaw"
    item2date="20 November"
    item2text="The creative concept: Where do great ideas come from?"
    item2link="/rte"

    item3imgSrc="https://placehold.it/450x450"
    item3author="Jon Carlos"
    item3date="22 October"
    item3text="Artificially Intelligent Assistants: What's Next?"
    item3link="/rte"
    ></app-latestlab>

    <app-contactCTA
    smalltitle="Contact"
    text="Let's build something amazing together"
    link="/rte"
    ></app-contactCTA>

  </div>
</template>

<script>
  import homepagetextbanner from '@/components/homepage/homepagetextbanner.vue';
  import casestudygrid from '@/components/shared/casestudygrid.vue';
  import contactCTA from '@/components/shared/contactCTA.vue';
  import latestlab from '@/components/shared/latestlab.vue';

  export default {
    components: {
      'app-homepagetextbanner': homepagetextbanner,
      'app-casestudygrid': casestudygrid,
      'app-contactCTA': contactCTA,
      'app-latestlab': latestlab
    },

    mounted: function () {
      // option for white nav
      document.getElementById("mainnav").classList.remove('white');
    },
  }
</script>
