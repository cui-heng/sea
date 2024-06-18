<template>
  <div class="answer_detail">
    <el-drawer :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <el-menu :default-active="activeIndex" :router="true" class="el-menu-vertical-demo">
        <el-menu-item index="/lanhu_shouye">首页</el-menu-item>
        <el-menu-item index="/lanhu_youwenbida">有问必答</el-menu-item>
        <el-menu-item index="/aboutPhone">期货手续费</el-menu-item>
        <el-menu-item index="/aboutPhone">期货保证金</el-menu-item>
        <el-menu-item index="/lanhu_qihuobaozhengjin">期货一对一服务</el-menu-item>
      </el-menu>
    </el-drawer>
    <div class="group_3 flex-col">
      <div class="box_1 flex-row">
        <div class="image-wrapper_1 flex-col justify-between">
          <img class="image_1" referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG41d76e5352422ea2728cff2c9f23ed19.png" />
          <img class="image_2" referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGa248b93bac5dd25c5ba4e2eff60f7753.png" />
        </div>
        <div class="group_4 flex-col">
          <div class="image-wrapper_2 flex-col">
            <img class="label_4" referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGc91b60cc0d136034d7e1cde253d50a91.png" />
          </div>
        </div>
        <img class="label_5"  @click="drawer = true" referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG85213edb0f33d45b7ecd052df3ec843a.png" />
      </div>
      <div class="mb_box">
        <p class="area">海洋财经</p>
        <img src="@/assets/img/mb-rih.png" alt="">
        <p>有问必答</p>
        <img src="@/assets/img/mb-rih.png" alt="">
        <p>{{ topDataTo.title }}</p>
      </div>
      <div class="box_4 flex-col">
        <div class="block_1 flex-row justify-between">
          <div class="text-wrapper_2 flex-col">
            <span class="text_6">{{ topDataTo.tag }}</span>
          </div>
          <!-- <div class="text-wrapper_3 flex-col">
            <span class="text_7">入市</span>
          </div>
          <div class="text-wrapper_4 flex-col">
            <span class="text_8">期货投资</span>
          </div> -->
        </div>
        <span class="text_9">{{ topDataTo.title }}</span>
        <div class="text-wrapper_5 flex-row justify-between">
          <span class="text_10">{{ topDataTo.position}}</span>
          <span class="text_11">浏览:{{ topDataTo.viewNumber }}人</span>
        </div>
        <div class="block_2 flex-row justify-between">
          <div class="group_5 flex-row">
            <div class="image-text_1 flex-row justify-between">
              <img class="thumbnail_3" referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG60e4fb5985e853c498d48dc833114e70.png" />
              <span class="text-group_1"> <router-link to="/wlhd">我来回答</router-link></span>
            </div>
          </div>
          <div class="group_6 flex-row">
            <div class="image-text_2 flex-row justify-between">
              <img class="thumbnail_4" referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG7f1fda1bd9617e23a5d1598d93cedd60.png" />
              <span class="text-group_2"><router-link to="/lanhu_denglux2fzhucePhone">入驻注册</router-link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="answer_question">
      <span class="text_12">共{{artList.length}}个顾问回答</span>
      <div class="section_1 flex-col">
        <div class="block_3 flex-col"></div>
      </div>
      <div v-for="item in artList">
      <div class="section_2 flex-row">
        <div class="image-text_3 flex-row justify-between">
          <img class="image_3" referrerpolicy="no-referrer"
          :src="baseUrlImg + item.avatar"  />
          <div class="section_3 flex-col justify-between">
            <span class="text-group_3">{{ item.nickName }}</span>
            <div class="text-wrapper_6 flex-col">
              <span class="text_13">{{ item.position }}</span>
            </div>
          </div>
        </div>
 
        <div class="text-wrapper_7 flex-col">
          <span class="text_14">帮助{{
        item.helpNumber
      }}万</span>
        </div>
        <div class="box_5 flex-row">
          <div class="image-text_4 flex-row justify-between">
            <img class="image_4" referrerpolicy="no-referrer"
              src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/8ca4dec2a34e44a4a95a7c50c2d6ec25_mergeImage.png" />
            <span class="text-group_4">电话咨询</span>
          </div>
        </div>
        <div class="box_6 flex-row">
          <div class="image-text_5 flex-row justify-between">
            <img class="thumbnail_5" referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG95e5c14581117ddb18691a993bf92982.png" />
            <span class="text-group_5">微信咨询</span>
          </div>
        </div>
      </div>
      <span class="text_15" v-html="item.result"></span>
      <div class="section_4 flex-col"></div>
      </div>
    </div>
    <div class="img_box_phone">
      <img src="@/assets/img/Group 3145.png" alt="">
    <!-- <div class="box_10 flex-col great_question">
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
                  src="@/pages/lanhu_qihuobaozhengjin/assets/img/FigmaDDSSlicePNG8e6104d3ccde290b76a1941918f9eb50.png" />
                <div class="block_4 flex-col justify-between">
                  <span class="text-group_10">{{ item.nickName }}</span>
                  <div class="text-wrapper_5 flex-col"><span class="text_20">股票顾问</span></div>
                </div>
              </div>
              <div class="text-wrapper_6 flex-col"><span class="text_21">帮助{{ item.helpNumber
                  }}</span></div>
              <div class="image-wrapper_3 flex-col">
                <img class="label_9" referrerpolicy="no-referrer"
                  src="@/pages/lanhu_qihuobaozhengjin/assets/img/FigmaDDSSlicePNG854cf5844a8ddcd486c61b1cf69fb52c.png" />
              </div>
              <div class="image-wrapper_4 flex-col">
                <img class="label_10" referrerpolicy="no-referrer"
                  src="@/pages/lanhu_qihuobaozhengjin/assets/img/FigmaDDSSlicePNG7235843c577a660f1e6f88cc5aa9a3f6.png" />
              </div>
            </div>
            <div class="section_7 flex-row justify-between">
              <div class="image-text_13 flex-row justify-between">
                <img class="thumbnail_4" referrerpolicy="no-referrer"
                  src="@/pages/lanhu_qihuobaozhengjin/assets/img/FigmaDDSSlicePNGc0aade8c1037e19137e79105b3c92f59.png" />
                <span class="text-group_11">好评{{ item.userViews }}</span>
              </div>
              <div class="image-text_14 flex-row justify-between">
                <img class="thumbnail_5" referrerpolicy="no-referrer"
                  src="@/pages/lanhu_qihuobaozhengjin/assets/img/FigmaDDSSlicePNGb42c80e173419edeb30ef9937b8e2ed3.png" />
                <span class="text-group_12">浏览量{{ item.userViews }}</span>
              </div>
            </div>
          </div>
        </div>
      </div> -->

    </div>

      <div class="person_box">
        <span class="text_12">金牌顾问</span>
        <div class="section_1 flex-col">
          <div class="block_3 flex-col"></div>
        </div>
        <div class="per_item_sty" v-for="item in dataList1.slice(0,6)">
        <div class="left_img">
          <img class="ava_ing" :src="baseUrlImg + item.avatar" alt="">
        </div>
        <div class="cent_box">
          <h3>
            {{ item.nickName }}
          </h3>
          <p>
            <span>{{ item.remark }}</span>
            <span>帮助{{ item.helpNumber }}</span>
          </p>
          <div class="bottom_n">
            <div class="det">
              <img class="thumbnail_4" referrerpolicy="no-referrer" src="@/pages/lanhu_qihuobaozhengjin/assets/img/FigmaDDSSlicePNGc0aade8c1037e19137e79105b3c92f59.png" />
              <span>好评{{ item.positiveReviews }}</span>
              <img class="thumbnail_4" referrerpolicy="no-referrer" src="@/pages/lanhu_qihuobaozhengjin/assets/img/FigmaDDSSlicePNGc0aade8c1037e19137e79105b3c92f59.png" />
              <span>浏览量{{ item.userViews }}</span>
            </div>
          </div>
        </div>
        <div class="right_btn">
          <div class="image-wrapper_3 flex-col">
              <img class="label_9" referrerpolicy="no-referrer"
                src="@/pages/lanhu_qihuobaozhengjin/assets/img/FigmaDDSSlicePNG854cf5844a8ddcd486c61b1cf69fb52c.png" />
            </div>
            <div class="image-wrapper_4 flex-col">
              <img class="label_10" referrerpolicy="no-referrer"
                src="@/pages/lanhu_qihuobaozhengjin/assets/img/FigmaDDSSlicePNG7235843c577a660f1e6f88cc5aa9a3f6.png" />
            </div>
        </div>
      </div>

      </div>

      <div class="hot_question mar-bott">
        <div class="group_30 flex-row justify-between">
          <span class="text_35" >其他类型问题</span>
          <div class="image-text_28 flex-row">
            <span class="text-group_28" >更多</span>
            <img class="thumbnail_19" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG378b835325af5a684c617c3fec63849a.png" />
          </div>
        </div>
        <div  v-for="item in  artList1">
        <div class="group_31 flex-col">
          <div class="block_7 flex-col"></div>
        </div>
        <div class="group_32 flex-row">
          <div class="box_10 flex-col"></div>
          <span class="text_36">{{ item.title }}</span>
          <span class="text_37">{{ item.replyCount }}个回答</span>
        </div>
      </div>
      </div>
    
      <div class="hot_question">
        <div class="group_30 flex-row justify-between">
          <span class="text_35" >期货顾问推荐</span>
          <div class="image-text_28 flex-row">
            <span class="text-group_28" >更多</span>
            <img class="thumbnail_19" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG378b835325af5a684c617c3fec63849a.png" />
          </div>
        </div>
        <div  v-for="item in  HotAnswer"> 
        <div class="group_31 flex-col">
          <div class="block_7 flex-col"></div>
        </div>
        <div class="group_32 flex-row">
          <div class="box_10 flex-col"></div>
          <span class="text_36">{{ item.title }}</span>
          <span class="text_37">{{ item.replyCount }}个回答</span>
        </div>
      </div>
      </div>
    <div class="group_39 flex-col">
      <div class="list_2 flex-row">
        <div class="image-text_29 flex-col justify-between" v-for="(item, index) in loopData1" :key="index">
          <img class="image_14" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
          <span class="text-group_29" v-html="item.lanhutext0"></span>
        </div>
      </div>
      <div class="group_40 flex-col"></div>
      <span
        class="paragraph_1">京ICP备19048506号-2&nbsp;Copyright<br />&#64;&nbsp;2024&nbsp;中国海洋财经有限公司&nbsp;All&nbsp;Rights&nbsp;Reserved.</span>
    </div>
  </div>
