<script>
import InputTag from "./components/InputTag.vue";

export default {
  components: {
    InputTag,
  },

  methods: {
    handleOnTagsChange(tags) {
      console.log(tags);
    },
  },
};
</script>

<template>
  <main>
    <InputTag @onTagsChange="handleOnTagsChange" />
  </main>
</template>

<style></style>
