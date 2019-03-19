<template>
  <section>
    <h1>Style Guide</h1>

    <h2>Text Elements</h2>
    <sgItem selector="h1" sampleCode="<h1>Hello, World.</h1>" />
    <sgItem selector="h2" sampleCode="<h2>Hello, World.</h2>" />
    <sgItem selector="h3" sampleCode="<h3>Hello, World.</h3>" />
    <sgItem selector="h4" sampleCode="<h4>Hello, World.</h4>" />
    <sgItem selector="h5" sampleCode="<h5>Hello, World.</h5>" />
    <sgItem selector="h6" sampleCode="<h6>Hello, World.</h6>" />

    <h2>Interactive Elements</h2>
    <sgItem selector="nav a">
      <h2>Test joshhhhh</h2>
    </sgItem>

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
