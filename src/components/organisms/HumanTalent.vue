<script setup>
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import CardDown from '@molecules/CardDown.vue';

const items = [
  {
    backImg: "https://image.dummyjson.com/420x330",
    title: "Equipo técnico administrativo",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    backImg: "https://image.dummyjson.com/420x330",
    title: "Equipo médico",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    backImg: "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing/209equipo-bioinformatica-clinica-19082023.png",
    title: "Equipo de bioinformática clínica",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    backImg: "https://image.dummyjson.com/420x330",
    title: "Equipo laboratorio de genómica",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    backImg: "https://image.dummyjson.com/420x330",
    title: "Equipo Staff genética",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    backImg: "https://image.dummyjson.com/420x330",
    title: "Equipo de analítica e IA aplicada",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    backImg: "https://image.dummyjson.com/420x330",
    title: "Equipo de analítica e IA aplicada",
    description: "o Juan Pablo Valencia. Director de analítica e inteligencia artificial, biociencias. o Catalina Bustamante. Líder TI. o Danny Styvens Cardona. Especialista de inteligencia artificial aplicada, biociencias. o Juan Pablo Gallo. Analista de analítica en biociencias. o Jaime Alexander Castañeda. Analista gestión de información y estadística biociencias."
  }
]
let swiperCtrl;

const onSwiper = (newSwiper) => {
  swiperCtrl = newSwiper;
};

</script>

<template>
  <section id="humanTalent" class="py-5">
    <div class="container-sura">
      <h2 class="indicative">Talento humano</h2>
      <div class="row text-custom-gray h-100">
        <div class="col-12 col-md-6">
            <p pb-3>
                Expertos en medicina genómica que ponen su conocimiento al servicio de la transformación en la gestión del riesgo en salud.
            </p>
        </div>
        <div class="col-12">
            <div class="container-swiper">
              <swiper
                :slidesPerView="1.3"
                :spaceBetween="20"
                :autoplay="{
                  delay: 3000,
                  disableOnInteraction: false,
                }"
                :loop="true"
                :modules="[Autoplay]"
                @swiper="onSwiper"
                :controller="{ control: swiperCtrl }"
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
                class="swiper"
              >
                <swiper-slide v-for="(item, index) in items" :key="index"><CardDown :props="item"/></swiper-slide>
              </swiper>
              <div class="swiper-button-prev" @click="swiperCtrl.slidePrev()"></div>
              <div class="swiper-button-next" @click="swiperCtrl.slideNext()"></div>
            </div>
        </div>
        <div class="col-12 d-flex justify-content-center pt-5">
          <a class="all-team" href="http://" target="_blank" rel="noopener noreferrer">Conoce más del perfil de nuestro equipo</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#humanTalent{
  margin-top: -20px;
  .all-team {
    font-family: Barlow Condensed;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    text-decoration: none;

    padding-bottom: 3px;
    border-bottom: 1px solid #003057;

    position: relative;

    color: #000;
  }
}
.container-swiper {
  position: relative;
  display: flex;
  justify-content: center;
  .swiper {
    width: 100%;
    .swiper-slide {
      width: calc(100% - 64px);
    }
  }
  .swiper-button-prev {
    background: url("https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing/Polygon10co-19082023-arrow-lef.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    left: 0px;
  }
  .swiper-button-next {
    background: url("https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing/Polygon11co-19082023-arrow-right.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    right: 0px;
  }
  .swiper-button-prev, .swiper-button-next{
    transition: filter 0.3s;
    width: 16px;
    height: 16px;
    border: 0;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;

    display: none;
    cursor: pointer;
    &:hover {
      filter: opacity(0.89);
    }
  }
}

@media (min-width: 768px) {
  #humanTalent{
    margin-top: -80px;
  }
  .container-swiper {
    .swiper {
      width: 90%;
    }
    .swiper-button-prev, .swiper-button-next{
      display: flex;
    }
  }
  
}

</style>
