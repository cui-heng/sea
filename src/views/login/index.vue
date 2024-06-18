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
              <span @click="dialogVisible1=true">注册账号</span>
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
      <div v-if="dialogVisible1" class="popup" style="z-index: 999999999999;">
    <!-- 弹窗的内容 -->
    <div class="group_32 flex-col" style="position: absolute;left: 20%;">
        <div class="image-wrapper_14 flex-row">
          <img
            class="thumbnail_46"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG1a1730c41af2279e3053b2e67cc48a4c.png"
            @click="dialogVisible1=false"
          />
        </div>
        <div class="image-wrapper_15 flex-row">
          <img
            class="image_12"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGfdd1de355ade847646e5b7e03b5ef02c.png"
          />
        </div>
        <div class="text-wrapper_24">
          <span class="text_50" style="text-align: center;">金牌顾问</span>
        </div>
        <div class="image-wrapper_16 flex-row">
          <img
            class="image_13"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG5effd93d3a4fbd95d5f329c537dca3d6.png"
          />
        </div>
        <div class="text-wrapper_25 flex-row">
          <span class="text_51">微信扫一扫&nbsp;添加顾问</span>
        </div>
        <div class="group_51 flex-row">
          <div class="image-text_76 flex-row justify-between">
            <div class="box_17 flex-col">
              <img src="../assets/Vector.png">
            </div>
            <span class="text-group_43">137&nbsp;7733&nbsp;5959</span>
          </div>
        </div>
        <div class="group_52 flex-row">
          <div class="text-wrapper_23">
            <span class="text_52">*</span>
            <span class="text_53"
              >咨询时请说明来自海洋财经，以便得到更佳服务</span
            >
          </div>
        </div>
      </div>
    <!-- 关闭按钮 -->

    </div>
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
      dialogVisible1:false,
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
<style scoped>
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 1920px;
  height: 2607px;
  overflow: hidden;
}

.section_1 {
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 80.038416%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 1920px;
  height: 483px;
  justify-content: flex-center;
}

.group_1 {
  width: 220px;
  height: 61px;
  margin: 224px 0 0 340px;
}

.image_1 {
  width: 214px;
  height: 40px;
  margin-left: 6px;
}

.text_1 {
  width: 217px;
  height: 17px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  letter-spacing: 54px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
  margin-top: 4px;
}

.image_2 {
  width: 209px;
  height: 25px;
  margin: 238px 0 0 26px;
}

.group_2 {
  background-color: rgba(255, 255, 255, 1);
  width: 368px;
  height: 36px;
  border: 1px solid rgba(217, 217, 217, 1);
  margin: 251px 0 0 301px;
}

.text_2 {
  width: 32px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
  margin: 10px 0 0 12px;
}

.block_1 {
  background-color: rgba(217, 217, 217, 1);
  width: 1px;
  height: 36px;
  margin-left: 12px;
}

.text_3 {
  width: 96px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
  margin: 10px 0 0 14px;
}

.text-wrapper_1 {
  background-image: linear-gradient(
    90deg,
    rgba(26, 188, 252, 1) 0,
    rgba(7, 150, 210, 1) 100%
  );
  height: 36px;
  margin-left: 113px;
  width: 88px;
}

.text_4 {
  width: 48px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
  margin: 10px 0 0 20px;
}

.text-wrapper_2 {
  background-image: linear-gradient(
    90deg,
    rgba(26, 188, 252, 1) 0,
    rgba(7, 150, 210, 1) 100%
  );
  height: 36px;
  width: 100px;
  margin: 251px 340px 0 16px;
}

.text_5 {
  width: 72px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
  margin: 10px 0 0 14px;
}

.section_2 {
  background-color: rgba(61, 60, 68, 1);
  width: 1920px;
  height: 245px;
  margin-top: 1879px;
  justify-content: flex-center;
}

.group_3 {
  width: 336px;
  height: 130px;
  margin: 16px 0 0 792px;
}

.image-text_1 {
  width: 100px;
  height: 130px;
}

.image_3 {
  width: 100px;
  height: 100px;
}

.text-group_1 {
  width: 40px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(190, 190, 190, 1);
  font-size: 20px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
  margin: 10px 0 0 30px;
}

