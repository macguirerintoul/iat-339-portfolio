<template>
  <section>
    <div>
      <h1>Macguire Rintoul</h1>
      <h2>Experience designer & developer</h2>
      <div class="projects">
        <div v-for="project in projects">
          <img :src="project.thumbnail" :alt="project.title">
          <nuxt-link :to="project.permalink">{{ project.title }}</nuxt-link>
        </div>
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

</style>
