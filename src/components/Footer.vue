<template>
  <div
    class="bg-isabelline h-auto md:h-64 w-full grid grid-cols-1 md:grid-cols-3 px-2 py-2 text-xs md:text-sm"
    id="footer"
  >
    <div class="flex flex-col items-center py-2 ">
      <h1>CONTACTO</h1>
      <br />
      <div class="phones">
        <ul>
          <li>2342 423970 (Teléfono fijo)</li>
          <li>0351 2867538 (Córdoba)</li>
          <li>0223 6239859 (Mar del Plata)</li>
          <li>02346 15408639 (Todo el país)</li>
        </ul>
      </div>
      <br />
      <div class="email">
        <p>amoblamientosmeba@hotmail.com</p>
      </div>
    </div>
    <div class="flex flex-col items-center py-2 ">
      <h1>HORARIOS</h1>
      <br />
      <p>Lunes - Viernes 08:00 a 18:00</p>
      <p>Sábado: 08:00 a 13:00</p>
      <br />
      <div class="locations">
        <h1 class="text-center">OFICINAS</h1>
        <br />
        <p>Brandsen 142, Bragado 6640</p>
        <p>Umberto Illia 1342, Bragado 6640</p>
      </div>
    </div>
    <div
      class="flex flex-col items-center py-2
    "
    >
      <h1>AQUÍ ESTAMOS</h1>
      <br />
      <iframe
        width="150"
        height="150"
        zoom="15"
        style="border:0"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:EkJIdW1iZXJ0byBJbGxpYSAxMzQyLCBCcmFnYWRvLCBQcm92aW5jaWEgZGUgQnVlbm9zIEFpcmVzLCBBcmdlbnRpbmEiMRIvChQKEgnhWEql9d6-lRGkVQ2Jm6Q0ghC-CioUChIJbTZ-b4XevpURsB8N1VLyPBo&key=AIzaSyA2K-vWkRjlLZh-dPefXpDFRL_wG-NFbj4"
      ></iframe>
      <br />
    </div>
    <Copyright />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Copyright from "@/components/Copyright.vue";

export default Vue.extend({
  components: {
    Copyright,
  },
});
</script>

<style></style>
