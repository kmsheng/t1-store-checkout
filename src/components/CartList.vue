<script setup>
import IconCross from './icons/IconCross.vue'
import QtyInput from './QtyInput.vue'

const emit = defineEmits(['delete', 'qtyChange'])

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <div v-for="item in items" class="flex place-content-between items-center border-b border-[#e5e5e7]">
      <img class="w-52 h-52" :src="item.imgSrc" :alt="item.alt" />
      <div class="px-8 grow">
        <div class="font-bold" v-text="item.name" />
        <div class="text-[#c2c3c3] text-sm">#{{ item.id }}</div>
      </div>
      <qty-input class="px-4" :qty="item.qty" @change="qty => emit('qtyChange', item, qty)" />
      <div class="font-bold px-4 whitespace-nowrap">
        <span class="inline-block scale-75 translate-x-0.5 -translate-y-1" v-text="'$'" />
        {{ (item.price * item.qty).toFixed(2) }}
      </div>
      <button class="inline-block px-1.5 py-1 hover:bg-[#e7e7e7] transition-colors duration-300">
        <icon-cross @click="emit('delete', item)" />
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
