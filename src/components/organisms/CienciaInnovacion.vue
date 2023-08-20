<script setup>
import { inject } from 'vue'

const assets = inject('assets')
</script>

<template>
    <section class="bg-custom-gray">
        <div class="container-sura">
            <div class="row justify-content-between">
                <div class="col-12 col-md-6">
                    <div class="h-100 d-flex flex-column justify-content-between">
                        <h2 class="indicative">¿Qué hacemos?</h2>
                        <p>
                            Entregamos a nuestros clientes
                            <span class="fw-bold">
                                resultados y modelos predictivos con
                                rapidez y alta precisión, que les permitan gestionar integralmente
                                el riesgo en salud de las personas.
                            </span>
                        </p>
                        <p class="fw-bold">Contamos con servicios de:</p>
                    </div>
                </div>
                <div class="col-12 col-md-4 order-first order-md-last text-end">
                    <h3 class="is-style-big fw-medium d-inline-block mb-0 lh-1">Ciencia e <span
                            class="fw-bold">innovación</span>
                        <span class="d-block fst-italic">para retar el</span>
                    </h3>
                    <p class="masked-text">
                        <span class="background-text">destino</span>
                        destino
                    </p>
                </div>
            </div>
            <div class="row justify-content-center text-center">
                <div class="col-6 col-md-4">
                    <div class="pb-4">
                        <img :src="`${assets}/genome.svg`" alt="">
                    </div>
                    <p><span class="text-custom-green fw-bold"> Secuenciación de próxima generación (NGS): </span>
                        informe
                        diagnóstico genético en oncogenética y enfermedades huérfanas.</p>
                </div>
                <div class="col-6 col-md-4">
                    <div class="pb-4">
                        <img :src="`${assets}/dropper.svg`" alt="">
                    </div>
                    <p><span class="text-custom-green fw-bold fw-bold"> Secuenciación Sanger:o </span> mutaciones
                        puntuales, expansión
                        de tripletas.</p>
                </div>
                <div class="col-6 col-md-4">
                    <div class="pb-4">
                        <img :src="`${assets}/genetics.svg`" alt="">
                    </div>
                    <p><span class="text-custom-green fw-bold"> MLPA: </span> duplicaciones o deleciones en genes de
                        interés.
                    </p>
                </div>
                <div class="col-6 col-md-4">
                    <div class="pb-4">
                        <img :src="`${assets}/test-tube.svg`" alt="">
                    </div>
                    <p><span class="text-custom-green fw-bold">MicroARRAYS </span> </p>
                </div>
                <div class="col-6 col-md-4">
                    <div class="pb-4">
                        <img :src="`${assets}/atom.svg`" alt="">
                    </div>
                    <p><span class="text-custom-green fw-bold"> PRS (Polygenic Risk Score): </span> estimación de Riesgo
                        Poligénico.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .mw-75 {
        max-width: 75%;
        margin: 0 auto;
    }
</style>