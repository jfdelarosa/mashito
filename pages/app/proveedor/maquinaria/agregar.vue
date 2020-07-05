<template lang="pug">
  div
    h1 Pagina agregar
    v-form()
        v-container
            v-row
                v-col
                  v-text-field(label="maquinaria" v-model="maquinaria")
                v-col
                  v-select(:items="items" label="tipo" v-model="tipo")
            v-row
                v-col
                  v-select(:items="itemsMarcas" label="modelo" v-model="modelo")
                v-col
                    v-text-field(label="costo por hectarea" v-model="costo")
        v-btn(@click="registrar()" color="success")
            v-icon(left) mdi-content-save
            | Guardar
</template>

<script>
export default {
  layout: 'app',
  data: () => ({
    maquinaria: '',
    tipo: '',
    modelo: '',
    costo: '',
    items: [
      'Abonadora',
      'Arado',
      'Arado cincel',
      'Excavadora',
      'Cortadora de césped',
      'Cosechadora',
      'Consechadora de algodón',
      'Cocechadora de cereales',
      'Cosechadora de forraje',
      'Cosechadora de remolacha',
      'Cultivador',
      'Descompactador',
      'Desmontadora de algodón',
      'Desbrozadora de motoguadaña',
      'Desgranadora',
      'Desvaradora',
      'Empacadora',
      'Fumigadora',
      'Rastra de dientes',
      'Motocultor',
      'Motor para riego',
      'Plataforma de recogida de frutas',
      'Pulverizadora',
      'Remolque',
      'Rodillo',
      'Rotocultor',
      'Secadora de granos',
      'Segadora',
      'Sembradora',
      'Subsolador',
      'Tractor',
      'Moledora',
      'Vendimiadora',
      'Vibrocultivador',
    ],
    itemsMarcas: [
      'Kubota',
      'John Deere AR',
      'Fendt',
      'Massey Ferguson',
      'Deutz',
      'New Holland',
      'Case',
      'Valtra',
      'Claas',
      'Lamborghini',
      'Ford',
      'Lanz Bulldog',
      'Otro',
    ],
  }),
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    registrar() {
      console.log('Submit...')

      //var gen = this.getRandomArbitrary(1,9999)
      var gen = this.$fireDb
        .ref('usuarios/' + this.user.uid)
        .child('maquinaria')
        .push().key
      /** */

      let updates = {}

      updates['usuarios/' + this.user.uid + '/maquinaria/' + gen] = {
        maquinaria: this.maquinaria,
        tipo: this.tipo,
        modelo: this.modelo,
        costo: this.costo,
      }
      this.$fireDb
        .ref()
        .update(updates)
        .then((response) => {
          console.log(response)
          this.$router.push('/app/proveedor/maquinaria')
        })
        .catch((error) => {
          console.log(error)
        })
      /**/
      console.log(this.maquinaria)
      console.log(gen)
      console.log(this.user)
    },
  },
  mounted() {
    console.log(this.user)
  },
}
</script>
