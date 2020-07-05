<template lang="pug">
  widget(:value="value")
    v-simple-table
      template(v-slot:default)
        thead
          tr
            th Clima
            th Fecha
            th Mio
            th Max
            th Lluvia
        tbody(v-if="data")
          tr(v-for="(day, index) in data.daily")
            td
              img(:src='getIcon(day.weather[0].icon)')
            td(v-if="index == 0") Hoy
            td(v-else-if="index == 1") Mañana
            td(v-else) {{formatDate(day.dt)}}
            td {{day.temp.min}}°C
            td {{day.temp.max}}°C
            td(v-if="day.rain") {{day.rain}}mm
            td(v-else)
</template>
<script>
import { format } from 'date-fns'
export default {
  props: ['value'],
  data: () => ({
    lat: '',
    long: '',
    data: null,
  }),
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    getIcon(id) {
      return `http://openweathermap.org/img/wn/${id}.png`
    },
    formatDate(date) {
      return format(date * 1000, 'dd/MM')
    },
    getPos() {
      this.$axios
        .$get(
          'https://api.ipfind.com/me?auth=67a5b3f8-5386-44c9-a06a-6bb92d08c2ff'
        )
        .then((res) => {
          this.lat = res.latitude
          this.lon = res.longitude
          this.getData()
        })
    },
    getData() {
      this.$axios
        .$get(
          `http://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&appid=b300ce997421c59c39f4dd084c39eea9&units=metric`
        )
        .then((res) => {
          console.log(res)
          this.data = res
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  mounted() {
    this.getPos()
  },
}
</script>
