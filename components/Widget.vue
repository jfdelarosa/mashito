<template lang="pug">
  v-card(height="100%")
    v-card-title(v-if="value.title")
      span {{value.title}}
      v-spacer
      v-menu(offset-y)
        template(v-slot:activator="{ on, attrs }")
          v-btn(v-bind="attrs" v-on="on" ripple icon)
            v-icon mdi-cog
        v-list
          v-list-item(@click="")
            v-list-item-title Eliminar
    v-card-text(v-if="value.text") {{value.text}}
    v-card-text(v-else)
      slot
</template>

<script>
export default {
  props: ['value'],
}
</script>
