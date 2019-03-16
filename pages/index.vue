<template>
  <section>
    <h1>Work</h1>
    <div id="projects">
      <div class="project" v-for="project in projects">
        <img :src="project.thumbnail" :alt="project.title">
        <nuxt-link :to="project.permalink">{{ project.title }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({app}) {
    return {
      projects: await app.$content('projects').getAll()
    }
  }
}
</script>

<style>
#projects {
  display: flex;
  flex-wrap: wrap;
}

#projects .project {
  flex-basis: 50%;
}
</style>
