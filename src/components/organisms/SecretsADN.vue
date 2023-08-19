<script setup>
import Hex from '@molecules/Hex.vue';

const items = [
  {
    backImg: "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing/Polygon4co-15082023.png",
    title: "Prueba de Genoma Completo",
    description: "El análisis del Genoma mediante secuenciación (NGS) está indicado en enfermedades con síntomas graves, pero con un fenotipo poco claro o atípico."
  },
  {
    backImg: "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing/Polygon5co-15082023.png",
    title: "Prueba de Exoma Completo",
    description: "Prueba de diagnóstico genético que se realiza para detectar cambios en el ADN en aproximadamente 20.000 genes del genoma humano."
  },
  {
    backImg: "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing/Polygon3co-15082023.png",
    title: "Prueba para cáncer hereditario",
    description: "La detección de mutaciones a partir de una muestra de sangre permite establecer conductas clínicas de prevención personal / familiar del cáncer, a mejorar abordajes terapéuticos y a cambiar historia natural de muchas neoplasias."
  },
  {
    backImg: "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing/Polygon2co-15082023.png",
    title: "Prueba de Exoma Clínico",
    description: "Es un panel que evalúa la presencia de variantes clínicamente relevantes en genes previamente relacionados a enfermedades."
  }
]

</script>

<template>
  <section id="secretsADN" class="py-4">
    <div class="container-sura">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">
          <img src="https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing/co-15082023.svg" alt="Descubrir los secretos del ADN para anticiparnos a LA ENFERMEDAD En nuestro portafolio puedes encontrar soluciones a diferentes patologías de sospecha genética:">
        </div>
        <div class="col-12 col-sm-10 col-md-6 text-center">
          <Hex :allHex="items"></Hex>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #secretsADN {
    background: rgb(0,48,87);
    background: linear-gradient(180deg, rgba(0,48,87,1) 83%, rgba(255,255,255,1) 83%);
  }
  @media (min-width: 768px) {
      #secretsADN {
        background: rgb(0,48,87);
        background: linear-gradient(180deg,  rgba(255,255,255,1) 17%, rgba(0,48,87,1) 17%, rgba(0,48,87,1) 83%, rgba(255,255,255,1) 83%);
      }
  }
</style>
