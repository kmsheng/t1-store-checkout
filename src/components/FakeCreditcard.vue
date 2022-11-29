<script setup>
import IconVisa from './icons/IconVisa.vue'
</script>

<template>
  <div class="w-[280px] bg-[#8e8d98] px-5 py-3 rounded relative">
    <icon-visa class="w-12" />
    <div class="flex place-content-between text-white mt-8 mb-6">
      <div>****</div>
      <div>****</div>
      <div>****</div>
      <div>****</div>
    </div>
    <div class="flex place-content-between text-white text-xs font-semibold">
      <div>Giga Tamarashvili</div>
      <div>{{ '12 / 18' }}</div>
    </div>
    <div class="text-[#91929b] text-[60px] font-extrabold italic -top-4 right-0 absolute">VISA</div>
  </div>
</template>

<style scoped>
</style>
