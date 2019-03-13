<template>
  <p v-on:click.prevent="updateText">{{text}}</p>
</template>

<script>
export default {
  name: "paragraph",
  props: {
    text: {
      type: String,
      default: "Empty paragraph"
    }
  },
  methods: {
    updateText() {
      this.$emit("component-updated", {
        text: 'hello'
      });
    }
  }
};
</script>