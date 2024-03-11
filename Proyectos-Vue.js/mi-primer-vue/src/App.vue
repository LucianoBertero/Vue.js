<script setup>
import { ref, computed } from "vue";

const name = "Vue dinamico";
const styleColor = "color:blue";
const arrayColors = ["blue", "red", "green"];
const activo = true;

const objetoFruta = {
  name: "Manzana",
  price: "$1.00",
  description: "Una manzana",
};

const arrayFrutas = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
    stock: 0,
  },
  {
    name: "Pera",
    price: "$2.00",
    description: "Una pera",
    stock: 10,
  },
  {
    name: "Naranja",
    price: "$3.00",
    description: "Una naranja",
    stock: 20,
  },
];

const arrayFavoritos = ref([]);
const counter = ref(0);

const mmodificarContador = (action) => {
  if (action === "aumentar") {
    console.log("entro");
    counter.value++;
  } else if (action === "disminuir") {
    counter.value--;
  } else if (action === "resetear") {
    counter.value = 0;
  }
};

const classCounter = computed(() => {
  if (counter.value === 0) {
    return "zero";
  }
  if (counter.value > 0) {
    return "positive";
  }

  return "negative";
});

const bloquearBtnAdd = computed(() => {
  const numSearch = arrayFavoritos.value.find((num) => num === counter.value);

  if (numSearch === 0) return true;
  return numSearch ? true : false;
});

const add = () => {
  arrayFavoritos.value.push(counter.value);
};
</script>

<template>
  <div class="container text-center mt-3">
    <h1>Hola {{ name.toUpperCase() }}</h1>
    <h2 :class="classCounter">{{ counter }}</h2>

    <div class="btn-group">
      <button class="btn btn-success" @click="mmodificarContador('aumentar')">
        Aumentar
      </button>
      <button class="btn btn-danger" @click="mmodificarContador('disminuir')">
        Decrementar
      </button>
      <button class="btn btn-secondary" @click="mmodificarContador('resetear')">
        reset
      </button>
      <button class="btn btn-primary" @click="add" :disabled="bloquearBtnAdd">
        ADD
      </button>
    </div>

    {{ arrayFavoritos }}

    <ul class="list-group">
      <li
        class="list-group-item mt-4"
        v-for="(num, index) in arrayFavoritos"
        :key="index"
      >
        {{ num }}
      </li>
    </ul>
  </div>
</template>

<style>
h1 {
  color: red;
}

.positive {
  color: green;
}

.negative {
  color: red;
}
.zero {
  color: peru;
}
</style>
