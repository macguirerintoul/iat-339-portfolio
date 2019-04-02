<template>
  <section>
    <h1>Style Guide</h1>

    <h2>Text Elements</h2>
    <sgItem selector="h1, h2, h3, h4, h5, h6" :code="codeText" />
    <sgItem selector="p" :code="codeP" />

    <h2>Other Elements</h2>
    <sgItem selector="img" :code="codeImg" />

    <h2>Other References</h2>
    <p>CSS Dot Background from <a href="https://codepen.io/edmundojr/pen/xOYJGw" target="_blank">https://codepen.io/edmundojr/pen/xOYJGw</a></p>

    <p>Smiley face from <a href="http://spontaneoussmiley.com/wp-content/uploads/2011/01/Iconic-Yellow-Smiley.png" target="_blank">http://spontaneoussmiley.com/wp-content/uploads/2011/01/Iconic-Yellow-Smiley.png</a></p>

  </section>
</template>

<script>
import {stripIndent} from 'common-tags';

import sgItem from '~/components/sgItem.vue';

export default {
  components: {
    sgItem
  },
  data: function() {
    return {
      codeText: stripIndent`
        <h1>Hello, World.</h1>
        <h2>Hello, World.</h2>
        <h3>Hello, World.</h3>
        <h4>Hello, World.</h4>
        <h5>Hello, World.</h5>
        <h6>Hello, World.</h6>
      `,
      codeP: stripIndent`
        <p>Lorem ipsum dolor amet af humblebrag mixtape pop-up. Paleo marfa neutra, semiotics tattooed VHS hella pork belly meh coloring book church-key twee. Venmo DIY af la croix PBR&B. Affogato man braid pickled post-ironic next level coloring book, tbh art party trust fund retro listicle four dollar toast celiac XOXO raw denim. Sriracha pok pok actually affogato stumptown readymade brunch meditation ugh polaroid.</p>
      `,
      codeImg: stripIndent`
        <img src="/images/winebox.jpg" alt="A description of the image." />
      `,

    }
  }
}
</script>

<style>

</style>