</template>

<script>
import { getAnswerInfo, getRecommendUser, getHotAnswer, getOtherTypeAnswer, getUsers } from '@/api/index'
import route from '@/router'
export default {

  name: 'Index',
  components: {

  },
  data() {
    return {
      drawer:false,
      dataList1: [],
      loopData0: [
        {
          lanhutext0: '热议问题',
          lanhutext1: '更多',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG378b835325af5a684c617c3fec63849a.png',
          lanhutext2:
            '如何在技术上实现广告植入的正常姿势，从而达成用流量、收益三者之间的动态平衡？',
          lanhutext3: '46个回答',
          lanhutext4:
            '如何在技术上实现广告植入的正常姿势，从而达成用流量、收益三者之间的动态平衡？',
          lanhutext5: '46个回答',
          lanhutext6:
            '如何在技术上实现广告植入的正常姿势，从而达成用流量、收益三者之间的动态平衡？',
          lanhutext7: '46个回答',
          lanhutext8:
            '如何在技术上实现广告植入的正常姿势，从而达成用流量、收益三者之间的动态平衡？',
          lanhutext9: '46个回答',
          lanhutext10:
            '如何在技术上实现广告植入的正常姿势，从而达成用流量、收益三者之间的动态平衡？',
          lanhutext11: '46个回答',
          lanhutext12:
            '如何在技术上实现广告植入的正常姿势，从而达成用流量、收益三者之间的动态平衡？',
          lanhutext13: '46个回答',
        },
        {
          lanhutext0: '其他类型问题',
          lanhutext1: '更多',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG378b835325af5a684c617c3fec63849a.png',
          lanhutext2:
            '如何在技术上实现广告植入的正常姿势，从而达成用流量、收益三者之间的动态平衡？',
          lanhutext3: '46个回答',
          lanhutext4:
            '如何在技术上实现广告植入的正常姿势，从而达成用流量、收益三者之间的动态平衡？',
          lanhutext5: '46个回答',
          lanhutext6:
            '如何在技术上实现广告植入的正常姿势，从而达成用流量、收益三者之间的动态平衡？',
          lanhutext7: '46个回答',
          lanhutext8:
            '如何在技术上实现广告植入的正常姿势，从而达成用流量、收益三者之间的动态平衡？',
          lanhutext9: '46个回答',
          lanhutext10:
            '如何在技术上实现广告植入的正常姿势，从而达成用流量、收益三者之间的动态平衡？',
          lanhutext11: '46个回答',
          lanhutext12:
            '如何在技术上实现广告植入的正常姿势，从而达成用流量、收益三者之间的动态平衡？',
          lanhutext13: '46个回答',
        },
      ],
      topDataTo: {},
      loopData1: [
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGfcd97fd90f0f75097d6661238ccc7d77.png',
          lanhutext0: '咨询',
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGfcd97fd90f0f75097d6661238ccc7d77.png',
          lanhutext0: '关注',
        },
      ],
      constants: {},
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
      this.topDataTo = res.data.answer
    }),
    getUsers().then(res => {
      this.dataList1 = res.data
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
    }
  }
}
</script>
<style scoped>
html {
  font-size: 37.5px;
}

