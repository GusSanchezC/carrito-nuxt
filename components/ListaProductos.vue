<template>
    <q-dialog>
      <q-card >
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Carrito</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <div>
          <q-table
          :rows="useLista.items"
          :columns="columns"
          row-key="nombre"
        >
        <template v-slot:body-cell-product="props">
                <q-td :props="props">
                    <div>
                        <img :src="props.row.image" style="width: 100px;">
                    </div>
                </q-td>
        </template>
        <template v-slot:body-cell-eliminar="props">
        <q-tr :props="props">
          <q-td>
            <q-btn round color="deep-orange" icon="remove" @click="del(props.row)"/>
          </q-td>
        </q-tr>
      </template>
          </q-table>
        
  </div> 
      </q-card>
    </q-dialog>
</template>
<script setup>
  import {useListaProductos} from '../store/listaProductos'
  const columns =[
    {name: 'product',label: 'Productos',aling: 'center',field:'image'},
    {name: 'nombre', required: true,label: 'Nombre',aling: 'center',field:'nombre'},
    {name: 'precio', label: 'Precio',aling: 'center',field:'precio'},
    {name: 'cantidad', label: 'Cantidad',aling: 'center',field:'cantidad'},
    {name: 'precioTotal', label: 'Precio Total',aling: 'center',field:'precioTotal'},
    {name: 'eliminar', label: 'Eliminar',aling: 'right',field:'eliminar'}
  ]
  const useLista = useListaProductos()
  const rows = ref(useLista.items)
  function del(producto){
    useLista.count--
    if(useLista.items.find((p) => p.id == producto.id)){
      console.log('a')
      if(producto.cantidad > 1){
        useLista.totalPrice-=producto.precio
        producto.cantidad--
        producto.precioTotal -= producto.precio
      }else {
        useLista.items = useLista.items.filter((p) => p.cantidad > 1)
        useLista.totalPrice-=producto.precio

      }
    } 
    console.log(useLista.items)
    console.log(rows.value)
  }
</script>