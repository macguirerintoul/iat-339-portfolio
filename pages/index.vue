<template>
  <section>
    <h1>Work</h1>
    <div id="projects">
      <nuxt-link v-for="project in projects" v-bind:key="project.title" class="project" :to="project.permalink">
        <img :src="project.thumbnail" :alt="project.title">
        <h3>{{ project.title }}</h3>
      </nuxt-link>
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

.project img {
  display: block;
  max-width: 100%;
}

.project nuxt-link {

}
</style>
