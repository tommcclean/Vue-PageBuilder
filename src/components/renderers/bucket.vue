<template>
  <div>
    <child-renderer v-for="field in fields" v-bind:key="field.id" :field="field"/>
  </div>
</template>

<script>
import childRenderer from "@/components/child-renderer";

export default {
  name: 'bucket',
  components: {
    childRenderer
  },
  props: {
    fields: {
      type: Array,
      required: false
    }
  }
};
</script>

<style>
div[data-field-type="bucket"] {
  min-height: 50px;
  background-color: green;
}
</style>