.page {
  background-color: rgba(246, 246, 246, 1);
  position: relative;
  width: 20rem;
  height: 117.52rem;
  overflow: hidden;
}

.group_1 {
  background-color: rgba(255, 255, 255, 1);
  width: 20rem;
  height: 4.694rem;
}

.group_2 {
  background-color: rgba(1, 2, 7, 1);
  width: 20rem;
  height: 2.347rem;
}

.text_1 {
  width: 2.027rem;
  height: 1.067rem;
  overflow-wrap: break-word;
  color: rgba(1, 2, 7, 1);
  font-size: 0.746rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 0.747rem;
  margin: 0.64rem 0 0 1.12rem;
}

.label_1 {
  width: 0.854rem;
  height: 0.614rem;
  margin: 0.827rem 0 0 12.374rem;
}

.label_2 {
  width: 0.774rem;
  height: 0.64rem;
  margin: 0.8rem 0 0 0.267rem;
}

.label_3 {
  width: 1.307rem;
  height: 0.64rem;
  margin: 0.8rem 1.094rem 0 0.187rem;
}

.text-wrapper_1 {
  background-color: rgba(246, 246, 246, 1);
  border-radius: 4px;
  height: 1.92rem;
  width: 18.8rem;
  margin: 0.214rem 0 0.214rem 0.587rem;
}

.text_2 {
  width: 8.534rem;
  height: 0.827rem;
  overflow-wrap: break-word;
  color: rgba(56, 56, 56, 1);
  font-size: 0.586rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 0.587rem;
  margin: 0.56rem 0 0 0.8rem;
}

.group_3 {
  width: 20rem;
  height: 14.08rem;
}

.box_1 {
  background-color: rgba(2, 54, 101, 1);
  width: 20rem;
  height: 2.667rem;
  justify-content: flex-center;
}

.image-wrapper_1 {
  width: 4.774rem;
  height: 1.307rem;
  margin: 0.694rem 0 0 0.587rem;
}

.image_1 {
  width: 4.694rem;
  height: 0.88rem;
  margin-left: 0.08rem;
}

.image_2 {
  width: 4.694rem;
  height: 0.267rem;
  margin-top: 0.16rem;
}

.group_4 {
  background-color: rgba(217, 217, 217, 0);
  height: 1.28rem;
  width: 1.28rem;
  margin: 0.694rem 0 0 10rem;
}

.image-wrapper_2 {
  border-radius: 50%;
  height: 1.28rem;
  border: 3.4000000953674316px solid rgba(255, 255, 255, 1);
  width: 1.28rem;
}

.label_4 {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.267rem 0 0 0.267rem;
}

.label_5 {
  width: 1.28rem;
  height: 1.28rem;
  margin: 0.694rem 0.587rem 0 1.494rem;
}

.box_2 {
  width: 16.854rem;
  height: 0.48rem;
  margin: 0.934rem 0 0 0.587rem;
}

