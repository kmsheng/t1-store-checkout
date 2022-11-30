<script setup>
import FakeCreditcard from './FakeCreditcard.vue'
import FormLabel from './FormLabel.vue'
import LabelInput from './LabelInput.vue'
import ExpSelectInput from './ExpSelectInput.vue'
import IconMasterCard from './icons/IconMasterCard.vue'

const emit = defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="w-full md:w-[440px] md:mx-auto md:mt-8 px-8 sm:px-12 py-8 rounded-lg bg-gradient-to-tr from-[#2c2d31] to-[#42434c]  drop-shadow-2xl">
    <div class="text-white font-medium text-2xl mb-8">Card Details</div>
    <div>
      <form-label>Card Type</form-label>
      <div class="flex items-center justify-around mt-6">
        <fake-creditcard class="w-[300px] md:-translate-x-[90px]" />
        <icon-master-card class="translate-x-[14px] sm:-translate-x-[20px]" />
      </div>
    </div>
    <label-input
      class="mt-6"
      label="Name on Card"
      :modelValue="modelValue.cardName"
      @update:modelValue="value => emit('update:modelValue', 'cardName', value)"
    />
    <label-input
      class="mt-6"
      label="Card Number"
      :modelValue="modelValue.cardNumber"
      @update:modelValue="value => emit('update:modelValue', 'cardNumber', value)"
    />
    <div class="flex mt-6">
      <exp-select-input
        :month="modelValue.expMonth"
        :year="modelValue.expYear"
        @update:month="value => emit('update:modelValue', 'expMonth', value)"
        @update:year="value => emit('update:modelValue', 'expYear', value)"
      />
      <label-input
        class="w-10 ml-4"
        label="CVV"
        :modelValue="modelValue.cvv"
        @update:modelValue="value => emit('update:modelValue', 'cvv', value)"
      />
    </div>
    <button class="btn-submit mt-12 rounded" type="submit">Check Out</button>
  </div>
</template>
