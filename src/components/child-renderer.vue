<template>
  <component
    v-bind:is="field.fieldType"
    v-bind="field.properties"
    :data-field-id="field.fieldId"
    :data-field-type="field.fieldType"
  />
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true
    }
  }
};
</script>