.text_3 {
  width: 1.92rem;
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

.thumbnail_1 {
  width: 0.16rem;
  height: 0.16rem;
  margin: 0.107rem 0 0 0.48rem;
}

.text_4 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(138, 138, 138, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-left: 0.347rem;
}

.thumbnail_2 {
  width: 0.16rem;
  height: 0.16rem;
  margin: 0.107rem 0 0 0.507rem;
}

.text_5 {
  width: 11.04rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-left: 0.32rem;
}

.box_3 {
  background-color: rgba(224, 224, 224, 1);
  width: 20rem;
  height: 0.027rem;
  margin-top: 0.934rem;
}

.box_4 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  width: 18.827rem;
  height: 7.52rem;
  justify-content: flex-center;
  margin: 0.694rem 0 0.827rem 0.587rem;
}

.block_1 {
  width: 10.347rem;
  height: 1.174rem;
  margin: 0.8rem 0 0 0.8rem;
}

.text-wrapper_2 {
  background-color: rgba(254, 232, 232, 1);
  border-radius: 44px;
  height: 1.174rem;
  width: 3.2rem;
}

.text_6 {
  width: 1.067rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(255, 61, 61, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.534rem;
  margin: 0.32rem 0 0 1.067rem;
}

.text-wrapper_3 {
  background-color: rgba(254, 232, 232, 1);
  border-radius: 44px;
  height: 1.174rem;
  margin-left: 0.374rem;
  width: 3.2rem;
}

.text_7 {
  width: 1.067rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(255, 61, 61, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.534rem;
  margin: 0.32rem 0 0 1.067rem;
}

.text-wrapper_4 {
  background-color: rgba(254, 232, 232, 1);
  border-radius: 44px;
  height: 1.174rem;
  margin-left: 0.374rem;
  width: 3.2rem;
}

.text_8 {
  width: 2.134rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(255, 61, 61, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.534rem;
  margin: 0.32rem 0 0 0.534rem;
}

.text_9 {
  width: 13.494rem;
  height: 0.587rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.586rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.587rem;
  margin: 0.8rem 0 0 0.8rem;
}

.text-wrapper_5 {
  width: 8.054rem;
  height: 0.48rem;
  margin: 0.64rem 0 0 0.8rem;
}

.text_10 {
  width: 2.4rem;
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

.text_11 {
  width: 1.867rem;
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

.block_2 {
  width: 10.667rem;
  height: 1.44rem;
  margin: 0.8rem 0 0.8rem 0.8rem;
}

.group_5 {
  background-image: linear-gradient(90deg,
      rgba(26, 188, 251, 1) 0,
      rgba(7, 150, 210, 1) 100%);
  border-radius: 12px;
  width: 4.854rem;
  height: 1.44rem;
}

.image-text_1 {
  width: 2.987rem;
  height: 0.534rem;
  margin: 0.454rem 0 0 0.934rem;
}

.thumbnail_3 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_1 {
  width: 2.134rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.534rem;
}

.group_6 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 12px;
  width: 4.854rem;
  height: 1.44rem;
  border: 1px solid rgba(255, 61, 61, 1);
}

.image-text_2 {
  width: 2.987rem;
  height: 0.534rem;
  margin: 0.454rem 0 0 0.934rem;
}

.thumbnail_4 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_2 {
  width: 2.134rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(255, 61, 61, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.534rem;
}

.group_7 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  width: 18.827rem;
  height: 21.814rem;
  margin: -0.027rem 0 0 0.587rem;
}

.text_12 {
  width: 4.934rem;
  height: 0.747rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.746rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.747rem;
  margin: 0.854rem 0 0 0.534rem;
}

.section_1 {
  background-color: rgba(224, 224, 224, 1);
  height: 0.027rem;
  margin-top: 0.747rem;
  width: 18.3rem;
}

.block_3 {
  background-image: linear-gradient(90deg,
      rgba(26, 188, 252, 1) 0,
      rgba(7, 150, 210, 1) 100%);
  width: 4.934rem;
  height: 0.08rem;
  margin: -0.054rem 0 0 0.534rem;
}

.section_2 {
  width: 17.654rem;
  height: 1.974rem;
  margin: 0.96rem 0 0 0.534rem;
  margin-bottom: -14px;
}

.image-text_3 {
  width: 6.24rem;
  height: 1.974rem;
}
.image-text_3 img {
  border-radius: 50%;
}

.image_3 {
  width: 1.974rem;
  height: 1.974rem;
}

.section_3 {
  width: 3.734rem;
  height: 1.974rem;
}

.text-group_3 {
  width: 3.734rem;
  height: 0.747rem;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 0.746rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.747rem;
}

.text-wrapper_6 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  margin-top: 0.427rem;
  width: 2.4rem;
}

.text_13 {
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

.text-wrapper_7 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
  margin: 1.174rem 0 0 -1.014rem;
}

.text_14 {
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

.box_5 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 4px;
  width: 4.054rem;
  height: 1.174rem;
  margin: 0.4rem 0 0 .8rem;
}

.image-text_4 {
  width: 2.667rem;
  height: 0.507rem;
  margin: 0.347rem 0 0 0.72rem;
}

.image_4 {
  width: 0.747rem;
  height: 0.507rem;
}

.text-group_4 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
}

.box_6 {
  background-color: rgba(16, 203, 140, 1);
  border-radius: 4px;
  width: 4.054rem;
  height: 1.174rem;
  margin: 0.4rem 0 0 0.64rem;
}

.image-text_5 {
  width: 2.72rem;
  height: 0.534rem;
  margin: 0.32rem 0 0 0.667rem;
}

.thumbnail_5 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_5 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.027rem;
}

.text_15 {
  width: 15.147rem;
  height: 1.92rem;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 0.64rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.96rem;
  margin: 0.64rem 0 0 3.04rem;
  transform: translateY(-10px);
}
::v-deep .text_15 p{
  margin: 0 0;
  margin-left: 3rem;
}

.section_4 {
  width: 18.127rem;
  height: 0.027rem;
  border-bottom: 1px dashed rgba(224, 224, 224, 1);
  margin-top: 0.56rem;
}

.section_5 {
  width: 17.654rem;
  height: 1.974rem;
  margin: 0.96rem 0 0 0.534rem;
}

.image-text_6 {
  width: 6.24rem;
  height: 1.974rem;
}

.image_5 {
  width: 1.974rem;
  height: 1.974rem;
}

.block_4 {
  width: 3.734rem;
  height: 1.974rem;
}

.text-group_6 {
  width: 3.734rem;
  height: 0.747rem;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 0.746rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.747rem;
}

.text-wrapper_8 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  margin-top: 0.427rem;
  width: 2.4rem;
}

