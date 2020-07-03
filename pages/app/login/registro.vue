<template lang="pug">
  v-row(justify="center")
    v-col(cols="10")
      v-stepper(v-model="step")
        v-stepper-header
          v-stepper-step(:complete="step > 1" step="1") Perfil
          v-divider
          v-stepper-step(:complete="step > 2" step="2") Perfil
          v-divider
          v-stepper-step(step="3") Perfil
        v-stepper-items
          v-stepper-content(step="1")
            v-card
              v-card-title Elige tu perfil
              v-card-text
                v-row.mb-4(justify="center")
                  v-col
                    v-card(@click="elegir(0)" :raised="selectedProfile == 0" outlined hover)
                      v-img(src="/agricultor.svg")
                      v-card-title Agricultor
                      v-card-text Descripción
                  v-col
                    v-card(@click="elegir(1)" :raised="selectedProfile == 1" outlined hover)
                      v-img(src="/proveedor.svg")
                      v-card-title Proveedor
                      v-card-text Descripción
                  v-col
                    v-card(@click="elegir(2)" :raised="selectedProfile == 2" outlined hover)
                      v-img(src="/comerciante.svg")
                      v-card-title Comerciante
                      v-card-text Descripción
                v-btn(color="primary" @click="step = 2" :disabled="selectedProfile === null" block) Siguiente
          v-stepper-content(step="2")
            v-card
              v-btn(color="primary" @click="step = 3" block) Siguiente
              v-btn(@click="step = 1" block text) Anterior
          v-stepper-content(step="3")
            v-card
              v-btn(color="primary" @click="step = 2" block) Finalizar
              v-btn(@click="step = 2" block text) Anterior
        //- v-card-title Iniciar sesión
        //- v-card-text
        //-   v-form(ref="form" v-model="valid" lazy-validation)
        //-     v-text-field(v-model="email" label="Correo" :rules="rules.email" outlined required)
        //-     v-text-field(v-model="password" label="Contraseña" :rules="rules.password" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" outlined required)
        //-     div.text-right.mb-8
        //-       nuxt-link(to="/") Olvidé mi contraseña
        //-     v-btn(@click="submitForm" color="primary" block) Iniciar sesión
        //-     div.text-center.mt-4
        //-       nuxt-link(to="/app/login/registro") Aún no tengo cuenta
</template>
<script>
export default {
  data: () => ({
    step: 1,
    selectedProfile: null,
  }),
  methods: {
    elegir(n) {
      const perfiles = ['agricultor', 'proveedor', 'comerciante']
      this.selectedProfile = n

      const perfil = perfiles[this.selectedProfile]
      console.log(perfil)
    },
    submitForm() {
      this.$refs.form.validate()
    },
  },
}
</script>
