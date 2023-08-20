<script setup>
import { inject } from 'vue'

const assets = inject('assets')
</script>
<template>
    <section class="position-relative pb-0 pb-lg-5">
        <div class="container-sura">
            <h2 class="indicative position-relative z-3">Tecnologías de última generación</h2>
            <div class="position-relative z-3">
                <div class="row text-custom-gray h-100">
                    <div class="col-12 col-md-6">
                        <p>
                            Podemos procesar pruebas genéticas a través de metodologías de secuenciación NGS y de
                            genotipificación, con infraestructura de laboratorio de última generación, procesamiento y
                            análisis
                            de datos, y un equipo multidisciplinario con los mejores profesionales.
                        </p>
                        <p>
                            Nuestro laboratorio de genómica está automatizado con el sistema CoreLab que permite monitorear
                            los
                            procesos desde la recepción de la muestra hasta la entrega del resultado, estos procesos
                            incluyen:
                        </p>
                    </div>
                    <div class="col-12 col-md-6">
                        <ul>
                            <li>
                                Extracción de ácidos nucleicos (ADN y ARN)
                            <li>
                                Preparación de librerías de ADN
                            </li>
                            <li>
                                Secuenciación NGS, con el sistema de muy alto desempeño NovaSeq 6000, Illumina®
                            </li>
                            <li>
                                Bioinformática automatizada
                            </li>
                            <li>
                                Bioinformática clínica: análisis biológico y clínico empelando la plataforma Abracadabra®,
                                que a
                                través de Inteligencia Artificial analiza las variantes genéticas encontradas en las
                                muestras y
                                las categoriza según su relevancia clínica (de benignas a patogénicas) para ayudar a la
                                realización de los análisis genéticos otorgando una mayor precisión y eficiencia.
                            </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-img text-center">
            <img class="right-img" :src="`${assets}/tecnologia-ultima-generacion.png`" alt="">
        </div>
    </section>
</template>
<style scoped>
.right-img {
    max-height: 100%;
    max-width: 100%;
    margin: auto;
}

@media (min-width: 992px) {
    .right-img {
        position: absolute;
        height: auto;
        left: 0%;
        bottom: 0%;
        margin: auto;
        margin-left: -144px;
    }
}</style>