<template lang="pug">
  v-card
    v-card-title Editando el item {{id}}
    v-card-text *Formulario*
</template>

<script>
export default {
  layout: 'app',
  computed: {
    id() {
      return this.$route.params.id
    },
  },
  methods: {
    obtenerInsumo(id) {
      /*
        Acá va la petición a firebase usando el parametro id
      */
    },
  },
  mounted() {
    this.obtenerInsumo(this.id)
  },
}
</script>
