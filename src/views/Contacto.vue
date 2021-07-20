<template>
  <div class="height">
    <BackgroundPhoto>
      <div class="wrapper flex">
        <div class="formulario-contacto-wrapper px-16 py-16 top-20 relative">
          <div class="formulario-contacto border-2  box-content w-80">
            <h1>Envíenos su consulta</h1>
            <p>
              Estamos para responder todas sus dudas. Complete el formulario y
              contestaremos a la brevedad.
            </p>
            <form action="">
              <p>Nombre:</p>
              <input
                required
                type="text"
                name="Nombre"
                id=""
                class="border-2 rounded w-auto"
              />
              <p>Email:</p>
              <input
                required
                type="email"
                name="Email"
                id=""
                class="border-2 rounded w-auto"
              />
              <p>Teléfono:</p>
              <input
                required
                type="tel"
                name="telefono"
                id=""
                class="border-2 rounded w-auto"
              />
              <p>Su consulta:</p>
              <textarea
                required
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
        <div class="preguntas-frecuentes-wrapper flex">
          <div
            class="preguntas-frecuentes w-3/4 flex-col inline mt-24"
            v-for="faq in faqs"
            :key="faq.id"
            @click="faq.showAnswer = !faq.showAnswer"
            v-click-outside="(faq.showAnswer = false)"
          >
            <div
              class="h-12 w-1/3 pregunta-frecuente bg-red-500 hover:underline mb-8 z-40 inline"
            >
              <div class="faq-wrapper">
                <h2>{{ faq.pregunta }}</h2>
                <!-- <i class="far fa-plus-square"></i>
                <i class="far fa-minus-square"></i> -->
                <div
                  class="h-auto w-30 respuesta bg-blue-500"
                  v-if="faq.showAnswer"
                >
                  <p>{{ faq.respuesta }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundPhoto>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BackgroundPhoto from "@/components/BackgroundPhoto.vue";
// import PreguntaFrecuente from "@/components/PreguntaFrecuente.vue";

export default Vue.extend({
  data() {
    return {
      faqs: [
        {
          id: 1,
          pregunta: "Trabajan en todo el pais?",
          respuesta:
            "Si. Nuestra empresa tiene presencia en todas las provincias. Así que no se preocupe, llegaremos allí donde lo necesite",
          showAnswer: false,
        },
        {
          id: 2,
          pregunta: "Estoy construyendo, cuando debo contactarlos?",
          respuesta: "Lo antes posible",
          showAnswer: false,
        },
        {
          id: 3,
          pregunta: "Puedo ver el proyecto antes de contratarlo?",
          respuesta:
            "Por supuesto. Nuestra oficina de diseño le enviará material para que ud. elija el diseño que más le guste.",
          showAnswer: false,
        },
        {
          id: 4,
          pregunta: "Puedo acceder a bonificaciones?",
          respuesta:
            "Consúltenos. Tenemos convenios con varios Colegios de Farmacéuticos de todo el país que también incluyen descuentos.",
          showAnswer: false,
        },
        {
          id: 5,
          pregunta: "Puedo agregar amoblamientos a los existentes?",
          respuesta:
            "Si, es posible. Pensaremos alternativas para optimizar los espacios y lograr la máxima funcionalidad entre lo existente y nuestra propuesta. Solo tiene que llamarnos e iremos a visitarlo.",
          showAnswer: false,
        },
        {
          id: 6,
          pregunta: "No puedo cerrar. Como podemos hacer?",
          respuesta:
            "Confíe en nosotros. Sabemos hacerlo. Trabajaremos sin interferir en su trabajo.",
          showAnswer: false,
        },
        {
          id: 7,
          pregunta: "Pueden visitarme antes de concretar?",
          respuesta:
            "Para nosotros será un placer conocerlo. Recuerde que tenemos presencia en todo el país. Llámenos.",
          showAnswer: false,
        },
      ],
    };
  },
  components: {
    BackgroundPhoto,
    // PreguntaFrecuente,
  },
});
</script>

<style scoped>
.height {
  height: calc(100vh - 104px);
}
</style>
