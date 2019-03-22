<template>
  <div class="sg-item">
    <h3>CSS Selector</h3>
    <code>{{selector}}</code>

    <h3>Sample Code</h3>
    <code>
  
    </code>

    <h3>Rendered Element</h3>
    <div v-html="code"></div>
    <component :is="component" v-bind="options"></component>
  </div>
</template>

<script>
import project from "~/components/project.vue";

export default {
  components: {
    project
  },
  props: {
    selector: String,
    code: String,
    component: String,
    options: Object
  },
}
</script>

<style>
h3 {
  margin-top: 1em;
}

code {
  font-family: monospace;
  background-color: black;
  padding: 1em;
  display: block;
  border-radius: 5px;
  color: white;
  overflow-x: scroll;
}

.sg-item {
  margin-bottom: 4em;
}
</style>
