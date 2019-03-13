<template>
  <p contenteditable="true" @input="updateComponent">{{text}}</p>
</template>

<script>
const debounce = require("lodash/debounce");

export default {
  name: "paragraph",
  props: {
    text: {
      type: String,
      default: "Empty paragraph"
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
p {
  outline: 0;
}
</style>