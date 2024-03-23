<script setup lang="ts">
defineProps<{
  text: string
  type: 'outline' | 'solid'
}>()

const buttonType = {
  outline:
    'text-primary-light dark:text-primary-dark border border-primary-light dark:border-primary-dark rounded-lg transition duration-300 ease-in-out transform hover:scale-105',
  solid: 'text-navbar-light dark:text-navbar-dark bg-primary-light dark:bg-primary-dark'
}
</script>

<template>
  <button
    v-wave
    :class="buttonType[type]"
    class="px-4 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
  >
    {{ text }}
  </button>
</template>
