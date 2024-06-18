<template>
  <div>
    <el-drawer :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <el-menu :default-active="activeIndex" :router="true" class="el-menu-vertical-demo">
        <el-menu-item index="/lanhu_shouye">首页</el-menu-item>
        <el-menu-item index="/lanhu_youwenbida">有问必答</el-menu-item>
        <el-menu-item index="/aboutPhone">期货手续费</el-menu-item>
        <el-menu-item index="/aboutPhone">期货保证金</el-menu-item>
        <el-menu-item index="/lanhu_qihuobaozhengjin">期货一对一服务</el-menu-item>
      </el-menu>
    </el-drawer>
    <div class="box_3 flex-col">
      <div class="group_1 flex-row">
        <div class="image-wrapper_1 flex-col justify-between">
          <img class="image_1" referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGc7c8243b244fed5dd5ea65509a4bf192.png" />
          <img class="image_2" referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGa248b93bac5dd25c5ba4e2eff60f7753.png" />
        </div>
        <div class="group_2 flex-col">
          <div class="image-wrapper_2 flex-col">
            <img class="label_4" referrerpolicy="no-referrer"
              src="./assets/img/FigmaDDSSlicePNGc91b60cc0d136034d7e1cde253d50a91.png" />
          </div>
        </div>
        <img class="label_5" referrerpolicy="no-referrer" @click="drawer = true"
          src="./assets/img/FigmaDDSSlicePNG85213edb0f33d45b7ecd052df3ec843a.png" />
      </div>
      <div class="group_3 flex-row">
        <span class="text_3">海洋财经</span>
        <img class="thumbnail_1" style="" referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG378c59d9ff2c6ab7928bcb7dacf26fb5.png" />
        <div class="image-text_1 flex-row justify-between">
          <span class="text-group_1">期货一对一服务</span>
          <img class="thumbnail_2" referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG378c59d9ff2c6ab7928bcb7dacf26fb5.png" />
        </div>
      </div>
      <div class="group_4 flex-col"></div>
    </div>
    <div class="box_4 flex-col">
      <img class="image_3 cl_tit_to" referrerpolicy="no-referrer"
        src="./assets/img/FigmaDDSSlicePNGaed6b8de8e053613b1875e49619a90ee.png" />

      <div style="padding: 10px ;">
        <el-row :gutter="3">
          <el-col :span="24" class="top_po" v-for="item in dataList.slice(0,1)">
            <div class="group_5 flex-row item_in_box">
              <div class="block_1 flex-col top_img">
                <img :src="baseUrlImg + item.avatar">
                <span class="text_8 mark_zz">{{ item.remark }}</span>
              </div>
              <div class="block_2 flex-col justify-between">
                <div class="text-group_4 flex-col cl_to_de">
                  <span class="text_9">{{ item.nickName }}</span>
                  <span class="text_10">已帮助</span>
                  <span class="text_11">{{ item.helpNumber
                    }}人</span>
                </div>
                <div class="block_3 flex-row bott_two">
                  <!-- <div class="image-text_6 flex-row justify-between cl_le">
                    <img class="label_7" referrerpolicy="no-referrer"
                      src="./assets/img/152698e1a95c49d89c9b93819104b31a_mergeImage.png" />
                    <span class="text-group_5"><router-link
                        :to="`/lanhu_wanghaijingli/${item.userId}`">咨询</router-link></span>
                  </div> -->
                  <div class="image-text_7 flex-row justify-between cl_le">
                    <img class="label_7" referrerpolicy="no-referrer"
                      src="./assets/img/152698e1a95c49d89c9b93819104b31a_mergeImage.png" />
                    <span class="text-group_5"><router-link
                        :to="`/lanhu_wanghaijingli/${item.userId}`">咨询</router-link></span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="left_item_per" v-for="item in dataList.slice(1,3)" style="padding-top: 10px;">
            <div class="group_5 flex-row">
              <div class="block_1 flex-col top_img">
                <img :src="baseUrlImg + item.avatar">
                <span class="text_8 mark_zz">{{ item.remark }}</span>
              </div>
              <div class="block_2 flex-col justify-between">
                <div class="text-group_4 flex-col cl_le">
                  <span class="text_9">{{ item.nickName }}</span>
                  <span class="text_10">已帮助</span>
                  <span class="text_11">{{ item.helpNumber
                    }}人</span>
                </div>
                <div class="block_3 flex-row">
                  <div class="image-text_6 flex-row justify-between">
                    <img class="label_7" referrerpolicy="no-referrer"
                      src="./assets/img/152698e1a95c49d89c9b93819104b31a_mergeImage.png" />
                    <span class="text-group_5"><router-link
                        :to="`/lanhu_wanghaijingli/${item.userId}`">咨询</router-link></span>
                  </div>
                  <div class="image-text_7 flex-row justify-between">
                    <img class="label_7" referrerpolicy="no-referrer"
                      src="./assets/img/152698e1a95c49d89c9b93819104b31a_mergeImage.png" />
                    <span class="text-group_5"><router-link
                        :to="`/lanhu_wanghaijingli/${item.userId}`">咨询</router-link></span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>


      </div>
      <div class="box_9 flex-row">
        <div class="image-text_11 flex-row justify-between">
          <img class="thumbnail_3" referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGc03324d3b69e5a98ffe9ebfde912cc6d.png" />
          <span class="text-group_8">顾问动态：</span>
        </div>
        <span class="text_16">郭瑾顾问刚刚回答了一条问题：《有冠心...</span>
      </div>
      <span class="text_17">优质顾问</span>
      <div class="box_10 flex-col great_question">
        <div class="section_5 flex-row">
          <div class="text-group_9 flex-col justify-between">
            <span class="text_18">优质顾问</span>
            <span class="text_19">最具影响力的理财顾问</span>
          </div>
        </div>
        <div style="width: 100%;background-color: #fff;padding-bottom: 20Px;">
          <div class="per_item" v-for="item in dataList1.slice(0,6)">
            <div class="section_6 flex-row">
              <div class="image-text_12 flex-row justify-between">
                <img class="image_4" referrerpolicy="no-referrer"
                  src="./assets/img/FigmaDDSSlicePNG8e6104d3ccde290b76a1941918f9eb50.png" />
                <div class="block_4 flex-col justify-between">
                  <span class="text-group_10">{{ item.nickName }}</span>
                  <div class="text-wrapper_5 flex-col"><span class="text_20">股票顾问</span></div>
                </div>
              </div>
              <div class="text-wrapper_6 flex-col"><span class="text_21">帮助{{ item.helpNumber
                  }}</span></div>
              <div class="image-wrapper_3 flex-col">
                <img class="label_9" referrerpolicy="no-referrer"
                  src="./assets/img/FigmaDDSSlicePNG854cf5844a8ddcd486c61b1cf69fb52c.png" />
              </div>
              <div class="image-wrapper_4 flex-col">
                <img class="label_10" referrerpolicy="no-referrer"
                  src="./assets/img/FigmaDDSSlicePNG7235843c577a660f1e6f88cc5aa9a3f6.png" />
              </div>
            </div>
            <div class="section_7 flex-row justify-between">
              <div class="image-text_13 flex-row justify-between">
                <img class="thumbnail_4" referrerpolicy="no-referrer"
                  src="./assets/img/FigmaDDSSlicePNGc0aade8c1037e19137e79105b3c92f59.png" />
                <span class="text-group_11">好评{{ item.userViews }}</span>
              </div>
              <div class="image-text_14 flex-row justify-between">
                <img class="thumbnail_5" referrerpolicy="no-referrer"
                  src="./assets/img/FigmaDDSSlicePNGb42c80e173419edeb30ef9937b8e2ed3.png" />
                <span class="text-group_12">浏览量{{ item.userViews }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box_14 flex-col cl_tu_to_sty">
      <div class="group_8 flex-row justify-between">
        <span class="text_32">最新问答</span>
        <div class="image-text_30 flex-row">
          <span class="text-group_28">更多</span>
          <img class="thumbnail_16" referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG378b835325af5a684c617c3fec63849a.png" />
        </div>
      </div>
      <div class="group_9 flex-col">
        <div class="section_18 flex-col"></div>
      </div>
      <div class="group_10 flex-row justify-between">
        <div class="block_6 flex-col"></div>
        <div class="block_7 flex-col justify-between">
          <div class="box_15 flex-col" v-for="item in dataList2">
            <img class="colo_le_nick" referrerpolicy="no-referrer"
              :src="baseUrlImg + item.avatar">

            <div class="block_8 flex-row justify-between">
              <div class="image-text_31 flex-row justify-between">
                <span class="text-group_29">{{ item.nickName }}</span>
                <div class="block_9 flex-col"></div>
              </div>
              <span class="text_33">{{ item.createTime }}</span>
            </div>
            <div class="block_10 flex-col">
              <div class="box_16 flex-row justify-between">
                <div class="text-wrapper_17 flex-col"><span class="text_34">问</span></div>
                <span class="text_35">{{ item.title.slice(0,20) }}</span>
              </div>
              <div class="box_17 flex-row justify-between">
                <div class="text-wrapper_18 flex-col"><span class="text_36">答</span></div>
                <span class="text_37" v-html="item.result.slice(0, 50)">

                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div>

      <div class="box_21 flex-col">
        <div class="box_22 flex-row justify-between">
          <span class="text_48">最新问答</span>
          <div class="text-wrapper_23 flex-col"><span class="text_49">换一批</span></div>
        </div>
        <div class="box_23 flex-col">
          <div class="block_15 flex-col"></div>
        </div>
        <div class="box_24 flex-row justify-between">
          <div class="group_14 flex-col">
            <div class="group_15 flex-col"></div>
            <div class="group_16 flex-col">
              <div class="box_25 flex-col"></div>
              <div class="box_26 flex-col"></div>
              <div class="box_27 flex-col"></div>
              <div class="box_28 flex-col"></div>
            </div>
            <div class="group_17 flex-col last_cir"></div>
          </div>
          <div class="text-wrapper_24 flex-col">
            <div class="te_item" v-for="item in dataList3.slice(0,6)">
              <span class="text_50">{{ item.title }}</span>
              <span class="text_51" v-html="item.result.slice(0, 20)">
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="box_29 flex-col">
      <div class="list_1 flex-row">
        <div class="image-text_34 flex-col justify-between" v-for="(item, index) in loopData0" :key="index">
          <img class="image_13" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
          <span class="text-group_32" v-html="item.lanhutext0"></span>
        </div>
      </div>
      <div class="group_18 flex-col"></div>
      <span class="paragraph_1">
        京ICP备19048506号-2&nbsp;Copyright
        <br />
        &#64;&nbsp;2024&nbsp;中国海洋财经有限公司&nbsp;All&nbsp;Rights&nbsp;Reserved.
      </span>
    </div>
  </div>
</template>

<script>
import { getRecommendUser, getUsers, getLatestAnswer, getLasterAnswerII } from '@/api/index'

export default {

  name: 'Index',
  components: {

  },
  data() {
    return {
      drawer: false,
      loopData0: [
        {
          lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGfcd97fd90f0f75097d6661238ccc7d77.png',
          lanhutext0: '咨询'
        },
        {
          lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGfcd97fd90f0f75097d6661238ccc7d77.png',
          lanhutext0: '关注'
        }
      ],
      constants: {},
      dataList: [],
      dataList1: [],
      dataList2: [],
      dataList3: []
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
  }
}
</script>
<style>
.header {
  width: 100%;
  height: 200px;
  background-image: url(../../assets/img/3491.png);
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

</style>
<style scoped lang="css" src="./assets/index.rem.css" />
<style lang="scss" scoped>
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
}
.cl_tit_to {
  margin-bottom: 8px;
}
.item_in_box {
  margin: 0 auto;
  width: 8.66rem;
  height: 4.85rem;
  .text_9 {
    text-align: left;
    margin-top: 10px;
  }
  .text_11 {
    text-align: left;
  }
  .cl_to_de {
    margin-bottom: 8px;

  }
  .block_3 {
    border-radius: 3px;
  }
}
.top_img {
  img {
    width: 3.52rem;
    height: 4.16rem;
    margin-top: 7px;
    margin-left: 7px;
    margin-right: 6px;

  }
}
.bott_two {
  .cl_le {
    margin: 0 auto;
    width: 2.16rem;
    height: 4.85rem;
  }
}
.mark_zz {
  width: 3.52rem;
  height: 1.12rem;
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  text-align: center;
  top: 3.1rem;
  line-height: 1.12rem;
  left: 4.2rem;
}
.left_item_per {
  position: relative;
  margin: 0 auto;
  width: 8.66rem;
  height: 4.85rem;
  .text_9 {
    text-align: left;
    margin-top: 10px;
  }
  .text_11 {
    text-align: left;
  }
  .block_3 {
    margin-top: 18px;
  }
  .mark_zz {
    top: 3.5rem;
    line-height: 1.12rem;
    left: -0.4rem;
  }
  .block_3 {
    border-radius: 3px;
  }
}

.left_item_per:nth-child(2){
  margin-right: 10px;
}
.top_po {
  position: relative;
}
.label_4 {
  margin: 0.127rem 0 0 0.137rem;
}
.cl_tu_to_sty {
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  .image-text_31 {
    width: 2.467rem;
    .text-group_29 {
      width: 1.667rem;
    }
  }
}
.great_question {
  margin-left: 0;
    width: 18.82rem;
    .section_5 {
      width: 100%;
    }
    .label_9 {
      margin: 0.247rem 0 0 0.26rem;
    }
    .label_10 {
      margin: 0.244rem 0 0 0.244rem;
    }
    .text_37 {
      transform: translateY(-9px);
    }
}
.box_14 {
  margin-top: 0;
}
.colo_le_nick {
  border-radius: 50%;
  width: 1.65rem;
  height: 1.65rem;
  position: absolute;left: 10px;
}
.box_21 {
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  margin: 0.4rem 0 0 0.587rem;
  .text-wrapper_23 {
    transform: translateY(-17px);
  }
  .group_14 {
    margin-top: .534rem;
  }
  
}
::v-deep .text_51 {
    p { 
      text-align: left
    }
  }
  ::v-deep .te_item {
    margin-bottom: 10px;
  }
  .box_25 {
    top: 2.894rem;
  }
  .box_25::after {
    content: "";
    background: #fff;
    width: 3px;
    height: 3px;
    position: absolute;
    left: -1.5px;
    border-radius: 50%;
    top: -1.5px;
  }
  .box_27 {
    top: 8.467rem;
  }
  .box_27::after {
    content: "";
    background: #fff;
    width: 3px;
    height: 3px;
    position: absolute;
    left: -1.5px;
    border-radius: 50%;
    top: -1.5px;
  }
  .box_28 {
    top: 11.254rem;
  }
  .box_28::after {
    content: "";
    background: #fff;
    width: 3px;
    height: 3px;
    position: absolute;
    left: -1.5px;
    border-radius: 50%;
    top: -1.5px;
  }
  .box_26::after {
    content: "";
    background: #fff;
    width: 3px;
    height: 3px;
    position: absolute;
    left: -1.5px;
    border-radius: 50%;
    top: -1.5px;
  }

  ::v-deep .group_15::after {
    content: "";
    background: #fff;
    width: 3px;
    height: 3px;
    position: absolute;
    left: -1.5px;
    border-radius: 50%;
    top: -1.5px;
  }
  .last_cir {
    transform: translateY(-12px);
  }
  .last_cir::after {
    content: "";
    background: #fff;
    width: 3px;
    height: 3px;
    position: absolute;
    left: -1.5px;
    border-radius: 50%;
    top: -1.5px;
  }
  .paragraph_1 {
    width: 13.56rem;
  }
  .per_item {
    border-bottom: 1px dashed #E0E0E0;
    padding-bottom: 12px;
  }
  .box_4 {
    height: auto;
  }

</style>