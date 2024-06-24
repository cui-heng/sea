<template>
  <div  style="padding-left: 280px;padding-right: 280px;">
    <div style="width: 100%;height: 80px;border: 1px solid #fff;position: relative;bottom: 170px;z-index: 999;"></div>
    <h3><a name="t0" />{{ queryData.title }}</h3>
    <p>发布时间：{{ queryData.createTime }}<span style="margin-left: 20px;">阅读：{{ queryData.browseNumber }}</span></p>
    <el-row class="main" type="flex" justify="space-around" style="background-color: #fff;position: relative;bottom: 270px;padding-top: 0px;">
      <div style="background-color: #fff;width: 98.4%;">
        <el-col :span="24" style="padding: 20px;">
          <span class="befor_tit">海洋财经</span>>
          <span class="befor_tit">资讯</span>>
          <span class="art_title">{{ queryData.title }}</span></el-col>
      <el-col :span="15">
        <el-card class="bor_ra_10">
          <div class="top_tit_sty">
            <div class="tit_sty_tit">
              {{ queryData.title }}
            </div>
            <div class="tit_sty_det">
              <p class="mar_ri_4">发布时间： {{ queryData.createTime }}</p>
              <p>阅读： {{ queryData.browseNumber }}</p>
            </div>
          </div>
        <div class="per_det" style="width: 100%;
          ">
          <el-col :span="4" class="img_box">
            <img @click="$router.push('/ydy/'+ queryData.userId)" :src="baseUrlImg + queryData.avatar" style="width: 74px;
height: 74px;border-radius: 50%" />
          </el-col>
          <el-col :span="8" class="nic_right">
            <span>{{ queryData.nickName }}</span>
            <div class="mid_line">
              <span>{{ queryData.position }}</span>
              <span>帮助：{{ queryData.helpNumber }}</span>
            </div>
            <div class="bott_great">
              <span>好评{{ queryData.positiveReviews }}</span>
              <span style="margin-left: 20px;">浏览量48万+</span>
            </div>
          </el-col>
          <div class="tr_lag">
              <el-button @click="dialogVisible4 = true" slot="reference" style=" margin-right: 22px;background-color: #FF3D3D;color: #fff;">电话咨询</el-button>
            
              <el-button @click="dialogVisible4 = true" slot="reference" style="background-color: #10CB8C;color: #fff;">微信咨询</el-button>
          </div>
          

        </div>
        
        <div id="artcle-content">

          <div id="artcle-info">
            <img :src="baseUrlImg + queryData.coverImg" style="width: 100%;height: 100%;">
          </div>
          <p>&nbsp;</p>


          <div style="font-size: 18px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #707070;
