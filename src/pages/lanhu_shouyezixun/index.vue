<template>
  <div class="page flex-col ar_deta"> 
    <el-drawer :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <el-menu :default-active="activeIndex" :router="true" class="el-menu-vertical-demo">
        <el-menu-item index="/lanhu_shouye">首页</el-menu-item>
        <el-menu-item index="/lanhu_youwenbida">有问必答</el-menu-item>
        <el-menu-item index="/aboutPhone">期货手续费</el-menu-item>
        <el-menu-item index="/aboutPhone">期货保证金</el-menu-item>
        <el-menu-item index="/lanhu_qihuobaozhengjin">期货一对一服务</el-menu-item>
      </el-menu>
    </el-drawer>
    <div class="block_2 flex-col">
      <div class="group_2 flex-row">
        <div class="image-wrapper_1 flex-col justify-between">
          <img class="image_1" referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG41d76e5352422ea2728cff2c9f23ed19.png" />
          <img class="image_2" referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGa248b93bac5dd25c5ba4e2eff60f7753.png" />
        </div>
        <div class="block_3 flex-col">
          <div class="image-wrapper_2 flex-col">
            <img class="label_4" referrerpolicy="no-referrer"
              src="./assets/img/FigmaDDSSlicePNGc91b60cc0d136034d7e1cde253d50a91.png" />
          </div>
        </div>
        <img class="label_5" @click="drawer = true" referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNG85213edb0f33d45b7ecd052df3ec843a.png" />
      </div>
      <div class="group_4 flex-col"></div>
    </div>

    <div class="mb_box">
      <p class="area">海洋财经</p>
      <img src="@/assets/img/mb-rih.png" alt="">
      <p class="area">有问必答</p>
      <img src="@/assets/img/mb-rih.png" alt="">
      <p>{{ queryData.title }}</p>
    </div>
    
    <div class="block_4 flex-col">
      <span class="text_6 turn_big">{{ queryData.title }}</span>
      <div class="text-wrapper_2 flex-row justify-between">
        <span class="text_7">发布时间：{{ queryData.createTime }}</span>
        <span class="text_8">阅读:{{ queryData.browseNumber }}</span>
      </div>
      <div class="box_1 flex-col"></div>
      <div class="box_2 flex-row">
        <div class="box_3 flex-col justify-between">
          <div class="group_5 flex-row">
            <div class="image-text_1 flex-row justify-between">
              <img class="image_3" referrerpolicy="no-referrer"
                :src="baseUrlImg + queryData.avatar" />
              <div class="section_1 flex-col justify-between">
                <span class="text-group_1">{{ queryData.nickName }}</span>
                <div class="text-wrapper_3 flex-col"><span class="text_9">{{ queryData.position }}</span></div>
              </div>
            </div>
            <div class="text-wrapper_4 flex-col"><span class="text_10">帮助{{ queryData.helpNumber
                }}</span></div>
          </div>
          <div class="group_6 flex-row justify-between">
            <div class="image-text_2 flex-row justify-between">
              <img class="thumbnail_3" referrerpolicy="no-referrer"
                src="./assets/img/FigmaDDSSlicePNGc0aade8c1037e19137e79105b3c92f59.png" />
              <span class="text-group_2">好评{{ queryData.positiveReviews }}</span>
            </div>
            <div class="image-text_3 flex-row justify-between">
              <img class="thumbnail_4" referrerpolicy="no-referrer"
                src="./assets/img/FigmaDDSSlicePNGb42c80e173419edeb30ef9937b8e2ed3.png" />
              <span class="text-group_3">浏览量{{ queryData.browseNumber}}</span>
            </div>
          </div>
        </div>
        <div class="box_4 flex-col justify-between">
          <div class="block_5 flex-row">
            <div class="image-text_4 flex-row justify-between">
              <img class="thumbnail_5" referrerpolicy="no-referrer"
                src="./assets/img/FigmaDDSSlicePNG95e5c14581117ddb18691a993bf92982.png" />
              <span class="text-group_4"> <el-popover placement="top" title="微信咨询" width="200" trigger="click">
                  <img :src="baseUrlImg + queryData.wxQrCode" style="width: 100%;" />
                  <a slot="reference">微信咨询</a>
                </el-popover></span>
            </div>
          </div>
          <div class="block_6 flex-row">
            <div class="image-text_5 flex-row justify-between">
              <img class="image_4" referrerpolicy="no-referrer"
                src="./assets/img/e9dcc2ce722143b0a548dadfd94627de_mergeImage.png" />
              <span class="text-group_5"><el-popover placement="top" title="电话咨询" width="200" trigger="click" :content="queryData.phonenumber">
            <a slot="reference">电话咨询</a>
          </el-popover></span>
            </div>
          </div>
        </div>
      </div>
      <img class="image_5" referrerpolicy="no-referrer"
      :src="baseUrlImg + queryData.coverImg"  />
      <span class="text_11" v-html="queryData.content">
      </span>
    </div>
    <div class="bussiness_card_box">
      <div class="card_con">
        <div class="img_box">
          <img :src="baseUrlImg + queryData.avatar" alt="">
        </div>
        <div class="cent_box">
          <div class="top_cen">{{ queryData.nickName }} <span>{{ queryData.position }}</span></div>
          <div class="top_ri">汇率优惠，欢迎咨询</div>
        </div>
        <div class="right_box">
          <div class="block_6 paddi-r flex-row">
            <div class="image-text_5 flex-row justify-between">
              <img class="image_4" referrerpolicy="no-referrer"
                src="./assets/img/e9dcc2ce722143b0a548dadfd94627de_mergeImage.png" />
              <span class="text-group_5"><el-popover placement="top" title="电话咨询" width="200" trigger="click" :content="queryData.phonenumber">
            <a slot="reference">电话咨询</a>
          </el-popover></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- //他的文章 他的回答 -->

    <div class="he_artcle">
      <div class="title_pub">
        <div class="tit_left">TA的文章</div>
        <div class="rit_more">更多&nbsp;></div>
      </div>
      <div class="art_line_item" v-for="item in Article">
        <div class="point_sty"></div>
        {{ item.title }}
      </div>
    </div>

    <div class="he_artcle mar_change">
      <div class="title_pub">
        <div class="tit_left">TA的回答</div>
        <div class="rit_more">更多&nbsp;></div>
      </div>
      <div class="art_line_item" v-for="item in Answer">
        <div class="point_sty"></div>
        {{ item.title }}
      </div>
    </div>

    <!-- 相关推荐阅读 -->

    <div class="he_artcle mar_change mar_0">
      <div class="title_pub">
        <div class="tit_left">相关推荐阅读</div>
        <div class="rit_more">更多&nbsp;></div>
      </div>
      <div class="art_item_recommend" v-for="item in data3">
        <div class="reco_tit">{{ item.title }}</div>
        <div class="cont_comm">
          {{ item.content.replace(/<[^>]+>/g,"").slice(0, 50) }}
        </div>
        <div class="bottom_de">
          <img class="nic_ava" :src="baseUrlImg + item.avatar" alt="">
          <div class="nic_sty">{{ item.nickName }}</div>
          <div class="right_num">
            <img class="eyes" referrerpolicy="no-referrer"
                src="./assets/img/FigmaDDSSlicePNGb42c80e173419edeb30ef9937b8e2ed3.png" />
            {{ item.browseNumber }}
          </div>
        </div>
      </div>
    </div>
    <!-- 金牌顾问 -->
    <div class="section_12 flex-col">
      <div class="section_13 flex-row justify-between">
        <span class="text_42">顾问推荐</span>
        <div class="image-text_32 flex-row">
          <span class="text-group_32">更多</span>
          <img
            class="thumbnail_32"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG378b835325af5a684c617c3fec63849a.png"
          />
        </div>
      </div>
      <div class="section_14 flex-col"><div class="group_25 flex-col"></div></div>
      <div v-for="item in qhguwt" class="bott_it_sty">
      <div class="section_15 flex-row">
        <div class="image-text_33 flex-row justify-between">
          <img
            class="image_10"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG03e2cbc4b64ac921df21926b4b9f0d45.png"
          />
          <div class="section_16 flex-col justify-between">
            <span class="text-group_33">{{ item.nickName }}</span>
            <div class="text-wrapper_15 flex-col"><span class="text_43">{{ item.remark }}</span></div>
          </div>
        </div>
        <div class="text-wrapper_16 flex-col"><span class="text_44">帮助{{
        item.helpNumber
      }}万</span></div>
        <div class="image-wrapper_3 flex-col">
          <img
            class="label_6"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG854cf5844a8ddcd486c61b1cf69fb52c.png"
          />
        </div>
        <div class="image-wrapper_4 flex-col">
          <img
            class="label_7"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG7235843c577a660f1e6f88cc5aa9a3f6.png"
          />
        </div>
      </div>
      <div class="section_17 flex-row justify-between">
        <div class="image-text_34 flex-row justify-between">
          <img
            class="thumbnail_33"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGc0aade8c1037e19137e79105b3c92f59.png"
          />
          <span class="text-group_34">好评{{ item.userViews }}</span>
        </div>
        <div class="image-text_35 flex-row justify-between">
          <img
            class="thumbnail_34"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGb42c80e173419edeb30ef9937b8e2ed3.png"
          />
          <span class="text-group_35">浏览量{{ item.userViews }}万+</span>
        </div>
      </div>
      <div class="border_bo flex-col"></div>
    </div>
    </div>
  
    <div class="block_13 flex-col">

      <div class="block_14 flex-col"></div>
      <span class="paragraph_1">
        京ICP备19048506号-2&nbsp;Copyright
        <br />
        &#64;&nbsp;2024&nbsp;中国海洋财经有限公司&nbsp;All&nbsp;Rights&nbsp;Reserved.
      </span>
    </div>
  </div>
