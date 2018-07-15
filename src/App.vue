<template>
  <div id="app">
    <Planthouse/>
  </div>
</template>

<script>
import Planthouse from './components/Planthouse'

export default {
  name: 'App',
  components: {
    Planthouse
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
