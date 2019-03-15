<template>
  <div>
    <h1>{{ project.title }}</h1>
    <img :src="project.thumbnail" alt="">
    <div v-html="project.body" />
    <!-- {{post}} -->
  </div>
</template>

<script>
export default {
  async asyncData({ app, route }) {
    const post = await app.$content('projects').get(route.path)
    return {
      post: post,
    }
  }
}
</script>

<style>
img {
  width: 500px;
}
</style>
