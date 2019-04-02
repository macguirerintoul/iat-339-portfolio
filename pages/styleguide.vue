<template>
  <section>
    <h1>Style Guide</h1>

    <h2>Text Elements</h2>

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
  }
}
</script>

<style>

</style>
