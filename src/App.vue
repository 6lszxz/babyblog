<script setup>
import menuBar from './components/menuBar.vue';

</script>

<template>
    <menu-bar/>
    <div class="main">
        <router-view/>
    </div>
    
</template>

<style>    
.main{
    width: 100vw;
    height: 91vh;
    background-color: #DAF5FF;
}
</style>
