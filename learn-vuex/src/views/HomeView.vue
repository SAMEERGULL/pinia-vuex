<template>
  <div class="home">
    <div class="count" :style="{ color: $store.state.color }">
    {{ $store.state.count }}
    </div>
    <br>
    <div>
      {{ $store.state.count }} ^ 2 = {{ $store.getters.squareCount }}
    </div>
    <div class="buttons">
      <button @click="$store.commit('decreaseCount')">-</button>
      <button @click="$store.commit('increaseCount')">+</button>
    </div>
    <br>
    <div>
      <h3>Count color:</h3>
      <input type="text" v-model="$store.state.color" >
    </div>
  </div>
</template>

<script setup>

</script>

<style>
.count {
  font-size: 60px;
  margin: 15px;
}
.buttons button {
  font-size: 40px;
  margin: 10px;
}
</style>
