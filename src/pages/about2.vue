<template>
  <div style="width: 80%;margin: 0 auto;background-color: #fff;">
    <ul class="bread_crumbs">
      <li>海洋财经</li>
      <img src="@/assets/right_img.png"/>
      <li>期货一对一服务</li>
      <img src="@/assets/right_img.png"/>
    </ul>
    <img src="@/assets/img/2913.png" style="width: 100%;height: 400px;position: absolute;left: 0;top:0;z-index: 9;" />
    <img src="@/assets/img/2625.png" style="width: 30%;position: relative;top: 20px;z-index: 19;left:35%;" />
    <el-row :gutter="10" style="z-index: 999999;position: relative;top: -15px;width: 106%;left: -47px;display: flex;padding-left: 0px;padding-right: 60px">
      <el-col :span="5" v-for="item in dataList" style="margin: 0 auto;">
        <div class="grid-content bg-purple" style="padding-top: 46px;
    padding-left: 6px;width: 302px;height: 182px;display: flex;  
    align-items: center;margin-top: 60px;">
          <el-col :span="11">
            <router-link :to="`/ydy/${item.userId}`" tag="span" style="cursor: pointer;"> <img style="width: 132px;height: 156px;"
                :src="baseUrlImg + item.avatar"></router-link>
                <div style="width: 132px;
                height: 42px;background-color: rgba(0,0,0,0.5);position: relative;bottom: 46px;font-size: 12px;  color: #fff;text-align: center;line-height: 46px;font-family: PingFang SC, PingFang SC;
                font-weight: 500;
                font-size: 18px;
                color: #FFFFFF;">{{ item.remark
                }}</div>
          </el-col>
          <el-col :span="12" class="right_detail_sty">
            <p style="width: 87px;
              height: 18px;
              font-family: PingFang SC, PingFang SC;
              font-weight: 500;
              font-size: 18px;
              color: #000000;
              line-height: 31px;
              text-align: left;
              font-style: normal;
              margin-bottom: 39px;
              text-transform: none;">{{ item.nickName }}</p>
                          <p style="width: 48px;
              height: 16px;
              font-family: PingFang SC, PingFang SC;
              font-weight: 500;
              font-size: 16px;
              color: #8A8A8A;
              line-height: 16px;
              text-align: left;
              font-style: normal;
              text-transform: none;">已帮助</p>
                          <p style="width: 74px;
              font-family: PingFang SC, PingFang SC;
              font-weight: bold;
              font-size: 18px;
              margin-bottom: 8px;
              color: #000000;
              text-align:left;
              font-style: normal;
              text-transform: none;">{{ item.helpNumber==null?"0":item.helpNumber }}人</p>
            <el-button style="background-color: #023665;color: #fff;width: 126px;font-size: 16px;height: 36px;display: flex;font-weight: bold;
          align-items: center;
          justify-content: center;
          margin-top: 4px;"><router-link :to="`/ydy/${item.userId}`" tag="span" style="cursor: pointer;"><img src="../assets/p.png" style="width: 17px;transform: translate(-17px, 1px);"/> 咨询</router-link></el-button>

          </el-col>
        </div>
      </el-col>
    </el-row>
    <div style="margin-top: 64px;text-align: center;" class="height_tiao">
      <div style="box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);;padding: 0.1px 1px 0.1px 1px; margin: 0 auto;border-radius: 10px;padding: 0 70px;">
      <p><img src="../assets/l.png" style="padding-right: 10px; transform: translateY(5px);"><span class="quest">顾问动态:</span><span class="last_sp" v-html="dataList4"></span></p>
    </div>
    </div>
    <div style="padding-left: 170px;padding-right: 170px; width: 1500px">
    <p style="
font-family: PingFang SC, PingFang SC;
font-weight: bold;
font-size: 22px;
color: #000000;">全国顾问</p><el-row :gutter="10" style="position: relative;">
      <el-row class="personal_box" :gutter="30">
        <el-col class="sha_sty" :span="8" style="
