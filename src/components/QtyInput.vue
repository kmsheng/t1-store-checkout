<script setup>
defineProps({
  qty: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['change'])
</script>

<template>
  <div class="flex">
    <button class="btn-qty" @click="emit('change', qty - 1)">-</button>
    <input
      class="w-14 rounded border border-[#cdcdd2] px-2 py-1 text-center"
      type="number"
      :value="qty"
    />
    <button class="btn-qty" @click="emit('change', qty + 1)">+</button>
  </div>
</template>

<style lang="css" scoped>
</style>
