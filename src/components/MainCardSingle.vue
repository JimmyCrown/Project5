<script setup>
import { faker } from '@faker-js/faker'

const firstname = faker.person.firstName()
const lastname = faker.person.lastName()
const fullname = `Dr. ${firstname} ${lastname}`
const job_title = faker.person.jobTitle() 
const bio = faker.lorem.sentences(3)  
const username = faker.internet.userName({ firstName: firstname, lastName: lastname }).toLowerCase()
</script>

<template>
<RouterLink :to="{name:'CardDetails', params:{id: username}}" >
  <div class="border border-indigo-300 rounded-3xl shadow-lg bg-white h-full transition-transform transform hover:scale-105 hover:shadow-xl"> 
    <img :src="faker.image.urlLoremFlickr({width: 640, height: 480, category: 'medical'})" class="rounded-t-3xl"/>
    
    <div class="p-6">
        <p class="mb-2 text-2xl font-bold text-indigo-700">{{ fullname }}</p>
        <p class="mb-3 font-medium text-indigo-500">{{ job_title }}</p>
        <p class="mb-3 text-gray-700">{{ bio }}</p>
    </div>
</div>
</RouterLink>
</template>

