<script setup>
defineProps({
  title: {
    type: String,
    default: "Genómica clínica"
  },
  description: {
    type: Array,
    default: [
      "Generación de datos genómicos",
      "Diagnóstico genético"
    ]
  }
})

</script>

<template>
  <div class="card-texture-adn">
    <h5 class="title">{{ title }}</h5>
    <div class="content">
      <ul>
        <li v-for="point in description">{{point}}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.card-texture-adn {
  width: 256px;
  min-height: 96px;
  padding: 14px 20px 14px 30px;
  background-image: url("https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Web_y-o_landing/textureadn-co-18082023205asd.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #fff;
  .title {
    font-family: Barlow Condensed;
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  .content {
    transition: max-height 0.3s;
    max-height: 0px;
    overflow: hidden;

    font-family: Barlow Condensed;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;

    li::before {
      content: "•";
      font-size: 20px;
      color: #fff;
      font-weight: bold;
      display: inline-block;
      margin-left: 0 rem;
      margin-right: 5px;
    }
  }
  &:hover {
    .content {
      max-height: 300px;
    }
  }
}

</style>
