<template>
    <div class="header_wrap">
      <div class="top_line"></div>
      <div class="top_nav">
        <div class="nav_logo">
          <img src="@/assets/newBanner/sea_img_logo.png" alt="">
        </div>
        <div class="nav_right">
          <div class="login_top">
            <span>登录</span>
            |
            <span>注册</span>
          </div>
          <div class="nav_click">
            <el-menu :default-active="activeIndex" :router="true" text-color="#474747" id="top-menu" active-text-color="#0242AC"
              class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item class="first_menu" index="/home">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首页</el-menu-item>
              <el-menu-item index="/archive">&nbsp;&nbsp;百问百答</el-menu-item>
              <el-menu-item class="thired_menu" index="/about">期货手续费</el-menu-item>
              <el-menu-item index="/about1">期货保证金</el-menu-item>
              <el-menu-item class="last_li" index="/about2">期货一对一服务</el-menu-item>
            </el-menu>
          </div>
        </div>
      </div>
      <div class="banner_wrap">
        <img class="banner_bg" src="@/assets/newBanner/banner_bg.png" alt="">
        <img class="info_text" src="@/assets/newBanner/you_need.png" alt="">
        <div class="search_box">
          <div class="ipt_box">
            <el-input v-model="searchVal" placeholder="请输入搜索内容"></el-input>
          </div>
          <div class="search_btn">
            <img src="@/assets/newBanner/turn_big.png" alt="">
            搜索
          </div>
        </div>
      </div>
    </div>
  <!-- <div class="bak" style="font-family: PingFang SC, PingFang SC;">
    <div style="position: absolute;left: 40vw;">
      
    <el-input placeholder="请输入关键词" v-model="input2"
      style="width: 368px;margin-top: 200px;position: relative;left: 70%;">
      <template slot="prepend"><el-button 
          style="color: #000;">寻宝</el-button></template>
      <template slot="append">
        <el-button type="primary"
          style="color: #FFFFFF;background: linear-gradient(90deg, #1ABCFC 0%, #0796D2 100%);" @click="dialogVisible=true">问一问</el-button>

      </template>
    </el-input>
    <nuxt-link to="/login" tag="span">
      <el-button type="primary"
        style="color: #FFFFFF;background: linear-gradient(90deg, #1ABCFC 0%, #0796D2 100%);margin-top: 200px;position: relative;left: 71%;">注册/登录</el-button>
    </nuxt-link>
  </div>
    <div style="position: absolute;left: 270px;top: 150px;"> <img src="../assets/img/2902.png" />
      <img src="../assets/img/2554.png" style="position:relative;bottom: 20px;left: 10px;" />
    </div>
    <el-menu :default-active="activeIndex" :router="true" text-color="#fff" id="top-menu" active-text-color="#fff"
      class="el-menu-demo" mode="horizontal" @select="handleSelect" style="position: absolute;left: 326px;top: 220px;z-index: 9999;font-family: PingFang SC, PingFang SC;">
      <el-menu-item ></el-menu-item>
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/archive">有问必答</el-menu-item>
      <el-menu-item index="/about">期货手续费</el-menu-item>
      <el-menu-item index="/about1">期货保证金</el-menu-item>
      <el-menu-item index="/about2">期货一对一服务</el-menu-item>
    </el-menu>
    <div v-if="dialogVisible" class="popup">
    <div class="group_25 flex-col">
        <div class="block_36 flex-row justify-between">
          <span class="text_51">期货顾问一对一</span>
          <img
            class="thumbnail_46"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG1a1730c41af2279e3053b2e67cc48a4c.png"
            @click="dialogVisible=false"
          />
        </div>
        <div class="box_19 flex-col"></div>
        <div class="text-wrapper_21 flex-col">
          <el-input
  type="textarea"
  :rows="10"
  placeholder="请详细描述您的问题，有助于理财顾问更准确的分析问题哦!"
  v-model="textarea">
</el-input>
        </div>
        <div class="block_37 flex-row justify-between">
          <div class="text-wrapper_23">
            <span class="text_54">*</span> <span class="text_55">联系方式</span>
          </div>
          <div class="text-wrapper_24 flex-col">
            <el-input
style="margin-top: 10px;"
  placeholder="请输入手机号码"
  v-model="textarea1">
</el-input>
          </div>
        </div>
        <div class="text-wrapper_22 flex-col" @click="lydata">
          <span class="text_53" >提交</span>
        </div>
      </div>

    </div>

  </div> -->
</template>

