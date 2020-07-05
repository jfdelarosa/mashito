<template lang="pug">
  .landing
    .menu.center
      img.logo(src="logos/mashito.svg")
      div
        nuxt-link.menu-item(to="/app/pricing") Precios
        nuxt-link.menu-item(to="/app/login") Iniciar sesión
        nuxt-link.menu-item(to="/app/login/registro") Registrarse
    .header.center
      .left
        h1 Titulo
        h3 Gestiona tus cultivos, comparte experiencias con otros sembradores y encuentra lo que necesitas.
        a.cta(href="#") ¡Contactar ahora!
      .middle
      .right
        img.svg(src="granjero.svg")
    section#section-ventajas
    section#section-features
      h2 ¡Descubre las soluciones<br/>que tenemos para ti!
      .row
        .feature
          v-icon mdi-currency-usd
          h3 Ventas
        .feature
          v-icon mdi-cart-outline
          h3 Compras
        .feature
          v-icon mdi-weather-pouring
          h3 Predicciones climatológicas
      .row
        .feature
          v-icon mdi-package-variant-closed
          h3 Inventario
        .feature
          v-icon mdi-tow-truck
          h3 Maquinaria
        .feature
          v-icon mdi-spa
          h3 Plantaciones

    section#section-cta
      h2 Déjanos ayudarte
      h4 Experimenta la mejor herramienta para la gestión de tus recursos
      .buttons
        nuxt-link.button.button-registro(to="/app/login/registro") Prueba gratuita
        .button.button-demo Agendar una demo
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
  #section-features {
    background: #e0f2f1;
    padding: 8rem 6rem 9rem 6rem;
    h2 {
      font-size: 2.7rem;
      text-align: center;
      margin-bottom: 5rem;
      font-weight: 700;
      color: #00695c;
      line-height: 130%;
    }
    .row {
      display: flex;
      justify-content: space-between;
      & + .row {
        margin-top: 4rem;
      }
      .feature {
        text-align: center;
        flex: 1;
        i {
          color: #80cbc4;
          font-size: 5rem;
          margin-bottom: 1.1rem;
        }
        h3 {
          color: #00796b;
          font-weight: 600;
          font-size: 1.4rem;
        }
      }
    }
  }
  #section-cta {
    background: #009688;
    padding: 8rem 0;
    h2 {
      color: white;
      text-align: center;
      margin-bottom: 2rem;
      font-size: 3rem;
      font-weight: 700;
    }
    h4 {
      color: white;
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.3rem;
      font-weight: 500;
    }
    .buttons {
      display: flex;
      justify-content: center;
      .button {
        margin: 0 1rem;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: 500;
        text-decoration: none;
        color: white;
        cursor: pointer;
      }
      .button-registro {
        background: #03a9f4;
        &:hover {
          background: #29b6f6;
        }
      }
      .button-demo {
        background: #e0f2f1;
        color: #00695c;
      }
    }
  }
}
</style>
