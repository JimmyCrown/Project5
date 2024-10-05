<script setup>
import MainCardSingle from './MainCardSingle.vue'


</script>

<template>
<div class="grid grid-cols-3 gap-10 p-10">
    <MainCardSingle v-for="card in 18" :key="card"></MainCardSingle>
</div>

</template>