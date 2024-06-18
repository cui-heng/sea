<template>
  <div class="home" style="padding-left: 280px;padding-right: 280px;font-family: PingFang SC, PingFang SC;">
    <div style="width: 100%;height: 80px;border: 1px solid #fff;position: relative;bottom: 170px;z-index: 999;"></div>
    <el-row id="artList" type="flex" justify="space-around"
      style="position: relative;bottom: 205px;padding-top: 30px;" :gutter="20">
      <div style="background-color: #fff;width: 98.4%;">
        <el-col :span="24" style="padding: 20px;"><span style="font-weight: 500;
font-size: 16px;
color: #8A8A8A;">海洋财经</span>><span style="font-weight: 500;
font-size: 16px;
color: #242629;">有问必答</span>><span style="font-weight: 500;
font-size: 16px;
color: #242629;">{{ answerTit.title }}</span>></el-col>
      <el-col :span="16">

        <el-row class="art-item">
          <el-card shadow="hover">
            <div>
              <p style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #8A8A8A;
line-height: 16px;">来自：{{ answerTit.tag }}</p>
              <p style="font-size: 20px;
font-family: PingFang SC-Bold, PingFang SC;
font-weight: bold;
color: #000000;
line-height: 20px;">{{ answerTit.title }}</p>
              <div class="art-more" style="color: #8A8A8A;">
                <div class="d-flex align-items-center">
                  {{ answerTit.position }} <div class="view" style="margin-left: 50px;"><i class="el-icon-view" />浏览:{{answerTit.viewNumber}}人</div>
                </div>


              </div>
              <div style="padding-top: 20px;">
                <el-button slot="reference"
                  style="color: #fff;background: linear-gradient( 90deg, #1ABCFB 0%, #0796D2 100%);"><router-link to="/login"> <img src="../assets/answer-edit.png"> 我来回答</router-link></el-button>
                <el-button slot="reference" plain type="danger"><router-link to="/login"><img
                      src="../assets/residence.png" style="width: 13px;"> 入驻注册</router-link></el-button>
              </div>


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

          </el-card>
          <!-- <img class="star" src="../assets/star.png"> -->
        </el-row>
        <el-row class="art-item">
          <el-card shadow="hover">
            <span style="font-size: 20px;
font-family: PingFang SC-Bold, PingFang SC;
font-weight: bold;
color: #000000;
line-height: 20px;  border-left: 3px solid #1ABCFC;
  padding-left: 5px;
  cursor: pointer;">共{{ artList.length }}个顾问问答</span>
            <div v-for="item in artList" style="border-bottom:  1px dashed #E0E0E0;padding-top: 45px;">
              <div style="width: 748px;
height:109px;
border-radius: 10px 10px 10px 10px;">
                <el-col :span="4" style="width: 74px; margin-right: 13px;">
                  <img :src="baseUrlImg + item.avatar" style="width: 74px;
height: 74px;border-radius: 50%" />
                </el-col>
                <el-col :span="8">
                  <div class="turn_bott">

                    <span style="font-weight: bold;
font-size: 16px;
color: #242629;">{{ item.nickName }}</span>
                  <div style="text-align: center;line-height: 24px;font-size: 12px;margin-top: 10px;">
                    <div style="width: 72px;height: 24px;background-color: #F7F7F7;float: left;font-weight: 500;
font-size: 12px;
color: #7A7A7A;">{{ item.position }}
                    </div>
                    <div style="width: 72px;height: 24px;background-color: #F7F7F7;float: left;font-weight: 500;
font-size: 12px;
color: #7A7A7A;margin-left: 10px;">帮助{{
        item.helpNumber
      }}</div>
                  </div>
                  </div>


                </el-col>
                <el-popover placement="top" title="电话咨询" width="200" trigger="click">
                  <el-button slot="reference" style="background-color: #FF3D3D;color: #fff;margin-top: 10px;"><img
                      src="../assets/p.png">电话咨询</el-button>
                </el-popover>
                <el-popover placement="top" title="微信咨询" width="200" trigger="click">
                  <!-- <img :src="baseUrlImg + queryData.wxQrCode" style="width: 100%;" /> -->
                  <el-button slot="reference" style="background-color: #10CB8C;color: #fff;margin-left: 60px;margin-top: 10px;"><img
                      src="../assets/v.png">微信咨询</el-button>
                </el-popover>


              </div>
              <div style="font-family: PingFang SC, PingFang SC;
