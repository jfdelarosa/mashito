<template>
  <div>
    <h1>Pagina 1</h1>
    <div>
      <nuxt-link to="/">Ir al index</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/app/prueba">Ir a otra pagina</nuxt-link>
    </div>
    <pre>{{ val }}</pre>
  </div>
</template>

<script>
export default {
  layout: 'app',
  data: () => ({
    val: null,
  }),
  methods: {
    // Obtener el valor una vez
    getData() {
      const messageRef = this.$fireDb
        .ref('tests')
        .once('value')
        .then((snapshot) => {
          this.val = snapshot.val()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // Obtener el valor en tiempo real
    getRealtimeData() {
      try {
        this.$fireDb.ref('tests').on('value', (snapshot) => {
          this.val = snapshot.val()
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.getData()
  },
}
</script>
