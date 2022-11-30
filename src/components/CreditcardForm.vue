<script setup>
import FakeCreditcard from './FakeCreditcard.vue'
import FormLabel from './FormLabel.vue'
import LabelInput from './LabelInput.vue'
import ExpSelectInput from './ExpSelectInput.vue'
import LabelSelect from './LabelSelect.vue'

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
    <div class="text-white font-medium text-2xl mb-8">Card Details</div>
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
    <div class="flex mt-6">
      <exp-select-input
        :month="modelValue.expMonth"
        :year="modelValue.expYear"
        @update.month="value => emit('change', 'expMonth', value)"
        @update.year="value => emit('change', 'expYear', value)"
      />
      <label-input
        class="w-10 ml-4"
        label="CVV"
        :modelValue="modelValue.cvv"
        @change="value => emit('change', 'cvv', value)"
      />
    </div>
    <button class="btn-submit mt-12" type="submit">Check Out</button>
  </div>
</template>
