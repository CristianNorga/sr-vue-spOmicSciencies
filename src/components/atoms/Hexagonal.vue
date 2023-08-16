<script setup>

defineProps({
  backImg: {
    type: String,
    default: "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing/Polygon4co-15082023.png"
  },
  title: {
    type: String,
    default: "Prueba de Genoma Completo"
  },
  description: {
    type: String,
    default: "El análisis del Genoma mediante secuenciación (NGS) está indicado en enfermedades con síntomas graves, pero con un fenotipo poco claro o atípico."
  }
})

// const count = ref(0)
</script>

<template>
  <div class="hexagonal" :style="{'background-image': 'url('+backImg+')'}">
    <div class="content">
      <h6>{{ title }}</h6>
    </div>
  </div>
</template>

