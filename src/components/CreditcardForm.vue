<script setup>
import FakeCreditcard from './FakeCreditcard.vue'
import FormLabel from './FormLabel.vue'
</script>

<template>
  <div class="creditcard-form w-[440px] px-12 py-8 rounded-lg drop-shadow-2xl">
    <div class="text-white font-medium text-2xl mb-12">Card Details</div>
    <div>
      <form-label>Card Type</form-label>
      <div class="flex mt-6">
        <fake-creditcard class="-translate-x-[90px]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.creditcard-form {
  background: linear-gradient(45deg, #2c2d31, #42434c);
}
</style>