.image-text_2 {
  width: 100px;
  height: 130px;
}

.image_4 {
  width: 100px;
  height: 100px;
}

.text-group_2 {
  width: 40px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(190, 190, 190, 1);
  font-size: 20px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
  margin: 10px 0 0 30px;
}

.group_4 {
  background-color: rgba(110, 110, 124, 1);
  width: 1240px;
  height: 1px;
  margin: 10px 0 0 340px;
}

.paragraph_1 {
  width: 471px;
  height: 56px;
  overflow-wrap: break-word;
  color: rgba(190, 190, 190, 1);
  font-size: 20px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  line-height: 28px;
  margin: 16px 0 16px 724px;
}

.section_3 {
  position: absolute;
  left: 0;
  top: 483px;
  width: 1920px;
  height: 1880px;
}

.section_4 {
  background-color: rgba(255, 255, 255, 1);
  width: 1240px;
  height: 2051px;
  margin: -173px 0 0 340px;
}

.box_1 {
  height: 78px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG790e53f599c308ec59f922984f0bfea4.png)
    100% no-repeat;
  background-size: 100% 100%;
  width: 1238px;
  margin: 1px 0 0 1px;
}

.text-wrapper_3 {
  width: 784px;
  height: 20px;
  margin: 31px 0 0 393px;
}

.text_6 {
  width: 40px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
}

.text_7 {
  width: 80px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
  margin-left: 81px;
}

.text_8 {
  width: 100px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
  margin-left: 81px;
}

.text_9 {
  width: 100px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
  margin-left: 81px;
}

.text_10 {
  width: 140px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
  margin-left: 81px;
}

.group_5 {
  width: 40px;
  height: 3px;
  margin: 12px 0 12px 534px;
}

.box_2 {
  background-color: rgba(255, 255, 255, 1);
  width: 40px;
  height: 3px;
}

.box_3 {
  width: 465px;
  height: 16px;
  margin: 26px 0 0 21px;
}

