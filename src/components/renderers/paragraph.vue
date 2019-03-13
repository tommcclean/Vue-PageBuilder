<template>
  <p>{{text}}</p>
</template>

<script>
export default {
  name: 'paragraph',
  props: {
    text: {
      type: String,
      default: "Empty"
    }
  }
};
</script>