<template>
  <div class="header">    
    <div class="container clearfix">
      <div class="logoArea clearfix">
        <img src="../store/img/mallLogo.png" alt="">
        <p>想你所想</p>
      </div>
      <div class="searchArea clearfix">
        <el-input
          placeholder="请输入内容"
          v-model="input">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      input:'',
    }
  },
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import url('../assets/css/common.less');
  @import url('../assets/css/header.less');
</style>
