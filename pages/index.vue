<template>
  <section>
    <h1>Work</h1>
    <div id="projects">
      <project v-for="project in projects" :key="project.title" :project="project" />
    </div>
  </section>
</template>

<script>
import project from '~/components/project.vue';

export default {
  components: {
    project
  },
  async asyncData({app}) {
    return {
      projects: await app.$content('projects').getAll()
    }
  }
}
</script>

<style lang="scss">
#projects {
  display: flex;
  flex-wrap: wrap;
  .project {
    flex-basis: 50%;
    img {
      display: block;
      max-width: 100%;
    }
  }
}
</style>
