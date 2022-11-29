<script setup>
import { computed, reactive } from 'vue'
import CartList from '../components/CartList.vue'
import CreditcardForm from '../components/CreditcardForm.vue'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/food3.jpg'

const items = reactive([
  {
    id: '4231648',
    name: 'Chicken momo',
    qty: 1,
    price: 10.5,
    imgSrc: food1,
    alt: 'Three chicken momos on a plate.'
  },
  {
    id: '4231649',
    name: 'Spicy Mexican potatoes',
    qty: 1,
    price: 8.5,
    imgSrc: food2,
    alt: 'Three chicken momos on a plate.'
  },
  {
    id: '4231650',
    name: 'Breakfast',
    qty: 1,
    price: 5.9,
    imgSrc: food3,
    alt: 'Three chicken momos on a plate.'
  },
])

const setQty = (item, qty) => {
  if (qty >= 1) {
    item.qty = qty
  }
}

const subtotal = computed(() => items.reduce((s, item) => s + (item.price * item.qty), 0))
</script>

<template>
  <div class="flex justify-center bg-[#f6f6f6] text-[#393940]">
    <div class="container flex py-14">
      <div class="grow pl-6 pr-14">
        <div class="text-2xl font-bold">Shopping Cart</div>
        <cart-list :items="items" @qty-change="setQty" />
        <div class="flex">
          <a>Continue Shopping</a>
          <div>Subtotal: ${{ subtotal.toFixed(2) }}</div>
        </div>
      </div>
      <creditcard-form />
    </div>
  </div>
</template>
