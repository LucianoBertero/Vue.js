<template>
  <form action="" @submit.prevent="handleSubmit">
    <input type="text" v-model="inputText" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.inputText.trim() !== "") {
        this.$emit("on-new-item", this.inputText);
        this.inputText = "";
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente */

input {
  margin-top: 7px;
  border-radius: 7px;
  width: 100%;
  height: 26px;
}
</style>
