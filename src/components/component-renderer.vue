<template>
  <component v-bind:is="field.type" v-bind="field.properties"/>
</template>

<script>
import paragraph from "@/components/paragraph";
import pictureRender from "@/components/picture-render";

export default {
  components: {
    paragraph,
    pictureRender
  },
  props: {
    field: {
      type: Object,
      required: true
    }
  }
};
</script>