<script>
import {insertLeaveMessage} from '@/services/index.js'
export default {
  data() {
    return {
      textarea:'',
      textarea1:'',
      dialogVisible:false,
      input2: '',
      activeIndex: '/home',
      searchVal: ''
    }
  },
  methods: {
    lydata(){
let param={
  content:this.textarea,
  mobile:this.textarea1
}
insertLeaveMessage(param).then(res=>{
  if(res.code==1){
    this.dialogVisible=false
  }else{
    this.$message(res.message)
  }

})
    },
    handleSelect(val) {
      this.activeIndex = val
    },
    toggleLang(lang) {
      if (lang === 'zh') {
        localStorage.setItem('locale', 'zh')
        this.$i18n.locale = localStorage.getItem('locale')
        this.$message({
          message: '切换为中文！',
          type: 'success'
        })
      } else if (lang === 'en') {
        localStorage.setItem('locale', 'en')
        this.$i18n.locale = localStorage.getItem('locale')
        this.$message({
          message: 'Switch to English!',
          type: 'success'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header_wrap {
  font-family: PingFang;
  margin-bottom: 36px;
  width: 100%;
  height: 510px;
  .top_line {
    height:10px;
    width: 100vw;
    background: #0242AC;
  }
  .top_nav {
    height: 100px;
    background: #fff;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    .nav_logo {
      display: flex;
      align-items: center;
      width: 251px;
      height: 100px;
      img {
        width: 251px;
        height: 52px;
      }
    }
  }
  .banner_wrap {
    width: 100vw;
    height: 400px;
    position: relative;
    .banner_bg {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .info_text {
      position: absolute;
      width: 460px;
      height: 58px;
      margin-left: 50%;
      transform: translateX(-230px);
      top: 100px;
    }
    .search_box {
      display: flex;
      width: 713px;
      margin: 0 auto;
      transform: translateY(207px);
      height: 60px;
      ::v-deep .ipt_box {
        width: 543px;
        height: 60px;
        background: #FFFFFF;
        border-radius: 6px 0px 0px 6px;
        .el-input {
          height: 100%;
          input {
            height: 100%;
            font-size: 26px;
          }
          input::placeholder {
            font-family: PingFang SC;
            font-weight: 500;
            font-size: 26px;
            color: #CECECE;
          }
        }
      }
      .search_btn {
        flex: 1;
        height: 60px;
        background: #0242AC;
        border-radius: 0px 6px 6px 0px;
        font-family: PingFang SC;
        font-weight: 500;
        font-size: 26px;
        color: #FFFFFF;
        line-height: 59px;
        text-align: center;
        img {
          width: 30px;
          transform: translateY(7px);
          height: 30px;
        }
      }
    }
  }
  .nav_right {
    text-align: right;
    .login_top {
      font-weight: 500;
      font-size: 14px;
      color: #474747;
      transform: translateY(10px);
      height: 38px;
    }
  }
}
.popup {
  z-index: 999999999;
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
::v-deep #top-menu {
  display: flex;
  .el-menu-item {
    font-weight: 500;
    font-size: 20px;
    color: #474747;
    margin: 0;
    width: 160px;
    text-align: center;
  }
  .last_li {
    margin-right: 0 !important;
    padding-right: 0;
    text-align: right;
  }
}

.bak {
  background-image: url(../assets/img/2901.png);
  background-size: 100% 100%;
  height: 400px;
}

.el-menu {
  background-color: transparent !important;
}

.el-menu-item.is-active,
.el-submenu.is-active>.el-menu-item {
  background-color: transparent !important;

}

.el-menu-item {
  font-size: 16px;
  color: #fff;
  margin-left: 50px;
  background-color: transparent !important;
}

.el-menu.el-menu--horizontal {
  border-bottom: none
}

/* .el-menu-item:hover {
  color: #fff;
  background-color: transparent !important;
} */
.group_25 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width: 613px;
  height: 500px;
  margin: 190px 0 0 154px;
}

.block_36 {
  width: 337px;
  height: 20px;
  margin: 30px 0 0 237px;
}

.text_51 {
  width: 140px;
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

.thumbnail_46 {
  width: 16px;
  height: 17px;
  margin-top: 2px;
}

.box_19 {
  background-color: rgba(224, 224, 224, 1);
  width: 613px;
  height: 1px;
  margin-top: 30px;
}

.text-wrapper_21 {
  background-color: rgba(246, 246, 246, 1);
  border-radius: 10px;
  height: 227px;
  width: 573px;
  margin: 20px 0 0 20px;
}

.text_52 {
  width: 422px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
  margin: 20px 0 0 20px;
}

.block_37 {
  width: 573px;
  height: 52px;
  margin: 16px 0 0 20px;
}

.text-wrapper_23 {
  width: 73px;
  height: 16px;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
  margin-top: 18px;
}

.text_54 {
  width: 73px;
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

.text_55 {
  width: 73px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.text-wrapper_24 {
  /* background-color: rgba(246, 246, 246, 1); */
  border-radius: 10px;
  height: 52px;
  width: 482px;
}

.text_56 {
  width: 112px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
  margin: 18px 0 0 20px;
}

.text-wrapper_22 {
  background-image: linear-gradient(
    90deg,
    rgba(26, 188, 252, 1) 0,
    rgba(7, 150, 210, 1) 100%
  );
  border-radius: 10px;
  height: 52px;
  width: 573px;
  margin: 25px 0 27px 20px;
}

.text_53 {
  width: 32px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
  margin: 18px 0 0 271px;
}
</style>
<style scoped lang="scss">
  ::v-deep .el-menu-demo {

      li {
        font-weight: 500;
        font-size: 20px;
        color: #FFFFFF;
        padding: 0;
        margin: 0 40px;
      }
  }
  ::v-deep .is-active::after {
    content: '';
    width: 110px;
    height: 4px;
    display: block;
    background: #0242AC;
    margin: 0 auto;
    margin-top: -1.5px;
    border-radius: 3px;
    position: absolute;
    left: 30px;
}
.first_menu::after {
  left: 40px !important;
}
.thired_menu::after {
  left: 23px !important;
}

::v-deep .is-active {
  border: none !important;
  position: relative;
}
</style>
