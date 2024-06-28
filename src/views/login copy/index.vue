<template>
  <div class="login-container">
    <div class="title-container" style="margin: 0 auto;margin-top: 50px;">
      <img src="../../assets/img/2682.png" style="margin-left: 25%;" />
    </div>
    <el-card style="width: 1038px;
height: 539px;margin: 0 auto;margin-top: 13px;">

      <el-col :span="16">
        <img src="../../assets/img/2898.png"></el-col>
      <el-col :span="8"> <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form"
          autocomplete="on" label-position="left">


          <el-form-item prop="userName">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input ref="userName" v-model="loginForm.userName" placeholder="Username" name="userName" type="text"
              tabindex="1" autocomplete="on" />
          </el-form-item>

          <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
            <el-form-item prop="password">
              <span class="svg-container">
                <svg-icon icon-class="password" />
              </span>
              <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType"
                placeholder="Password" name="password" tabindex="2" autocomplete="on" @keyup.native="checkCapslock"
                @blur="capsTooltip = false" @keyup.enter.native="handleLogin" />
              <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-form-item>
          </el-tooltip>

          <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;"
            @click.native.prevent="handleLogin">Login</el-button>

          <div style="position:relative">
            <div class="tips">
              <span>注册账号</span>
            </div>
            <div class="tips">
              <span style="margin-right:18px;">其他登录方式</span>
              <span>Password : any</span>
            </div>
          </div>
        </el-form></el-col>

    </el-card>
    <div style="font-size: 12px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #BEBEBE;
line-height: 24px;text-align: center;">投资耆关系 | 关于我们 | 软件下载 | 法律声明 | 运營许可 | 联系我们 」 友情链接 | 招聘英才 」<br>
      用户体验计划CopyrightCHithink Royalflush Infomation Network Co,Ltd.Al rights reserved,<br>
      浙江海洋财经网络信息股份有限公司版权所有ICP证:浙ICP备09003598号<br>
      证券投资咨询服务提供:浙江海洋财经软件有限公司(中国证监会核发证书编号:ZX0050)</div>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
import { userLogin } from '@/api/index'
export default {
  name: 'Login',
  data() {
    // const validateUsername = (rule, value, callback) => {
    //   if (!validUsername(value)) {
    //     callback(new Error('Please enter the correct user name'))
    //   } else {
    //     callback()
    //   }
    // }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      loginRules: {
        userName: [{ required: true, trigger: 'blur',}],
        password: [{ required: true, trigger: 'blur', }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.userName === '') {
      this.$refs.userName.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      // this.$router.push({ path:'/' })
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          userLogin(this.loginForm).then(res => {
            if (res.code == 1) {
              window.sessionStorage.setItem('token', res.data)
              this.$router.push({ path: '/' })
              this.loading = false
            } else {
              // this.$message({
              //   message: 'The title has been edited',
              //   type: 'success'
              // })
              this.loading = false
              this.$message.error(res.message)
            }

          }).catch(() => {
            this.loading = false
          })
          // this.$store.dispatch('user/login', this.loginForm)
          //   .then(() => {
          //     window.sessionStorage.setItem('token', 'res.token')
          //     console.log(this.redirect || '/admin/')
          //     this.$router.push({ path: this.redirect || '/admin/', query: this.otherQuery })
          //     this.loading = false
          //   })

        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;

  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
