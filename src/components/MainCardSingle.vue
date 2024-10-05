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
  <div class="border border-gray-400 rounded-lg shadow bg-gray-100 h-full">
    <img :src="faker.image.urlLoremFlickr({width: 640, height: 480, category: 'medical'})" class="rounded-t-xl"/>
    <div class="p-5">
        <p class="mb-2 text-2xl font-semibold">{{ fullname }}</p>
        <p class="mb-3 font-normal text-gray-600">{{ job_title }}</p>
        <p class="mb-3 font-normal text-gray-600">{{ bio }}</p>
    </div>
  </div>
</RouterLink>
</template>

