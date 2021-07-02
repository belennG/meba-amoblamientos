<template>
  <div>
    <BackgroundPhoto>
      <h1>Envíenos su consulta</h1>
      <p>
        Estamos para responder todas sus dudas. Complete el formulario y
        contestaremos a la brevedad.
      </p>
      <form action="">
        <p>Nombre:</p>
        <input type="text" name="Nombre" id="" class="border-2 rounded w-2/6" />
        <p>Email:</p>
        <input type="email" name="Email" id="" class="border-2 rounded w-2/6" />
        <p>Teléfono:</p>
        <input
          type="tel"
          name="telefono"
          id=""
          class="border-2 rounded w-2/6"
        />
        <p>Su consulta:</p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="border-2 rounded w-2/6"
        ></textarea>
        <button
          type="submit"
          class="block bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Enviar
        </button>
      </form>
    </BackgroundPhoto>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BackgroundPhoto from "@/components/BackgroundPhoto.vue";

export default Vue.extend({
  components: {
    BackgroundPhoto,
  },
});
</script>

<style scoped></style>
