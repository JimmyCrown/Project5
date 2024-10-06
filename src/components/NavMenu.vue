<template>
  <nav class="bg-blue-500 h-20 items-center text-white flex justify-center space-x-4">
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'Other' }">Other</RouterLink>
    <RouterLink :to="{ name: 'LoginPage' }">Login</RouterLink>
    <RouterLink :to="{ name: 'SettingsPage' }">Settings</RouterLink>
    
  </nav>
</template>