.text_11 {
  width: 64px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(138, 138, 138, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.thumbnail_1 {
  width: 6px;
  height: 6px;
  margin: 4px 0 0 12px;
}

.text_12 {
  width: 32px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(138, 138, 138, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
  margin-left: 10px;
}

.thumbnail_2 {
  width: 6px;
  height: 6px;
  margin: 4px 0 0 12px;
}

.text_13 {
  width: 311px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
  margin-left: 12px;
}

.box_4 {
  width: 1240px;
  height: 1859px;
  margin: 26px 0 45px 0;
}

.box_5 {
  width: 811px;
  height: 1848px;
}

.box_6 {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width: 808px;
  height: 1363px;
}

.text_14 {
  width: 388px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
  margin: 40px 0 0 30px;
}

.text-wrapper_4 {
  width: 224px;
  height: 14px;
  margin: 26px 0 0 30px;
}

.text_15 {
  width: 129px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(138, 138, 138, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
}

.text_16 {
  width: 49px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(138, 138, 138, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
}

.group_6 {
  width: 748px;
  height: 1px;
  border: 1px solid rgba(224, 224, 224, 1);
  margin: 28px 0 0 30px;
}

.group_7 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 10px;
  height: 149px;
  width: 748px;
  justify-content: flex-center;
  margin: 30px 0 0 30px;
}

.section_5 {
  width: 672px;
  height: 74px;
  margin: 26px 0 0 38px;
}

.image-text_3 {
  width: 165px;
  height: 74px;
}

.image_5 {
  width: 74px;
  height: 74px;
}

.block_2 {
  width: 80px;
  height: 52px;
  margin-top: 11px;
}

.text-group_3 {
  width: 80px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 16px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  white-space: nowrap;
  line-height: 16px;
}

.text-wrapper_5 {
  background-color: rgba(212, 212, 212, 1);
  border-radius: 4px;
  height: 24px;
  margin-top: 12px;
  width: 66px;
}

.text_17 {
  width: 48px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 12px;
  margin: 6px 0 0 9px;
}

.text-wrapper_6 {
  background-color: rgba(212, 212, 212, 1);
  border-radius: 4px;
  height: 24px;
  width: 72px;
  margin: 39px 0 0 -4px;
}

.text_18 {
  width: 54px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 12px;
  margin: 6px 0 0 9px;
}

.box_7 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 6px;
  width: 126px;
  height: 36px;
  margin: 31px 0 0 165px;
}

.image-text_4 {
  width: 79px;
  height: 16px;
  margin: 10px 0 0 24px;
}

.image-wrapper_1 {
  background-color: rgba(255, 255, 255, 1);
  height: 11px;
  margin-top: 4px;
  width: 11px;
}

.thumbnail_3 {
  width: 7px;
  height: 7px;
  margin: -2px 0 0 6px;
}

.text-group_4 {
  width: 56px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.box_8 {
  background-color: rgba(16, 203, 140, 1);
  border-radius: 6px;
  width: 126px;
  height: 36px;
  margin: 31px 0 0 22px;
}

.image-text_5 {
  width: 80px;
  height: 16px;
  margin: 10px 0 0 23px;
}

.thumbnail_4 {
  width: 14px;
  height: 14px;
  margin-top: 1px;
}

.text-group_5 {
  width: 56px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.section_6 {
  width: 208px;
  height: 14px;
  margin: 9px 0 26px 145px;
}

.text_19 {
  width: 62px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.image-text_6 {
  width: 105px;
  height: 14px;
}

.thumbnail_5 {
  width: 14px;
  height: 14px;
}

.text-group_6 {
  width: 82px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.image-text_7 {
  width: 748px;
  height: 361px;
  margin: 26px 0 0 30px;
}

.image_6 {
  width: 748px;
  height: 268px;
}

.text-group_7 {
  width: 748px;
  height: 72px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 36px;
  margin-top: 21px;
}

.text_20 {
  width: 748px;
  height: 72px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 36px;
  margin: 20px 0 0 30px;
}

.text_21 {
  width: 748px;
  height: 72px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 36px;
  margin: 20px 0 0 30px;
}

.text_22 {
  width: 748px;
  height: 72px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 36px;
  margin: 20px 0 0 30px;
}

.text_23 {
  width: 748px;
  height: 72px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 36px;
  margin: 20px 0 0 30px;
}

.text_24 {
  width: 748px;
  height: 72px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 36px;
  margin: 20px 0 0 30px;
}

.group_8 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 10px;
  width: 748px;
  height: 130px;
  margin: 42px 0 36px 30px;
}

.image-text_8 {
  width: 342px;
  height: 74px;
  margin: 28px 0 0 30px;
}

.image_7 {
  width: 74px;
  height: 74px;
}

.text-group_8 {
  width: 257px;
  height: 48px;
  margin-top: 12px;
}

.text-wrapper_7 {
  width: 164px;
  height: 20px;
}

.text_25 {
  width: 100px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 20px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  white-space: nowrap;
  line-height: 20px;
}

.text_26 {
  width: 48px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 2px;
}

.text_27 {
  width: 257px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 14px;
}

.group_9 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 6px;
  width: 126px;
  height: 36px;
  margin: 47px 38px 0 212px;
}

.image-text_9 {
  width: 80px;
  height: 16px;
  margin: 10px 0 0 23px;
}

.thumbnail_6 {
  width: 14px;
  height: 14px;
  margin-top: 1px;
}

.text-group_9 {
  width: 56px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.box_9 {
  width: 811px;
  height: 20px;
  margin-top: 34px;
}

.text_28 {
  width: 120px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
}

.image-text_10 {
  width: 81px;
  height: 16px;
  margin-top: 2px;
}

.text-group_10 {
  width: 64px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(138, 138, 138, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.thumbnail_7 {
  width: 8px;
  height: 8px;
  margin-top: 2px;
}

.box_10 {
  width: 808px;
  height: 200px;
  margin-top: 20px;
}

.block_3 {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width:250px;
  height: 200px;
  margin-left: 10px;
}

.text-wrapper_8 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 88px 0px 88px 0px;
  height: 26px;
  margin-left: 220px;
  width: 42px;
}

.text_29 {
  width: 28px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
  margin: 6px 0 0 9px;
}

.text_30 {
  width: 221px;
  height: 52px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  line-height: 26px;
  margin: 4px 0 0 20px;
}

.text_31 {
  width: 221px;
  height: 48px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 24px;
  margin: 8px 0 0 20px;
}

.section_7 {
  width: 221px;
  height: 26px;
  margin: 16px 0 20px 20px;
}

.image-text_11 {
  width: 72px;
  height: 26px;
}

.label_1 {
  width: 26px;
  height: 26px;
}

.text-group_11 {
  width: 36px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 4px;
}

.image-text_12 {
  width: 49px;
  height: 14px;
  margin-top: 6px;
}

.thumbnail_8 {
  width: 14px;
  height: 14px;
}

.text-group_12 {
  width: 26px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.block_4 {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width: 262px;
  height: 200px;
  margin-left: 11px;
}

.text-wrapper_9 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 88px 0px 88px 0px;
  height: 26px;
  margin-left: 220px;
  width: 42px;
}

.text_32 {
  width: 28px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
  margin: 6px 0 0 9px;
}

.text_33 {
  width: 221px;
  height: 52px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  line-height: 26px;
  margin: 4px 0 0 20px;
}

.text_34 {
  width: 221px;
  height: 48px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 24px;
  margin: 8px 0 0 20px;
}

.block_5 {
  width: 221px;
  height: 26px;
  margin: 16px 0 20px 20px;
}

.image-text_13 {
  width: 72px;
  height: 26px;
}

.label_2 {
  width: 26px;
  height: 26px;
}

.text-group_13 {
  width: 36px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 4px;
}

.image-text_14 {
  width: 49px;
  height: 14px;
  margin-top: 6px;
}

.thumbnail_9 {
  width: 14px;
  height: 14px;
}

.text-group_14 {
  width: 26px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.block_6 {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width: 262px;
  height: 200px;
  margin-left: 11px;
}

.text-wrapper_10 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 88px 0px 88px 0px;
  height: 26px;
  margin-left: 220px;
  width: 42px;
}

.text_35 {
  width: 28px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
  margin: 6px 0 0 9px;
}

.text_36 {
  width: 221px;
  height: 52px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  line-height: 26px;
  margin: 4px 0 0 20px;
}

.text_37 {
  width: 221px;
  height: 48px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 24px;
  margin: 8px 0 0 20px;
}

.box_11 {
  width: 221px;
  height: 26px;
  margin: 16px 0 20px 20px;
}

.image-text_15 {
  width: 72px;
  height: 26px;
}

.label_3 {
  width: 26px;
  height: 26px;
}

.text-group_15 {
  width: 36px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 4px;
}

.image-text_16 {
  width: 49px;
  height: 14px;
  margin-top: 6px;
}

.thumbnail_10 {
  width: 14px;
  height: 14px;
}

.text-group_16 {
  width: 26px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.box_12 {
  width: 808px;
  height: 200px;
  margin-top: 11px;
}

.section_8 {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width: 262px;
  height: 200px;
}

.text-wrapper_11 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 88px 0px 88px 0px;
  height: 26px;
  margin-left: 220px;
  width: 42px;
}

.text_38 {
  width: 28px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
  margin: 6px 0 0 9px;
}

.text_39 {
  width: 221px;
  height: 52px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  line-height: 26px;
  margin: 4px 0 0 20px;
}

.text_40 {
  width: 221px;
  height: 48px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 24px;
  margin: 8px 0 0 20px;
}

.group_10 {
  width: 221px;
  height: 26px;
  margin: 16px 0 20px 20px;
}

.image-text_17 {
  width: 72px;
  height: 26px;
}

.label_4 {
  width: 26px;
  height: 26px;
}

.text-group_17 {
  width: 36px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 4px;
}

.image-text_18 {
  width: 49px;
  height: 14px;
  margin-top: 6px;
}

.thumbnail_11 {
  width: 14px;
  height: 14px;
}

.text-group_18 {
  width: 26px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.section_9 {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width: 262px;
  height: 200px;
  margin-left: 11px;
}

.text-wrapper_12 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 88px 0px 88px 0px;
  height: 26px;
  margin-left: 220px;
  width: 42px;
}

.text_41 {
  width: 28px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
  margin: 6px 0 0 9px;
}

.text_42 {
  width: 221px;
  height: 52px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  line-height: 26px;
  margin: 4px 0 0 20px;
}

.text_43 {
  width: 221px;
  height: 48px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 24px;
  margin: 8px 0 0 20px;
}

.section_10 {
  width: 221px;
  height: 26px;
  margin: 16px 0 20px 20px;
}

.image-text_19 {
  width: 72px;
  height: 26px;
}

.label_5 {
  width: 26px;
  height: 26px;
}

.text-group_19 {
  width: 36px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 4px;
}

.image-text_20 {
  width: 49px;
  height: 14px;
  margin-top: 6px;
}

.thumbnail_12 {
  width: 14px;
  height: 14px;
}

.text-group_20 {
  width: 26px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.section_11 {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width: 262px;
  height: 200px;
  margin-left: 11px;
}

.text-wrapper_13 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 88px 0px 88px 0px;
  height: 26px;
  margin-left: 220px;
  width: 42px;
}

.text_44 {
  width: 28px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
  margin: 6px 0 0 9px;
}

.text_45 {
  width: 221px;
  height: 52px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  line-height: 26px;
  margin: 4px 0 0 20px;
}

.text_46 {
  width: 221px;
  height: 48px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 24px;
  margin: 8px 0 0 20px;
}

.box_13 {
  width: 221px;
  height: 26px;
  margin: 16px 0 20px 20px;
}

.image-text_21 {
  width: 72px;
  height: 26px;
}

.label_6 {
  width: 26px;
  height: 26px;
}

.text-group_21 {
  width: 36px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 4px;
}

.image-text_22 {
  width: 49px;
  height: 14px;
  margin-top: 6px;
}

.thumbnail_13 {
  width: 14px;
  height: 14px;
}

.text-group_22 {
  width: 26px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.box_14 {
  width: 398px;
  height: 1859px;
}

.box_15 {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width: 398px;
  height: 494px;
}

.section_12 {
  width: 362px;
  height: 20px;
  margin: 20px 0 0 20px;
}

.text_47 {
  width: 86px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
}

.image-text_23 {
  width: 46px;
  height: 16px;
  margin-top: 2px;
}

.text-group_23 {
  width: 32px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(138, 138, 138, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.thumbnail_14 {
  width: 8px;
  height: 8px;
  margin-top: 2px;
}

.section_13 {
  background-image: linear-gradient(
    90deg,
    rgba(26, 188, 252, 1) 0,
    rgba(7, 150, 210, 1) 100%
  );
  width: 86px;
  height: 3px;
  margin: 17px 0 0 20px;
}

.section_14 {
  background-color: rgba(224, 224, 224, 1);
  width: 398px;
  height: 1px;
}

.section_15 {
  width: 358px;
  height: 40px;
  margin: 26px 0 0 20px;
}

.group_11 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 7px;
}

.text_48 {
  width: 342px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 20px;
}

.section_16 {
  width: 358px;
  height: 40px;
  margin: 26px 0 0 20px;
}

.group_12 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 7px;
}

.text_49 {
  width: 342px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 20px;
}

.section_17 {
  width: 358px;
  height: 40px;
  margin: 26px 0 0 20px;
}

.box_16 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 7px;
}

.text_50 {
  width: 342px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 20px;
}

.section_18 {
  width: 358px;
  height: 40px;
  margin: 26px 0 0 20px;
}

.group_13 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 7px;
}

.text_51 {
  width: 342px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 20px;
}

.section_19 {
  width: 358px;
  height: 40px;
  margin: 26px 0 0 20px;
}

.box_17 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 7px;
}

.text_52 {
  width: 342px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 20px;
}

.section_20 {
  width: 358px;
  height: 40px;
  margin: 26px 0 37px 20px;
}

.group_14 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 7px;
}

.text_53 {
  width: 342px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 20px;
}

.box_18 {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width: 398px;
  height: 494px;
  margin-top: 30px;
}

.box_19 {
  width: 362px;
  height: 20px;
  margin: 20px 0 0 20px;
}

.text_54 {
  width: 86px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
}

.image-text_24 {
  width: 46px;
  height: 16px;
  margin-top: 2px;
}

.text-group_24 {
  width: 32px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(138, 138, 138, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.thumbnail_15 {
  width: 8px;
  height: 8px;
  margin-top: 2px;
}

.box_20 {
  background-image: linear-gradient(
    90deg,
    rgba(26, 188, 252, 1) 0,
    rgba(7, 150, 210, 1) 100%
  );
  width: 86px;
  height: 3px;
  margin: 17px 0 0 20px;
}

.box_21 {
  background-color: rgba(224, 224, 224, 1);
  width: 398px;
  height: 1px;
}

.box_22 {
  width: 358px;
  height: 40px;
  margin: 26px 0 0 20px;
}

.group_15 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 7px;
}

.text_55 {
  width: 342px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 20px;
}

.box_23 {
  width: 358px;
  height: 40px;
  margin: 26px 0 0 20px;
}

.box_24 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 7px;
}

.text_56 {
  width: 342px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 20px;
}

.box_25 {
  width: 358px;
  height: 40px;
  margin: 26px 0 0 20px;
}

.box_26 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 7px;
}

.text_57 {
  width: 342px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 20px;
}

.box_27 {
  width: 358px;
  height: 40px;
  margin: 26px 0 0 20px;
}

.group_16 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 7px;
}

.text_58 {
  width: 342px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 20px;
}

.box_28 {
  width: 358px;
  height: 40px;
  margin: 26px 0 0 20px;
}

.box_29 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 7px;
}

.text_59 {
  width: 342px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 20px;
}

.box_30 {
  width: 358px;
  height: 40px;
  margin: 26px 0 37px 20px;
}

.group_17 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 7px;
}

