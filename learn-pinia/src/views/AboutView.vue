<template>
  <div class="about">
    <h1>About</h1>
    <button class="count-button" @click="store.increaseCount">
      {{ store.count }}
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
</script>

<style>
.count-button {
  font-size: 50px;
  margin: 10px;
}
</style>
