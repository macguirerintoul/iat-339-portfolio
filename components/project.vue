<template>
  <nuxt-link v-bind:key="project.title" class="project" :to="project.permalink">
    <img :src="project.thumbnail" :alt="project.title">
    <h3>{{ project.title }}</h3>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    project: Object
  },
}
</script>

<style>

</style>
