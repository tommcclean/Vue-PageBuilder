<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
};
</script>