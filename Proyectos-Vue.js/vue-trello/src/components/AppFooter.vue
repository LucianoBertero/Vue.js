import { default } from '../App.vue';
<template>
  <footer>
    <span>Luciano Bertero - Trello</span>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>

<style scoped>
footer {
  box-sizing: border-box;
  background-color: #cfd8dc;
  bottom: 0;
  left: 0;
  padding: 1rem;
  position: absolute;
  width: 100%;
}
</style>
