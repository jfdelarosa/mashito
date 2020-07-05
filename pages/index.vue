<template lang="pug">
  .landing
    .menu.center
      img.logo(src="logos/mashito.svg")
      div
        nuxt-link.menu-item(to="/app/pricing") Precios
        nuxt-link.menu-item(to="/app/login") Entrar
        nuxt-link.menu-item(to="/app/login/registro") Suscribirse
    .header.center
      .left
        h1 Titulo
        h3 Gestiona tus cultivos, comparte experiencias con otros sembradores y encuentra lo que necesitas.
        a.cta(href="#") ¡Contactar ahora!
      .middle
      .right
        img.svg(src="granjero.svg")
    section#section-1
</template>

<script>
export default {
  layout: 'landing',
}
</script>

<style lang="scss">
.landing {
  font-family: Inter !important;
  .center {
    width: 80%;
    margin: 0 auto;
  }
  .svg {
    width: 100%;
    height: 100%;
  }
  .logo {
    height: 150px;
    margin-left: -50px;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-item {
      font-weight: 500;
      font-size: 1.1rem;
      margin-left: 30px;
      text-decoration: none;
      color: #2f3233;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0 4rem 0;
    h1 {
      color: #2f3233;
      font-weight: 900;
      font-size: 3rem;
    }
    h3 {
      color: #2f3233;
      font-weight: 500;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .cta {
      background: #009688;
      padding: 1rem 2rem;
      display: inline-block;
      border-radius: 8px;
      color: white;
      text-decoration: none;
      font-weight: 500;
      &:hover {
        background: #26a69a;
      }
    }
    .left {
      flex: 2;
    }
    .middle {
      flex: 1;
    }
    .right {
      flex: 4;
    }
  }
  #section-1 {
    background: #e0e9f7;
    padding: 3rem;
  }
}
</style>
