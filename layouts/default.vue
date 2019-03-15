<template>
  <div class="container">
    <div id="sidebar">
      <h2><nuxt-link to="/">Macguire Rintoul</nuxt-link></h2>
      <h4>Experience designer & developer</h4>
      <nav>
        <nuxt-link to="/guide">Guide</nuxt-link>
      </nav>
    </div>
    <div id="content">
      <nuxt/>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

.container {
  display: flex;
}
#sidebar {
  width: 15em;
}

#content {

}

</style>
