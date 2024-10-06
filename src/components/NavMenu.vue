<template>
  <nav class="bg-blue-500 h-20 items-center text-white flex justify-center space-x-4">
    <RouterLink :to="{ name: 'Home'  } " class="text-lg font-semibold text-white hover:text-blue-800 transition-colors duration-200">Home</RouterLink>
    <RouterLink :to="{ name: 'Other' } " class="text-lg font-semibold text-white hover:text-blue-800 transition-colors duration-200">Other</RouterLink>
    
    <RouterLink :to="{ name: 'SettingsPage' }  " class="text-lg font-semibold text-white hover:text-blue-800 transition-colors duration-200">Settings</RouterLink>

    <div v-if="isAuthenticated">
      Welcome {{ user.email }}
      <button @click="logout" class="rounded-md bg-red-500 px-4 py-2 mx-2 text-red-100 hover:bg-red-700">LOGOUT</button>
    </div>
    <div v-else>
    <RouterLink :to="{ name: 'LoginPage' }  " class="text-lg font-semibold text-white hover:text-blue-800 transition-colors duration-200">Login</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useAuth } from '../Composables/useAuth'
const {isAuthenticated, logout, user} = useAuth()


</script>