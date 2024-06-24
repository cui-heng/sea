<template>
  <div class="page flex-col bg_box">
    <img class="bg_img_sty" src="@/assets/img/Group 2912.png" alt="">
    <div class="block_2 flex-col">
      <!-- <div class="image-wrapper_1 flex-col">
        <img
          class="image_1"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNGed0108afcc28b374225bbb840d67ac80.png"
        />
        <img
          class="image_2"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNG70b4fe8495badbb8bfb68573d2704b3d.png"
        />
        <img
          class="image_3"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNG80385c352e7c5ffb003e6b9a91bc1ceb.png"
        />
      </div> -->
    </div>
    <div class="block_3 flex-col">
      <div class="text-wrapper_2 flex-row justify-between">
        <span class="text_3">会员登录通道</span>
        <span class="text_4" @click="dialogVisible1 = true">会员入驻通道</span>
      </div>
      <div class="block_4 flex-col"></div>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form"
          autocomplete="on" label-position="left">
          <div style="width: 100%;height: 30px"></div>
      <span class="text_5">账号：</span>
      <el-input ref="userName" v-model="loginForm.userName" placeholder="Username" name="userName" type="text"
              tabindex="1" autocomplete="on" style="width: 80%;"/>
      <!-- <div class="text-wrapper_3 flex-col"><span class="text_6">请输入账号</span></div> -->
      <div style="width: 100%;height: 30px"></div>
      <span class="text_7">密码：</span>
      <!-- <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual> -->
            <!-- <el-form-item prop="password"> -->
              <!-- <span class="svg-container">
                <svg-icon icon-class="password" />
              </span> -->
              <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType"
                placeholder="Password" name="password" tabindex="2" autocomplete="on" @keyup.native="checkCapslock"
                @blur="capsTooltip = false" @keyup.enter.native="handleLogin" style="width: 70%;margin-right: 12px;"/>
              <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            <!-- </el-form-item> -->
          <!-- </el-tooltip> -->
          </el-form>
      <!-- <div class="text-wrapper_4 flex-col"><span class="text_8">请输入密码</span></div> -->
      <div class="block_5 flex-row">
        <div class="box_1 flex-col"></div>
        <span class="text_9">7天内免密登录</span>
        <span class="text_10" @click="dialogVisible1 = true">注册账号</span>
      </div>
      <div class="text-wrapper_5 flex-col" @click="handleLogin"><span class="text_11">登&nbsp;录</span></div>
      <div class="block_6 flex-row justify-between">
        <img
          class="image_4"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNGdc15cebc2b9494fce9f978fe9eafddff.png"
        />
        <span class="text_12">其他登录方式</span>
        <img
          class="image_5"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNGdc15cebc2b9494fce9f978fe9eafddff.png"
        />
      </div>
      <div class="block_7 flex-row justify-between">
        <div class="image-wrapper_2 flex-col">
          <img
            @click="dialogVisible1 = true"
            class="label_4"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG15460fb47f1cd756a757f18a6f26007f.png"
          />
        </div>
        <div class="image-wrapper_3 flex-col">
          <img
            @click="dialogVisible1 = true"
            class="label_5"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG4c332b41cce734a92e55b139572f496e.png"
          />
        </div>
        <div class="image-wrapper_4 flex-col">
          <img
            @click="dialogVisible1 = true"
            class="label_6"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGd982d279e1567d793cad42d688ac703c.png"
          />
        </div>
      </div>
    </div>

    <!-- 弹窗 -->

    <div v-if="dialogVisible1" class="popup" style="z-index: 999999999999;">
    <!-- 弹窗的内容 -->
    <div class="dia_css" style="position: absolute;background: #fff;">
        <div class="image-wrapper_14 flex-row">
          <img class="thumbnail_46" referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG1a1730c41af2279e3053b2e67cc48a4c.png"
            @click="dialogVisible1=false"/>
        </div>
        <div class="image-wrapper_15 flex-row">
          <img class="image_12" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGfdd1de355ade847646e5b7e03b5ef02c.png"/>
        </div>
        <div class="ser_per">
          <span style="text-align: center;">{{serviceInfo.nickName}}</span>
        </div>
        <div class="image-wrapper_16 flex-row">
          <img class="image_13" referrerpolicy="no-referrer" :src="baseUrlImg + serviceInfo.wxQrCode"/>
        </div>
        <div class="group_51 flex-row">
          <div class="image-text_76 flex-row justify-between">
            <div class="img_sty">
              <img src="../../assets/Vector.png">
            </div>
            <span class="name_phone_sty">{{ serviceInfo.phonenumber }}</span>
          </div>
        </div>
        <div class="botto_info_text">
          <div>
            <span class="colo_sty">*</span>
            <span>咨询时请说明来自海洋财经，以便得到更佳服务</span>
          </div>
        </div>
        <div class="btn_back">返回</div>
      </div>
    <!-- 关闭按钮 -->
    </div>
  </div>
</template>
<script>
// import { validUsername } from '@/utils/validate'
import { userLogin, getAlertInfo } from '@/api/index'
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
      serviceInfo: {},
      dialogVisible1: false,
      loginForm: {
        userName: '100001',
        password: '123456'
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
    this.getService()
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
    async getService() {
      const {data} = await getAlertInfo({})
      this.serviceInfo = data
    },
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
              this.$router.push({ path: '/lanhu_shouye' })
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
.bg_img_sty {
  width: 100%;
}
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

.dia_css {
  border-radius: 10px;
  height: 405px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .image-wrapper_14 {
    position: absolute;
    right: 15px;
    top: 15px;
  }
  .image-wrapper_15 {
    margin-bottom: 16px;
    margin-top: 35px !important;
  }
  .ser_per {
    font-family: PingFang SC, PingFang SC;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
    color: #242629;
  }
  .image_13 {
    width: 110px;
    height: 110px;
    margin-bottom: 16px;
  }

  .img_sty {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }
  .name_phone_sty {
    font-family: PingFang SC, PingFang SC;
    font-weight: bold;
    font-size: 25px;
    color: #1ABCFC;
    margin-bottom: 16px;
  }
  .botto_info_text {
    margin-bottom: 16px;
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    font-size: 14px;
    color: #7A7A7A;
    padding: 0 15px;
    .colo_sty {
      color: red;
    }
  }
  .btn_back {
    text-align: center;
    height: 44px;
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    width: calc(100% - 30px);
    font-size: 16px;
    color: #FFFFFF;
    background: linear-gradient( 90deg, #1ABCFC 0%, #0796D2 100%);
    border-radius: 10px 10px 10px 10px;
    line-height: 44px;
  }
}

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

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}


 
.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
}
group_32 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  height: 572px;
  width: 613px;
  margin: 112px 0 0 254px;
  z-index: 99999999999999;
}
</style>

<style scoped lang="css" src="./assets/index.rem.css" />