line-height: 36px;">
            <p v-html="queryData.content"></p>
          </div>
          <div class="bottom_per_box">
            <el-col :span="4" class="img_box">
              <img @click="$router.push('/ydy/'+ queryData.userId)" :src="baseUrlImg + queryData.avatar" style="width: 74px;
                height: 74px;border-radius: 50%" />
            </el-col>
            <el-col :span="8" class="right_box_de">
              <span class="nic_nam">{{ queryData.nickName }}</span>
              <div style="width: 100%;
                height: 24px;font-size: 12px;
                font-family: PingFang SC-Medium, PingFang SC;
                font-weight: 500;
                color: #7A7A7A;margin-top: 20px;
                line-height: 12px;"><span>{{ queryData.position }}</span>
              </div>
            </el-col>
            <el-button @click="dialogVisible4 = true" slot="reference" style="background-color: #FF3D3D;color: #fff; float: right;transform: translateY(10px);">在线咨询</el-button>

        </div>
        <br>
        <span style="font-size: 12px;color: #8A8A8A;">版权及免责声明：本文内容由入驻海洋财经网站的作者自发贡献，该文观点仅代表作者本人，与本网站立场无关，不对您构成任何投资建议。用户应基于自己的独立判断，自行决策投资行为并承担全部风险。本站仅提供信息存储空间服务，不拥有所有权，不承担相关法律责任。如发现本站有涉嫌抄袭侵权/违法违规的内容，请发送邮件至liuxg969@163.com 举报，一经查实，本站将立刻删除。</span>
        </div>
      </el-card>
      <div class="box_9 flex-row justify-between">
        <span class="text_28">推荐相关阅读</span>
        <div class="image-text_10 flex-row justify-between">
          <span class="text-group_10" @click="$router.push('/ydy/'+ queryData.userId)">查看更多</span>
          <img
            class="thumbnail_7"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG2f9c81aa95dc275df6725b7d4a1063b0.png"
          />
        </div>
      </div>
      <el-row class="item_box" :gutter="10" style="margin-top: 30px;">
        <el-col class="block_3 flex-col" style="margin-top: 10px;" :span="8" v-for="item in data3">
          <div class="text-wrapper_8 flex-col">
            <span class="text_29">优质</span>
          </div>
          <span class="text_30" style="cursor: pointer"
            @click="toThisPage(item)"
            >{{ item.title }}</span
        >
          <span class="text_31"
            v-html="item.content.slice(0,20)"></span
          >
          <div class="section_7 flex-row justify-between">
            <div class="image-text_11 flex-row justify-between">
              <img @click="$router.push('/ydy/'+ item.userId)" style="border-radius: 50%;" class="label_1"
                referrerpolicy="no-referrer" :src="baseUrlImg + item.avatar">

              <span class="text-group_11">{{ item.nickName }}</span>
            </div>
            <div class="image-text_12 flex-row justify-between">
              <img
                class="thumbnail_8"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGdd2d4ca36c91257f0874e4a93e9d74bd.png"
              />
              <span class="text-group_12">{{ item.browseNumber }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      </el-col>
      <el-col id="side" :span="8" class="hidden-sm-and-down" style="margin-left: 20px;">
        <div class="item">
          <div class="tag">
            <el-card class="box-card">
              <div slot="header" >
                <span style="font-weight: bold;
font-size: 20px;
color: #000000;">TA的文章 </span> <a style="font-weight: 500;
font-size: 16px;
color: #8A8A8A;float: right;" @click="$router.push('/ydy/'+ queryData.userId)">更多></a>
              </div>
              <div style="width: 100%;
height: 49px;
border-radius: 10px 10px 10px 10px;" v-for="item in Article">
                <div style="display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;background-color:#17B6F5;" />
                <span style="font-size: 14px;
font-family: PingFang SC-Bold, PingFang SC;
font-weight: bold;
color: #242629;
cursor:pointer;
line-height: 22px;padding-left: 10px;" @click="toThisPage(item)">{{ item.title }}</span>


              </div>
            </el-card>
          </div>
        </div>
        <div class="item" style="margin-top: 20px;">
          <div class="tag">
            <el-card class="box-card">
              <div slot="header" >

                <span style="font-weight: bold;
font-size: 20px;
color: #000000;">TA的回答</span><a style="font-weight: 500;
font-size: 16px;
color: #8A8A8A;float: right;" @click="$router.push('/ydy/'+ queryData.userId)">更多></a>
              </div>
              <div  style="width: 100%;
height: 49px;
border-radius: 10px 10px 10px 10px;" v-for="item in Answer">
                <div style="display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;background-color:#17B6F5;" />
                <span style="font-size: 14px;
font-family: PingFang SC-Bold, PingFang SC;
font-weight: bold;
color: #242629;
cursor: pointer;
line-height: 22px;padding-left: 10px;" @click="$router.push('/wendaxiangqing/'+item.id)">{{ item.title }}</span>
              </div>
            </el-card>
          </div>
        </div>
        <div class="item">
          <div class="tag">
            <el-card class="box-card" style="border-radius:  15px;margin-top: 20px;">
                  <div slot="header" class="d-flex align-items-center" style="width: 100%;">
                    <span style="font-size: 20px;
                        font-family: PingFang SC-Bold, PingFang SC;
                        font-weight: bold;
                        color: #000000;
                        line-height: 20px;  border-left: 3px solid #1ABCFC;
                          padding-left: 5px;
                          cursor: pointer;">金牌顾问</span>
                                            <!-- <span style="font-size: 16px;
                        font-family: PingFang SC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #8A8A8A;
                        line-height: 16px;font-size: 14px;position: relative;left: 100px;">更多></span> -->
                  </div>
                  <div v-for="item in Answer1" class="right_item_st">
                    <div style="padding-top: 20px;">
                      <div style="width: 22px;
height: 22px;float: left;">
                        <img @click="$router.push('/ydy/'+ item.userId)" style="border-radius: 50%;width:62px;height:62px;" :src="baseUrlImg + item.avatar" />
                      </div>
                      <div class="mg_20">{{ item.nickName }}</div>
                      <div class="fo_fim" style="text-align: center;line-height: 24px;font-size: 12px;position: relative;left: 70px;">
                        <div style="width: 72px;height: 24px;background-color: #F7F7F7;float: left;">{{ item.remark }}
                        </div>
                        <div style="width: 72px;height: 24px;background-color: #F7F7F7;float: left;margin-left: 10px;">
                          帮助{{
        item.helpNumber
      }}</div>
                        <div class="righ_btn">
                          <img class="le_ma" src="../assets/2924.png" @click="dialogVisible4=true">
                          <img src="../assets/2925.png" style="padding-left: 10px;" @click="dialogVisible4=true">
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
                      <div style="width: 100%;height: 15px;border-bottom:1px dashed #E0E0E0;"></div>
                    </div>
                  </div>
                </el-card>
          </div>
        </div>
      </el-col>
      </div>
    </el-row>
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

    <div v-if="dialogVisible4" class="popup" style="z-index: 999999999999;">
    <!-- 弹窗的内容 -->
    <div class="group_32 flex-col" style="position: absolute;left: 20%;">
        <div class="image-wrapper_14 flex-row">
          <img class="thumbnail_46" referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG1a1730c41af2279e3053b2e67cc48a4c.png"
            @click="dialogVisible4=false"/>
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
              <img src="@/assets/Vector.png">
            </div>
            <span class="text-group_43">{{ serviceInfo.phonenumber }}</span>
          </div>
        </div>
        <div class="group_52 flex-row">
          <div class="text-wrapper_23 tran_to">
            <span class="text_52">*</span>
            <span class="text_53 reset_span">咨询时请说明来自海洋财经，以便得到更佳服务</span>
          </div>
        </div>
        <!-- <div class="back_btn" @click="toIndex()">返回</div> -->
      </div>
    <!-- 关闭按钮 -->
    </div>
  </div>
</template>

<script>
import route from '@/router'
import { getArticleInfo, getFiveArticle, getFiveAnswer,getRecommendUser,getRelativeArticle,getAlertInfo } from '@/api/index'
export default {
  name: 'Article',
  components: {

  },
  data() {
    return {
      dialogVisible4: false,
      dialogVisible:false,
      dialogVisible1:false,
      queryData: {
        pagesize: 10,
        pagenum: 1
      },
      Article: [],
      Answer: [],
      Answer1:[],
      data3:[],
      serviceInfo: {}
    }
  },
  created() {
    console.log(route);
    // 获取文章列表
    getArticleInfo({ articleId: route.history.current.params.id }).then(res => {
      this.queryData = res.data
    })

    getFiveArticle({ userId: route.history.current.params.userid }).then(res => {
      this.Article = res.data
    })
      , getFiveAnswer({ userId: route.history.current.params.userid }).then(res => {
        this.Answer = res.data
      }),
      getRecommendUser().then(res => {
        this.Answer1 = res.data
      })
      getRelativeArticle().then(res => {
        this.data3 = res.data
      }),
      this.getService()
  },
  methods: {
    async getService() {
      const {data} = await getAlertInfo({})
      this.serviceInfo = data
    },
    toThisPage(item) {
      this.$router.push('/article/'+item.id+'/'+item.userId)
      location.reload()
    }
  }
}
</script>

<style scoped lang="scss">
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
  width:262px;
  height: 200px;
  margin-left: 10px;
}

