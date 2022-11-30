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
    <div
      v-for="item in items"
      :key="item.id"
      class="flex flex-col xl:flex-row xl:place-content-between border-b border-[#e5e5e7]">

      <div class="flex items-center">
        <img class="w-28 h-28 md:w-44 md:h-44" :src="item.imgSrc" :alt="item.alt" />
        <div class="px-8 grow">
          <div class="font-bold" v-text="item.name" />
          <div class="text-[#c2c3c3] text-sm">#{{ item.id }}</div>
        </div>
      </div>

      <div class="flex items-center place-content-between grow pb-4 sm:grow-0">
        <qty-input class="px-0 lg:px-4" :qty="item.qty" @change="qty => emit('qtyChange', item.id, qty)" />
        <div class="font-bold px-4 whitespace-nowrap grow">
          <span class="inline-block scale-75 translate-x-0.5 -translate-y-1" v-text="'$'" />
          {{ (item.price * item.qty).toFixed(2) }}
        </div>
        <button
          class="inline-block px-1.5 py-1 hover:bg-[#e7e7e7] transition-colors duration-300"
          @click="emit('delete', item)">
          <icon-cross />
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>
