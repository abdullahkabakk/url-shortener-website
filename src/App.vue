<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue'
</script>

<template>
  <div class="flex flex-col bg-[#EEEEEE] dark:bg-[#222831] w-full min-h-screen max-w-screen">
    <div class="bg-navbar-light dark:bg-navbar-dark shadow-lg">
      <TheNavbar />
    </div>
    <RouterView />
  </div>
</template>
