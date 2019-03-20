<template>
  <div>
    <!--<el-row class="samllHeader">-->
      <!--<el-col :sm="16" :md="10" :lg="6">-->
        <!--<el-row :gutter="0" style="text-align: center">-->
          <!--<el-col :span="2" :offset="1"><i class="el-icon-bell"></i></el-col>-->
          <!--<el-col :span="8" style="color: darkgray">{{url1}}</el-col>-->
          <!--<el-col :span="1">/</el-col>-->
          <!--<el-col :span="8">{{url2}}</el-col>-->
        <!--</el-row>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <el-breadcrumb separator="/" class="samllHeader">
      <el-breadcrumb-item :to="{ path: '/' }">{{urlObj.name1}}</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">{{urlObj.name2}}</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'SamllHead',
  props:['urlObj'],
  data: function () {
    return {
      url1: '商品管理',
      url2: '商品列表'
    }
  }
}
</script>

<style scoped>
  .samllHeader{
    padding-left: 30px;
    height: 50px;
    line-height: 50px;
    box-shadow: 0 2.5px rgb(221, 221, 221);
  }
</style>
