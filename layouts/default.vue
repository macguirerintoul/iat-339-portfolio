<template>
<div>
  <NavigationMobile />

  <div id="container">
    <div id="sidebar">
      <h2 id="name">
        <nuxt-link to="/">Macguire Rintoul</nuxt-link>
      </h2>

      <img id="smiley" src="/images/smiley.png" alt="A smiley face.">
      <h4>Experience designer & developer</h4>

      <nav>
        <h5><nuxt-link to="/">Work</nuxt-link></h5>
        <h5><nuxt-link to="/about">About</nuxt-link></h5>
        <h5><nuxt-link to="/styleguide">Style Guide</nuxt-link></h5>
      </nav>

      <h6><a href="mailto:mrintoul@sfu.ca">mrintoul@sfu.ca</a></h6>
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