.text_60 {
  width: 342px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 20px;
}

.box_31 {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width: 398px;
  height: 811px;
  margin-top: 30px;
}

.block_7 {
  width: 362px;
  height: 20px;
  margin: 20px 0 0 20px;
}

.text_61 {
  width: 80px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
}

.image-text_25 {
  width: 46px;
  height: 16px;
  margin-top: 2px;
}

.text-group_25 {
  width: 32px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(138, 138, 138, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.thumbnail_16 {
  width: 8px;
  height: 8px;
  margin-top: 2px;
}

.block_8 {
  background-image: linear-gradient(
    90deg,
    rgba(26, 188, 252, 1) 0,
    rgba(7, 150, 210, 1) 100%
  );
  width: 80px;
  height: 3px;
  margin: 17px 0 0 20px;
}

.block_9 {
  background-color: rgba(224, 224, 224, 1);
  width: 398px;
  height: 1px;
}

.block_10 {
  width: 359px;
  height: 74px;
  margin: 26px 0 0 20px;
}

.image-text_26 {
  width: 165px;
  height: 74px;
}

.image_8 {
  width: 74px;
  height: 74px;
}

.box_32 {
  width: 80px;
  height: 52px;
  margin-top: 11px;
}

.text-group_26 {
  width: 80px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 16px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  white-space: nowrap;
  line-height: 16px;
}

.text-wrapper_14 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  margin-top: 12px;
  width: 66px;
}

.text_62 {
  width: 48px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 12px;
  margin: 6px 0 0 9px;
}

.text-wrapper_15 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  width: 72px;
  margin: 39px 0 0 -4px;
}

