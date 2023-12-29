<template>
    <div class="q-pa-md row items-start q-gutter-md" style="width: 250px;float: left;">
    <q-card class="my-card" >
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-h6">
          {{ nombre }}
        </div>
      </q-img>

      <q-card-section >
        Precio: {{ precio }}
      </q-card-section>
      <q-btn push color="primary" round icon="card_giftcard"  @click="agregar" />
    </q-card>
  </div>
</template>
<script setup>
   defineProps({
    nombre: String,
    precio: Number,
    agregar: Function
   })
</script>
<style scoped>
.my-card{
    width: 100%;
    max-width: 400px;
}
</style>