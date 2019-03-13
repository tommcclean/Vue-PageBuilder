<template>
  <h1 contenteditable="true" @input="updateComponent">{{text}}</h1>
</template>

<script>
const debounce = require("lodash/debounce");

export default {
  name: "heading",
  props: {
    text: {
      type: String,
      default: "Empty heading"
    }
  },
  methods: {
    updateComponent: debounce(function(event) {
      this.$emit("component-updated", {
        text: event.target.innerText
      });
    }, 2000)
  }
};
</script>

<style scoped>
h1{
  outline: 0;
}
</style>