.text_63 {
  width: 54px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 12px;
  margin: 6px 0 0 9px;
}

.image-wrapper_2 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 36px;
  border: 1px solid rgba(255, 61, 61, 1);
  width: 36px;
  margin: 19px 0 0 34px;
}

.thumbnail_17 {
  width: 20px;
  height: 20px;
  margin: 8px 0 0 8px;
}

.image-wrapper_3 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 36px;
  border: 1px solid rgba(4, 188, 100, 1);
  width: 36px;
  margin: 19px 0 0 20px;
}

.thumbnail_18 {
  width: 20px;
  height: 20px;
  margin: 8px 0 0 8px;
}

.block_11 {
  width: 230px;
  height: 14px;
  margin: 9px 0 0 105px;
}

.image-text_27 {
  width: 84px;
  height: 14px;
}

.thumbnail_19 {
  width: 14px;
  height: 14px;
}

.text-group_27 {
  width: 62px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.image-text_28 {
  width: 105px;
  height: 14px;
}

.thumbnail_20 {
  width: 14px;
  height: 14px;
}

.text-group_28 {
  width: 82px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.block_12 {
  width: 398px;
  height: 1px;
  border: 1px solid rgba(224, 224, 224, 1);
  margin-top: 26px;
}

.block_13 {
  width: 359px;
  height: 74px;
  margin: 26px 0 0 20px;
}

.image-text_29 {
  width: 165px;
  height: 74px;
}

.image_9 {
  width: 74px;
  height: 74px;
}

.block_14 {
  width: 80px;
  height: 52px;
  margin-top: 11px;
}

.text-group_29 {
  width: 80px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 16px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  white-space: nowrap;
  line-height: 16px;
}

.text-wrapper_16 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  margin-top: 12px;
  width: 66px;
}

.text_64 {
  width: 48px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 12px;
  margin: 6px 0 0 9px;
}

.text-wrapper_17 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  width: 72px;
  margin: 39px 0 0 -4px;
}

