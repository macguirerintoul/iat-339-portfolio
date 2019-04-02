<template>
  <nuxt-link v-bind:key="project.title" class="project" :to="project.permalink">
    <div class="project-image" v-bind:style="{backgroundImage: 'url(' + project.thumbnail + ')'}"></div>
    <h3>{{ project.title }}</h3>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: {title: '', thumbnail: '', permalink: ''}
    }
  }
}
</script>

<style>

.project-image {
  height: 20em;
  background-size: cover;
}

h3 {
  padding-left: 1em;
  margin: 1em 0;
}

@media all and (max-width: 800px) {
  .project-image {
    height: 10em;
  }
}
</style>
