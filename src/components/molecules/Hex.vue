<script setup>
import Hexagonal from '@atoms/Hexagonal.vue';

defineProps({
  allHex: {
    type: Array,
    default: [
      {
        backImg: "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing/Polygon4co-15082023.png",
        title: "Prueba de Genoma Completo",
        description: "El análisis del Genoma mediante secuenciación (NGS) está indicado en enfermedades con síntomas graves, pero con un fenotipo poco claro o atípico."
      }
    ]
  }
  
})

// const count = ref(0)
</script>

<template>
  <div class="group-hex position-relative d-flex">
    <div class="column-hex column-hex-1">
      <Hexagonal></Hexagonal>
      <Hexagonal></Hexagonal>
    </div>
    <div class="column-hex column-hex-2"></div>
  </div>
</template>

<style lang="scss">
.group-hex {
  .column-hex {
    width: 50%;
  }
}
</style>
