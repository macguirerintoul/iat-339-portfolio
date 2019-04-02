<template>
  <section>
    <h1>Style Guide</h1>

    <h2>Text Elements</h2>
    <sgItem selector="h1, h2, h3, h4, h5, h6">
      <template v-slot:code>
        <span v-text="codeText"></span>
      </template>
      <template v-slot:rendered>
        <span v-html="codeText"></span>
      </template>
    </sgItem>

    <h2>Combined Elements</h2>
    <sgItem selector=".project" component="project" options='{project: {title:"MyCredit", thumbnail: "images/thumbnail-mycredit-50b3bb2ddb4621383812dd9a850ffd1d.jpg", permalink: "/mycredit"}}' />

    <h2>Other References</h2>
    <p>CSS Dot Background from <a href="https://codepen.io/edmundojr/pen/xOYJGw" target="_blank">https://codepen.io/edmundojr/pen/xOYJGw</a></p>

    <p>Smiley face from <a href="http://spontaneoussmiley.com/wp-content/uploads/2011/01/Iconic-Yellow-Smiley.png" target="_blank">http://spontaneoussmiley.com/wp-content/uploads/2011/01/Iconic-Yellow-Smiley.png</a></p>

  </section>
</template>

<script>
import sgItem from '~/components/sgItem.vue';

export default {
  components: {
    sgItem
  },
  data: function() {
    return {
      codeText: `
        <h1>Hello, World.</h1>
        <h2>Hello, World.</h2>
        <h3>Hello, World.</h3>
        <h4>Hello, World.</h4>
        <h5>Hello, World.</h5>
        <h6>Hello, World.</h6>
      `
    }
  }
}
</script>

<style>

</style>
