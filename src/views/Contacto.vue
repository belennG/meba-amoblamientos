<template>
  <div>
    <BackgroundPhoto>
      <div class="formulario-contacto-wrapper px-20 py-20">
        <div class="formulario-contacto border-2 px-10 py-10 box-content w-80">
          <h1>Envíenos su consulta</h1>
          <p>
            Estamos para responder todas sus dudas. Complete el formulario y
            contestaremos a la brevedad.
          </p>
          <form action="">
            <p>Nombre:</p>
            <input
              type="text"
              name="Nombre"
              id=""
              class="border-2 rounded w-auto"
            />
            <p>Email:</p>
            <input
              type="email"
              name="Email"
              id=""
              class="border-2 rounded w-auto"
            />
            <p>Teléfono:</p>
            <input
              type="tel"
              name="telefono"
              id=""
              class="border-2 rounded w-auto"
            />
            <p>Su consulta:</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="border-2 rounded w-auto"
            ></textarea>
            <button
              type="submit"
              class="block bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div class="preguntas-frecuentes">
        <PreguntaFrecuente
          v-bind:pregunta="faqs[0].pregunta"
          v-bind:respuesta="faqs[0].respuesta"
        />
        <PreguntaFrecuente />
      </div>
    </BackgroundPhoto>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BackgroundPhoto from "@/components/BackgroundPhoto.vue";
import PreguntaFrecuente from "@/components/PreguntaFrecuente.vue";

export default Vue.extend({
  data() {
    return {
      faqs: [
        { pregunta: "Trabajan en todo el pais?", respuesta: "Si" },
        {
          pregunta: "Estoy construyendo, cuando debo contactarlos?",
          respuesta: "Lo antes posible",
        },
      ],
      showAnswer: false,
    };
  },
  components: {
    BackgroundPhoto,
    PreguntaFrecuente,
  },
});
</script>

<style scoped></style>
