<template>
  <h1>{{text}}</h1>
</template>

<script>
export default {
  name: "heading",
  props: {
    text: {
      type: String,
      default: "Empty heading"
    }
  }
};
</script>