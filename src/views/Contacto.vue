<template>
  <div class="height relative" style="margin-top:80px">
    <BackgroundPhoto>
      <div class="wrapper flex">
        <div
          class="formulario-contacto-wrapper mx-48 my-16 relative w-1/2 float-right"
        >
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
        <div class="faqs w-1/2 relative float-left px-12 py-12">
          <VueFaqAccordion :items="faqs" />
        </div>
        <!-- <div class="preguntas-frecuentes-wrapper flex">
          <div
            class="preguntas-frecuentes w-3/4 flex-col inline mt-24"
            v-for="faq in faqs"
            :key="faq.id"
            @click="faq.showAnswer = !faq.showAnswer"
          >
            <div
              class="h-12 w-1/3 pregunta-frecuente bg-red-500 hover:underline mb-8 z-40 inline"
            >
              <div class="faq-wrapper">
                <h2>{{ faq.pregunta }}</h2>
                <i class="far fa-plus-square"></i>
                <i class="far fa-minus-square"></i>
                <div
                  class="h-auto w-30 respuesta bg-blue-500"
                  v-if="faq.showAnswer"
                >
                  <p>{{ faq.respuesta }}</p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </BackgroundPhoto>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BackgroundPhoto from "@/components/BackgroundPhoto.vue";
import VueFaqAccordion from "vue-faq-accordion";
// import PreguntaFrecuente from "@/components/PreguntaFrecuente.vue";

export default Vue.extend({
  data() {
    return {
      props: {
        faqs: {
          type: Array,
          required: true,
        },
        question: {
          type: String,
          default: "title",
        },
        answer: {
          type: String,
          default: "answer",
        },
      },
      faqs: [
        {
          id: 1,
          title: "Trabajan en todo el pais?",
          value:
            "Si. Nuestra empresa tiene presencia en todas las provincias. Así que no se preocupe, llegaremos allí donde lo necesite",
          // showAnswer: false,
        },
        {
          id: 2,
          title: "Estoy construyendo, cuando debo contactarlos?",
          value: "Lo antes posible",
          // showAnswer: false,
        },
        {
          id: 3,
          title: "Puedo ver el proyecto antes de contratarlo?",
          value:
            "Por supuesto. Nuestra oficina de diseño le enviará material para que ud. elija el diseño que más le guste.",
          // showAnswer: false,
        },
        {
          id: 4,
          title: "Puedo acceder a bonificaciones?",
          value:
            "Consúltenos. Tenemos convenios con varios Colegios de Farmacéuticos de todo el país que también incluyen descuentos.",
          // showAnswer: false,
        },
        {
          id: 5,
          title: "Puedo agregar amoblamientos a los existentes?",
          value:
            "Si, es posible. Pensaremos alternativas para optimizar los espacios y lograr la máxima funcionalidad entre lo existente y nuestra propuesta. Solo tiene que llamarnos e iremos a visitarlo.",
          // showAnswer: false,
        },
        {
          id: 6,
          title: "No puedo cerrar. Como podemos hacer?",
          value:
            "Confíe en nosotros. Sabemos hacerlo. Trabajaremos sin interferir en su trabajo.",
          // showAnswer: false,
        },
        {
          id: 7,
          title: "Pueden visitarme antes de concretar?",
          value:
            "Para nosotros será un placer conocerlo. Recuerde que tenemos presencia en todo el país. Llámenos.",
          // showAnswer: false,
        },
      ],
    };
  },
  components: {
    BackgroundPhoto,
    VueFaqAccordion,
    // PreguntaFrecuente,
  },
  /**
   * Color for hover and active tab/question
   * possible format: 'red', '#F00', 'rgba(255, 0, 0, 1)'
   */
  activeColor: {
    type: String,
    default: "#D50000",
  },

  /**
   * Color for borders
   */
  borderColor: {
    type: String,
    default: "#9E9E9E",
  },

  /**
   * Color for fonts
   */
  fontColor: {
    type: String,
    default: "#000000",
  },

  /**
   * Opened by default tabName (category)
   */
  initialTab: {
    type: String,
    default: null,
  },

  /**
   * Opened by default question
   * All closed by default
   */
  initialQuestionIndex: {
    type: Number,
    default: null,
  },
});
</script>

<style scoped>
/* .height {
  height: calc(100vh - 104px);
} */
</style>
