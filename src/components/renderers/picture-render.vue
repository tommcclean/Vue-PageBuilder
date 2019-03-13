<template>
  <img class="picture-render" :src="imageSource" :alt="alternateText" :width="width" :height="height"/>
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
  img.picture-render{
    object-fit: cover;
  }
</style>