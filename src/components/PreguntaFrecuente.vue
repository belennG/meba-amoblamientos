<template>
  <div>
    <div
      @click="showAnswer = !showAnswer"
      class="h-auto w-auto pregunta-frecuente bg-red-500 hover:underline mb-8"
    >
      <h2>{{ pregunta }}</h2>
      <!-- <i class="far fa-plus-square"></i>
          <i class="far fa-minus-square"></i> -->
      <div class="h-auto w-30 respuesta bg-blue-500" v-if="showAnswer">
        <p>{{ respuesta }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    pregunta: {
      type: String,
    },
    respuesta: {
      type: String,
    },
  },
});
</script>

<style scoped></style>
