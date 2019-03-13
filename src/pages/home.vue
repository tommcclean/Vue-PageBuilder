<template>
  <div v-if="pageData">
    <p>{{pageData}}</p>

    <component-renderer v-for="field in pageData.sections[0].fields" v-bind:key="field.id" :field="field"/>
  </div>
</template>

<script>
import pageData from "@/data/page-data.js";
import componentRenderer from "@/components/component-renderer.vue";

export default {
  components: {
    componentRenderer
  },
  data() {
    return {
      pageData: pageData
    };
  }
};
</script>