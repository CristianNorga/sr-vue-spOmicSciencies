<script setup>
import { ref } from 'vue';

import Hex from '@molecules/Hex.vue';

const isOpen = ref(false)

const toogleButton = () => {
  isOpen.value = !isOpen.value;
}

</script>

<template>
  <div class="card" :open="isOpen">
    <img src="https://image.dummyjson.com/180x140" class="card-img-top" alt="...">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button @click="toogleButton" class="toogle-content text-center mx-auto">{{isOpen ? 'Ver menos -' : 'Conócelo +'}}</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .card {
    min-width: 180px;
    letter-spacing: 0em;
    font-family: Barlow Condensed;

    .card-img-top {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    .card-title {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      text-align: center;
      
      color: #00AEC7;
    }
    .card-text {
      transition: max-height 0.3s;
      max-height: 0px;
      margin: 0;
      overflow: hidden;

      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      text-align: left;

      color: #606060;
    }
    .toogle-content {
      color: #003057;
      border: 0;
      background-color: white;
      justify-self: end;
    }
    &[open=true] {
      .card-text {
        max-height: 320px;
      }
    }
  }
</style>
