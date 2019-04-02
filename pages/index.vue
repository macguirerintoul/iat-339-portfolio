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
  margin-top: 1em;
  flex-wrap: wrap;
  justify-content: space-between;
  .project {
    flex-basis: 49%;
    border: 2px solid black;
    img {
      display: block;
      max-width: 100%;
    }
  }
  @media all and (max-width: 800px) {
    .project {
      flex-basis: 100%;
    }
  }
}

</style>
