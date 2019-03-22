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
$text: #000;

@font-face {
    font-family: 'Masqualero';
    src: local('Masqualero Black'), local('Masqualero-Black'),
        url('/fonts/Masqualero-Black.woff2') format('woff2'),
        url('/fonts/Masqualero-Black.woff') format('woff'),
        url('/fonts/Masqualero-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}
@font-face {
    font-family: 'Masqualero';
    src: local('Masqualero Bold'), local('Masqualero-Bold'),
        url('/fonts/Masqualero-Bold.woff2') format('woff2'),
        url('/fonts/Masqualero-Bold.woff') format('woff'),
        url('/fonts/Masqualero-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

* {
  box-sizing: border-box;
}

html {
  min-height: 100%;
  background-color: #FFF;
  font-family: 'Spectral', sans-serif;
  font-size: 1.3em;
  color: $text;
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
  p {
    letter-spacing: 0.01em;
  }
}



h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Masqualero', serif;
}

h1 {
  font-size: 3em;
  margin-top: 0;
}

h2 {
  margin-top: 2em;
}

a {
  color: $text;
  text-decoration: none;
}

blockquote {
  border-left: 2px solid $text;
}

#container {
  display: flex;
  padding: 1em;
}

#sidebar {
  position: fixed;
  min-width: 15em;
  max-width: 15em;
  padding-right: 5em;
  #name {
    margin-top: 0;
  }
}

#content {
  width: 100%;
  margin-left: 15em;
  padding: 0 4em;
}

nav {
  display: flex;
  flex-direction: column;
}

</style>
