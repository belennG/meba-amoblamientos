<template>
  <div
    class="bg-isabelline h-64 w-full grid grid-cols-3 px-2 py-2 text-sm"
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
      <!-- <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="150"
            height="150"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Brandsen%20142,%20Bragado&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe
          ><a href="https://123movies-to.org"></a><br /><a
            href="https://www.embedgooglemap.net"
            >add google map to website</a
          >
        </div>
      </div> -->
      <iframe
        width="150"
        height="150"
        zoom="15"
        style="border:0"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJrYVt2SrcvpUR5CLVBNuS9Nc&key=AIzaSyA2K-vWkRjlLZh-dPefXpDFRL_wG-NFbj4"
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

<style>
/* .mapouter {
  position: relative;
  text-align: right;
  height: 150px;
  width: 150px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 150px;
  width: 150px;
} */
</style>