border-radius: 0px 0px 0px 0px;background-color: #fff;">
<div class="header">   <p class="ren_gw" style="text-align: center;color: #fff;font-size: 24px;line-height: 140px;">人气顾问</p>
<p class="bottom_per" style="font-size: 16px;
color: #FFFFFF;
line-height: 0px;text-align: center;position: relative;top: -60px;">最具影响力的理财顾问</p></div>

          <!-- <img src="../assets/img/3491.png" style="width: 100%;"> -->
          <el-row v-for="item in dataList1.slice(0,3)"style="padding: 15px 0px 10px 0px;">
            <el-col :span="24" style="margin-left: 20px;">
              <el-col :span="6" class="wid_au">
             
                <img @click="toUserDetail(item.userId)" class="wid_74" style="border-radius: 50%;" :src="baseUrlImg + item.avatar"></el-col>
              <el-col :span="9">
                <span style="
                  font-family: PingFang SC, PingFang SC;
                  font-weight: bold;
                  font-size: 16px;
                  color: #242629;
                  text-align: justified;font-style: normal;">
                  {{ item.nickName }}  
                </span>
                <br>
                <div style="width: 100%;height: 10px;"></div>
                <div class="btn_lab" style="background-color: #F7F7F7; color: #7A7A7A;display: inline;padding: 6px 9px;font-size: 12px; font-family: PingFang SC, PingFang SC;">{{ item.remark }}</div>
                <div class="btn_lab" style="background-color: #F7F7F7;color: #7A7A7A;display: inline;padding: 6px 9px;margin-left: 10px;font-size: 12px; font-family: PingFang SC, PingFang SC;">帮助{{ item.helpNumber
 }}</div>
              </el-col>
              <el-col class="btn_img" :span="9">   <img src="../assets/2924.png" @click="dialogVisible=true"><img src="../assets/2925.png" style="padding-left: 10px;" @click="dialogVisible1=true"></el-col>
              <el-col :span="14">
                <div class="art-more1">
                    <div class="view"><img src="../assets/g-zan.png" style="padding-right: 5px">好评：{{ item.userViews }}</div>
                    <div class="view"><i class="el-icon-view" style="padding-right: 5px" />浏览量：{{ item.userViews }}</div>
                  </div>
              </el-col>
            </el-col>
          </el-row>
        </el-col>
        <el-col class="sha_sty" :span="8" style="
border-radius: 0px 0px 0px 0px;background-color: #fff;">
<div class="header">   <p class="ren_gw" style="text-align: center;color: #fff;font-size: 24px;line-height: 140px;">人气顾问</p><p class="bottom_per" style="font-size: 16px;
color: #FFFFFF;
line-height: 0px;text-align: center;position: relative;top: -60px;">最具影响力的理财顾问</p></div>

          <!-- <img src="../assets/img/3491.png" style="width: 100%;"> -->
          <el-row v-for="item in dataList1.slice(3,6)" style="padding: 15px 0px 10px 0px;">
            <el-col :span="24" style="margin-left: 20px;">
              <el-col :span="6">
             
                <img @click="toUserDetail(item.userId)" class="wid_74" style="border-radius: 50%;" :src="baseUrlImg + item.avatar"></el-col>
              <el-col :span="9">
                <span style="
font-family: PingFang SC, PingFang SC;
font-weight: bold;
font-size: 16px;
color: #242629;
text-align: justified;
font-style: normal;">{{ item.nickName }}</span>
                <br>
                <div style="width: 100%;height: 10px;"></div>
                <div class="btn_lab" style="background-color: #F7F7F7;display: inline;padding: 0 5px 0 5px;font-size: 12px;">{{ item.remark }}</div>
                <div class="btn_lab" style="background-color: #F7F7F7;display: inline;padding: 0 5px 0 5px;margin-left: 10px;font-size: 12px;">帮助{{ item.helpNumber
 }}</div>
              </el-col>
              <el-col class="btn_img1" :span="9" >   <img src="../assets/2924.png" @click="dialogVisible=true"><img src="../assets/2925.png" style="padding-left: 10px;" @click="dialogVisible1=true"></el-col>
              <el-col :span="14">
                <div class="art-more1">
                    <div class="view"><img src="../assets/g-zan.png" style="padding-right: 5px">好评：{{ item.userViews }}</div>
                    <div class="view"><i class="el-icon-view" style="padding-right: 5px"/>浏览量：{{ item.userViews }}</div>
                  </div>
              </el-col>
            </el-col>
          </el-row>
        </el-col>
        <el-col class="sha_sty last_sty" :span="8" style="