</template>
<script>
import route from '@/router'
import { getArticleInfo, getFiveArticle, getFiveAnswer, getRelativeArticle, getRecommendUser } from '@/api/index'
export default {
  name: 'Article',
  components: {

  },
  data() {
    return {
      drawer:false,      direction: false,
      queryData: {
        pagesize: 10,
        pagenum: 1
      },
      Article: [],
      Answer: [],
      artList1: [
        {
          title: '323jasfk;lejsak;f',
          replyCount: '32'
        }
      ],
      data3: [],
      qhguwt: []
    }
  },
  created() {
    console.log(route);
    getRelativeArticle().then(res => {
        this.data3 = res.data
      })
    // 获取文章列表
    getArticleInfo({ articleId: route.history.current.params.id }).then(res => {
      this.queryData = res.data
    })

    getFiveArticle({ userId: route.history.current.params.userid }).then(res => {
      this.Article = res.data
    })
      , getFiveAnswer({ userId: route.history.current.params.userid }).then(res => {
        this.Answer = res.data
      })
this.getPer()
      

  },
  methods: {
    async getPer() {
      const res1 = await getRecommendUser()
      this.qhguwt = res1.data
    }
  }
}
</script>


<style scoped lang="css" src="./assets/index.rem.css" />
<!-- <style scoped lang="css" src="@/pages/lanhu_youwenbida/assets/index.rem.css" /> -->
<style scoped lang="scss">
   ::v-deep .el-drawer__body {
  .el-menu {
    border: none;
    .el-menu-item {
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: 16px;
      margin-left: 0;
      border-bottom: 1px solid #eae4e4;
      color: #242629;
    }
    
  }
}
::v-deep .el-drawer {
  width: 7rem !important;
  height: 100vh !important;
      position: absolute !important;
      right: 0 !important;
}
.mb_box {
    font-size: 0.48rem;
    height: 2.34rem;
    border-bottom: 1px solid #E0E0E0;
    background: #F6F6F6;
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-bottom: .69rem;
    .area {
      color: #8A8A8A;
    }
    img {
      width: 6px;
      height: 10px;
      margin: 0 10px;
    }
  }
  ::v-deep .ar_deta {
    background: #F6F6F6;
    font-family: PingFang SC, PingFang SC !important;
  }
  .text_11 {
    font-family: PingFang SC, PingFang SC !important;
  }

  .label_4 {
    margin: 0.117rem 0 0 0.14rem;
  }
  .block_2 {
    height: 3rem;
  }
  .box_1 {
    border-bottom: 1px dashed #E0E0E0;
  }
  .image_3 {
    border-radius: 50%;
  }
  .image_5 {
    border-radius: 6px;
  }
  .bussiness_card_box {
    border-radius: 0 0 8px 8px;
    background: #fff;
    margin: 0 12px;
    height: 4rem;
  }
  .card_con {
    width: 17.2rem;
    height: 3.53rem;
    background: #F4F4F4;
    border-radius: 10px 10px 10px 10px;
    margin: 0 auto;
    padding-top: .96rem;
    padding-left: .66rem;
      display: flex;
      justify-content: space-between;
      .img_box {
        width: 1.7rem;
        height: 1.7rem;
        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
      }
      .cent_box {
        flex: 1;
        padding-left: 12px;
        .top_cen {
          font-family: PingFang SC, PingFang SC;
          font-weight: bold;
          font-size: .53rem;
          color: #242629;
          margin-top: 5px;
          margin-bottom: 5px;
          span {
            font-size: .48rem;
            color: #7A7A7A;
            margin-left: 10px;
          }
        }
        .top_ri {
          font-size: .48rem;
          color: #7A7A7A;
        }
      }
  }
  .paddi-r {
    margin-right: 20px;
  }
  .he_artcle {
    background: #fff;
    height: auto;
    border-radius: 8px;
    margin: 14px 12px;
    padding: 12px;
    .title_pub {
      height: 1.5rem;
      padding: 5px 10px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #E0E0E0;
      .tit_left {
        font-family: PingFang SC, PingFang SC;
        font-weight: bold;
        font-size: .74rem;
        color: #000000;
        border-bottom: 2px solid #10A8E5;
        height: 27px;
      }
      .rit_more {
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: .48rem;
        color: #8A8A8A;
      }
    }
    .art_line_item {
      margin: .5rem .4rem;
      margin-left: 15px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: .53rem;
      line-height: .8rem;
      color: #000000;
      position: relative;
      .point_sty {
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #10A8E5;
        left: -10px;
        top: 6px;
      }
    }
  }
  .mar_change {
    margin-top: 1px;
  }
  .mar_0 {
    margin-bottom: 0;
  }

  .art_item_recommend {
    width: 17.76rem;
    
    background: #FFFFFF;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
    border-radius: 10px 10px 10px 10px;
    position: relative;
    margin: .52rem auto;
    padding-top: 1.7rem;
    padding-left: .64rem;
    padding-right: .64rem;
    padding-bottom: 17px;
    .reco_tit {
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: .74rem;
      color: #000000;
      margin-bottom: .42rem;
    }
    .cont_comm {
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: .53rem;
      color: #707070;
      line-height: .96rem;
      margin-bottom: 14px;
    }
    .bottom_de {
      display: flex;
      justify-content: space-between;
      .nic_ava {
        width: 1.06rem;
        height: 1.06rem;
        border-radius: 50%;
      }
      .nic_sty {
        flex: 1;
        font-weight: 500;
        font-size: .53rem;
        color: #7A7A7A;
        transform: translate(6px, 5px);
      }
      .right_num {
        font-weight: 500;
        font-size: .53rem;
        color: #7A7A7A;
        img {
          width: 12px;
          transform: translateY(2px);
          height:10px;
        }
      }
    }
  }

  .section_12 {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 8px;
    width: 18.827rem;
    height: 24.72rem;
    margin: 0.747rem 0 0 0.587rem;
  }
  .section_13 {
  width: 17.734rem;
  height: 0.747rem;
  margin: 0.854rem 0 0 0.534rem;
}

