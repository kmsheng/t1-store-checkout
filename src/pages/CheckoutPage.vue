<script setup>
import CartList from '../components/CartList.vue'
import CreditcardForm from '../components/CreditcardForm.vue'
</script>

<template>
  <div class="flex justify-center bg-[#f6f6f6] text-[#393940]">
    <div class="container flex py-14">
      <div class="grow pl-6 pr-14">
        <div class="text-2xl font-bold">Shopping Cart</div>
        <cart-list />
        <div class="flex">
          <a>Continue Shopping</a>
          <div>Subtotal: $24.90</div>
        </div>
      </div>
      <creditcard-form />
    </div>
  </div>
</template>