border-radius: 0px 0px 0px 0px;background-color: #fff;">
<div class="header">   <p class="ren_gw" style="text-align: center;color: #fff;font-size: 24px;line-height: 140px;">人气顾问</p>
<p class="bottom_per" style="font-size: 16px;
color: #FFFFFF;
line-height: 0px;text-align: center;position: relative;top: -60px;">最具影响力的理财顾问</p></div>

          <!-- <img src="../assets/img/3491.png" style="width: 100%;"> -->
          <el-row v-for="item in dataList1.slice(6,9)" style="padding: 15px 0px 10px 0px;">
            <el-col :span="24" style="margin-left: 20px;">
              <el-col :span="6">
             
                <img @click="toUserDetail(item.userId)" class="wid_74" style="border-radius: 50%;" :src="baseUrlImg + item.avatar"></el-col>
              <el-col :span="9">
                <span style="
font-family: PingFang SC, PingFang SC;
font-weight: bold;
font-size: 16px;
color: #242629;
text-align: justified;
font-style: normal;">{{ item.nickName }}</span>
                <br>
                <div style="width: 100%;height: 10px;"></div>
                <div class="btn_lab" style="background-color: #F7F7F7;display: inline;padding: 0 5px 0 5px;font-size: 12px;">{{ item.remark }}</div>
                <div class="btn_lab" style="background-color: #F7F7F7;display: inline;padding: 0 5px 0 5px;margin-left: 10px;font-size: 12px;">帮助{{ item.helpNumber
 }}</div>
              </el-col>
              <el-col :span="9" class="btn_img1">   <img src="../assets/2924.png" @click="dialogVisible=true"><img src="../assets/2925.png" style="padding-left: 10px;" @click="dialogVisible1=true"></el-col>
              <el-col :span="14">
                <div class="art-more1">
                    <div class="view"><img src="../assets/g-zan.png" style="padding-right: 5px">好评：{{ item.userViews }}</div>
                    <div class="view"><i class="el-icon-view" style="padding-right: 5px"/>浏览量：{{ item.userViews }}</div>
                  </div>
              </el-col>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="turn_le" :gutter="10" style="position: relative;">
      <el-col :span="12">
        <p style="
font-family: PingFang SC, PingFang SC;
font-weight: bold;
font-size: 22px;
color: #000000;">最新问答</p>
        <div class="grid-content bg-purple new_610">
          <div class="line"></div>
 <el-card>
          <el-col :span="24" v-for="item in dataList2">
            <el-col :span="4"> <img @click="toUserDetail(item.userId)" class="wid_74" style="border-radius: 50%;" :src="baseUrlImg + item.avatar"></el-col>
            <el-col :span="16" class="wid_450">
              <div class="top_tit"> <p>{{ item.nickName }}<img src="../assets/2929.png" style="width: 15px;"/><span style="float: right;font-weight: 500;
font-size: 14px;
color: #242629;">{{item.createTime }}</span></p></div>
             
              <p class="ques_to">
                <img src="../assets/Group 2918.png" style="width: 20px;position: relative;top:5px"/>&nbsp;
                <span @click="toArtcal(item)">{{ item.title }}</span>
              </p>
              <img src="../assets/Group 2919.png" style="width: 20px;
              transform: translateY(7px);
    float: left;
    position: relative;
    top: 18px;
    left: 12px;"/>&nbsp<p class="bott_p_sty"v-html="item.result.slice(0,50)" style="color: #8A8A8A;font-size: 13px;line-height: 24px;"></p>
            </el-col>
          </el-col>
        </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <p style="
font-family: PingFang SC, PingFang SC;
font-weight: bold;
font-size: 22px;
color: #000000;">最新咨询</p>
        <div class="grid-content bg-purple new_610" >
          <div class="line1"></div>
          <el-card>
          <el-col :span="24" v-for="item in dataList3.slice(0,6)" style="margin-bottom: 10px">
            <div style="display: inline-block;
   width:12px;
  height: 12px;
  background: #ffffff;
  border-radius: 50%;
  border: 3px solid red;" />
            <span @click="toArtcal(item)" class="right_tit_s">{{ item.title }}</span>
            <p class="bott_p_s_ri" v-html="item.result.slice(0,50)" style="color: #8A8A8A;font-weight: 500;
