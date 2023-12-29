export const useListaProductos = defineStore('lista', {
    state: () => ({ count: 0, name: 'Eduardo' ,items:[],totalPrice: 0}),
    actions: {
      increment() {
        this.count++
      }
    }
  }
)