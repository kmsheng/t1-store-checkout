<script setup>
import FormLabel from './FormLabel.vue'

const emit = defineEmits(['update:modelValue'])

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
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
