<template>
  <div
    :data-page-id="pageProperties.page.pageId"
    :data-page-name="pageProperties.page.pageName"
    class="d-flex"
  >
    <div>
      <textarea class="property-editor" v-model="editMe"/>
    </div>

    <div class="flex-grow-1">
      <pageSection
        v-for="section in pageProperties.page.sections"
        v-bind:key="section.id"
        v-bind="section"
      />
    </div>

    <div>
      <h1>Editor</h1>
      <a href="#" v-on:click.prevent="toggleEditMode">Toggle Edit Mode</a>
      <a href="#" v-on:click.prevent="logJson">Log JSON</a>
    </div>
  </div>
</template>

<script>
import pageData from "@/data/page-data.js";
import pageSection from "@/components/section";

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
        this.$store.dispatch("setPageProperties", JSON.parse(value));
      }
    }
  },
  created() {
    this.$store.commit("setPageProperties", pageData);
  },
  methods: {
    toggleEditMode() {
      this.$store.commit("toggleEditMode");
    },
    logJson() {
      window.console.clear();
    }
  }
};
</script>

<style>
textarea.property-editor {
  width: 400px;
  height: 100vh;
}
</style>