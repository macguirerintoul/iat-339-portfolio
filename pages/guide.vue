<template>
  <section>
    <h1>Style Guide</h1>

    <h2>Text Elements</h2>

    <h2>Combined Elements</h2>
    <sgItem selector=".project" component="project" options='{project: {title:"MyCredit", thumbnail: "images/thumbnail-mycredit-50b3bb2ddb4621383812dd9a850ffd1d.jpg", permalink: "/mycredit"}}' />

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
