<template>
  <div class="alert" v-bind:class="alertType" role="alert">{{text}}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    alertType: {
      type: String,
      required: true
    }
  }
};
</script>