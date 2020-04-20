<template>
  <div id="app"> 
    <el-container>
      <el-header>Header</el-header>
      <el-main>         
        <router-view/>
      </el-main>
    </el-container>  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="less">
  @import url(./assets/css/common.less);
  @import url(./assets/css/header.less);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
