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
  },
  placeholder: String
})
</script>

<template>
  <div>
    <form-label class="block mb-1">{{ label }}</form-label>
    <input
      type="text"
      class="input"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('change', $event.target.value)"
    />
  </div>
</template>
