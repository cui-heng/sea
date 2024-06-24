<template>
  <div class="home" style="padding-left: 280px;padding-right: 280px;font-family: PingFang SC, PingFang SC;">
    <div style="width: 100%;height: 80px;border: 1px solid #fff;position: relative;bottom: 170px;z-index: 999;"></div>
    <el-col>
      <el-row id="artList" type="flex" justify="space-around" style="position: relative;bottom: 175px;" :gutter="20">
        <div style="background-color: #fff;width: 98.4%;">
          <el-col :span="24" style="padding: 20px;"><span style="font-weight: 500;
font-size: 16px;
color: #8A8A8A;">海洋财经</span>><span style="font-weight: 500;
font-size: 16px;
color: #242629;">有问必答</span>></el-col>

          <el-col :span="16">

            <el-row class="art-item">
              <el-card shadow="hover" style="border-radius:  15px;">
                <div @click="getArtList()" style="text-align: right;color: #8A8A8A; cursor: pointer;" slot="header">
                  <span style="padding-right: 5px;">全部 |</span> <span
                    style="padding-right: 5px;">热门回答 |</span> <span
                    style="padding-right: 5px;">最新回答 |</span> <span 
                    style="padding-right: 5px;">最新点赞回答
                    |</span> <span  style="padding-right: 5px;">最新分享回答</span>
                </div>
                <div v-for="item in artList" style="border-bottom:  1px dashed #E0E0E0;">
                  <p style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #8A8A8A;
line-height: 16px;">来自：期货</p>
                  <router-link :to="`/wendaxiangqing/${item.id}`" tag="span">
                    <p style="font-size: 20px;
font-family: PingFang SC-Bold, PingFang SC;
font-weight: bold;
color: #000000;
line-height: 10px;cursor: pointer;">{{ item.title }}</p>
                  </router-link>
                  <el-row class="art-body">

                    <div @click="$router.push('/ydy/'+item.userId)"><img style="border-radius: 50%;width:50px;height: 50px;" :src="baseUrlImg + item.avatar"></div>
                    <div class="side-abstract" style="position: relative;top: -15px;">
                      <p style="font-size: 16px;
font-family: PingFang SC-Bold, PingFang SC;
font-weight: bold;
color: #242629;
line-height: 0px;padding-left: 10px;position: relative;top:-6px;right: -3px;">{{ item.nickName }}<img src="../assets/2929.png" style="position: relative;top:3px;right: -3px;"/> <img
                          src="../assets/2921.png" style="position: relative;top:4px;right: -3px;"/></p>
                      <div style="text-align: center;line-height: 24px;font-size: 12px;">
                        <div style="width: 72px;height: 24px;background-color: #F7F7F7;float: left;">{{ item.position }}
                        </div>
                        <div style="width: 72px;height: 24px;background-color: #F7F7F7;float: left;margin-left: 10px;">
                          帮助{{
        item.helpNumber
      }}</div>
                      </div>
                      <router-link :to="`/wendaxiangqing/${item.id}`" >
                        <p style="font-size: 18px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #707070;
line-height: 26px;">
                          {{ item.description.slice(0,80) }}...
                        </p>
                        <router-link :to="`/wendaxiangqing/${item.id}`" tag="span"><p style="color: #1ABCFC;">阅读全文<img src="../assets/check-more.png" style="position: relative;top:-3px;right: -3px;"/></p></router-link>
                      </router-link>
                    </div>

                  </el-row>
                  <div class="art-more">
                    <div class="view"><img src="../assets/hd-icon.png" style="width: 12px;"/>
                      {{ item.replyCount }}个回答
                    </div>
                    <div class="view"><i class="el-icon-view" />{{ item.viewNumber }}次浏览</div>

                    <el-row class="art-info d-flex align-items-center justify-content-start">
                      <div class="view"><i class="el-icon-time" />：{{ item.createTime }}</div>

                    </el-row>

                  </div>
                </div>
              </el-card>
              <!-- <img class="star" src="../assets/star.png"> -->
            </el-row>

            <div class="block pagination">
              <el-pagination layout="prev, pager, next" :total="total" />
            </div>
          </el-col>
          <el-col id="side" :span="8" class="hidden-sm-and-down">
            <div class="item">
              <div class="tag">
                <el-card class="box-card" style="border-radius:  15px;">
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
                      <div style="float: left;width: 22px;height: 22px;" >
                        <img @click="toUserPage(item.userId)"  style="
    position: relative;
    z-index: 999;border-radius: 50%;width:62px;height:62px;" :src="baseUrlImg + item.avatar" />
                      </div>
                      <div class="turn_top_bo">
                        <div style="width: 66px;font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #7A7A7A;
