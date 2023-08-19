<script setup>
import BannerImg from "@img/banner-img.png";
import BannerMobile from "@img/banner-mobile.png";
</script>

<template>
    <section class="bg-custom-gray-ligth pb-lg-0  pt-5 pt-lg-0">
        <div class="banner">
            <img class="d-none d-lg-block" :src="BannerImg" alt="">
            <div class="overlay-banner">
                <div class="container-banner h-100">
                    <div class="d-none d-lg-block h-100">
                        <div class="container-sura h-100">
                            <div class="row h-100 align-items-end pb-4">
                                <div class="col-lg-7">
                                    <h1 class="is-style-big fw-light">Bienvenidos al <span class="d-block fw-bold">Centro de
                                        </span>
                                        <span class="d-inline-block fw-bold underline-custom">Ciencias Ómicas</span>
                                        <span class="d-block">Especializados
                                            en Medicina Genómica</span>
                                    </h1>
                                </div>
                                <div class="col-lg-5">
                                    <h2 class="is-style-big text-end">
                                        <span class="fw-light">Ciencia, tecnología y </span>
                                        <span class="d-block fw-light fst-italic">talento humano para</span>
                                        <span class="masked-text title-banner text-end mb-0">
                                            <span class="background-text title-banner">retar el destino</span>
                                            retar el destino
                                        </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-block d-lg-none h-100">
                        <div class="row g-0 h-100 align-items-end">
                            <div class="col-12 col-lg-6">
                                <h1 class="fw-light mt-5 mb-4 ms-2">Bienvenidos al <span class="d-block fw-bold">Centro de
                                    </span>
                                    <span class="d-inline-block fw-bold underline-custom">Ciencias Ómicas</span>
                                    <span class="d-block">Especializados
                                        en Medicina Genómica</span>
                                </h1>
                            </div>
                            <div class="col-12 d-block d-lg-none">
                                <div class="img-container">
                                    <img class="underline-custom d-block d-lg-none" :src="BannerMobile" alt="">
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <p class="fs-2 mt-4 mb-0 me-3 lh-1 text-end">
                                    <span class="fw-light">Ciencia, tecnología y </span>
                                    <span class="d-block fst-italic">talento humano para</span>
                                <div class="masked-text fs-1 text-end pe-2 pe-3">
                                    <span class="fs-1 background-text">retar el destino</span>
                                    retar el destino
                                </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    margin-top: -122px;
}

.banner {
    position: relative;
}

.banner img {
    width: 100%;
    max-width: none;
    min-height: 50vh;
    object-fit: cover;
}

.overlay-banner {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#242755, 0.76);
}

@media (min-width: 992px) {
    .banner {
        margin-top: -122px;
    }
    .overlay-banner {
        position: absolute;
    }
}
</style>