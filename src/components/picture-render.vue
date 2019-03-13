<template>
  <img :src="imageSource" :alt="alternateText"/>
</template>

<script>
export default {
  props: {
    imageSource: {
      type: String,
      default: '@/assets/sample.jpg'
    },
    alternateText: {
      type: String,
      default: 'Sample Image'
    }
  }
};
</script>