line-height: 12px;height: 24px;margin-left: 70px;">{{ item.nickName }}</div>
                      <div style="text-align: center;line-height: 24px;font-size: 12px;position: relative;left: 70px;">
                        <div style="width: 72px;height: 24px;background-color: #F7F7F7;float: left;">{{ item.remark }}
                        </div>
                        <div style="width: 72px;height: 24px;background-color: #F7F7F7;float: left;margin-left: 10px;">
                          帮助{{
                          item.helpNumber
                        }}</div>
                  <div class="img_box_sty">
                    <img src="../assets/2924.png" @click="dialogVisible=true"><img src="../assets/2925.png" style="padding-left: 10px;" @click="dialogVisible1=true">
                  </div>
                      </div>
                      </div>
                      <div class="art-more1">
                        <div class="view"><img src="../assets/g-zan.png">{{ item.userViews }}</div>
                        <div class="view"><i class="el-icon-view" />：{{ item.userViews }}</div>
                      </div>
                      <div style="width: 100%;height: 10px;border-bottom:1px dashed #E0E0E0;"></div>
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
line-height: 20px;border-left: 3px solid #1ABCFC;
  padding-left: 5px;
  cursor: pointer;">热议问题</span>
                  </div>
                  <div style="width: 100%;
height: 49px;
border-radius: 10px 10px 10px 10px;" v-for="item in HotAnswer">
                    <div style="display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;background-color:#17B6F5;"></div>

                      <span @click="toTitLe(item.id)" style="font-size: 14px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #000000;
line-height: 20px;
"><span style="
border-radius: 0px 0px 0px 0px;padding-left: 10px;"></span>{{ item.title }}<span style="color: #7A7A7A;font-size: 12px;padding-left: 10px;">{{
                          item.replyCount }}个回答</span></span>

                  </div>
                </el-card>
              </div>
            </div>
          </el-col>
        </div>
      </el-row>
    </el-col>
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
          <span class="text_50" style="text-align: center;">{{serviceInfo.nickName}}</span>
        </div>
        <div class="image-wrapper_16 flex-row">
          <img
            class="image_13"
            referrerpolicy="no-referrer"
            :src="baseUrlImg+serviceInfo.wxQrCode"
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
            <span class="text-group_43">{{serviceInfo.phonenumber}}</span>
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
    </div>
    <div v-if="dialogVisible" class="popup">
    <!-- 弹窗的内容 -->
    <div class="section_9 flex-col" style="position: absolute;left: 20%;">
        <div class="image-wrapper_11 flex-row">
          <img @click="dialogVisible=false"
            class="thumbnail_46"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG1a1730c41af2279e3053b2e67cc48a4c.png"
          />
        </div>
        <div class="group_18 flex-row">
          <div class="image-text_38 flex-col justify-between">
            <img
              class="image_12"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGfdd1de355ade847646e5b7e03b5ef02c.png"
            />
            <span class="text-group_431">{{serviceInfo.nickName}}</span>
          </div>
        </div>
        <div class="group_19 flex-row">
          <div class="image-text_39 flex-row justify-between">
            <div class="box_17 flex-col">
              <img src="../assets/Vector.png">
            </div>
            <span class="text-group_44">{{serviceInfo.phonenumber}}</span>
          </div>
        </div>
        <div class="group_20 flex-row">
          <div class="text-wrapper_21">
            <span class="text_54">*</span>
            <span class="text_55"
              >咨询时请说明来自海洋财经，以便得到更佳服务</span
            >
          </div>
        </div>
      </div>
    <!-- 关闭按钮 -->

    </div>

  
    <!-- <el-dialog
    style="z-index: 999999;"
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog> -->
  </div>
</template>

<script>
import { getAnswer, getRecommendUser, getHotAnswer,getAlertInfo } from '@/api/index'
import service from '@/utils/request'

export default {

  name: 'Index',
  components: {

  },
  data() {
    return {
      dialogVisible:false,
      dialogVisible1:false,
      listData: [],
      artList: [],
      qhguwt: [],
      HotAnswer: [],
      queryParam: {
        pagesize: 10,
        pagenum: 1
      },
      currentPage: 1,
      count: 0,
      total: 0,
      serviceInfo: {}
    }
  },
  created() {
          this.getService()

  },
  mounted() {
    this.getArtList()
  },
  methods: {
    toTitLe(id) {
      this.$router.push('/wendaxiangqing/'+id)
    },
    async getService() {

      const {data} = await getAlertInfo({})
      this.serviceInfo = data
    },
    handleCurrentChange: function (currentPage) {
      this.queryParam.pagenum = currentPage
      // eslint-disable-next-line no-console
      console.log(this.currentPage) // 点击第几页
      this.getArtList()
    },
    // 获取文章列表
    async getArtList(val) {
      const res = await getAnswer({
        size: this.queryParam.pagesize,
        page: this.queryParam.pagenum,
        searchText: val
      })
      this.artList = res.data.list
      this.total = res.data.total
      // eslint-disable-next-line no-console
      console.log(this.artList)
      const res1 = await getRecommendUser()
      this.qhguwt = res1.data
      const res2 = await getHotAnswer()
      this.HotAnswer = res2.data
    },
    toUserPage(id) {
      console.log(id)
      this.$router.push('/ydy/'+id)

    }
  }
}
</script>

<style scoped>
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
  top: -6px;
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

.box_17 {
  /* background-color: rgba(26, 188, 252, 1); */
  width: 30px;
  height: 30px;
  margin-top: 5px;
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
  margin: 0;
}
.img_box_sty {
  transform: translateY(-27px);
}
.turn_top_bo {
  transform: translateY(10px);
}
</style>
