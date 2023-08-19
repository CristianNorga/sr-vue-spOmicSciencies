<script setup>
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CardDown from '@molecules/CardDown.vue';

defineProps({
})

// const count = ref(0)
</script>

<template>
  <section id="humanTalent" class="py-4">
    <div class="container-lg">
      <h2 class="indicative">Talento humano</h2>
      <div class="row text-custom-gray h-100">
        <div class="col-12 col-md-6">
            <p>
                Expertos en medicina genómica que ponen su conocimiento al servicio de la transformación en la gestión del riesgo en salud.
            </p>
        </div>
        <div class="col-12">
          <!-- :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
              }" -->
            <swiper
              :slidesPerView="1.3"
              :spaceBetween="20"
              :loop="true"
              :navigation="true"
              :modules="[Navigation, Autoplay]"
              
              :breakpoints="{
                '576': {
                  slidesPerView: 2.4,
                  spaceBetween: 30,
                },
                '768': {
                  slidesPerView: 3.5,
                },
                '992': {
                  slidesPerView: 4,
                },
              }"
              class="mySwiper"
            >
              <swiper-slide><CardDown/></swiper-slide>
              <swiper-slide><CardDown/></swiper-slide>
              <swiper-slide><CardDown/></swiper-slide>
              <swiper-slide><CardDown/></swiper-slide>
              <swiper-slide><CardDown/></swiper-slide>
              <swiper-slide><CardDown/></swiper-slide>
              <swiper-slide><CardDown/></swiper-slide>
              <swiper-slide><CardDown/></swiper-slide>
              <swiper-slide><CardDown/></swiper-slide>
            </swiper>
            
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
