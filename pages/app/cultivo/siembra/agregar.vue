<template lang="pug">
  div
    h1  Pagina para agregar
        v-form
            v-container
                v-row
                    v-col
                        v-text-field(label="Nombre" v-model="nombre")
                    v-col
                        v-select(:items="itemPlantacion" label="¿Qué va a sembrar?" v-model="plantacion")
                v-row
                    v-col
                        v-select(:items="itemsLotes" label="¿En dónde lo vas a sembrar?" v-model="lote")
                    v-col
                        v-select(:items="itemsMaquinaria" label="¿Qué tipo de maquinaria voy a usar?" v-model="maquinariauso")
                v-row
                    v-col
                        v-text-field(label="Presupuesto de proyecto" v-model="presupuesto")
                    v-col
                        v-select(:items="itemsInsumos" label="¿Qué insumos necesito para mi cultivo?" multiple v-model="insumoscultivo")
            v-btn(@click="registrar()" color="success")
                v-icon(left) mdi-content-save
                | Guardar
</template>

<script>
export default {
  layout: 'app',
  data: () => ({
    nombre: '',
    plantacion: '',
    lote: '',
    maquinariauso: '',
    insumoscultivo: '',
    itemPlantacion: [
      'Aguacate',
      'Caña de azúcar',
      'Chile verde',
      'Tomate',
      'Sorgo',
      'Frijoles',
      'Maíz',
      'Habanero',
      'Sandia',
      'Melon',
      'Pepino',
      'Piña',
      'Arroz',
      'Platano',
      'Papaya',
      'Yuca',
      'Arboles frutales',
      'Chayote',
      'Otros',
    ],
    itemsLotes: [],
    itemsMaquinaria: [],
    itemsInsumos: [
      'Semillas',
      'Palas',
      'Bomba agricola',
      'Fertilizante',
      'Otros',
    ],
    presupuesto: 0,
  }),
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    getRealtimeData() {
      this.itemsLotes = []
      try {
        this.$fireDb
          .ref('usuarios/' + this.user.uid + '/lotes')
          .on('value', (snapshot) => {
            const valores = snapshot.val()
            for (const key in valores) {
              this.itemsLotes.push(valores[key].ubicacion)
              /*
                console.log('*******************')
                console.log(valores[key].hectareas)
                console.log(valores[key])
                console.log('*******************')
                */
            }
          })
      } catch (error) {
        console.log(error)
      }
    },
    getRealtimeDataMaquinaria() {
      this.itemsMaquinaria = []
      try {
        this.$fireDb
          .ref('usuarios/' + this.user.uid + '/maquinaria')
          .on('value', (snapshot) => {
            const valores = snapshot.val()
            for (const key in valores) {
              this.itemsMaquinaria.push(valores[key].maquinaria)
              /*
              console.log('/////////////////')
              console.log(valores[key].maquinaria)
              console.log('/////////////////')
              */
            }
          })
      } catch (error) {
        console.log(error)
      }
    },
    registrar() {
      console.log('Submit')
      /**/
      var gen = this.$fireDb
        .ref('usuarios/' + this.user.uid)
        .child('siembras')
        .push().key

      let updates = {}
      updates['usuarios/' + this.user.uid + '/siembras/' + gen] = {
        nombre: this.nombre,
        platacion: this.plantacion,
        lote: this.lote,
        maquinariauso: this.maquinariauso,
        presupuesto: this.presupuesto,
        insumoscultivo: this.insumoscultivo,

        /*
        nombre: 'demo',
        platacion: 'demo',
        lote: 'demo',
        maquinariauso: 'demo',
        costopreparacion: 'demo',
        insumoscultivo: 'demo',
        */
      }
      this.$fireDb
        .ref()
        .update(updates)
        .then((response) => {
          console.log(response)
          this.$router.push('/app/cultivo/siembra')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  mounted() {
    this.getRealtimeData()
    this.getRealtimeDataMaquinaria()
  },
}
</script>
