<template>
  <div class="sg-item">
    <h3>CSS Selector</h3>
    <code>{{selector}}</code>

    <h3>Sample Code</h3>
    <code v-text="code">
    </code>

    <h3>Rendered Element</h3>
    <div v-html="code">
    </div>
  </div>
</template>

<script>
import project from "~/components/project.vue";

export default {
  props: {
    selector: String,
    code: String
  },
}
</script>

<style>
h3 {
  margin-top: 1em;
}

code {
  margin: 1em 0;
  font-family: monospace;
  background-color: black;
  padding: 1em;
  display: block;
  border-radius: 5px;
  color: white;
  overflow-x: scroll;
  white-space: pre-wrap;
}

.sg-item {
  margin-bottom: 4em;
}
</style>
