<template>
<nav class="navbar is-fixed-top">
  <div class="navbar-brand">
    <a aria-current="page" class="navbar-item" href="/">
      <h2 class="title is-5">Macguire Rintoul</h2>
    </a>
    <div v-on:click="toggleMobileMenu" class="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  </div>
  <div id="navMenu" :class="mobileMenuClass">
    <div class="navbar-end">
      <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
      <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data: function() {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    toggleMobileMenu: function() {
      console.log('Toggling mobile menu');
      this.showMobileMenu = !this.showMobileMenu;
    }
  },
  computed: {
    mobileMenuClass: function () {
      return 'navbar-menu ' + (this.showMobileMenu ? 'is-active' : '');
    }
  }
}
</script>

<style lang="scss" scoped>
// Navbar CSS from Bulma
// https://bulma.io/
@import "../node_modules/bulma/sass/utilities/_all";
@import "../node_modules/bulma/sass/base/_all";
@import "../node_modules/bulma/sass/components/navbar";

nav {
  display: none;
}

@media all and (max-width: 800px) {
  nav {
    display: block;
  }
}
</style>
