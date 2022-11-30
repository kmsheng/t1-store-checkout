<script setup>
import range from 'lodash.range'
import FormLabel from './FormLabel.vue'

const emit = defineEmits(['update:year', 'update:month'])

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
const mms = range(1, 13).map(v => String(v).padStart(2, '0'))
</script>

<template>
  <div>
    <form-label class="block mb-1">Expiration date</form-label>
    <div class="flex">
      <select
        :value="month"
        class="select mr-4" @change="emit('update:month', $event.target.value)">
        <option value="">mm</option>
        <option v-for="mm in mms" :key="mm" :value="mm">{{ mm }}</option>
      </select>
      <input
        type="text"
        class="input w-auto"
        placeholder="yyyy"
        :value="year"
        @input="emit('update:year', $event.target.value)"
      />
    </div>
  </div>
</template>
