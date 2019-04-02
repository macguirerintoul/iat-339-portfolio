<template>
  <div>
    <h1>{{ project.title }}</h1>
    <div v-html="project.body" />
  </div>
</template>

<script>
export default {
  async asyncData({ app, route }) {
    return {
      project: await app.$content('projects').get(route.path)
    }
  }
}
</script>

<style>
img, video {
  width: 100%;
}
</style>
