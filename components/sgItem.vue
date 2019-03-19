<template>
  <div class="sg-item">
    <h3>CSS Selector</h3>
    <code>{{selector}}</code>

    <h3>Sample Code</h3>
    <code>
      {{sampleCode}}
    </code>

    <h3>Rendered Element</h3>
    <div ref="template">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selector: String
  },
  data: function() {
    return {
      sampleCode: ''
    }
  },
  mounted: function() {
    this.$data.sampleCode = this.$refs.template.innerHTML;
  }
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
