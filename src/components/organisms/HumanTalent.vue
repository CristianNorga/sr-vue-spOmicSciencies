<script setup>
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import CardDown from '@molecules/CardDown.vue';

const items = [
  {
    backImg: "https://comunicaciones.segurossura.com.co/MercadeoComunicacionesExternas/RECURSOS/LANDINGS/th-04.png",
    title: "Equipo técnico administrativo",
    description: [
      "Leonel Andrés González Niño. Líder de ciencias ómicas.",
      "Carolina Jaramillo Jaramillo. Coordinadora unidad de genética.",
      "Harvy Mauricio Velasco Parra. Líder de medicina genómica y predictiva.",
    ]
  },
  {
    backImg: "https://comunicaciones.segurossura.com.co/MercadeoComunicacionesExternas/RECURSOS/LANDINGS/th_Mesa%20de%20trabajo%201.png",
    title: "Equipo médico",
    description: [
      "Derly Liseth Castro Rojas. Médico genetista.",
      "Jorge Hernán Montoya Villada. Médico genetista.",
      "María Carolina Manotas Ahumada. Médico genetista.",
      "Diana Carolina Grajales Ospina. Médico genetista.",
    ]
  },
  {
    backImg: "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing/209equipo-bioinformatica-clinica-19082023.png",
    title: "Equipo de bioinformática clínica",
    description: [
      "Carlos Andrés Carmona Agudelo. Profesional biología molecular.",
      "Richard Orlando Salazar Enríquez. Profesional biología molecular.",
      "Sebastián Gutiérrez Hincapié. Profesional biología molecular.",
      "Juliana Espinosa-Moncada. Profesional biología molecular.",
    ]
  },
  {
    backImg: "https://comunicaciones.segurossura.com.co/MercadeoComunicacionesExternas/RECURSOS/LANDINGS/th_Mesa%20de%20trabajo%201%20copia.png",
    title: "Equipo laboratorio de genómica",
    description: [
      "Marcela Gaviria Camino. Profesional biología molecular.",
      "John Fredy Cuervo Pérez. Profesional biología molecular.",
      "Andrés Felipe Castro Tobón. Profesional biología molecular.",
      "Paola Andrea Rozo Agudelo. Profesional biología 006Dolecular.",
    ]
  },
  {
    backImg: "https://comunicaciones.segurossura.com.co/MercadeoComunicacionesExternas/RECURSOS/LANDINGS/th-03.png",
    title: "Equipo Staff genética",
    description: [
      "Carolina Baquero. Consultor médico científico genetista.",
      "Alicia Cock.  Consultor médico científico genetista.",
      "Marco Arango. Consultor médico científico hematólogo.",
      "Maykos Leandro Zapata. Consultor médico científico oncólogo.",
      "Sara Manuela Gil. Médico patólogo.",
      "Estefani López Crespo. Asesora técnica laboratorio genómica y bioinformática clínica.",
      "Paola Puerta Ruiz. Asesora técnica laboratorio genómica y Bioinformática clínica.",
    ]
  },
  {
    backImg: "https://comunicaciones.segurossura.com.co/MercadeoComunicacionesExternas/RECURSOS/LANDINGS/th-05.png",
    title: "Equipo de analítica e IA aplicada",
    description: [
      "Juan Pablo Valencia. Director de analítica e inteligencia artificial, biociencias.",
      "Catalina Bustamante. Líder TI.",
      "Danny Styvens Cardona. Especialista de inteligencia artificial aplicada, biociencias.",
      "Juan Pablo Gallo. Analista de analítica en biociencias.",
      "Jaime Alexander Castañeda. Analista gestión de información y estadística biociencias.",
    ]
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
        <!-- :autoplay="{
                  delay: 3000,
                  disableOnInteraction: false,
                }" -->
        <div class="col-12">
            <div class="container-swiper">
              <swiper
                :slidesPerView="1.3"
                :spaceBetween="20"
                
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
          <a class="all-team" href="https://comunicaciones.segurossura.com.co/MercadeoComunicacionesExternas/RECURSOS/LANDINGS/talento-humano.pdf" target="_blank" rel="noopener noreferrer">Conoce más del perfil de nuestro equipo</a>
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
