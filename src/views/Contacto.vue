<template>
  <div class="h-auto">
    <BackgroundPhoto>
      <div class="wrapper grid grid-cols-1 lg:grid-cols-2 lg:py-5 ">
        <div class="formulario-contacto-wrapper col-span-1">
          <div class="px-2 lg:px-10 lg:py-6 w-full">
            <h1 class="text-center">Envíenos su consulta</h1>
            <p class="text-center">
              Estamos para responder todas sus dudas. Complete el formulario y
              contestaremos a la brevedad.
            </p>
            <form @submit.prevent="sendEmail" class="text-center py-5">
              <p>Nombre:</p>
              <input
                required
                type="text"
                name="name"
                id=""
                class="border-2 rounded w-auto inline-block"
              />
              <p>Email:</p>
              <input
                required
                type="email"
                name="email"
                id=""
                class="border-2 rounded w-auto inline-block"
              />
              <p>Teléfono:</p>
              <input
                required
                type="tel"
                name="telephone"
                id=""
                class="border-2 rounded w-auto inline-block"
              />
              <p>Su consulta:</p>
              <textarea
                required
                name="message"
                id="message"
                cols="30"
                rows="10"
                class="border-2 rounded w-auto"
              ></textarea>
              <input
                type="submit"
                class="bg-blue-500 block text-white px-4 py-2 rounded-lg  mx-auto"
                value="Enviar"
              />
            </form>
          </div>
        </div>
        <div class="col-span-1 h-full hidden lg:inline lg:py-5">
          <h1 class="text-center underline">Preguntas frecuentes</h1>
          <VueFaqAccordion :items="faqs" />
        </div>
      </div>
    </BackgroundPhoto>
    <BackgroundPhoto class="md:hidden">
      <div class="col-span-1 h-full px-1 pt-2 pb-16">
        <h1 class="text-center underline">Preguntas frecuentes</h1>
        <VueFaqAccordion :items="faqs" class="text-sm"></VueFaqAccordion>
      </div>
    </BackgroundPhoto>
  </div>
</template>

<script>
import Vue from "vue";
import BackgroundPhoto from "@/components/BackgroundPhoto.vue";
import VueFaqAccordion from "vue-faq-accordion";
import emailjs from "emailjs-com";

export default Vue.extend({
  name: "ContactUs",
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_na3yd6p",
          "template_xg9n5nj",
          e.target,
          "user_zLXrRbebfxGQ1U9EAVr1p",
          {
            name: this.name,
            email: this.email,
            telephone: this.telephone,
            message: this.message,
          }
        );
        console.log("Works");
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.telephone = "";
      this.message = "";
    },
  },
  data() {
    return {
      name: "",
      email: "",
      telephone: "",
      message: "",
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

<style scoped></style>
