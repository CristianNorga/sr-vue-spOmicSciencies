<script setup>
import CardTextureADN from '@atoms/CardTextureADN.vue';

const items = [
  {
    title: "Genómica clínica",
    description: [
      "Generación de datos genómicos",
      "Diagnóstico genético"
    ]
  },
  {
    title: "Analítica e I+D",
    description: [
      "Caracterización de la población colombiana y latinoamericana a partir de datos genómicos e historia clínica.",
      "Creación de metodologías para modelar comportamiento a nivel genómico, de patologías o poblaciones.",
      "Desarrollo de soluciones estadísticas y de ciencia de datos para genómica poblacional, riesgo poligénico y farmacogenómica."
    ]
  },
  {
    title: "Modelos de atención basados en datos y analítica",
    description: [
      "Medicina personalizada",
      "Farmacogenómica",
      "Predicción del riesgo genómico"
    ]
  }
]

defineProps({
})

// const count = ref(0)
</script>

<template>
  <section id="humanTalent" class="py-4">
    <div class="container-sura">
      <h2 class="indicative justify-content-center">¿Quiénes somos?</h2>
      <div class="row text-custom-gray h-100 justify-content-center">
        <div class="col-12 col-md-8 pb-2">
            <p>
                Somos un centro de servicios de genómica clínica integrada a la analítica de datos, las ciencias ómicas, la medicina genómica y predictiva, para transformar la gestión del riesgo, entender y gestionar a las personas integralmente desde la salud.
            </p>
        </div>
        <div class="col-12 d-flex gap-3 justify-content-center flex-wrap">
          <div v-for="(item, index) in items" :key="index">
            <CardTextureADN :title="item.title" :description="item.description" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.swiper-button-prev, .swiper-button-next{
  display: none;
}
.swiper-slide {
  width: 80%;
}

@media (min-width: 768) {
  .swiper-button-prev, .swiper-button-next{
    display: flex;
  }
}

</style>
