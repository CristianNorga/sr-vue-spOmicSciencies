<script setup>
import { inject } from 'vue'

const assets = inject('assets')
</script>
<template>
    <header class="main-header">
        <nav class="navbar">
            <div class="container-sura">
                <a class="navbar-brand" href="#">
                    <img :src="`${assets}/logo-header.svg`" alt="">
                </a>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.main-header {
    padding-top: 30px;
    padding-bottom: 30px;
    position: relative;
    z-index: 100;
}

img {
    max-width: none;
    width: 100px;
}
</style>