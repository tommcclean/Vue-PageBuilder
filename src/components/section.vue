<template>
  <section :data-section="sectionId">
    <component-renderer v-for="field in fields" v-bind:key="field.id" :field="field" v-on:component-updated="updated"/>
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
  },
  methods:{
    updated(field, properties){
      let updatedField = this._.find(this.fields, function(fld) { return fld.fieldId === field.fieldId; });

      updatedField.properties = properties;

      this.$emit("section-updated", this.sectionId);
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