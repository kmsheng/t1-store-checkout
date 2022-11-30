<script setup>
import { reactive } from 'vue'
import CartList from '../components/CartList.vue'
import CreditcardForm from '../components/CreditcardForm.vue'
import IconArrowLeft from '../components/icons/IconArrowLeft.vue'
import { useProductStore } from '../stores/product.js'

const product = useProductStore()

const form = reactive({
  cardName: 'Giga Tamarashvili',
  cardNumber: '1234   5678   1234   5678',
  expMonth: '',
  expYear: '',
  cvv: '123'
})

const setForm = (prop, value) => {
  if (prop === 'cardNumber') {
    form[prop] = value ? value.replace(/\s/g, '').match(/.{1,4}/g).join('   ') : ''
    return
  }
  form[prop] = value
}
</script>

<template>
  <div class="flex justify-center bg-[#f6f6f6] text-[#393940]">
    <div class="container flex flex-col lg:flex-row py-4 sm:py-12 mx-4 md:mx-auto">
      <div class="grow p-4 md:pr-14 md:pl-0 md:py-0">
        <div class="text-2xl font-bold mb-4 sm:mb-14">Shopping Cart</div>
        <div v-if="product.items.length === 0">Your cart is empty.</div>
        <cart-list v-else
          :items="product.items"
          @qty-change="product.setQty"
          @delete="target => product.deleteItem(target.id)"
        />
        <div class="flex flex-col md:flex-row items-end place-content-between py-8">
          <a class="flex order-2 md:order-1 mt-4 md:mt-auto  items-center text-[#3777da] font-bold">
            <icon-arrow-left class="mr-3" />
            Continue Shopping
          </a>
          <div class="text-[#c2c3c3] font-semibold order-1 md:order-2">
            Subtotal:
            <strong class="font-semibold text-2xl text-[#393940]">${{ product.subtotal.toFixed(2) }}</strong>
          </div>
        </div>
      </div>
      <creditcard-form :modelValue="form" @update:modelValue="setForm" />
    </div>
  </div>
</template>
