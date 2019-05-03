<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Cryptocurrencies msg="Welcome to Cryptocurrencies"/>
  </div>
</template>

<script>
import Cryptocurrencies from './components/Cryptocurrencies.vue'

export default {
  name: 'app',
  components: {
    Cryptocurrencies
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