.text_16 {
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

.text-wrapper_9 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
  margin: 1.174rem 0 0 -1.014rem;
}

.text_17 {
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

.block_5 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 6px;
  width: 4.054rem;
  height: 1.174rem;
  margin: 0.4rem 0 0 1.28rem;
}

.image-text_7 {
  width: 2.667rem;
  height: 0.507rem;
  margin: 0.347rem 0 0 0.72rem;
}

.image_6 {
  width: 0.747rem;
  height: 0.507rem;
}

.text-group_7 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
}

.block_6 {
  background-color: rgba(16, 203, 140, 1);
  border-radius: 6px;
  width: 4.054rem;
  height: 1.174rem;
  margin: 0.4rem 0 0 0.64rem;
}

.image-text_8 {
  width: 2.72rem;
  height: 0.534rem;
  margin: 0.32rem 0 0 0.667rem;
}

.thumbnail_6 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_8 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.027rem;
}

.text_18 {
  width: 15.147rem;
  height: 1.92rem;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 0.64rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.96rem;
  margin: 0.64rem 0 0 3.04rem;
}

.section_6 {
  width: 18.827rem;
  height: 0.027rem;
  border: 1px solid rgba(224, 224, 224, 1);
  margin-top: 0.96rem;
}

.section_7 {
  width: 17.654rem;
  height: 1.974rem;
  margin: 0.96rem 0 0 0.534rem;
}

.image-text_9 {
  width: 6.24rem;
  height: 1.974rem;
}

.image_7 {
  width: 1.974rem;
  height: 1.974rem;
}

.box_7 {
  width: 3.734rem;
  height: 1.974rem;
}

.text-group_9 {
  width: 3.734rem;
  height: 0.747rem;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 0.746rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.747rem;
}

.text-wrapper_10 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  margin-top: 0.427rem;
  width: 2.4rem;
}

.text_19 {
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

.text-wrapper_11 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
  margin: 1.174rem 0 0 -1.014rem;
}

.text_20 {
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

.group_8 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 6px;
  width: 4.054rem;
  height: 1.174rem;
  margin: 0.4rem 0 0 1.28rem;
}

.image-text_10 {
  width: 2.667rem;
  height: 0.507rem;
  margin: 0.347rem 0 0 0.72rem;
}

.image_8 {
  width: 0.747rem;
  height: 0.507rem;
}

.text-group_10 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
}

.group_9 {
  background-color: rgba(16, 203, 140, 1);
  border-radius: 6px;
  width: 4.054rem;
  height: 1.174rem;
  margin: 0.4rem 0 0 0.64rem;
}

.image-text_11 {
  width: 2.72rem;
  height: 0.534rem;
  margin: 0.32rem 0 0 0.667rem;
}

.thumbnail_7 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_11 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.027rem;
}

.text_21 {
  width: 15.147rem;
  height: 1.92rem;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 0.64rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.96rem;
  margin: 0.64rem 0 0.987rem 3.04rem;
}

.group_10 {
  width: 18.827rem;
  height: 4.587rem;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG7a6677ee9277c53b04965e55b7bd73b8.png) 100% no-repeat;
  background-size: 100% 100%;
  margin: 0.8rem 0 0 0.587rem;
}

.text_22 {
  width: 15.36rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.693rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
  margin: 1.094rem 0 0 0.72rem;
}

.text-wrapper_12 {
  background-color: rgba(255, 239, 96, 1);
  border-radius: 44px;
  height: 1.174rem;
  width: 4.054rem;
  margin: 0.72rem 0 0.907rem 0.72rem;
}

.text_23 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 49, 41, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 0.347rem 0 0 1.067rem;
}

.group_11 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  width: 18.827rem;
  height: 25.574rem;
  margin: 0.8rem 0 0 0.587rem;
}

.group_12 {
  width: 17.627rem;
  height: 0.747rem;
  margin: 0.854rem 0 0 0.64rem;
}