.text-wrapper_8 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 50px 0 0 50px;
  height: 26px;
  margin-left: 216px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 14px;
  color: #FFFFFF;
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
  border-radius: 10px;
  width: 100%;
  height: 350px;
  background-size: 100% 100%;
  margin-bottom: 40px;
  img {
    border-radius: 10px;
    width: 748px;
    height:268px;
  }
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
  top: -8px;
  width: 60%;
  font-family: PingFang SC-Medium, PingFang SC;
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
  margin-left: 20%;
  position: relative;
  top: -10px;
  width: 60%;
  font-family: PingFang SC-Medium, PingFang SC;
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
}
.art_title {
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 16px;
  color: #242629;
}
.befor_tit {
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 16px;
  color: #8A8A8A;
  margin-left: 10px;
  margin-right: 10px;
}
.top_tit_sty {
  height: 100px;
  margin-top: 14px;
  border-bottom:1px dashed #E0E0E0;
  .tit_sty_tit {
    font-family: PingFang SC, PingFang SC;
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 20px;
    color: #000000;
  }
  .tit_sty_det {
    display: flex;
    p {
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: 14px;
      color: #8A8A8A;
    }
    .mar_ri_4 {
      margin-right: 38px;
    }
  }
}
.bor_ra_10 {
  border-radius: 10px;
  .nic_right {
    transform: translateY(12px);
    span {
      font-family: PingFang SC, PingFang SC;
      font-weight: bold;
      font-size: 16px;
      color: #87898d;
      margin-bottom: 12px;
      display: inline-block;
    }
    
  }
}
.per_det {
  height: 149px;
  background: #F4F4F4;
  padding: 30px ;
  padding-top: 18px;
  margin-bottom: 26px;
  border-radius: 10px 10px 10px 10px;
  .img_box {
    width: 74px;
    margin-right: 10px;
  }
}
.mid_line {
  margin-bottom: 10px;
  span {
    width: 66px;
    height: 24px;
    background: #D4D4D4;
    border-radius: 4px 4px 4px 4px;
    display: inline-block;
    text-align: center;
    line-height: 24px;
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    font-size: 12px !important;
    margin-right: 10px;
    color: #7A7A7A;
  }
}
.bott_great {
  display: flex;
  span {
    font-family: PingFang SC, PingFang SC;
    font-size: 14px !important;
    color: #838588;
    display: inline-block;
    transform: translateX(34px);
    margin-right: 40px;
  }
}
.tr_lag {
  transform: translate(146px, 40px);
}
.bottom_per_box {
  width: 100%;
  height: 126px;
  background: #F4F4F4;
  padding: 30px ;
  border-radius: 10px 10px 10px 10px;
  .img_box {
    width: 74px;
    margin-right: 12px;
  }
  .right_box_de {
    transform: translateY(10px);
    .nic_nam {
      display: inline-block;
      font-family: PingFang SC, PingFang SC;
      font-weight: bold;
      font-size: 20px;
      color: #242629;
    }
  }
}
::v-deep .item_box {
  width: 816px;
  margin-left: -20px !important;
  .text_30 {
    font-family: PingFang SC, PingFang SC;
    font-weight: bold;
    font-size: 18px;
    color: #000000;
    line-height: 26px;
  }
  .text_31 {
    p {
      margin-top: 5px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: 16px;
      color: #707070;
      line-height: 24px;
    }
  }
}
.right_item_st {
  .mg_20 {
    margin-top: 10px;
    width: 66px;font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #7A7A7A;
    line-height: 12px;height: 24px;margin-left: 70px;
  }
  .fo_fim {
    font-family: PingFang SC-Medium, PingFang SC;
  }
}
.righ_btn {
  transform: translateY(-23px);
  .le_ma {
    margin-right: 10px;
  }
}
.box_17 {
  background: none;
}
.reset_span {
  margin-left: 0;
  margin-bottom: 30px;
}
.tran_to {
  transform: translateY(-30px);
}

</style>
