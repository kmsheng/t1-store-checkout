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
    <input
      type="text"
      class="input"
      :value="modelValue"
      @input="emit('change', $event.target.value)"
    />
  </div>
</template>
