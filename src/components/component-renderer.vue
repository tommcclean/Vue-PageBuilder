<template>
  <component
    v-bind:is="field.fieldType"
    v-bind="field.properties"
    :data-field-id="field.fieldId"
    :data-field-type="field.fieldType"
  />
</template>

<script>
import paragraphRender from "@/components/renderers/paragraph-render";
import pictureRender from "@/components/renderers/picture-render";
import alertRender from "@/components/renderers/alert-render";

export default {
  components: {
    paragraphRender,
    pictureRender,
    alertRender
  },
  props: {
    field: {
      type: Object,
      required: true
    }
  }
};
</script>