font-weight: 500;
font-size: 18px;
color: #707070;
line-height: 36px;
text-align: justified;
font-style: normal;
text-transform: none;"><span v-html="item.result"></span></div>
            </div>
          </el-card>
          <!-- <img class="star" src="../assets/star.png"> -->
        </el-row>
        <div style="position: relative;top: -20px;">
          <img @click="dialogVisible = true" src="../assets/lijt.png" style="float: right;position: relative;top: 50px;left: -100px;">
        <img src="../assets/tw.png" style="float: right;"/>
      </div>
      
        <el-row class="art-item" style="clear: both;">
          <div class="fx_sheng">版权及免责声明：本文内容由入驻海洋财经网站的作者自发贡献，该文观点仅代表作者本人，与本网站立场无关，不对您构成任何投资建议。用户应基于自己的独立判断，自行决策投资行为并承担全部风险。本站仅提供信息存储空间服务，不拥有所有权，不承担相关法律责任。如发现本站有涉嫌抄袭侵权/违法违规的内容，请发送邮件至liuxg969@163.com 举报，一经查实，本站将立刻删除。 </div>
          <!-- <el-card shadow="hover"> -->
          <div class="item">
            <div class="tag">
              <el-card class="box-card" style="margin-top: 20px;">
                <div slot="header" class="d-flex align-items-center">
                  <span style="font-size: 20px;
font-family: PingFang SC-Bold, PingFang SC;
font-weight: bold;
color: #000000;
line-height: 20px;">其他类型问题1</span>
                </div>
                <div style="width: 100%;
height: 49px;
border-radius: 10px 10px 10px 10px;" v-for="item in  artList1">
                  <div>
                    <div style="display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;background-color:#17B6F5;" />
                    <span style="font-size: 14px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #000000;
line-height: 20px;padding-left: 10px;">{{ item.title }}{{ item.replyCount }}</span>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
          <!-- </el-card> -->
          <!-- <img class="star" src="../assets/star.png"> -->
        </el-row>
        <div class="block pagination">
          <el-pagination layout="prev, pager, next" :total="total" />
        </div>
      </el-col>

      <el-col id="side" :span="8" class="hidden-sm-and-down">
        <el-col :span="24" style="padding: 0px;position: relative;height: 16px;"></el-col>
        <div class="item">
          <div class="tag">
            <el-card class="box-card" style="border-radius:  15px;position: relative;top: -20px">
                  <div slot="header" class="d-flex align-items-center" style="width: 100%;">
                    <span style="font-size: 20px;
font-family: PingFang SC-Bold, PingFang SC;
font-weight: bold;
color: #000000;
line-height: 20px;  border-left: 3px solid #1ABCFC;
  padding-left: 5px;
  cursor: pointer;">期货顾问推荐</span>
                    <!-- <span style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #8A8A8A;
line-height: 16px;font-size: 14px;position: relative;left: 100px;">更多></span> -->
                  </div>
                  <div v-for="item in qhguwt">
                    <div style="padding-top: 20px;">
                      <div style="width: 22px;
height: 22px;float: left;">
                        <img style="border-radius: 50%;width:62px;height:62px;" :src="baseUrlImg + item.avatar" />
                      </div>
                      <div class="mar_to_nick" style="">{{ item.nickName }}</div>
                      <div style="text-align: center;line-height: 24px;font-size: 12px;position: relative;left: 70px;">
                        <div style="width: 72px;height: 24px;background-color: #F7F7F7;float: left;">{{ item.remark }}
                        </div>
                        <div style="width: 72px;height: 24px;background-color: #F7F7F7;float: left;margin-left: 10px;">
                          帮助{{
        item.helpNumber
      }}</div>
                        <div class="turn_to">
                          <img src="../assets/2924.png"><img src="../assets/2925.png" style="padding-left: 10px;">
                        </div>
                      </div>
                      <div class="art-more1">
                        <div class="view"><img src="../assets/g-zan.png">{{ item.userViews }}</div>
                        <div class="view"><i class="el-icon-view" />：{{ item.userViews }}</div>
                      </div>
                      <!-- <span style="font-size: 14px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #242629;
