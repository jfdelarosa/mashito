<template lang="pug">
  v-row(justify="center")
    v-col(cols="12" sm="10" md="8" lg="6")
      v-card
        v-card-title Iniciar sesión
        v-card-text
          v-form(ref="form" v-model="valid")
            v-text-field(v-model="email" label="Correo" :rules="rules.email" outlined required)
            v-text-field(v-model="password" label="Contraseña" :rules="rules.password" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" outlined required)
            div.text-right.mb-8
              nuxt-link(to="/") Olvidé mi contraseña
            v-btn(@click="submitForm" :disabled="!valid" :loading="loading" color="primary" block) Iniciar sesión
            div.text-center.mt-4
              nuxt-link(to="/app/login/registro") Aún no tengo cuenta
</template>
<script>
export default {
  data: () => ({
    loading: false,
    valid: false,
    showPassword: false,
    email:
      process.env.NODE_ENV === 'development' ? 'jfdelarosa@outlook.com' : '',
    password: process.env.NODE_ENV === 'development' ? '123123' : '',
    rules: {
      email: [(v) => !!v || 'El correo es requerido'],
      password: [(v) => !!v || 'La contraseña es requerida'],
    },
  }),
  methods: {
    getUser(uid) {
      this.$fireDb.ref(`/usuarios/${uid}`).on('value', (snapshot) => {
        const response = snapshot.val()

        this.$store.commit('updateUser', response)
        this.$router.push('/app/')
      })
    },
    submitForm() {
      if (this.valid) {
        this.loading = true
        this.$fireAuth
          .signInWithEmailAndPassword(this.email, this.password)
          .then((response) => {
            this.getUser(response.user.uid)
          })
          .catch((error) => {
            console.log(error)
          })
          .finally(() => {
            this.loading = false
          })
      }
    },
  },
}
</script>
