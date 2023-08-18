<script setup>
import Destino from "@img/CienciaEInnovacion/destino.svg";
import Genome from "@img/CienciaEInnovacion/genome.svg";
import Genetics from "@img/CienciaEInnovacion/genetics.svg";
import TestTube from "@img/CienciaEInnovacion/test-tube.svg";
import Atom from "@img/CienciaEInnovacion/atom.svg";
import Dropper from "@img/CienciaEInnovacion/dropper.svg";

</script>

<template lang="">
    <section class="bg-custom-gray">
        <div class="container-lg">
            <div class="row justify-content-between">
                <div class="col-12 col-md-6">
                    <h2 class="indicative">¿Qué hacemos?</h2>
                    <p>
                    Entregamos a nuestros clientes 
                    <span class="fw-bold">
                    resultados y modelos predictivos con
                    rapidez y alta precisión, que les permitan gestionar integralmente
                    el riesgo en salud de las personas.
                    </span>  
                    </p>
                </div>
                <div class="col-12 col-md-4 order-first order-md-last">
                    <div class="float-title text-end pb-4">
                        <h3 class="is-style-big fw-medium d-inline-block mb-0 lh-1">Ciencia e <span class="fw-bold">innovación</span>
                        <span class="d-block fst-italic">para retar el</span></h3>
                        <p class="masked-text text-end">
                            <span class="background-text">destino</span>
                            destino
                        </p>
                    </div>
                </div>
            </div>
            <p class="fw-bold align-">Contamos con servicios de:</p>
            <div class="mw-75">
                <div class="row justify-content-center text-center">
                    <div class="col-6 col-md-4">
                        <div class="pb-4">
                            <img :src="Genome" alt="">
                        </div>
                        <p><span class="text-custom-green"> Secuenciación de próxima generación (NGS): </span> informe diagnóstico genético en oncogenética y enfermedades huérfanas.</p>
                    </div>     
                    <div class="col-6 col-md-4">
                        <div class="pb-4">
                            <img :src="Dropper" alt="">
                        </div>
                        <p><span class="text-custom-green"> Secuenciación Sanger:o </span> mutaciones puntuales, expansión de tripletas.</p>
                    </div>     
                    <div class="col-6 col-md-4">
                        <div class="pb-4">
                            <img :src="Genetics" alt="">
                        </div>
                        <p><span class="text-custom-green"> MLPA: </span> duplicaciones o deleciones en genes de interés.</p>
                    </div>     
                    <div class="col-6 col-md-4">
                        <div class="pb-4">
                            <img :src="TestTube" alt="">
                        </div>
                        <p><span class="text-custom-green">MicroARRAYS </span> </p>
                    </div>     
                    <div class="col-6 col-md-4">
                        <div class="pb-4">
                            <img :src="Atom" alt="">
                        </div>
                        <p><span class="text-custom-green"> PRS (Polygenic Risk Score): </span> estimación de Riesgo Poligénico.</p>
                    </div>     
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

@media (min-width: 992px) {
    .float-title {
        margin-top: -25px;
    }
}
</style>
