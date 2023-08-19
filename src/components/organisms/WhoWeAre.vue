<script setup>
import CardTextureADN from '@atoms/CardTextureADN.vue';

defineProps({
})

// const count = ref(0)
</script>

<template>
  <section id="humanTalent" class="py-4">
    <div class="container-lg">
      <h2 class="indicative">¿Quiénes somos?</h2>
      <div class="row text-custom-gray h-100">
        <div class="col-12 col-md-6">
            <p>
                Somos un centro de servicios de genómica clínica integrada a la analítica de datos, las ciencias ómicas, la medicina genómica y predictiva, para transformar la gestión del riesgo, entender y gestionar a las personas integralmente desde la salud.
            </p>
        </div>
        <div class="col-12">

          <CardTextureADN/>
            
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
