<template>
    <BaseHeader></BaseHeader>
    <div v-for="producto in productos.data.value" @click="func(producto)" >
      <Producto :id="producto.id" :nombre="producto.nombre" :precio="producto.precio"></Producto>
    </div>
  </template>
<script setup>
// import productos from '../productos.json'
import {useListaProductos} from '../store/listaProductos'
const api = "http://localhost:2000/api/productos"
const productos = await useFetch(api)
const useLista = useListaProductos()
const func = (producto) => {
  useLista.count+=1
    
    if(useLista.items.find((p) => producto.id == p.id)){
      useLista.items.map((p)=>{
        if(p.id == producto.id){
          useLista.totalPrice += producto.precio
          p.cantidad++
          p.precioTotal+=producto.precio
        } 
      })
    }else{
      useLista.totalPrice += producto.precio
      useLista.items.push({...producto,cantidad:1,precioTotal:producto.precio})
    }  
    

}
</script>