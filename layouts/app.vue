<template lang="pug">
  v-app
    v-navigation-drawer(:mini-variant="miniVariant" clipped fixed app)

      v-list
        v-list-item
          v-list-item-content
            v-list-item-title.title {{ user.nombres }}
            v-list-item-subtitle {{ user.email }}
        v-divider
      v-list(nav dense)
        v-list-item(v-for="(item, i) in items" :key="i" :to="item.to" router exact)
          v-list-item-action
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title(v-text="item.title")
    v-app-bar(color="teal" clipped-left fixed app dark)
      v-app-bar-nav-icon(@click.stop="miniVariant = !miniVariant")
      v-toolbar-title(v-text="title")
    v-main(style="background: #f9f9f9;")
      v-container
        nuxt
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'index',
          to: '/app/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Prueba',
          to: '/app/prueba',
        },
        {
          icon: 'mdi-truck',
          title: 'Proveedor Maquinaria',
          to: '/app/proveedor/maquinaria/',
        },
      ],
      miniVariant: false,
      title: 'Mashito',
    }
  },
  computed: {
    user() {
      return this.$store.state.user || {}
    },
  },
}
</script>
