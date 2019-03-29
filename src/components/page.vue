<template>
  <div
    :data-page-id="pageProperties.page.pageId"
    :data-page-name="pageProperties.page.pageName"
    class="d-flex"
  >
    <div>
      <textarea class="property-editor" v-model="editMe"/>
    </div>

    <div class="flex-grow-1 p-5" style="background-color: gray;">
      <div class="card">
        <div class="card-header" v-text="pageProperties.page.pageName"/>
        <pageSection
          v-for="section in pageProperties.page.sections"
          v-bind:key="section.id"
          v-bind="section"
        />
      </div>
    </div>
  </div>
</template>

<script>
import pageData from "@/data/page-data.js";
import pageSection from "@/components/section";

const debounce = require("lodash/debounce");

export default {
  components: {
    pageSection
  },
  props: {
    pageId: {
      type: Number,
      required: true
    }
  },
  computed: {
    pageProperties() {
      return this.$store.getters.getPageProperties;
    },
    editMe: {
      get() {
        var json = this.$store.getters.getPageProperties;
        return JSON.stringify(json, null, 2);
      },
      set(value) {
        this.updateProperties(value);
      }
    }
  },
  created() {
    this.$store.commit("setPageProperties", pageData);
  },
  methods: {
    updateProperties: debounce(function(value) {
      this.$store.dispatch("setPageProperties", JSON.parse(value));
    }, 2000)
  }
};
</script>

<style>
textarea.property-editor {
  width: 400px;
  height: 100vh;
}
</style>