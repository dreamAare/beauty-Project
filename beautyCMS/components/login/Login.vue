<template>
  <div class="mybody">
    <div class="myLoginBox">
      <h2 style="color: white;text-align: center;width: 356px;font-weight: lighter">espiorCMS后台管理系统</h2>
      <div class="myform">
          <div style="font-size: 20px;color: #0092d2;border-bottom: 1px solid #dcdcdc;padding-bottom: 5px">
            <i class="el-icon-info" style="color: #5daf34"></i>
            <span>管理员登录：</span>
          </div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item class="myformItem" prop="name">
              <el-input placeholder="请输入账号" prefix-icon="el-icon-document" v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item class="myformItem" prop="password">
              <el-input placeholder="请输入密码" prefix-icon="el-icon-setting" type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item class="myformItem" prop="safeCode">
              <el-input placeholder="验证码" prefix-icon="el-icon-tickets" style="width: 50%" v-model="ruleForm.safeCode"></el-input>
              <div class="safeCode" @click="refreshCode">
                <Identify :identifyCode="identifyCode" style="width: 100%"></Identify>
              </div>
            </el-form-item>
            <el-form-item class="myformItem">
              <el-checkbox v-model="checked">记住密码</el-checkbox>
              <el-button icon="el-icon-bell" type="primary" style="float: right" @click="loginTo('ruleForm')">登录</el-button>
            </el-form-item>
          </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Identify from '../identify/identify'
export default {
  components: {Identify},
  name: 'Login',
  data: function () {
    var that = this;
    var checkName = function (rules,value,cb) {
      let regName = /^[0-9A-Za-z]{4,20}$/;
      if (!regName.test(value)){
        return cb(new Error('账号必须是4-20位的数字或字母'))
      } else {
        cb()
      }
    }

    var checkPwd = function (rules,value,cb) {
      let regName = /^(?!(?:\d+|[a-zA-Z]+)$)[\da-zA-Z]{5,20}$/;
      if (!regName.test(value)){
        return cb(new Error('密码必须是5-20位的数字和字母'))
      } else {
        cb()
      }
    }

    var checkSafeCode = function (rules,value,cb) {
      var regCode = that.identifyCode;
      if (value!==regCode){
        return cb(new Error('验证码不正确'))
      } else {
        cb()
      }
    }

    return {
      ruleForm: {
        name: '',
        password: '',
        safeCode: ''
      },
      rules: {
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        password: [
          { validator: checkPwd, trigger: 'blur'}
        ],
        safeCode: [
          { validator: checkSafeCode, trigger: 'blur'}
        ]
      },
      identifyCodes: "1234567890",
      identifyCode: "",
      checked: false
    }
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  created () {
    var admin = localStorage.getItem('admin')
    if (admin){
      var adminArr = admin.split(',')
      this.ruleForm.name = adminArr[0]
      this.ruleForm.password = adminArr[1]
    }
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
          ];
      }
    },
    loginTo : function (dataObj) {
      let that = this
      // console.log(this.$refs[dataObj])  //代表要验证的表单里面的数据
      this.$refs[dataObj].validate(function (rule) {
        if (rule){
          // console.log('你可以登录了')
          // sessionStorage.setItem('isLogin', true)
          var reqData = {'name':that.ruleForm.name,'password':that.ruleForm.password}
          that.$http.post('api/moduManage/adminLogin',{reqData})
            .then(res=>{
              // console.log(res.data)
              if (res.data.result==='0'){
                //将该账户的权限ID存如vuex
                var powerid = res.data.resData.role_id
                var params = {powerid,personinfo:res.data.resData}
                that.$store.dispatch({type: 'updatePowerAsync',params})
                //将该账户的账号密码存入localStorage
                if (that.checked){
                  let localName = that.ruleForm.name
                  let localPwd = that.ruleForm.password
                  localStorage.setItem('admin',[localName,localPwd])
                }
                //通过powerID拿到相应的权限数组，并存入到vuex中
                that.$http.post('api/moduManage/selectPower',{powerid})
                  .then(res=>{
                    var firstMenuArr = res.data.firstMenu.split(',')
                    // console.log(firstMenuArr)
                    var secondMenuArr = res.data.power_list.split(',')
                    // console.log(firstMenuArr)

                    //通过powerID返回的一级菜单存入vuex
                    that.$store.dispatch({type: 'saveLevelA',firstMenuArr,secondMenuArr})
                    // console.log(that.$store.state)
                  }).catch(err=>{
                  console.log(err)
                })
                //最后再跳转页面
                setTimeout(function () {
                  that.$router.push({name: 'Mian',params: res.data.resData})
                },500)

              } else {
                that.$alert('账号或密码错误，请重新登录','登录失败',{
                  confirmButtonText: '确定',
                  type: 'error',
                })
              }
            }).catch(err=>{
              console.log(err)
          })
        } else{
          // console.log('登录失败')
          return false
        }
      })
    }
  }

}
</script>

<style scoped>
  .myLoginBox{
    width: 320px;
    margin: 0 auto;
    margin-top: 100px;
    /*text-align: center;*/
  }
  .mybody{
    width: 100%;
    height: 950px;
    background-color: #438eb9;
    overflow: hidden;
  }
  .myform{
    background-color: white;
    width: 100%;
    border: 5px solid #d2d2d2;
    padding: 5% 4%;
  }
  .safeCode{
    width: 40%;
    height: 40px;
    float: right;
    border-radius: 4px;
    cursor: pointer;
  }
  .myformItem{
    margin: 20px 0;
  }
</style>
