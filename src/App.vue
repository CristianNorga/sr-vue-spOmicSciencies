<script setup>
import { provide, onMounted } from 'vue'

import SecretsADN from '@organisms/SecretsADN.vue';
import Header from '@organisms/Header.vue';
import Banner from '@organisms/Banner.vue';
import Tecnologias from '@organisms/Tecnologias.vue';
import CienciaInnovacion from '@organisms/CienciaInnovacion.vue';
import ComunicateNostros from '@organisms/ComunicateNostros.vue';
import Footer from '@organisms/Footer.vue';
import HumanTalent from '@organisms/HumanTalent.vue';
import WhoWeAre from '@organisms/WhoWeAre.vue';
import loader from './utils/loader';

const URL_ASSETS_SHAREPOINT = 'https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing';
provide('assets', URL_ASSETS_SHAREPOINT)

onMounted(() => {
  loader.finishLoad();
})

</script>

<template>
  <Header/>
  <Banner/>
  <WhoWeAre/>
  <CienciaInnovacion/>
  <Tecnologias/>
  <SecretsADN/>
  <HumanTalent/>
  <ComunicateNostros/>
  <Footer/>
</template>

<style scoped>

</style>
