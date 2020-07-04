<template lang="pug">
  v-card
    v-card-title Pagina 1
    v-card-text
      pre {{ val }}
      pre {{ store }}
</template>

<script>
export default {
  layout: 'app',
  data: () => ({
    val: null,
  }),
  computed: {
    store() {
      return this.$store.state.user
    },
  },
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
