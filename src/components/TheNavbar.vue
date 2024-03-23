<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import TheButton from '@/components/TheButton.vue'

const isMobileMenuOpen = ref(false)
const isDark = useDark()
const toggleDark = useToggle(isDark)

const toggleMode = () => toggleDark()
const buttons = [
  { text: 'Login', type: 'solid' },
  { text: 'Sign Up', type: 'outline' }
]

const toggleMobileMenu = () => (isMobileMenuOpen.value = !isMobileMenuOpen.value)
</script>

<template>
  <nav class="sticky top-0 z-50 max-w-screen-2xl px-4 flex justify-between py-3 mx-auto">
    <!-- Logo -->
    <h1 class="text-3xl my-auto font-bold relative">
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500"
        >Shrtnw</span
      >
    </h1>

    <div class="flex space-x-4">
      <!-- Dark Mode Toggle -->
      <button
        id="toggle-mode"
        @click="toggleMode"
        class="px-4 transition duration-300 ease-in-out transform hover:scale-105"
      >
        <Icon
          :data-icon="
            isDark
              ? 'material-symbols:dark-mode-outline-rounded'
              : 'material-symbols:wb-sunny-outline'
          "
          :icon="
            isDark
              ? 'material-symbols:dark-mode-outline-rounded'
              : 'material-symbols:wb-sunny-outline'
          "
          class="h-7 w-7 text-primary-light dark:text-primary-dark"
        />
      </button>

      <!-- Desktop Buttons -->
      <div class="hidden md:flex space-x-4">
        <TheButton
          v-for="(button, idx) in buttons"
          :key="idx"
          :text="button.text"
          :type="button.type"
        />
      </div>

      <!-- Mobile Menu Button -->
      <button id="hamburger-menu" class="block md:hidden" @click="toggleMobileMenu">
        <Icon
          :icon="isMobileMenuOpen ? 'akar-icons:cross' : 'radix-icons:hamburger-menu'"
          class="h-6 w-6 fill-current text-primary-light dark:text-primary-dark transition duration-300 ease-in-out transform hover:scale-105"
        />
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div
    id="mobile-menu"
    v-if="isMobileMenuOpen"
    class="md:hidden border-t border-gray-300 py-4 shadow-lg col space-y-3 px-4 bg-navbar-light dark:bg-navbar-dark rounded-b-lg"
  >
    <TheButton
      v-for="(button, idx) in buttons"
      :key="idx"
      :text="button.text"
      :type="button.type"
    />
  </div>
</template>
