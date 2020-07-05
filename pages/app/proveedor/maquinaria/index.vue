<template lang="pug">
  v-card
    v-card-title
      | Proveedor de maquinaria
      v-spacer
      v-spacer
      v-text-field.ma-2(v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details)
      v-btn.ma-2(@click="agregar" color="success" depressed)
        v-icon(left) mdi-plus
        | Nuevo
    v-card-text
      v-data-table(:headers="headers" :items="val" :search="search" :items-per-page="10" v-if="val")
        template(v-slot:item.options="{ item }")
          v-btn(@click="editar(item.id)" icon small)
            v-icon mdi-pencil
          v-btn(@click="eliminar(item.id)" icon small)
            v-icon mdi-delete
    
</template>

<script>
export default {
  layout: 'app',
  data: () => ({
    search: '',
    val: [],
    headers: [
      { text: 'id', value: 'maquinaria', sortable: true },
      { text: 'Tipo', value: 'tipo', sortable: true },
      { text: 'Modelo', value: 'modelo', sortable: false },
      { text: 'Costo', value: 'costo', sortable: false },
    ],
    items: null
  }),
  methods: {
    agregar() {
      this.$router.push('/app/proveedor/maquinaria/agregar')
    },
    editar(id) {
      this.$router.push(`/app/proveedor/maquinaria/${id}`)
    },
    eliminar(id) {
      /**
       * Mostrar un modal para aceptar o cancelar la eliminación y hacer  o no la petición a firebase
       */
    },
    getRealtimeData() {
      try {
        this.$fireDb.ref('maquinaria').on('value', (snapshot) => {
          this.val = snapshot.val()
          console.log(this.val)
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted(){
    this.getRealtimeData()
  }
}
</script>
