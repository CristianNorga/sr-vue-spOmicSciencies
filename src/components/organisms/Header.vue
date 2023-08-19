<script setup>
import LogoImg from "@img/logo-header.svg"
</script>
<template>
    <header class="main-header">
        <nav class="navbar">
            <div class="container-sura">
                <a class="navbar-brand" href="#">
                    <img :src="LogoImg" alt="">
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
    z-index: 1000;
}

img {
    max-width: none;
    width: 100px;
}
</style>