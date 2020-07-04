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
              v-card-title Creación de cuenta
              v-card-text
                v-row
                  v-col
                    v-form(ref="step2" v-model="step2.valid")
                      v-text-field(label="Correo electrónico" v-model="formData.email" outlined)
                      v-text-field(label="Contraseña" type="password" v-model="formData.password1" :rules="[step2.rules.required, step2.rules.min]" hint="Al menos 5 caracteres" outlined counter)
                      v-text-field(label="Repetir contraseña" type="password" v-model="formData.password2" :rules="[step2.rules.required, step2.rules.min, passwordMatch]" hint="Al menos 5 caracteres" outlined counter)
                  v-col.col-auto
                    v-divider(vertical)
                  v-col
                    p O registrate usando otras plataformas:
                    v-btn.mb-6(color="#3b5998" dark block)
                      v-icon(left) mdi-facebook
                      | Entrar con Facebook
                    v-btn.mb-6(color="#D44638" dark block)
                      v-icon(left) mdi-google
                      | Entrar con Google

              v-btn(color="primary" @click="register" :disabled="!step2.valid" :loading="step2.loading" block) Siguiente
              v-btn(@click="step = 1" block text) Anterior
          v-stepper-content(step="3")
            v-card
              v-card-title Información de contacto
              v-card-text
                v-form(ref="step3" v-model="step3.valid")
                  v-text-field(label="Nombres" v-model="formData.nombres" :rules="step3.rules.nombres" outlined required)
                  v-text-field(label="Apellidos" v-model="formData.apellidos" :rules="step3.rules.apellidos" outlined required)
                  v-autocomplete(v-model="formData.estado" :items="estados" label="Estado" autocomplete="off" outlined)
                  v-autocomplete(v-model="formData.municipio" :items="mexico[formData.estado]" label="Municipio" v-if="formData.estado" autocomplete="off" outlined)
                  v-text-field(label="Dirección" v-model="formData.direccion" :rules="step3.rules.direccion" v-if="formData.municipio" outlined required)

                  v-btn(color="primary" @click="step = 3" :disabled="!step3.valid" block) Siguiente
                  v-btn(@click="step = 1" block text) Anterior
</template>
<script>
import mexico from '@/static/mexico.json'
export default {
  data: () => ({
    formData: {
      email: '',
      password1: '',
      password2: '',
      nombres: '',
      apellidos: '',
      estado: '',
      municipio: '',
      direccion: '',
    },
    step: 1,
    selectedProfile: null,
    step2: {
      valid: false,
      loading: false,
      rules: {
        required: (v) => !!v || 'Campo requerido',
        min: (v) => v.length >= 6 || 'Al menos 6 caracteres',
      },
    },
    step3: {
      valid: false,
      rules: {
        nombres: [(v) => !!v || 'El nombre es requerido'],
        apellidos: [(v) => !!v || 'Los apellidos son requeridos'],
      },
    },
  }),
  computed: {
    mexico() {
      return mexico
    },
    estados() {
      return Object.keys(mexico)
    },
    passwordMatch() {
      return (
        this.formData.password1 === this.formData.password2 ||
        'Las contraseñas deben coincidir'
      )
    },
  },
  methods: {
    elegir(n) {
      const perfiles = ['agricultor', 'proveedor', 'comerciante']
      this.selectedProfile = n

      const perfil = perfiles[this.selectedProfile]
    },
    submitForm() {
      this.$refs.step2.validate()
    },
    register() {
      const { email, password1 } = this.formData
      this.$set(this.step2, 'loading', true)
      this.$fireAuth
        .createUserWithEmailAndPassword(email, password1)
        .then((response) => {
          console.log(response)
          this.uid = response.user.uid
          this.step = 3
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.$set(this.step2, 'loading', false)
        })
    },
  },
}
</script>
