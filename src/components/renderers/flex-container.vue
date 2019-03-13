<template>
  <div class="d-flex align-items-center">
    <component-renderer v-for="field in fields" v-bind:key="field.id" :field="field"/>
  </div>
</template>

<script>
import componentRenderer from "@/components/component-renderer.vue";

export default {
  name: "flex-container",
  components: {
    componentRenderer
  },
  props: {
    fields: {
      type: Array,
      required: true
    }
  }
};
</script>