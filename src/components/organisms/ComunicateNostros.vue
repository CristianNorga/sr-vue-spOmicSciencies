<script setup>
import Mail from "@img/mail.svg";
import Phone from "@img/phone.svg";
import Mobile from "@img/mobile.svg";
</script>

<template>
    <section class="bg-custom-gray">
        <div class="container-sura">
            <div class="row justify-content-between align-items-end">
                <div class="col-12 col-md-7">
                    <h2 class="indicative mb-4">Comunícate con nosotros</h2>
                    <div class="row justify-content-center text-center mb-3">
                        <div class="col-6 col-md-4">
                            <img class="pb-4" :src="Phone" alt="">
                            <p class="m-0">+57 604 369 5100</p>
                            <p>extensión 46582</p>
                        </div>     
                        <div class="col-6 col-md-4">
                            <img class="pb-4" :src="Mobile" alt="">
                            <p>316 461 9965</p>
                        </div>     
                        <div class="col-6 col-md-4">
                            <!-- <div class="w-100 text-center"> -->
                                <img class="pb-4" :src="Mail" alt="">
                            <!-- </div> -->
                            <a href="mailto:elcorreoquequieres@correo.com" class="text-custom-wrap">ceunidaddegenetica@suramericana.com.co</a>
                        </div>
                    </div>
                    <p class="text-center"><span class="text-custom-green fw-bold"> Horarios de atención: </span> lunes
                        a viernes 7:00 a. m. a 5:00 p. m.</p>
                </div>
            <div class="col-12 col-md-5 order-first order-md-last">
                <div class="float-title text-end pb-3 p-md-0">
                    <h3 class="is-style-big fw-bold mb-0 lh-1">Juntos podemos
                        <span class="d-block fw-light fst-italic">desafiar el</span>
                    </h3>
                    <div class="masked-text text-end">
                        <span class="background-text">destino</span>
                        destino
                    </div>
                    <h3 class="is-style-big fw-medium d-inline-block mb-0 lh-1">
                        <span class="d-block fst-italic">en el Centro de</span>
                        <span class="d-block fst-italic">Ciencias Ómicas SURA</span>
                    </h3>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<style scoped>
.text-custom-wrap {
    white-space: normal;
    word-wrap: break-word;
}
</style>