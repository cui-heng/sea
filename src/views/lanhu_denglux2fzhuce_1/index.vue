<template>
  <div>
    <HUIYAUN v-if="!show" @dianji="godod"/>
  <div  v-if="show" class="page flex-col">
    <img class="image_1" referrerpolicy="no-referrer"
      src="./assets/img/FigmaDDSSlicePNG98c5bc5f50d252746043a47d32d33336.png" />
    <img class="image_2" referrerpolicy="no-referrer"
      src="./assets/img/FigmaDDSSlicePNGc99fdf18684b30e3fef612ad5d029f3f.png" />
    <div class="group_1 flex-row">
      <div class="group_2 flex-col">
        <div class="image-wrapper_1 flex-col">
          <img class="image_3" referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGea77ca25fd24e7db4d20c4f1f7f8ee8b.png" />
        </div>
      </div>
      <div class="group_3 flex-col">
        <div class="text-wrapper_1 flex-row justify-between">
          <span class="text_1 cur_sty">会员登录通道</span>
          <span class="text_2 cur_sty" @click="dialogVisible1=true">会员入驻通道</span>
        </div>
        <div class="box_1 flex-col"></div>
        <span class="text_3 user_in">账号</span>
        <el-input ref="userName" v-model="loginForm.userName"
            placeholder="请输入账号" name="userName" type="text" tabindex="1" autocomplete="on" />
        <span class="text_5 pwd_pa">密码</span>
        <!-- <span class="svg-container">
          <svg-icon icon-class="password" />
        </span> -->
        <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType"
          placeholder="请输入密码" name="password" tabindex="2" autocomplete="on" @keyup.native="checkCapslock"
          @blur="capsTooltip = false" @keyup.enter.native="handleLogin" />
        <div class="box_2 flex-row">
          <div class="section_1 flex-col"></div>
          <span class="text_7">7天内免密登录</span>
          <img class="thumbnail_1" referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG3ad1186f82f76e0a619a7baa7fb32077.png" />
        </div>
        <div class="text-wrapper_4 flex-col"><span class="text_8">登&nbsp;录</span></div>
        <span class="text_9 cur_sty" @click="dialogVisible1=true">注册账号</span>
        <div class="box_3 flex-row justify-between">
          <div class="group_4 flex-col"></div>
          <span class="text_10">其他登录方式</span>
          <div class="group_5 flex-col"></div>
        </div>
        <div class="box_4 flex-row justify-between">
          <div class="image-wrapper_2 flex-col">
            <img class="thumbnail_2 cur_sty" referrerpolicy="no-referrer"
              src="./assets/img/FigmaDDSSlicePNG534daee4f5a8cb23c65b6ffc80109236.png" @click="dialogVisible1=true"/>
          </div>
          <div class="image-wrapper_3 flex-col">
            <img class="thumbnail_3 cur_sty" referrerpolicy="no-referrer"
              src="./assets/img/FigmaDDSSlicePNGddcde72b3cc8030c3e3199d769c57996.png" @click="dialogVisible1=true"/>
          </div>
          <div class="image-wrapper_4 flex-col">
            <img class="thumbnail_4 cur_sty" referrerpolicy="no-referrer"
              src="./assets/img/FigmaDDSSlicePNG3da1abdc13d588748b2d4920635d7b95.png" @click="dialogVisible1=true"/>
          </div>
        </div>
      </div>
    </div>
    <span class="paragraph_1">
      投资耆关系&nbsp;|&nbsp;关于我们&nbsp;|&nbsp;软件下载&nbsp;|&nbsp;法律声明&nbsp;|&nbsp;运營许可&nbsp;|&nbsp;联系我们&nbsp;」&nbsp;友情链接&nbsp;|&nbsp;招聘英才&nbsp;」&nbsp;
      <br />
      用户体验计划CopyrightCHithink&nbsp;Royalflush&nbsp;Infomation&nbsp;Network&nbsp;Co,Ltd.Al&nbsp;rights&nbsp;reserved,
      <br />
      浙江海洋财经网络信息股份有限公司版权所有ICP证:浙ICP备09003598号
      <br />
      证券投资咨询服务提供:浙江海洋财经软件有限公司(中国证监会核发证书编号:ZX0050)
    </span>
  </div>
  <div v-if="dialogVisible1" class="popup" style="z-index: 999999999999;">
    <!-- 弹窗的内容 -->
    <div class="group_32 flex-col" style="position: absolute;left: 20%;">
        <div class="image-wrapper_14 flex-row">
          <img class="thumbnail_46" referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG1a1730c41af2279e3053b2e67cc48a4c.png"
            @click="dialogVisible1=false"/>
        </div>
        <div class="image-wrapper_15 flex-row">
          <img class="image_12" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGfdd1de355ade847646e5b7e03b5ef02c.png"/>
        </div>
        <div class="text-wrapper_24">
          <span class="text_50" style="text-align: center;">{{serviceInfo.nickName}}</span>
        </div>
        <div class="image-wrapper_16 flex-row">
          <img class="image_13" referrerpolicy="no-referrer" :src="baseUrlImg + serviceInfo.wxQrCode"/>
        </div>
        <div class="text-wrapper_25 flex-row">
          <span class="text_51">微信扫一扫&nbsp;添加顾问</span>
        </div>
        <div class="group_51 flex-row">
          <div class="image-text_76 flex-row justify-between">
            <div class="box_17 flex-col">
              <img src="../../assets/Vector.png">
            </div>
            <span class="text-group_43">{{ serviceInfo.phonenumber }}</span>
          </div>
        </div>
        <div class="group_52 flex-row">
          <div class="text-wrapper_23">
            <span class="text_52">*</span>
            <span class="text_53">咨询时请说明来自海洋财经，以便得到更佳服务</span>
          </div>
        </div>
      </div>
    <!-- 关闭按钮 -->
    </div>