font-size: 13px;
color: #8A8A8A;line-height:20px;margin-left: 22px;"></p>
          </el-col>
        </el-card>
        </div>

      </el-col>
    </el-row>
  </div>
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
    <!-- 关闭按钮 -->

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
            <span class="text-group_431">金牌顾问</span>
          </div>
        </div>
        <div class="group_19 flex-row">
          <div class="image-text_39 flex-row justify-between">
            <div class="box_17 flex-col">
              <img src="../assets/Vector.png">
            </div>
            <span class="text-group_44">137&nbsp;7733&nbsp;5959</span>
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
  </div>
</template>
<script>
import { getRecommendUser, getAlertInfo, getUsers, getLatestAnswer, getLasterAnswerII,getFirstAnaswer } from '@/api/index'

export default {

  name: 'Index',
  components: {

  },
  data() {
    return {
      dialogVisible:false,
      dialogVisible1:false,
      dataList: [],
      dataList1: [],
      dataList2: [],
      dataList3: [],
      dataList4: '',
      serviceInfo: {}
    }
  },
  created() {
    getRecommendUser().then(res => {
      this.dataList = res.data
    })
    getUsers().then(res => {
      this.dataList1 = res.data
    })
    getLatestAnswer().then(res => {
      this.dataList2 = res.data
    })
    getLasterAnswerII().then(res => {
      this.dataList3 = res.data.list
    })
    getFirstAnaswer().then(res => {
      this.dataList4 = res.data[0].title
    })
    this.getService()
  },
  methods: {
    toUserDetail(id) {
      this.$router.push(`/ydy/${id}`)
    },
    async getService() {
    const {data} = await getAlertInfo({})
    this.serviceInfo = data
    },
    toArtcal(item) {
      console.log(item)
      this.$router.push('/wendaxiangqing/'+item.id)
    }
  }
}
</script>
<style scoped lang="scss">
.header{
  width: 100%;
  height: 150px;
  background-image: url(../assets/img/3491.png);
  background-size: 100% 200px;
}
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #fff;
}

.bg-purple {
  background: #fff
}

.bg-purple-light {
  background: #fff;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.art-more1 {
  margin-top: 10px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* position: relative;
  top: 25px; */
}

.art-more .view {
  color: #aaa;
  font-size: 14px;
}

.art-more1 .view {
  color: #aaa;
  font-size: 14px;
}
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
  margin-left: 200px;
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
  margin: 0px 0 0 20px;
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
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  color: #aaa;
  font-size: 14px;
}

