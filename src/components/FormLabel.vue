<script setup>
defineProps({
  forId: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <label for="forId" class="text-[#8e8f94] font-semibold text-xs">
    <slot />
  </label>
</template>
