<template>
  <div :data-page-id="pageData.pageId" :data-page-name="pageData.pageName" class="d-flex">
    <div class="flex-grow-1">
      <pageSection v-for="section in pageData.sections" v-bind:key="section.id" v-bind="section"/>
    </div>

    <div>
      <h1>Editor</h1>
      <a href="#" v-on:click.prevent="addSection">Add Section</a>
      <a href="#" v-on:click.prevent="toggleEditMode">Toggle Edit Mode</a>
    </div>
  </div>
</template>

<script>
import pageData from "@/data/page-data.js";
import pageSection from "@/components/section";
import identifierGenerator from "@/services/generate-id.js";

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
  data() {
    return {
      pageData: pageData.page
    };
  },
  methods: {
    addSection() {
      let section = {
        sectionId: identifierGenerator.generate(),
        fields: []
      };

      this.pageData.sections.push(section);
    },
    toggleEditMode(){
      this.$store.commit("toggleEditMode");
    }
  }
};
</script>