.art-more1 .view {
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  color: #aaa;
  font-size: 14px;
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
.image-wrapper_11 {
  border: none;
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
}
.bread_crumbs {
  display: flex;
    top: -99px;
    z-index: 999999;
    position: relative;
    list-style: none;
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    img {
      width: 14px;
      height: 14px;
      transform: translateY(2px);
      margin: 0 5px;
    }
}
::v-deep .right_detail_sty {
  padding-left: 12px !important;
  transform: translateY(-30px);
}
.height_tiao {
  display: flex;
}
.quest {
  font-family: PingFang SC, PingFang SC;
  font-weight: bold;
  font-size: 18px;
  color: #023665;
  margin-right: 17px;
}
.last_sp {
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
}
.sha_sty {
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  padding-left: 0 !important;
  padding-right:0 !important;
  height: 518px;
  width: 400px;
  margin-right: 22px;
  .ren_gw {
    margin-top: 0 !important;
    font-family: PingFang SC, PingFang SC;
    font-weight: bold;
  }
}
.last_sty {
  margin-right: 0;
}
.personal_box {
  width: 1244px;
}
.wid_74 {
  width: 74px;
  height: 74px;
  margin-right: 10px;
}
.wid_au {
  width: auto !important;
}
.el-icon-view {
  margin-left: 45px;
}
.btn_img {
  transform: translate(46px, 10px);
}
.btn_lab {
  color: #7A7A7A;
  padding: 6px 9px !important;
  border-radius: 3px;
  font-size: 12px;
  font-family: PingFang SC, PingFang SC;
}
.btn_img1 {
  transform: translate(30px, 10px);
}
.bottom_per {
  font-family: PingFang SC, PingFang SC;
}
::v-deep .new_610 {
  height: 610px;
  overflow: hidden;
  margin-bottom: 231px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  width: 600px;
  padding-top: 40px;
  padding-left: 32px;
  background: #fff;
  position: relative;
  .is-always-shadow {
    box-shadow: none;
  }
  .el-card  {
    border: none;
  }
  .wid_74 {
    width: 62px;
    height: 62px;
    z-index: 999999;
    position: relative;
    
  }
  .wid_450 {
    width: 450px;
    border: 1px solid #F2F2F2;
    border-radius: 4px;
    height: 150px;
    margin-bottom: 40px;
  }
  .bott_p_sty {
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    transform: translateY(10px);
    padding-left: 39px;
    padding-right: 12px;

  }
  .line {
    width: 1px;
    height: 473px;
    background: #e0dede;
    position: absolute;
    top: 97px;
    left: 73px;
  }
  .line1 {
    width: 1px;
    height: 522px;
    background: #e0dede;
    position: absolute;
    top: 51px;
    left: 43px;
  }
}
.right_tit_s {
  padding-left: 10px;font-weight: 500;
  font-size: 14px;
  color: #242629;
  font-family: PingFang SC, PingFang SC;
}
.bott_p_s_ri {
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 13px;
  color: #8A8A8A;
  line-height: 20px;
  padding-right: 18px
}
::v-deep .turn_le {
    width: 1307px;
    width: 1295px !important;
    transform: translateX(-25px);
    .el-card__body {
      padding: 0 ;
    }
  }
  .top_tit {
      height: 34px;
      width: 450px;
      position: relative;
      font-family: PingFang SC, PingFang SC;
      bottom: 17px;
      margin-left: -5px;
      /* margin-right: -10px; */
      background-color: rgb(247, 247, 247);
      line-height: 30px;
      font-weight: 500;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 16px;
      color: rgb(255, 61, 61);
      p {
        font-size: 16px;
        line-height: 34px;
        img {
          margin-left: 6px;
        }
      }
      
    }
    .ques_to {
        margin: 0px;
        margin-top: -12px;
        display: flex;
        img {
          margin-right: 10px;
          margin-left: 12px;
          transform: translateY(3px);
        }
        span {
          display: inline-block;
          font-family: PingFang SC, PingFang SC;
          font-weight: 500;
          font-size: 14px;
          color: #242629;
          transform: translateY(10px);
        }
      }
      .el-col-4 {
        width: 79px;
      }
      .text_53 {
        margin: 0;
        margin-bottom: 20px;
      }
      .group_52 {
        margin: 0px 0 40px 134px;
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
  background: #fff !important;
  padding: 20px;
  border-radius: 5px;
}
.dialog_cont {
  width: 513px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 544px;
  background: #FFFFFF;
  border-radius: 10px 10px 10px 10px;
  .text-wrapper_24 {
    font-family: PingFang SC, PingFang SC;
    font-weight: bold;
    font-size: 20px;
    color: #242629;
  }
  .image-wrapper_15 {
    margin-bottom: 23px;
    margin-top: 50px;
  }
  .image_12 {
    width: 192px;
    height: 40px;
  }
  .image_13 {
    width: 200px;
    height: 200px;
    margin-bottom: 23px;
  }
  .text_51 {
    font-family: PingFang SC, PingFang SC;
    font-weight: bold;
    font-size: 18px;
    color: #7A7A7A;
    margin-bottom: 23px;
  }
  .text-group_43 {
    font-family: PingFang SC, PingFang SC;
    font-weight: bold;
    font-size: 40px;
    color: #1ABCFC;
    line-height: 40px;
  }
  .text_53 {
    margin: 0;
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    font-size: 16px;
    color: #7A7A7A;
  }
  .group_52 {
    transform: translateX(-150px)

  }
  .image-wrapper_14 {
    position: absolute;
    right: 15px;
    top: 15px;
  }
  .text-wrapper_24 {
    text-align: center;
  }
}
.dialog_cont1 {
  height: 294px;
}

</style>