<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        iat-339-portfolio
      </h1>
      <h2 class="subtitle">
        Portfolio (project 3) for IAT 339 at SFU, Spring 2019
      </h2>
      <div class="links">
        <ul>
          <li v-for="project in projects">
            <nuxt-link :to="project.permalink">{{ project.title }}</nuxt-link>
          </li>
        </ul>
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
