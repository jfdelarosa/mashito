<template lang="pug">
  v-card
    v-card-title
      | Mis insumos
      v-spacer
      v-spacer
      v-text-field.ma-2(v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details)
      v-btn.ma-2(@click="agregar" color="success" depressed)
        v-icon(left) mdi-plus
        | Nuevo
    v-card-text
      v-data-table(:headers="headers" :items="items" :search="search" :items-per-page="10")
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
    headers: [
      { text: 'id', value: 'id', sortable: true },
      { text: 'Nombre', value: 'nombre', sortable: true },
      { text: 'Opciones', value: 'options', sortable: false },
    ],
    items: [
      {
        id: 1,
        nombre: 'Bomba agricola',
      },
      {
        id: 2,
        nombre: 'Fertilizante',
      },
      {
        id: 3,
        nombre: 'Machete',
      },
    ],
  }),
  methods: {
    agregar() {
      this.$router.push('/app/proveedor/insumo/agregar')
    },
    editar(id) {
      this.$router.push(`/app/proveedor/insumo/${id}`)
    },
    eliminar(id) {
      /**
       * Mostrar un modal para aceptar o cancelar la eliminación y hacer  o no la petición a firebase
       */
    },
  },
}
</script>
