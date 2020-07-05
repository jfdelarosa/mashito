<template lang="pug">
  div
    h1 Pagina para agregar
        v-form
            v-container
                v-row
                    v-col
                        v-text-field(label="Ubicación" prepend-icon="mdi-map-marker" v-model="ubicacion")
                    v-col
                        v-text-field(label="Hectareas" v-model="hectareas")
                v-row
                    v-col
                        v-select(:items="itemRiego" label="¿Tines sistema de riego?" v-model="riego")
                    v-col
                        v-select(:items="itemPreparado" label="¿El terreno está preparado para la siembra?" v-model="preparado")
            v-btn(@click="registrar()" color="success")
                v-icon(left) mdi-content-save
                | Guardar
</template>

<script>
export default {
  layout: 'app',
  data: () => ({
    ubicacion: '20.216230, -87.459087',
    hectareas: 1,
    riego: '',
    preparado: '',
    itemRiego: [
      'Si, el terreno ya cuenta con sistema de riego',
      'No, el terreno no cuenta con sistema de riego',
      'No, no se requiere de sistema de riego',
    ],
    itemPreparado: [
      'Si, el terreno se encuentra listo',
      'No, el terreno requiere preparación',
    ],
  }),
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    registrar() {
      console.log('Submit...')
      var gen = this.$fireDb
        .ref('usuarios/' + this.user.uid)
        .child('lotes')
        .push().key

      let updates = {}
      updates['usuarios/' + this.user.uid + '/lotes/' + gen] = {
        ubicacion: this.ubicacion,
        hectareas: this.hectareas,
        riego: this.riego,
        preparado: this.preparado,
      }
      this.$fireDb
        .ref()
        .update(updates)
        .then((response) => {
          console.log(response)
          this.$router.push('/app/cultivo/lotes')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
