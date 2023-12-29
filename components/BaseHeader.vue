<template>
    <header>
        <div class="q-pa-md">
            <q-toolbar class="bg-primary text-white q-my-md shadow-2">
            <q-btn flat round dense icon="menu" class="q-mr-sm"/>
            <MenuUsuario></MenuUsuario>
            <q-separator dark vertical inset />


            <q-space />


            <q-separator dark vertical />
            <q-btn stretch flat icon="shopping_cart" @click="icon = true">{{ useCount.count }}</q-btn>
            </q-toolbar>
            <ListaProductos v-model="icon" ></ListaProductos>
        </div>
    </header>
</template>
<script setup>
import {useListaProductos} from '../store/listaProductos'
import { ref } from 'vue'
const icon = ref(false)
const useCount = useListaProductos()
</script>
