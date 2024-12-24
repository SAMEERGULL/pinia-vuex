<template>
  <div class="home">
    <div class="count">
      {{ store.count }}
    </div>
    <div class="buttons">
      <button @click="store.decreaseCount">-</button>
      <button @click="store.increaseCount">+</button>
    </div>
    <hr>
    <div>
      This counter is: {{ store.oddOrEven }}.
    </div>
    <hr>
    <div>
      <h3>Edit Counter:</h3>
      <input type="number" v-model="store.count">
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
</script>

<style>
.count {
  font-size: 70px;
  margin: 20px;
}
.buttons button {
  font-size: 30px;
  margin: 10px;
}
</style>
