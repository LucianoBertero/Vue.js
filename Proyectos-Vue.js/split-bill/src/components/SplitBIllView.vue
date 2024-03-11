<script>
import InputForm from "./InputForm";
import PeopleView from "./PeopleView";

export default {
  components: {
    InputForm,
    PeopleView,
  },
};
</script>

<template>
  <div class="container">
    <InputForm></InputForm>
    <PeopleView></PeopleView>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
