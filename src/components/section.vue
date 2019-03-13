<template>
  <section :data-section="sectionId">
    <component-renderer v-for="field in fields" v-bind:key="field.id" :field="field"/>
  </section>
</template>

<script>
import componentRenderer from "@/components/component-renderer";

export default {
  components: {
    componentRenderer
  },
  props: {
    sectionId: {
      type: Number,
      required: true
    },
    fields: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
section{
    border-bottom: 1px solid black;
    min-height: 100px;
}
</style>