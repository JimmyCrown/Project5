<template>
<div class="flex justify-center gap-4 p-8">

    <button @click="prevPage" :disabled="activePage === 1" class="rounded-lg bg-indigo-500 text-white px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:bg-indigo-700 disabled:opacity-50">PREV</button>

    <button v-for="page in pages" :key="page" @click="setActivePage(page)" class="rounded-full bg-indigo-500 border-2 border-indigo-500 text-white px-3 py-1 font-medium shadow-md hover:bg-white hover:text-indigo-500" :class="page === activePage ? 'bg-indigo-800' : '' ">{{ page }}</button>

    <button @click="nextPage" :disabled="activePage === pages" class="rounded-lg bg-indigo-500 text-white px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:bg-indigo-700 disabled:opacity-50">NEXT</button>



</div>
</template>

<script setup>

import { ref } from 'vue'
const pages = ref(10)
const activePage = ref(1)

const prevPage = () => {
    if (activePage.value > 1) {
        activePage.value--
    }
    console.log(activePage.value)
}

const nextPage = () => {
    if (activePage.value < pages.value) {
        activePage.value++
    }

    console.log(activePage.value)
}

</script>
