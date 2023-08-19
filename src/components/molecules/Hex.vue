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

</script>

<template>
  <div class="group-hex position-relative d-flex">
    <div class="column-hex column-hex-1 d-flex flex-column gap-2">
      <Hexagonal :props="allHex[0]"></Hexagonal>
      <Hexagonal :props="allHex[3]"></Hexagonal>
    </div>
    <div class="column-hex column-hex-2 d-flex flex-column gap-2">
      <Hexagonal :props="allHex[1]"></Hexagonal>
      <Hexagonal :props="allHex[2]"></Hexagonal>
    </div>
  </div>
</template>

<style lang="scss">
.group-hex {
  .column-hex {
    width: 50%;
  }
  .column-hex-2 {
    position: relative;
    padding-top: 23%;
    left: -10%;;
  }
}
</style>