.text_42 {
  width: 4.48rem;
  height: 0.747rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.746rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.747rem;
}

.image-text_32 {
  width: 1.414rem;
  height: 0.48rem;
  margin-top: 0.134rem;
}

.text-group_32 {
  width: 0.96rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(138, 138, 138, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
}

.thumbnail_32 {
  width: 0.294rem;
  height: 0.294rem;
  margin: 0rem -0.027rem 0 0.187rem;
}

.section_14 {
  background-color: rgba(224, 224, 224, 1);
  height: 0.027rem;
  margin-top: 0.747rem;
  width: 18.827rem;
}

.group_25 {
  background-image: linear-gradient(
    90deg,
    rgba(26, 188, 252, 1) 0,
    rgba(7, 150, 210, 1) 100%
  );
  width: 4.48rem;
  height: 0.08rem;
  margin: -0.054rem 0 0 0.534rem;
}

.section_15 {
  width: 17.547rem;
  height: 1.707rem;
  margin: 0.907rem 0 0 0.64rem;
}

.image-text_33 {
  width: 4.854rem;
  height: 1.707rem;
}

.image_10 {
  width: 1.707rem;
  height: 1.707rem;
}

.section_16 {
  width: 2.667rem;
  height: 1.494rem;
  margin-top: 0.16rem;
}

.text-group_33 {
  width: 2.667rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.534rem;
}

.text-wrapper_15 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  margin-top: 0.16rem;
  width: 2.4rem;
}