.text_65 {
  width: 54px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 12px;
  margin: 6px 0 0 9px;
}

.image-wrapper_4 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 36px;
  border: 1px solid rgba(255, 61, 61, 1);
  width: 36px;
  margin: 19px 0 0 34px;
}

.thumbnail_21 {
  width: 20px;
  height: 20px;
  margin: 8px 0 0 8px;
}

.image-wrapper_5 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 36px;
  border: 1px solid rgba(4, 188, 100, 1);
  width: 36px;
  margin: 19px 0 0 20px;
}

.thumbnail_22 {
  width: 20px;
  height: 20px;
  margin: 8px 0 0 8px;
}

.block_15 {
  width: 230px;
  height: 14px;
  margin: 9px 0 0 105px;
}

.image-text_30 {
  width: 84px;
  height: 14px;
}

.thumbnail_23 {
  width: 14px;
  height: 14px;
}

.text-group_30 {
  width: 62px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.image-text_31 {
  width: 105px;
  height: 14px;
}

.thumbnail_24 {
  width: 14px;
  height: 14px;
}

.text-group_31 {
  width: 82px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.block_16 {
  width: 398px;
  height: 1px;
  border: 1px solid rgba(224, 224, 224, 1);
  margin-top: 26px;
}

.block_17 {
  width: 359px;
  height: 74px;
  margin: 26px 0 0 20px;
}

.image-text_32 {
  width: 165px;
  height: 74px;
}

.image_10 {
  width: 74px;
  height: 74px;
}

.group_18 {
  width: 80px;
  height: 52px;
  margin-top: 11px;
}

.text-group_32 {
  width: 80px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 16px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  white-space: nowrap;
  line-height: 16px;
}

.text-wrapper_18 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  margin-top: 12px;
  width: 66px;
}

.text_66 {
  width: 48px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 12px;
  margin: 6px 0 0 9px;
}

.text-wrapper_19 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  width: 72px;
  margin: 39px 0 0 -4px;
}

