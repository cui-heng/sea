<template>
  <div class="bak" style="font-family: PingFang SC, PingFang SC;">
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
    <router-link to="/login" tag="span">
      <el-button type="primary"
        style="color: #FFFFFF;background: linear-gradient(90deg, #1ABCFC 0%, #0796D2 100%);margin-top: 200px;position: relative;left: 71%;">注册/登录</el-button>
    </router-link>
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
    <!-- 弹窗的内容 -->
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
          <!-- <span class="text_52"
            >请详细描述您的问题，有助于理财顾问更准确的分析问题哦!</span
          > -->
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
            <!-- <span class="text_56">请输入手机号码</span> -->
          </div>
        </div>
        <div class="text-wrapper_22 flex-col" @click="lydata">
          <span class="text_53" >提交</span>
        </div>
      </div>
    <!-- 关闭按钮 -->

    </div>

  </div>
</template>

<script>
import {insertLeaveMessage} from '../api/index.js'
export default {
  data() {
    return {
      textarea:'',
      textarea1:'',
      dialogVisible:false,
      input2: '',
      activeIndex: '/home'
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

<style>
.popup {
  z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999;
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
#top-menu {
  display: flex;
  max-width: 1024px;
  width: 70%;
  margin-left: 15%;
  margin-top: 50px;
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
    width: 64%;
    height: 3px;
    display: block;
    background: #fff;
    margin: 0 auto;
    margin-top: -7px;
    border-radius: 3px;
}

::v-deep .is-active {
  border: none !important;
}
</style>
