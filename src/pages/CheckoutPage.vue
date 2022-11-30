<script setup>
import { computed, reactive } from 'vue'
import CartList from '../components/CartList.vue'
import CreditcardForm from '../components/CreditcardForm.vue'
import IconArrowLeft from '../components/icons/IconArrowLeft.vue'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/food3.jpg'

const items = [
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
]

const state = reactive({ items })

const setQty = (item, qty) => {
  if (qty >= 1) {
    item.qty = qty
  }
}

const deleteItem = target => {
  state.items = state.items.filter(item => item.id !== target.id)
}

const subtotal = computed(() => state.items.reduce((s, item) => s + (item.price * item.qty), 0))

const form = reactive({
  cardName: 'Giga Tamarashvili',
  cardNumber: '****   ****   ****   ****',
  expMonth: '',
  expYear: '',
  cvv: 'XXX'
})

const setForm = (prop, value) => {
  if (prop === 'cardNumber') {
    form[prop] = value ? value.replace(/\s/g, '').match(/.{1,4}/g).join(' ') : ''
    return
  }
  form[prop] = value
}
</script>

<template>
  <div class="flex justify-center bg-[#f6f6f6] text-[#393940]">
    <div class="container flex py-12">
      <div class="grow pr-14">
        <div class="text-2xl font-bold mb-14">Shopping Cart</div>
        <div v-if="state.items.length === 0">Your cart is empty.</div>
        <cart-list v-else :items="state.items" @qty-change="setQty" @delete="deleteItem" />
        <div class="flex place-content-between py-8">
          <a class="flex items-center text-[#3777da] font-bold">
            <icon-arrow-left class="mr-3" />
            Continue Shopping
          </a>
          <div class="text-[#c2c3c3] font-semibold">
            Subtotal:
            <strong class="font-semibold text-2xl text-[#393940]">${{ subtotal.toFixed(2) }}</strong>
          </div>
        </div>
      </div>
      <creditcard-form :modelValue="form" @update:modelValue="setForm" />
    </div>
  </div>
</template>