.text_67 {
  width: 54px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 12px;
  margin: 6px 0 0 9px;
}

.image-wrapper_6 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 36px;
  border: 1px solid rgba(255, 61, 61, 1);
  width: 36px;
  margin: 19px 0 0 34px;
}

.thumbnail_25 {
  width: 20px;
  height: 20px;
  margin: 8px 0 0 8px;
}

.image-wrapper_7 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 36px;
  border: 1px solid rgba(4, 188, 100, 1);
  width: 36px;
  margin: 19px 0 0 20px;
}

.thumbnail_26 {
  width: 20px;
  height: 20px;
  margin: 8px 0 0 8px;
}

.block_18 {
  width: 230px;
  height: 14px;
  margin: 9px 0 0 105px;
}

.image-text_33 {
  width: 84px;
  height: 14px;
}

.thumbnail_27 {
  width: 14px;
  height: 14px;
}

.text-group_33 {
  width: 62px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.image-text_34 {
  width: 105px;
  height: 14px;
}

.thumbnail_28 {
  width: 14px;
  height: 14px;
}

.text-group_34 {
  width: 82px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.block_19 {
  width: 398px;
  height: 1px;
  border: 1px solid rgba(224, 224, 224, 1);
  margin-top: 26px;
}

.block_20 {
  width: 359px;
  height: 74px;
  margin: 26px 0 0 20px;
}

.image-text_35 {
  width: 165px;
  height: 74px;
}

.image_11 {
  width: 74px;
  height: 74px;
}

.section_21 {
  width: 80px;
  height: 52px;
  margin-top: 11px;
}

.text-group_35 {
  width: 80px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 16px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  white-space: nowrap;
  line-height: 16px;
}

.text-wrapper_20 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  margin-top: 12px;
  width: 66px;
}

.text_68 {
  width: 48px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 12px;
  margin: 6px 0 0 9px;
}

.text-wrapper_21 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  width: 72px;
  margin: 39px 0 0 -4px;
}