.text_24 {
  width: 2.987rem;
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

.image-text_12 {
  width: 1.414rem;
  height: 0.48rem;
  margin-top: 0.134rem;
}

.text-group_12 {
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

.thumbnail_8 {
  width: 0.294rem;
  height: 0.294rem;
  margin: 0rem -0.027rem 0 0.187rem;
}

.group_13 {
  background-color: rgba(224, 224, 224, 1);
  height: 0.027rem;
  margin-top: 0.747rem;
  width: 18.827rem;
}

.group_14 {
  background-image: linear-gradient(90deg,
      rgba(26, 188, 252, 1) 0,
      rgba(7, 150, 210, 1) 100%);
  width: 3.04rem;
  height: 0.08rem;
  margin: -0.054rem 0 0 0.64rem;
}

.group_15 {
  width: 17.467rem;
  height: 1.707rem;
  margin: 0.907rem 0 0 0.72rem;
}

.image-text_13 {
  width: 4.854rem;
  height: 1.707rem;
}

.image_9 {
  width: 1.707rem;
  height: 1.707rem;
}

.section_8 {
  width: 2.667rem;
  height: 1.494rem;
  margin-top: 0.16rem;
}

.text-group_13 {
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

.text-wrapper_13 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  margin-top: 0.16rem;
  width: 2.4rem;
}

.text_25 {
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

.text-wrapper_14 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
  margin: 0.854rem 0 0 0.027rem;
}

.text_26 {
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
  margin: 0.214rem 0 0 6.56rem;
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
  margin: 0.214rem 0 0 1.067rem;
}

.label_7 {
  width: 0.72rem;
  height: 0.72rem;
  margin: 0.294rem 0 0 0.294rem;
}

.group_16 {
  width: 7.974rem;
  height: 0.48rem;
  margin: 0.587rem 0 0 2.907rem;
}

.image-text_14 {
  width: 2.827rem;
  height: 0.48rem;
}

.thumbnail_9 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_14 {
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

.image-text_15 {
  width: 3.494rem;
  height: 0.48rem;
}

.thumbnail_10 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_15 {
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

.group_17 {
  width: 18.827rem;
  height: 0.027rem;
  border: 1px solid rgba(224, 224, 224, 1);
  margin-top: 0.907rem;
}

.group_18 {
  width: 17.467rem;
  height: 1.707rem;
  margin: 0.907rem 0 0 0.72rem;
}

.image-text_16 {
  width: 4.854rem;
  height: 1.707rem;
}

.image_10 {
  width: 1.707rem;
  height: 1.707rem;
}

.section_9 {
  width: 2.667rem;
  height: 1.494rem;
  margin-top: 0.16rem;
}

.text-group_16 {
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

.text_27 {
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

.text_28 {
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

.image-wrapper_5 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 1.28rem;
  border: 1px solid rgba(255, 61, 61, 1);
  width: 1.28rem;
  margin: 0.214rem 0 0 6.56rem;
}

.label_8 {
  width: 0.72rem;
  height: 0.72rem;
  margin: 0.294rem 0 0 0.294rem;
}

.image-wrapper_6 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 1.28rem;
  border: 1px solid rgba(4, 188, 100, 1);
  width: 1.28rem;
  margin: 0.214rem 0 0 1.067rem;
}

.label_9 {
  width: 0.72rem;
  height: 0.72rem;
  margin: 0.294rem 0 0 0.294rem;
}

.group_19 {
  width: 7.974rem;
  height: 0.48rem;
  margin: 0.587rem 0 0 2.907rem;
}

.image-text_17 {
  width: 2.827rem;
  height: 0.48rem;
}

.thumbnail_11 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_17 {
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

.image-text_18 {
  width: 3.494rem;
  height: 0.48rem;
}

.thumbnail_12 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_18 {
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

.group_20 {
  width: 18.827rem;
  height: 0.027rem;
  border: 1px solid rgba(224, 224, 224, 1);
  margin-top: 0.907rem;
}

.group_21 {
  width: 17.467rem;
  height: 1.707rem;
  margin: 0.907rem 0 0 0.72rem;
}

.image-text_19 {
  width: 4.854rem;
  height: 1.707rem;
}

.image_11 {
  width: 1.707rem;
  height: 1.707rem;
}

.group_22 {
  width: 2.667rem;
  height: 1.494rem;
  margin-top: 0.16rem;
}

.text-group_19 {
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

.text-wrapper_17 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  margin-top: 0.16rem;
  width: 2.4rem;
}

.text_29 {
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

.text-wrapper_18 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
  margin: 0.854rem 0 0 0.027rem;
}

.text_30 {
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

.image-wrapper_7 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 1.28rem;
  border: 1px solid rgba(255, 61, 61, 1);
  width: 1.28rem;
  margin: 0.214rem 0 0 6.56rem;
}

.label_10 {
  width: 0.72rem;
  height: 0.72rem;
  margin: 0.294rem 0 0 0.294rem;
}

.image-wrapper_8 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 1.28rem;
  border: 1px solid rgba(4, 188, 100, 1);
  width: 1.28rem;
  margin: 0.214rem 0 0 1.067rem;
}

.label_11 {
  width: 0.72rem;
  height: 0.72rem;
  margin: 0.294rem 0 0 0.294rem;
}

.group_23 {
  width: 7.974rem;
  height: 0.48rem;
  margin: 0.587rem 0 0 2.907rem;
}

.image-text_20 {
  width: 2.827rem;
  height: 0.48rem;
}

.thumbnail_13 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_20 {
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

.image-text_21 {
  width: 3.494rem;
  height: 0.48rem;
}

.thumbnail_14 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_21 {
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

.group_24 {
  width: 18.827rem;
  height: 0.027rem;
  border: 1px solid rgba(224, 224, 224, 1);
  margin-top: 0.907rem;
}

.group_25 {
  width: 17.467rem;
  height: 1.707rem;
  margin: 0.907rem 0 0 0.72rem;
}

.image-text_22 {
  width: 4.854rem;
  height: 1.707rem;
}

.image_12 {
  width: 1.707rem;
  height: 1.707rem;
}

.box_8 {
  width: 2.667rem;
  height: 1.494rem;
  margin-top: 0.16rem;
}

.text-group_22 {
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

.text-wrapper_19 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  margin-top: 0.16rem;
  width: 2.4rem;
}

.text_31 {
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

.text-wrapper_20 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
  margin: 0.854rem 0 0 0.027rem;
}

.text_32 {
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

.image-wrapper_9 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 1.28rem;
  border: 1px solid rgba(255, 61, 61, 1);
  width: 1.28rem;
  margin: 0.214rem 0 0 6.56rem;
}

.label_12 {
  width: 0.72rem;
  height: 0.72rem;
  margin: 0.294rem 0 0 0.294rem;
}

.image-wrapper_10 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 1.28rem;
  border: 1px solid rgba(4, 188, 100, 1);
  width: 1.28rem;
  margin: 0.214rem 0 0 1.067rem;
}

.label_13 {
  width: 0.72rem;
  height: 0.72rem;
  margin: 0.294rem 0 0 0.294rem;
}

.group_26 {
  width: 7.974rem;
  height: 0.48rem;
  margin: 0.587rem 0 0 2.907rem;
}

.image-text_23 {
  width: 2.827rem;
  height: 0.48rem;
}

.thumbnail_15 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_23 {
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

.image-text_24 {
  width: 3.494rem;
  height: 0.48rem;
}

.thumbnail_16 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_24 {
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

.group_27 {
  width: 18.827rem;
  height: 0.027rem;
  border: 1px solid rgba(224, 224, 224, 1);
  margin-top: 0.907rem;
}

.group_28 {
  width: 17.467rem;
  height: 1.707rem;
  margin: 0.907rem 0 0 0.72rem;
}

.image-text_25 {
  width: 4.854rem;
  height: 1.707rem;
}

.image_13 {
  width: 1.707rem;
  height: 1.707rem;
}

.box_9 {
  width: 2.667rem;
  height: 1.494rem;
  margin-top: 0.16rem;
}

.text-group_25 {
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

.text-wrapper_21 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  margin-top: 0.16rem;
  width: 2.4rem;
}

.text_33 {
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

.text-wrapper_22 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
  margin: 0.854rem 0 0 0.027rem;
}

.text_34 {
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

.image-wrapper_11 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 1.28rem;
  border: 1px solid rgba(255, 61, 61, 1);
  width: 1.28rem;
  margin: 0.214rem 0 0 6.56rem;
}

.label_14 {
  width: 0.72rem;
  height: 0.72rem;
  margin: 0.294rem 0 0 0.294rem;
}

.image-wrapper_12 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 1.28rem;
  border: 1px solid rgba(4, 188, 100, 1);
  width: 1.28rem;
  margin: 0.214rem 0 0 1.067rem;
}

.label_15 {
  width: 0.72rem;
  height: 0.72rem;
  margin: 0.294rem 0 0 0.294rem;
}

.group_29 {
  width: 7.974rem;
  height: 0.48rem;
  margin: 0.587rem 0 1.067rem 2.907rem;
}

.image-text_26 {
  width: 2.827rem;
  height: 0.48rem;
}

.thumbnail_17 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_26 {
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

.image-text_27 {
  width: 3.494rem;
  height: 0.48rem;
}

.thumbnail_18 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_27 {
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

.list_1 {
  width: 18.827rem;
  height: 36.8rem;
  justify-content: space-between;
  margin: 0.8rem 0 0 0.587rem;
}

.list-items_1 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  width: 18.827rem;
  height: 18rem;
  margin-bottom: 0.8rem;
}

.group_30 {
  width: 17.627rem;
  height: 0.747rem;
  margin: 0.854rem 0 0 0.64rem;
}

.text_35 {
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

.image-text_28 {
  width: 1.414rem;
  height: 0.48rem;
  margin-top: 0.134rem;
}

.text-group_28 {
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

.thumbnail_19 {
  width: 0.294rem;
  height: 0.294rem;
  margin: 0rem -0.027rem 0 0.187rem;
}

.group_31 {
  background-color: rgba(224, 224, 224, 1);
  height: 0.027rem;
  margin-top: 0.747rem;
  width: 18.827rem;
}

.block_7 {
  background-image: linear-gradient(90deg,
      rgba(26, 188, 252, 1) 0,
      rgba(7, 150, 210, 1) 100%);
  width: 3.04rem;
  height: 0.08rem;
  margin: -0.054rem 0 0 0.64rem;
}

.group_32 {
  width: 17.547rem;
  height: 1.494rem;
  margin: 0.934rem 0 0 0.64rem;
}

.box_10 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 0.16rem;
  height: 0.16rem;
  margin-top: 0.32rem;
}

.text_36 {
  width: 17.12rem;
  height: 1.494rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.747rem;
  margin-left: 0.267rem;
}

.text_37 {
  width: 2.24rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.534rem;
  margin: 0.854rem 11.6rem 0 -13.84rem;
}

.group_33 {
  width: 17.547rem;
  height: 1.494rem;
  margin: 0.934rem 0 0 0.64rem;
}

.block_8 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 0.16rem;
  height: 0.16rem;
  margin-top: 0.32rem;
}

.text_38 {
  width: 17.12rem;
  height: 1.494rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.747rem;
  margin-left: 0.267rem;
}

.text_39 {
  width: 2.24rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.534rem;
  margin: 0.854rem 11.6rem 0 -13.84rem;
}

.group_34 {
  width: 17.547rem;
  height: 1.494rem;
  margin: 0.934rem 0 0 0.64rem;
}

.block_9 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 0.16rem;
  height: 0.16rem;
  margin-top: 0.32rem;
}

.text_40 {
  width: 17.12rem;
  height: 1.494rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.747rem;
  margin-left: 0.267rem;
}

.text_41 {
  width: 2.24rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.534rem;
  margin: 0.854rem 11.6rem 0 -13.84rem;
}

.group_35 {
  width: 17.547rem;
  height: 1.494rem;
  margin: 0.934rem 0 0 0.64rem;
}

.box_11 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 0.16rem;
  height: 0.16rem;
  margin-top: 0.32rem;
}

.text_42 {
  width: 17.12rem;
  height: 1.494rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.747rem;
  margin-left: 0.267rem;
}

.text_43 {
  width: 2.24rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.534rem;
  margin: 0.854rem 11.6rem 0 -13.84rem;
}

.group_36 {
  width: 17.547rem;
  height: 1.494rem;
  margin: 0.934rem 0 0 0.64rem;
}

.group_37 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 0.16rem;
  height: 0.16rem;
  margin-top: 0.32rem;
}

.text_44 {
  width: 17.12rem;
  height: 1.494rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.747rem;
  margin-left: 0.267rem;
}

.text_45 {
  width: 2.24rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.534rem;
  margin: 0.854rem 11.6rem 0 -13.84rem;
}

.group_38 {
  width: 17.547rem;
  height: 1.494rem;
  margin: 0.934rem 0 1.067rem 0.64rem;
}

.box_12 {
  background-color: rgba(23, 182, 245, 1);
  border-radius: 50%;
  width: 0.16rem;
  height: 0.16rem;
  margin-top: 0.32rem;
}

.text_46 {
  width: 17.12rem;
  height: 1.494rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.747rem;
  margin-left: 0.267rem;
}

.text_47 {
  width: 2.24rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.534rem;
  margin: 0.854rem 11.6rem 0 -13.84rem;
}

.group_39 {
  background-color: rgba(61, 60, 68, 1);
  width: 20rem;
  height: 6.534rem;
  margin-top: 1.067rem;
  justify-content: flex-center;
}

.list_2 {
  width: 8.96rem;
  height: 3.467rem;
  justify-content: space-between;
  margin: 0.427rem 0 0 5.52rem;
}

.image-text_29 {
  width: 2.667rem;
  height: 3.467rem;
  margin-right: 3.627rem;
}

.image_14 {
  width: 2.667rem;
  height: 2.667rem;
}

.text-group_29 {
  width: 1.067rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(190, 190, 190, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.534rem;
  margin: 0.267rem 0 0 0.8rem;
}

.group_40 {
  background-color: rgba(110, 110, 124, 1);
  width: 20rem;
  height: 0.027rem;
  margin-top: 0.267rem;
}

.paragraph_1 {
  width: 12.56rem;
  height: 1.494rem;
  overflow-wrap: break-word;
  color: rgba(190, 190, 190, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  line-height: 0.747rem;
  margin: 0.427rem 0 0.427rem 3.707rem;
}
</style>
<style scoped lang="scss">
  .label_4 {
    margin: 0.107rem 0 0 0.137rem;
  }
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
.mb_box {
  font-size: 0.48rem;
  height: 2.34rem;
  border-bottom: 1px solid #E0E0E0;
  background: #F6F6F6;
  display: flex;
  align-items: center;
  padding-left: 10px;
  .area {
    color: #8A8A8A;
  }
  img {
    width: 6px;
    height: 10px;
    margin: 0 10px;
  }
}
.answer_detail {
  background: #F6F6F6;
}
.group_5 {
  border-radius: 6px;
}
.group_6 {
  border-radius: 6px;
}
.answer_question {
  background: #fff;
  padding: 10px;
  margin: 0 14px;
  border-radius: 8px;
  margin-bottom: 14px;
}
.img_box_phone {
  height: 4.58rem;
  width: calc(100% - 28px);
  background: red;
  margin: 0 14px;
  border-radius: 8px;
  margin-bottom: 16px;
  img {
    width: 100%;
    height: 100%;
  }
}

.person_box {
  width: calc(100% - 28px);
  border-radius: 6px;
  height: 29.5rem;
  background: #fff;
  margin: 0 auto;
  margin-bottom: 16px;
  .cent_box {
    width: 141px;
    h3 {
      font-family: PingFang SC, PingFang SC;
      font-weight: bold;
      font-size: .53rem;
      color: #242629;
      margin: 0;
    }
    p {
      margin: 0;
      margin-bottom: 10px;
      span {
        display: inline-block;
        border-radius: 3px;
        background: #F7F7F7;
        padding: 4px 10px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: .42rem;
        color: #7A7A7A;
        margin-right: 10px;
      }
    }
    .bottom_n {
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: .48rem;
      color: #7A7A7A;
      img {
        margin-right: 5px;
        margin-left: 5px;
      }
    }
  }
}

.per_item_sty {

  display: flex;
  justify-content: space-between;
  height: 4.58rem;
  border-bottom: 1px dashed #E0E0E0;
  padding-top: .9rem;
  padding-left: .72rem;
  .ava_ing {
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    margin-right: 10px;
  }
  .right_btn {
    display: flex;
    width: 235px;
    transform: translateX(-41px);
    .label_9, .label_10 {
      margin: 0.214rem 0 0 0.224rem;
    }
  }
}

.hot_question {
  background: #fff;
  margin: 0 14px;
  padding: .45rem .64rem;
  border-radius: 8px;
  padding-left: 0;
  .group_30 {
    width: 16.627rem;
  }
  .text_36 {
    margin-bottom: 5px;
  }
  .text_37 {
    transform: translateX(-3.4rem);
  }
}
.mar-bott {
  margin-bottom: 18px;
}

</style>
