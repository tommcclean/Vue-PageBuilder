<template>
  <p>{{text}} {{isEditMode}}</p>
</template>

<script>
export default {
  name: "paragraph",
  props: {
    text: {
      type: String,
      default: "Empty"
    }
  },
  computed: {
    isEditMode() {
      return this.$store.getters.isEditMode;
    }
  }
};
</script>