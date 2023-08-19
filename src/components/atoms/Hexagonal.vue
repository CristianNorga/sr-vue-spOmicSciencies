<script setup>

defineProps({
  props: {
    type: Object,
    default: {
      backImg: "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing/Polygon4co-15082023.png",
      title: "Prueba de Genoma Completo",
      description: "El análisis del Genoma mediante secuenciación (NGS) está indicado en enfermedades con síntomas graves, pero con un fenotipo poco claro o atípico."
    }
  },
})

</script>

<template>
  <div class="hexagonal" :style="{'background-image': 'url('+props.backImg+')'}">
    <div class="content d-flex flex-column scroll-makeup">
      <h6>{{ props.title }}</h6>
      <div class="content-dinamyc">
        <p>{{props.description}}</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.hexagonal {
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  aspect-ratio: 1.134;
  position: relative;
  .content {
    position: absolute;
    top: 9.448%;
    left: calc(50% + 0px);
    transform: translateX(-50%);
    flex-wrap: nowrap;
    justify-content: center;
    height: 78.171%;
    width: 58.267%;

    
    overflow-y: auto;

    text-align: center;
    color: #fff;
    h6 {
      font-size: 22px;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: 0em;
    }
    p {
      //styleName: bodycard_blanco;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
    }
    .content-dinamyc {
      transition: max-height 0.3s;
      max-height: 0px;
      overflow: hidden;
    }
  }
  // &::before {
  //   content: "";
  //   background-blend-mode: color-burn;
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   background: red;
  // }
  &:hover {
    cursor: pointer;
    .content {
      justify-content: start;
      .content-dinamyc {
        max-height: 100px;
        overflow: initial;
      }
    }
  }
}
</style>