line-height: 22px;margin-left: 10px;">{{ item.position }}</span>


                  <div class="view"><i class="el-icon-view" style="font-size: 12px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #707070;
line-height: 14px;" />{{ item.userViews }}</div> -->
                      <div style="width: 100%;height: 16px;border-bottom:1px dashed #E0E0E0;"></div>
                    </div>
                  </div>
                </el-card>
          </div>
        </div>
        <div class="item">
          <div class="tag">
            <el-card class="box-card">
              <div slot="header" class="d-flex align-items-center">
                <span style="font-size: 20px;
font-family: PingFang SC-Bold, PingFang SC;
font-weight: bold;
color: #000000;
line-height: 20px;">热议问题</span>
              </div>
              <div style="width: 100%;
height: 49px;
border-radius: 10px 10px 10px 10px;" v-for="item in HotAnswer">
                <div>
                  <div style="display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;background-color:#17B6F5;" />
                  <span style="font-size: 14px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #000000;
line-height: 20px;padding-left: 10px;">{{ item.title }}{{ item.replyCount }}</span>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
      
</div>
    </el-row>

  </div>
</template>

<script>
import { getAnswerInfo, getRecommendUser, getHotAnswer, getOtherTypeAnswer, insertLeaveMessage } from '@/api/index'
import route from '@/router'
export default {

  name: 'Index',
  components: {

  },
  data() {
    return {
      textarea:'',
      textarea1:'',
      dialogVisible: false,
      answerTit: {},
      listData: [],
      artList: [],
      artList1: [],
      qhguwt: [],
      HotAnswer: [],
      queryParam: {
        pagesize: 10,
        pagenum: 1
      },
      currentPage: 1,
      count: 0,
      total: 0
    }
  },
  created() {
    getAnswerInfo({ answerId: route.history.current.params.id }).then(res => {
      this.artList = res.data.answerReplyList
      this.answerTit = res.data.answer
    })
  },
  mounted() {
    this.getArtList()
  },
  methods: {

    
    handleCurrentChange: function (currentPage) {
      this.queryParam.pagenum = currentPage
      // eslint-disable-next-line no-console
      console.log(this.currentPage) // 点击第几页
      this.getArtList()
    },
    // 获取文章列表
    async getArtList() {
      // const res = await getAnswer({
      //   size: this.queryParam.pagesize,
      //   page: this.queryParam.pagenum,
      //   searchText: ''
      // })
      // this.artList = res.data.list
      // this.total = res.data.total
      // eslint-disable-next-line no-console
      console.log(this.artList)
      const res = await getOtherTypeAnswer()
      this.artList1 = res.data
      const res1 = await getRecommendUser()
      this.qhguwt = res1.data
      const res2 = await getHotAnswer()
      this.HotAnswer = res2.data
    },
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
  }
}
</script>

<style scoped lang="scss">

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
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.art-more1 {
  margin-left: 20%;
  position: relative;
  top: -2px;
  width: 60%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* position: relative;
  top: 25px; */
}

.art-more1 .view {
  color: #aaa;
  font-family: PingFang SC, PingFang SC;
  font-size: 12px;
}

.art-more .view {
  font-family: PingFang SC, PingFang SC;
  color: #aaa;
}

h5 {
  font-size: 18px;
}

.pagination {
  background-color: #F9F9F9;
}
.art-item {
  position: relative;
}
.fx_sheng {
  font-size: 12px;
  color: #999;
  font-family: PingFang SC, PingFang SC;
  line-height: 19px;
  padding: 0 26px;
}
.mar_to_nick {
  width: 66px;font-size: 16px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: 500;
  color: #7A7A7A;
  line-height: 12px;height: 24px;margin-left: 70px;
  margin-top: 12px;
}
.align-items-center {
  font-family: PingFang SC-Medium, PingFang SC;
}
.turn_to {
  transform: translateY(-26px);
}
.turn_bott {
  transform: translateY(15px);
}

</style>
