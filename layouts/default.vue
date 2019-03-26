<template>
<div>
  <NavigationMobile />

  <div id="container">
    <div id="sidebar">
      <h2 id="name">
        <nuxt-link to="/">Macguire Rintoul</nuxt-link>
      </h2>
      <h4>Experience designer & developer</h4>
      <nav>
        <nuxt-link to="/">Work</nuxt-link>
        <nuxt-link to="/guide">Guide</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
      </nav>

      <h6>mrintoul@sfu.ca</h6>
      <h6>&copy; 2019 Macguire Rintoul</h6>
    </div>
    <div id="content">
      <nuxt />
    </div>
  </div>
</div>
</template>

<script>
import NavigationMobile from '~/components/NavigationMobile.vue';

export default {
  components: {
    NavigationMobile
  }
}
</script>