.text_43 {
  width: 1.707rem;
  height: 0.427rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.426rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.427rem;
  margin: 0.187rem 0 0 0.347rem;
}

.text-wrapper_16 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
  margin: 0.854rem 0 0 0.027rem;
}

.text_44 {
  width: 1.92rem;
  height: 0.427rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.426rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.427rem;
  margin: 0.187rem 0 0 0.24rem;
}

.image-wrapper_3 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 1.28rem;
  border: 1px solid rgba(255, 61, 61, 1);
  width: 1.28rem;
  margin: 0.214rem 0 0 6.694rem;
}

.label_6 {
  width: 0.72rem;
  height: 0.72rem;
  margin: 0.294rem 0 0 0.294rem;
}

.image-wrapper_4 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 1.28rem;
  border: 1px solid rgba(4, 188, 100, 1);
  width: 1.28rem;
  margin: 0.214rem 0 0 1.014rem;
}

.label_7 {
  width: 0.72rem;
  height: 0.72rem;
  margin: 0.294rem 0 0 0.294rem;
}

.section_17 {
  width: 7.974rem;
  height: 0.48rem;
  margin: 0.587rem 0 0 2.827rem;
}

.image-text_34 {
  width: 2.827rem;
  height: 0.48rem;
}

.thumbnail_33 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_34 {
  width: 2.134rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.48rem;
}
.image-text_35 {
  width: 3.494rem;
  height: 0.48rem;
}

.thumbnail_34 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_35 {
  width: 2.8rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.48rem;
}

.section_18 {
  width: 18.827rem;
  height: 0.027rem;
  margin-top: 0.8rem;
}

.section_19 {
  width: 17.547rem;
  height: 1.707rem;
  margin: 0.8rem 0 0 0.64rem;
}
.bott_it_sty {
    height: 4.48rem;
  }
  .bott_it_sty {
    border-bottom: 1px dashed #E0E0E0 !important;
  }
  .label_6,.label_7 {
    width: 0.72rem;
    height: 0.72rem;
    margin: 0.234rem 0 0 0.254rem;
  }
  .turn_big {
    transform: translateX(-40px);
    font-size: .6rem;
  }
  .box_1 {
    margin: 0.107rem 0 0 0.5rem;
  }
</style>