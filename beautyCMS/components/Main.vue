<template>
  <div id="app">
    <AppHead class="app-head" v-bind:admin="realName" />
    <el-container class="app-body">
      <el-aside class="app-nav" style="width: auto">
        <LeftNav></LeftNav>
      </el-aside>
      <el-main>
        <transition enter-active-class="animated zoomInRight">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import AppHead from './head&Left/AppHead'
  import LeftNav from './head&Left/LeftNav'
export default {
  name: 'Main',
  components:{
    AppHead,
    LeftNav
  },
  data: function(){
    return {
      realName: ''
    }
  },
  created () {
    // console.log(this.$route.params)
    var that = this
    this.realName = this.$route.params.Real_name
    this.$router.push('/systemMain')
  }
}
</script>

<style>
@import "../assets/animate.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 15px;
  }
  .app-head{
    height: 60px;
    background-color: rgba(67, 142, 185, 0.94);
  }
  html,body{
    margin: 0;
    padding: 0;
  }
  .app-body{
    height: calc(100vh - 50px);
  }
  .el-main{
    padding: 0;
    margin: 0;
  }
  .app-nav{
    border-right: solid 1px #e6e6e6;
  }
  .el-menu{
    border: 0;
  }
  .app-nav::-webkit-scrollbar{
    width: 5px;
    height: 5px;
    background-color: #bfbfbf;
  }
  .app-nav::-webkit-scrollbar-thumb{
    width: 3px;
    height: 3px;
    border-radius: 2px;
    background-color: #545454;
  }
  .app-nav::-webkit-scrollbar-button{
    display: none;
  }
  .el-submenu__title{
    height: 45px;
    line-height: 45px;
    text-align: left;
  }
  .el-submenu__icon-arrow{
    right: 40px;
  }
  aside>div{
    height: calc(100% - 10px);
  }
  .el-tabs__nav{
    margin-left: 50px;
  }
  .el-tabs__content{
    text-align: left;
  }

</style>
