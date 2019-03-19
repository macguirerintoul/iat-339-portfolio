<template>
  <div id="container">
    <div id="sidebar">
      <h2 id="name"><nuxt-link to="/">Macguire Rintoul</nuxt-link></h2>
      <h4>Experience designer & developer</h4>
      <nav>
        <nuxt-link to="/">Work</nuxt-link>
        <nuxt-link to="/guide">Guide</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
      </nav>

      <p>mrintoul@sfu.ca</p>
      <p>&copy; 2019 Macguire Rintoul</p>
    </div>
    <div id="content">
      <nuxt/>
    </div>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  min-height: 100%;
  background-color: #FFDEE9;
  background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 3em;
  letter-spacing: 2px;
  margin-top: 0;
}

#container {
  display: flex;
  padding: 1em;
}

#sidebar {
  min-width: 15em;
  max-width: 15em;
  padding-right: 5em;
  #name {
    margin-top: 0;
  }
}

#content {
  width: 100%;
  padding: 0 8em;
}

nav {
  display: flex;
  flex-direction: column;
}

</style>
