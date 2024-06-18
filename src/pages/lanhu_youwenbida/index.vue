<template>
  <div class="que_mod_sty">
    <el-drawer :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <el-menu :default-active="activeIndex" :router="true" class="el-menu-vertical-demo">
        <el-menu-item index="/lanhu_shouye">首页</el-menu-item>
        <el-menu-item index="/lanhu_youwenbida">有问必答</el-menu-item>
        <el-menu-item index="/aboutPhone">期货手续费</el-menu-item>
        <el-menu-item index="/aboutPhone">期货保证金</el-menu-item>
        <el-menu-item index="/lanhu_qihuobaozhengjin">期货一对一服务</el-menu-item>
      </el-menu>
    </el-drawer>
    <div class="ques_box">
      <div class="section_4 flex-row">
        <div class="image-wrapper_1 flex-col justify-between">
          <img
            class="image_1"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG41d76e5352422ea2728cff2c9f23ed19.png"
          />
          <img
            class="image_2"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGa248b93bac5dd25c5ba4e2eff60f7753.png"
          />
        </div>
        <div class="box_1 flex-col">
          <div class="image-wrapper_2 flex-col">
            <img
              class="label_4"
              referrerpolicy="no-referrer"
              src="./assets/img/FigmaDDSSlicePNGc91b60cc0d136034d7e1cde253d50a91.png"
            />
          </div>
        </div>
        <img @click="drawer = true"
          class="label_5"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNG85213edb0f33d45b7ecd052df3ec843a.png"
        />
      </div>

      <!-- <div class="section_6 flex-col"></div> -->
    </div>

    <div class="mb_box">
      <p class="area">海洋财经</p>
      <img src="@/assets/img/mb-rih.png" alt="">
      <p>有问必答</p>
      <img src="@/assets/img/mb-rih.png" alt="">
    </div>
    <div class="empty"></div>
    <div class="box_sty_con">
      <div class="nav_cl_sty group_1 flex-col">
        <div class="text-wrapper_2">
          <span class="text_4" @click="getArtList('全部')">全部</span>
          <span class="text_5">
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<span @click="getArtList('热门回答')">热门回答</span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<span @click="getArtList('全部')">最新回答</span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<span @click="getArtList('全部')">最新点赞回答</span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<span @click="getArtList('全部')">最新分享回答</span>
          </span>
        </div>
      </div>
      <div  v-for="item in artList">
      <p class="text_6">来自：期货</p>
      <p class="text_7">{{ item.title }}</p>
      <div class="group_2 flex-row justify-between">
        <img
          class="image_3"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNG79ba894dcb3a3978a5bc3eb43b0a6c83.png"
        />
        <div class="block_1 flex-col justify-between">
          <div class="image-text_2 flex-row justify-between">
            <span class="text-group_2">{{ item.nickName }}</span>
            <img
              class="image_4"
              referrerpolicy="no-referrer"
              src="./assets/img/1fae11036e784c84bde0267f234faaf4_mergeImage.png"
            />
          </div>
          <div class="group_3 flex-row justify-between">
            <div class="text-wrapper_3 flex-col"><span class="text_8">{{ item.position }}</span></div>
            <div class="text-wrapper_4 flex-col"><span class="text_9">帮助{{
        item.helpNumber
      }}万</span></div>
          </div>
        </div>
      </div>
      <div class="image-text_3 flex-row">
        <div class="text-group_3 flex-row">
          <span class="text_10">
            {{ item.description.slice(0, 40) }}...
          </span>
          <span class="text_11"> <router-link :to="`/wendaxiangqingphone/${item.id}`">阅读全文</router-link></span>
        </div>
        <img
          class="thumbnail_3"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNG584f90d49c98e6310780f47d9c604f0f.png"
        />
      </div>
      <div class="group_4 flex-row">
        <div class="image-text_4 flex-row justify-between">
          <img
            class="thumbnail_4"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGee3d017d789f7d292ce617c9fd49306c.png"
          />
          <span class="text-group_4"> {{ item.replyCount }}个回答</span>
        </div>
        <div class="image-text_5 flex-row justify-between">
          <img
            class="thumbnail_5"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGa5acaf6e4d1f540d7f3e33eaa0cd594b.png"
          />
          <span class="text-group_5">{{ item.viewNumber }}次浏览</span>
        </div>
        <div class="image-text_6 flex-row justify-between">
          <img
            class="thumbnail_6"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGc87bb6950347685034e50635f5df08de.png"
          />
          <span class="text-group_6">{{ item.createTime }}</span>
        </div>
      </div>
      <div class="border_bo flex-col"></div>
    </div>

    </div>
    <div class="section_12 flex-col">
      <div class="section_13 flex-row justify-between">
        <span class="text_42">期货顾问推荐</span>
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
    <div class="section_30 flex-col">
      <span class="text_53">热门问题</span>
      <div class="section_31 flex-col"><div class="block_6 flex-col"></div></div>
      <div class="section_32 flex-row rese_sty_p" v-for="item in HotAnswer">
        <div class="group_27 flex-col"></div>
        <span class="text_54">{{ item.title }}</span>
        <span class="text_55">{{ item.replyCount }}个回答</span>
      </div>
    </div>
    <div class="section_40 flex-col">
      <div class="list_1 flex-row">
        <div class="image-text_48 flex-col justify-between" v-for="(item, index) in loopData0" :key="index">
          <img class="image_15" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
          <span class="text-group_48" v-html="item.lanhutext0"></span>
        </div>
      </div>
      <div class="group_28 flex-col"></div>
      <span class="paragraph_1">
        京ICP备19048506号-2&nbsp;Copyright
        <br />
        &#64;&nbsp;2024&nbsp;中国海洋财经有限公司&nbsp;All&nbsp;Rights&nbsp;Reserved.
      </span>
    </div>
  </div>
</template>

<script>
import { getAnswer, getRecommendUser, getHotAnswer } from '@/api/index'

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
      total: 0
    }
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
    }
  }
}
</script>
<style scoped lang="css" src="./assets/index.rem.css" />
<style scoped lang="scss">
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
  .empty {
    height: .7rem;
    background: #F6F6F6;
  }
  .nav_cl_sty {
    height: 2.13rem;
    background: #F6F6F6;
    border-radius: 8px;
    margin-bottom: 8px;
  }
  .text-wrapper_2 span {
    padding-right: 5px;
    padding-left: 5px;
  }
  .text_7 {
    margin: 0.427rem 0 0 0.24rem;
    text-align: left;
    padding-left: 8px;
  }
  .que_mod_sty {
    background: #F6F6F6;
    .box_sty_con {
      background-color: #fff;
      margin: 0 0.59rem;
      transform: translateY(-1px);
      border-radius: 8px;
      overflow: hidden;
    }
    .image-text_2 {
      width: 3.427rem;
    }
    .text-group_2 {
      width: 2.167rem;
    }
    .border_bo {
      border-bottom: 1px dashed #E0E0E0;
      height: .93rem;
      // border-bottom: none;
    }
  }
  .bott_it_sty {
    height: 4.48rem;
  }
  .section_18 {
    border-bottom: 1px dashed #E0E0E0;
  }
  .label_6,.label_7 {
    width: 0.72rem;
    height: 0.72rem;
    margin: 0.234rem 0 0 0.254rem;
  }
  .rese_sty_p {
    text-align: left;
    .text_54 {
      text-align: left;
    }
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
  .paragraph_1 {
    width: 14rem;
  }
  ::v-deep .label_4 {
    margin: 0.107rem 0 0 0.147rem;
  }
  
</style>