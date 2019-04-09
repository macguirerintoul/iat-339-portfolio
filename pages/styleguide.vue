<template>
  <section>
    <h1>Style Guide</h1>

    <h2>Text Elements</h2>
    <sgItem selector="h1, h2, h3, h4, h5, h6" :code="codeText" />
    <sgItem selector="p" :code="codeP" />

    <h2>Other Elements</h2>
    <sgItem selector="img" :code="codeImg" />
    <sgItem selector="video" :code="codeVideo" />
    <sgItem selector=".project" :code="codeProject" />

    <h2>Other References</h2>
    <p>CSS Dot Background from <a href="https://codepen.io/edmundojr/pen/xOYJGw" target="_blank">https://codepen.io/edmundojr/pen/xOYJGw</a></p>

    <p>Mobile navigation bar CSS from <a href="https://bulma.io/" target="_blank">Bulma</a>.</p>

    <p>Masqualero font from <a href="https://fonts.adobe.com/fonts/masqualero" target="_blank">Adobe Fonts</a>.</p>

    <p>Spectral font from <a href="https://fonts.google.com/specimen/Spectral" target="_blank">Google Fonts</a>.</p>

    <p>Smiley face from <a href="http://spontaneoussmiley.com/wp-content/uploads/2011/01/Iconic-Yellow-Smiley.png" target="_blank">http://spontaneoussmiley.com/wp-content/uploads/2011/01/Iconic-Yellow-Smiley.png</a></p>

    <p>Link animation from <a href="https://emilkowalski.github.io/css-effects-snippets/" target="_blank">https://emilkowalski.github.io/css-effects-snippets/</a></p>

    <p>Built with <a href="https://nuxtjs.org/" target="_blank">Nuxt, a framework for Vue.</a></p>

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
      codeVideo: stripIndent`
        <video src="/videos/registration.mp4" title="The registration form in ROAR" autoplay="" loop="" muted=""></video>
      `,
      codeProject: stripIndent`
        <div id="projects">
          <a href="/winebox" class="project" data-v-10e3e590="">
            <div class="project-image" style="background-image:url(../images/thumbnail-winebox-4a006432cba19148e58ad90540535867.jpg)" data-v-10e3e590="">
            </div>
            <h3 data-v-10e3e590="">Winebox</h3>
          </a>
          <a href="/roar" class="project" data-v-10e3e590="">
            <div class="project-image" style="background-image:url(../images/thumbnail-roar-7c56811c33e8f339adbc522216fe43a6.jpg)" data-v-10e3e590="">
            </div>
            <h3 data-v-10e3e590="">ROAR</h3>
          </a>
          <a href="/privileged" class="project" data-v-10e3e590="">
            <div class="project-image" style="background-image:url(../images/thumbnail-privileged-09311adc2e10b09ea3e6c0d497fc4e72.jpg)" data-v-10e3e590="">
            </div>
            <h3 data-v-10e3e590="">Privileged</h3>
          </a>
          <a href="/mycredit" class="project" data-v-10e3e590="">
            <div class="project-image" style="background-image:url(../images/thumbnail-mycredit-50b3bb2ddb4621383812dd9a850ffd1d.jpg)" data-v-10e3e590="">
            </div>
            <h3 data-v-10e3e590="">MyCredit</h3>
          </a>
        </div>
      `,

    }
  }
}
</script>
