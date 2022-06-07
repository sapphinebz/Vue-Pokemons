<script setup lang="ts">
import { store, nextPage, prevPage } from './store/store';


</script>

<template>

  {{ store.currentPage }}/{{ store.totalPage }}
  <button @click="prevPage()">prevPage</button>
  <button @click="nextPage()">nextPage</button>
  <div>
    <div v-for="(item, index) in store.pokemons">
      {{ item.name }}
    </div>

  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