</div>
</template>
<style scoped lang="css" src="./assets/index.css" />
<script>
// import { validUsername } from '@/utils/validate'
import HUIYAUN from '../lanhu_denglux2fzhuce/index.vue'
import { userLogin, getAlertInfo } from '@/api/index'
export default {
  components: {HUIYAUN},
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
      dialogVisible1:false,
      show:true,
      loginForm: {
        userName: '',
        password: ''
      },
      loginRules: {
        userName: [{ required: true, trigger: 'blur', }],
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
    this.getService()
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    async getService() {
      const {data} = await getAlertInfo({})
      this.serviceInfo = data
    },
    godod(){
this.show=true
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
      -webkit-appearance: none;
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
 
.close-button {
  margin-top: 10px;
}
#side .item {
  margin-bottom: 30px;
}

.art-item {
  margin-bottom: 30px;
  position: relative;
}

.art-item .star {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  right: 0;
}

img.tag {
  width: 16px;
  height: 16px;
}

.art-title {
  border-left: 3px solid #F56C6C;
  padding-left: 5px;
  cursor: pointer;
}

.art-title:hover {
  padding-left: 10px;
  color: #409EFF;
}

.art-time {
  margin-right: 20px;
}

.art-body {
  display: flex;
  padding: 10px 0;
}

.side-img {
  height: 150px;
  width: 270px;
  overflow: hidden;
  margin-right: 10px;
}

img.art-banner {
  width: 100%;
  height: 100%;
  transition: all 0.6s;
}

img.art-banner:hover {
  transform: scale(1.4);
}

.side-abstract {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.art-abstract {
  flex: 1;
  color: #aaa;
}

.art-more {
  margin-left: 10%;
  position: relative;
  top: -20px;
  width: 80%;
  height: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.art-more1 {
  margin-left: 20%;
  position: relative;
  top: 10px;
  width: 60%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* position: relative;
  top: 25px; */
}

.art-more .view {
  color: #aaa;
  font-size: 12px;
}

.art-more1 .view {
  color: #aaa;
  font-size: 12px;
}

h5 {
  font-size: 18px;
}

.pagination {
  background-color: #F9F9F9;
}
.section_9 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  height: 309px;
  width: 613px;
  margin: 186px 0 0 254px;
}

.image-wrapper_11 {
  width: 16px;
  height: 17px;
  margin: 32px 0 0 558px;
}

.thumbnail_46 {
  width: 16px;
  height: 17px;
}

.group_18 {
  width: 192px;
  height: 79px;
  margin: 15px 0 0 211px;
}

.image-text_38 {
  width: 192px;
  height: 79px;
}

.image_12 {
  width: 192px;
  height: 40px;
}

.text-group_431 {
  width: 80px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 20px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
  margin: 19px 0 0 56px;
}

.group_19 {
  width: 331px;
  height: 40px;
  margin: 16px 0 0 141px;
}

.image-text_39 {
  width: 331px;
  height: 40px;
}
.user_in, .pwd_pa{
  margin-bottom: 10px;
}

.box_17 {
  /* background-color: rgba(26, 188, 252, 1); */
  width: 30px;
  height: 30px;
  margin-top: 5px;
}
.cur_sty {
  cursor: pointer;
}

.text-group_44 {
  width: 291px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(26, 188, 252, 1);
  font-size: 40px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
}

.group_20 {
  width: 345px;
  height: 16px;
  margin: 29px 0 65px 134px;
}

.text-wrapper_21 {
  width: 345px;
  height: 16px;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.text_54 {
  width: 345px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(255, 61, 61, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}
.dlg-msg-box {
        border-radius: 5px;
        width: 350px;
        height: 160px;
        background-color: #fff;
        padding: 30px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

.text_55 {
  width: 345px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}
.group_32 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  height: 572px;
  width: 613px;
  margin: 112px 0 0 254px;
  z-index: 99999999999999;
}

.image-wrapper_14 {
  width: 16px;
  height: 17px;
  margin: 32px 0 0 558px;
}

.thumbnail_46 {
  width: 16px;
  height: 17px;
}

.image-wrapper_15 {
  width: 192px;
  height: 40px;
  margin: 15px 0 0 210px;
}

.image_12 {
  width: 192px;
  height: 40px;
}

.text-wrapper_24 {
  width: 80px;
  height: 20px;
  margin: 24px 0 0 267px;
}

.text_50 {
  width: 80px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 20px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
}

.image-wrapper_16 {
  width: 200px;
  height: 200px;
  margin: 22px 0 0 206px;
}

.image_13 {
  width: 200px;
  height: 200px;
}

.text-wrapper_25 {
  width: 168px;
  height: 18px;
  margin: 23px 0 0 222px;
}

.text_51 {
  width: 168px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 18px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
}

.group_51 {
  width: 331px;
  height: 40px;
  margin: 36px 0 0 141px;
}

.image-text_76 {
  width: 331px;
  height: 40px;
}

.box_20 {
  background-color: rgba(26, 188, 252, 1);
  width: 30px;
  height: 30px;
  margin-top: 5px;
}

.text-group_43 {
  width: 291px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(26, 188, 252, 1);
  font-size: 40px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
}

.group_52 {
  width: 345px;
  height: 16px;
  margin: 29px 0 40px 134px;
}

.text-wrapper_23 {
  width: 345px;
  height: 16px;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.text_52 {
  width: 345px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(255, 61, 61, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.text_53 {
  width: 345px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}
</style>
