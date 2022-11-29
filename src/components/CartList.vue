<script setup>
import { reactive } from 'vue'
import IconCross from './icons/IconCross.vue'
import QtyInput from './QtyInput.vue'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/food3.jpg'

const items = reactive([
  {
    id: '4231648',
    name: 'Chicken momo',
    qty: 1,
    price: '10.50',
    imgSrc: food1,
    alt: 'Three chicken momos on a plate.'
  },
  {
    id: '4231649',
    name: 'Spicy Mexican potatoes',
    qty: 1,
    price: '10.50',
    imgSrc: food2,
    alt: 'Three chicken momos on a plate.'
  },
  {
    id: '4231650',
    name: 'Breakfast',
    qty: 1,
    price: '10.50',
    imgSrc: food3,
    alt: 'Three chicken momos on a plate.'
  },
])

const setQty = (item, qty) => {
  if (qty >= 1) {
    item.qty = qty
  }
}
</script>

<template>
  <div>
    <div v-for="item in items" class="flex place-content-between items-center border-b border-[#e5e5e7]">
      <img class="w-52 h-52" :src="item.imgSrc" :alt="item.alt" />
      <div class="px-8 grow">
        <div class="font-bold" v-text="item.name" />
        <div class="text-[#c2c3c3] text-sm">#{{ item.id }}</div>
      </div>
      <qty-input class="px-4" :qty="item.qty" @change="qty => setQty(item, qty)" />
      <div class="font-bold px-4 whitespace-nowrap">
        <span class="inline-block scale-75 translate-x-0.5 -translate-y-1" v-text="'$'" />
        {{ item.price }}
      </div>
      <button class="inline-block px-1.5 py-1 hover:bg-[#e7e7e7] transition-colors duration-300">
        <icon-cross />
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
