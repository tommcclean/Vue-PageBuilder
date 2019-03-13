<template>
  <img :src="imageSource" :alt="alternateText" :width="width" :height="height"/>
</template>

<script>
export default {
  name: 'square-image',
  props: {
    imageSource: {
      type: String,
      default: '@/assets/sample.jpg'
    },
    alternateText: {
      type: String,
      default: 'Sample Image'
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    }
  }
};
</script>

<style>
  img[data-field-type="square-image"]{
    object-fit: cover;
  }
</style>