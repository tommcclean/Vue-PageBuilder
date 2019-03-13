<template>
  <component
    v-bind:is="field.fieldType"
    v-bind="field.properties"
    :data-field-id="field.fieldId"
    :data-field-type="field.fieldType"
    v-on:component-updated="updated"
  />
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  methods:{
    updated(properties){
      window.console.log(properties); 
      this.$emit("component-updated", this.field, properties);
    }
  }
};
</script>