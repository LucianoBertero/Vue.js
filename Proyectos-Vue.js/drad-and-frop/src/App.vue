<script setup>
import TodosView from "./components/TodosView.vue";
</script>

<template>
  <div class="conatiner">
    <TodosView class="container"></TodosView>
  </div>
</template>

<style>
.conatiner {
  padding: 0;
  margin: 0;
  max-width: 100%;
  height: 70%;
}

* {
  box-sizing: border-box;
}
</style>
