<script setup>
import FakeCreditcard from './FakeCreditcard.vue'
import FormLabel from './FormLabel.vue'
import LabelInput from './LabelInput.vue'

defineProps({
  form: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="w-[440px] px-12 py-8 rounded-lg bg-gradient-to-tr from-[#2c2d31] to-[#42434c]  drop-shadow-2xl">
    <div class="text-white font-medium text-2xl mb-12">Card Details</div>
    <div>
      <form-label>Card Type</form-label>
      <div class="flex mt-6">
        <fake-creditcard class="-translate-x-[90px]" />
      </div>
    </div>
    <label-input class="mt-6" label="Name on Card" v-model="form.cardName" />
    <label-input class="mt-6" label="Card Number" v-model="form.cardNumber" />
  </div>
</template>
