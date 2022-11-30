<script setup>
import FormLabel from './FormLabel.vue'

const emit = defineEmits(['change'])

defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <form-label class="block mb-1">{{ label }}</form-label>
    <select :value="modelValue" class="select">
      <option value="">mm</option>
    </select>
  </div>
</template>