.text_69 {
  width: 54px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 12px;
  margin: 6px 0 0 9px;
}

.image-wrapper_8 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 36px;
  border: 1px solid rgba(255, 61, 61, 1);
  width: 36px;
  margin: 19px 0 0 34px;
}

.thumbnail_29 {
  width: 20px;
  height: 20px;
  margin: 8px 0 0 8px;
}

.image-wrapper_9 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 36px;
  border: 1px solid rgba(4, 188, 100, 1);
  width: 36px;
  margin: 19px 0 0 20px;
}

.thumbnail_30 {
  width: 20px;
  height: 20px;
  margin: 8px 0 0 8px;
}

.block_21 {
  width: 230px;
  height: 14px;
  margin: 9px 0 0 105px;
}

.image-text_36 {
  width: 84px;
  height: 14px;
}

.thumbnail_31 {
  width: 14px;
  height: 14px;
}

.text-group_36 {
  width: 62px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.image-text_37 {
  width: 105px;
  height: 14px;
}

.thumbnail_32 {
  width: 14px;
  height: 14px;
}

.text-group_37 {
  width: 82px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.block_22 {
  width: 398px;
  height: 1px;
  border: 1px solid rgba(224, 224, 224, 1);
  margin-top: 26px;
}

.block_23 {
  width: 359px;
  height: 74px;
  margin: 26px 0 0 20px;
}

.image-text_38 {
  width: 165px;
  height: 74px;
}

.image_12 {
  width: 74px;
  height: 74px;
}

.box_33 {
  width: 80px;
  height: 52px;
  margin-top: 11px;
}

.text-group_38 {
  width: 80px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 16px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  white-space: nowrap;
  line-height: 16px;
}

.text-wrapper_22 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  margin-top: 12px;
  width: 66px;
}

.text_70 {
  width: 48px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 12px;
  margin: 6px 0 0 9px;
}

.text-wrapper_23 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  width: 72px;
  margin: 39px 0 0 -4px;
}

.text_71 {
  width: 54px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 12px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 12px;
  margin: 6px 0 0 9px;
}

.image-wrapper_10 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 36px;
  border: 1px solid rgba(255, 61, 61, 1);
  width: 36px;
  margin: 19px 0 0 34px;
}

.thumbnail_33 {
  width: 20px;
  height: 20px;
  margin: 8px 0 0 8px;
}

.image-wrapper_11 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 36px;
  border: 1px solid rgba(4, 188, 100, 1);
  width: 36px;
  margin: 19px 0 0 20px;
}

.thumbnail_34 {
  width: 20px;
  height: 20px;
  margin: 8px 0 0 8px;
}

.block_24 {
  width: 230px;
  height: 14px;
  margin: 9px 0 27px 105px;
}

.image-text_39 {
  width: 84px;
  height: 14px;
}

.thumbnail_35 {
  width: 14px;
  height: 14px;
}

.text-group_39 {
  width: 62px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}

.image-text_40 {
  width: 105px;
  height: 14px;
}

.thumbnail_36 {
  width: 14px;
  height: 14px;
}

.text-group_40 {
  width: 82px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 14px;
}


#artcle-info {
  padding: 20px;
  width: 100%;
  height: 350px;
  background-size: 100% 100%;
  margin-bottom: 40px;
}

#artcle-info .abstract {
  color: #ffffff;
  border-left: 3px solid #F56C6C;
  padding: 10px;
  background-color: rgba(126, 129, 135, 0.3);
}

#artcle-info .timeAndView {
  padding: 20px;
  line-height: 30px;
  font-size: 16px;
  color: #ffffff;
}

pre.has {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.8);
}

img.has {
  width: 100%;
}

#statement {
  border-left: 3px solid #F56C6C;
  padding: 20px;
  background-color: #EBEEF5;
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
</style>
