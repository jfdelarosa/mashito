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
        template(v-for="(item, i) in items")
          v-divider(v-if="item.divider")
          v-list-item(:to="item.to" router exact v-else)
            v-list-item-action
              v-icon {{ item.icon }}
            v-list-item-content
              v-list-item-title(v-text="item.title")
        v-list-item(@click="logout")
          v-list-item-action
            v-icon mdi-logout
          v-list-item-content
            v-list-item-title Salir
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
          icon: 'mdi-view-dashboard',
          title: 'Inicio',
          to: '/app/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Prueba',
          to: '/app/prueba',
        },
        {
          icon: 'mdi-drag',
          title: 'Cultivos',
          to: '/app/cultivo',
        },
        {
          icon: 'mdi-map',
          title: 'Lotes',
          to: '/app/cultivo/lotes/',
        },
        {
          icon: 'mdi-package-variant-closed',
          title: 'Inventario',
          to: '/app/proveedor/insumo/',
        },
        {
          icon: 'mdi-truck',
          title: 'Maquinaria',
          to: '/app/proveedor/maquinaria/',
        },
        { divider: true },
        {
          icon: 'mdi-cog',
          title: 'Ajustes',
          to: '/app/ajustes',
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
  methods: {
    logout() {
      window.location.reload()
    },
  },
}
</script>
