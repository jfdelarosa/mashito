<template lang="pug">
div
  grid-layout(
    :layout.sync="layout"
    :col-num="6"
    :row-height="100"
    :is-draggable="true"
    :is-resizable="true"
    :is-mirrored="false"
    :vertical-compact="true"
    :margin="[10, 10]"
    :use-css-transforms="true"
  )
    grid-item(v-for="item in layout"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :key="item.i"
    )
      template(v-if="item.widget")
        component(:is="item.widget" :value="item")
      widget(:value="item" v-else)
  //- v-card
  //-   v-card-title Pagina 1
  //-   v-card-text
  //-     pre {{ val }}
  //-     pre {{ store }}
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
import Weather from '@/components/Weather'
var testLayout = [
  {
    x: 0,
    y: 0,
    w: 2,
    h: 1,
    i: '0',
    title: 'Widget 1',
    text: 'Contenido del widget',
  },
  {
    x: 2,
    y: 0,
    w: 4,
    h: 1,
    i: '1',
    title: 'Widget 2',
    text: 'Contenido del widget',
  },
  {
    x: 0,
    y: 1,
    w: 3,
    h: 2,
    i: '2',
    title: 'Widget 3',
    text: 'Contenido del widget',
  },
  {
    x: 3,
    y: 1,
    w: 3,
    h: 6,
    i: '3',
    title: 'Clima',
    widget: 'Weather',
  },
]
export default {
  layout: 'app',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    Weather,
  },
  data: () => ({
    val: null,
    layout: testLayout,
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
