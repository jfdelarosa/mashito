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
    items: null,
  }),
  computed: {
    user() {
      return this.$store.state.user
    },
  },
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
      this.val = []
      try {
        this.$fireDb
          .ref('usuarios/' + this.user.uid + '/maquinaria')
          .on('value', (snapshot) => {
            const valores = snapshot.val()
            for (const key in valores) {
              this.val.push(valores[key])
            }
          })
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.getRealtimeData()
    console.log(this.user)
  },
}
</script>
