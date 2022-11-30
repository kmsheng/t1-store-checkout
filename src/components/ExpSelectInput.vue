<script setup>
import FormLabel from './FormLabel.vue'

const emit = defineEmits(['change'])

defineProps({
  year: {
    type: String,
    required: true
  },
  month: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <form-label class="block mb-1">Expiration date</form-label>
    <div class="flex">
      <select :value="month" class="select mr-4">
        <option value="">mm</option>
      </select>
      <input
        type="text"
        class="input w-auto"
        placeholder="yyyy"
        :value="year"
        @input="emit('change', $event.target.value)"
      />
    </div>
  </div>
</template>
