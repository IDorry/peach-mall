<template>
  <div id="app">   
    <Header></Header>
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Nav from '@/components/Nav.vue'

  export default {
    name:'App',
    components: {
      Header,
      Nav
    }
  }
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
