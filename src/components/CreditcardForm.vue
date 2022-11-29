<script setup>
import FakeCreditcard from './FakeCreditcard.vue'
import FormLabel from './FormLabel.vue'
import LabelInput from './LabelInput.vue'

const emit = defineEmits(['change'])
defineProps({
  modelValue: {
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
    <label-input
      class="mt-6"
      label="Name on Card"
      :modelValue="modelValue.cardName"
      @change="value => emit('change', 'cardName', value)"
    />
    <label-input
      class="mt-6"
      label="Card Number"
      :modelValue="modelValue.cardNumber"
      @change="value => emit('change', 'cardNumber', value)"
    />
    <div class="text-white">{{ modelValue }}</div>
  </div>
</template>
