<script>
import { store } from "../store/store.js";

export default {
  data() {
    return {
      total: 0,
      tip: 0,
      people: 0,
    };
  },

  methods: {
    handleSubmit() {
      // Lógica para manejar el envío del formulario
    },
  },
};
</script>

<template>
  <form
    action="
    "
    @submit.prevent="handleSubmit"
  >
    <div class="form-container">
      <div class="">
        <label for="total">Total</label>
        <input type="number" v-model="total" required />
      </div>
      <div class="">
        <label for="tip">Tip</label>
        <input type="number" v-model="tip" required />
      </div>
      <div class="">
        <label for="people">People</label>
        <input type="number" v-model="people" required />
      </div>
      <div class="">
        <input type="submit" value="calculte" />
      </div>
    </div>
  </form>
</template>

<style scoped></style>
