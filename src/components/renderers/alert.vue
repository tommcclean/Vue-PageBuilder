<template>
  <div class="alert" v-bind:class="alertType" role="alert">{{text}}</div>
</template>

<script>
export default {
  name: 'alert',
  props: {
    text: {
      type: String,
      default: 'An error occured'
    },
    alertType: {
      type: String,
      default: 'alert-danger'
    }
  }
};
</script>