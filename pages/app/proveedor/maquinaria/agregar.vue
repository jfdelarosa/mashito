<template lang="pug">
  div
    h1 Pagina agregar
    v-form()
        v-container
            v-row
                v-col
                    v-text-field(label="maquinaria" v-model="maquinaria")
                v-col
                    v-text-field(label="tipo" v-model="tipo")
            v-row
                v-col
                    v-text-field(label="modelo" v-model="modelo")
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
  }),
  methods:{
    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    },
      registrar(){
            console.log("Submit...")
            
            //var gen = this.getRandomArbitrary(1,9999)
            var gen = this.$fireDb.ref().child('maquinaria').push().key;
            /** */

            let updates = {};
            updates['/maquinaria/' + gen] = {
                maquinaria: this.maquinaria,
                tipo: this.tipo,
                modelo: this.modelo,
                costo: this.costo
            };
            this.$fireDb.ref().update(updates)
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
      }
  }
}
</script>
