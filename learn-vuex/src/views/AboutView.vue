<template>
  <div class="about">
    <h1>About</h1>
    <button @click="$store.commit('increaseCount')" :style="{ color: $store.state.color }">
      {{ $store.state.count }}
    </button>
  </div>
</template>

<script setup></script>

<style>
button {
  font-size: 70px;
  margin: 20px;
}
</style>
