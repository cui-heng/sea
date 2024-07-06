<template>
  <div class="zx_sty">
    <el-drawer :visible.sync="drawer" >
      <el-menu :default-active="activeIndex" :router="true" class="el-menu-vertical-demo">
        <el-menu-item index="/lanhu_shouye">首页</el-menu-item>
        <el-menu-item index="/lanhu_youwenbida">有问必答</el-menu-item>
        <el-menu-item index="/aboutPhone">期货手续费</el-menu-item>
        <el-menu-item index="/aboutPhoneMargin">期货保证金</el-menu-item>
        <el-menu-item index="/lanhu_qihuobaozhengjin">期货一对一服务</el-menu-item>
      </el-menu>
    </el-drawer>
    <div class="group_3 flex-col">

      <div class="section_1 flex-row justify-between">
        <div class="box_1 flex-col">
          <div class="image-wrapper_1 flex-col">
            <img class="label_4" referrerpolicy="no-referrer"
              src="./assets/img/FigmaDDSSlicePNGc91b60cc0d136034d7e1cde253d50a91.png" />
          </div>
        </div>
        <img class="label_5" referrerpolicy="no-referrer" @click="drawer = true"
          src="./assets/img/FigmaDDSSlicePNG85213edb0f33d45b7ecd052df3ec843a.png" />
      </div>
      <div class="image-wrapper_2 flex-row">
        <img class="image_1" referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNGae4bb62ad38ba4fb96fdf69012235348.png" />
      </div>
      <div class="image-wrapper_3 flex-row">
        <img class="image_2" referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNG278475bcc372de80c93c57da41666b8f.png" />
      </div>
      <div class="image-wrapper_4 flex-row">
        <img class="image_3" referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNGd41e257ff606eef7798cf3a7947c3580.png" />
      </div>
      <div class="section_2 flex-row">
        <div class="block_1 flex-row">
          <span class="text_3">寻宝</span>
          <div class="box_2 flex-col"></div>
          <span class="text_4">请输入关键词</span>
          <div class="text-wrapper_2 flex-col"><span class="text_5">问一问</span></div>
        </div>
      </div>
    </div>
  <div>
    <div  class="content_box_sty">
      <div class="text-wrapper_4 flex-row justify-between">
        <span class="text_18">今日资讯</span>
        <span class="text_19">Today's&nbsp;news</span>
      </div>
      <div class="box_3 flex-col">
        <div class="group_19 flex-col"></div>
      </div>
      <div>
        <el-carousel indicator-position="none" :autoplay="false" height="200px">
          <el-carousel-item v-for="item in artList.slice(0, 3)" :key="item.id">
            <div>
              <div style="position: absolute;background-color: rgba(0,0,0,0.4);width: 100%;height: 100%;">
                <div style="position: relative;top: 60%;padding: 20px;">
                  <router-link :to="`/lanhu_shouyezixun/` + item.id + '/' + item.userId" tag="span">
                    <p style="font-size: 14px;
                      font-family: PingFang SC-Bold, PingFang SC;
                      font-weight: bold;
                      color: #fff;cursor: pointer;
                      line-height: 3px;">{{ item.title }}</p>
                  </router-link>
                  <div class="author_box">
                    <div class="img_box" @click="$router.push('lanhu_wanghaijingli/'+item.userId)">
                      <img :src="baseUrlImg + item.avatar" alt="">
                    </div>
                    <div class="nic_bo">{{ item.nickName }}</div>
                    <div class="time_box">{{ item.createTime }}</div>
                  </div>
                  <div class="art-abstract" v-html="item.content.slice(0, 100)">
                  </div>
                </div>
              </div>
              <img style="width: 100%;height: 100%;" :src="baseUrlImg + item.coverImg">
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-row :gutter="20">
        <el-col :span="12" v-for="item in artList" style="padding-top: 20px;">
          <div class="image-text_13 flex-col justify-between">
            <div @click="$router.push(`/lanhu_shouyezixun/` + item.id + '/' + item.userId)" class="group_20 flex-col" :style="{ backgroundImage: 'url(' + baseUrlImg + item.coverImg + ')' }">
              <div class="block_2 flex-row justify-between">
                <span class="text_22">作者：{{ item.nickName }}1</span>
                <div class="image-text_14 flex-row justify-between">
                  <img class="thumbnail_6" referrerpolicy="no-referrer"
                    src="./assets/img/FigmaDDSSlicePNG2565f79b9fead05d415e9e5ee0dcadf3.png" />
                  <span class="text-group_13">{{ item.browseNumber }}</span>
                </div>
                <!-- <div class="image-text_15 flex-row justify-between">
                <img class="thumbnail_6" referrerpolicy="no-referrer"
                  src="./assets/img/FigmaDDSSlicePNG2565f79b9fead05d415e9e5ee0dcadf3.png" />
                <span class="text-group_13">6512</span>
              </div> -->
              </div>
            </div>
            <span class="text-group_14"> 
              <router-link :to="`/lanhu_shouyezixun/` + item.id + '/' + item.userId" tag="span">
                {{ item.title.slice(0, 10) }}</router-link>
            </span>
            <p class="creat_time_sty">{{ item.createTime }}</p>
          </div>
        </el-col>
      </el-row>


      <!-- <div class="box_16 flex-col"></div> -->
    </div>
    <div class="cont_box_sty_art">
      <div class="text-wrapper_3 flex-row justify-between">
        <span class="text_6">优选文章</span>
        <span class="text_7">Preferred&nbsp;article</span>
      </div>
      <div v-for="item in cateList">
        <div class="group_5 flex-col">
          <div class="group_6 flex-col"></div>
        </div>
        <div @click="$router.push(`/lanhu_shouyezixun/` + item.id + '/' + item.userId)">
          <span class="text_8">{{ item.title }}</span>
          <span class="text_9" v-html="item.content.slice(0, 50)">
          </span>

        </div>
        <div class="group_7 flex-row justify-between">
          <div class="image-text_1 flex-row justify-between" @click="$router.push('lanhu_wanghaijingli/'+item.userId)">
            <img :src="baseUrlImg + item.avatar" style="width: 22px;
height: 22px;float: left;
border-radius: 50%;">
            <span class="text-group_1">{{ item.nickName }}</span>
          </div>
          <div class="image-text_2 flex-row justify-between">
            <img class="thumbnail_1" referrerpolicy="no-referrer"
              src="./assets/img/FigmaDDSSlicePNG3628789c84a114c99145804a17f3aafb.png" />
            <span class="text-group_2">{{ item.browseNumber }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class="group_16 flex-col">
      <div class="list_1 flex-row">
        <div class="image-text_11 flex-col justify-between" v-for="(item, index) in loopData0" :key="index">
          <img class="image_4" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
          <span class="text-group_11" v-html="item.lanhutext0"></span>
        </div>
      </div>
      <div class="group_17 flex-col"></div>
      <span class="paragraph_1">
        京ICP备19048506号-2&nbsp;Copyright
        <br />
        &#64;&nbsp;2024&nbsp;中国海洋财经有限公司&nbsp;All&nbsp;Rights&nbsp;Reserved.
      </span>
    </div>
  </div>
</template>

<!-- <style scoped lang="css" src="./assets/index.rem.css" /> -->
<script>
import { getArticle, getPreferredArticle } from '@/api/index'
// import friend from '../components/friend'
import tag from '../../components/tag'

export default {
  name: 'Index',
  components: {
    // friend,
    tag
  },
  data() {
    return {
      profileInfo: {
        id: 1
      },
      cateList: [],
      typeList: ['warning', 'success', 'info', 'danger'],
      drawer: false,
      activeIndex: '/home',
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
      artList: [],
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
    this.getProfileInfo()
    this.GetCateList()
  },
  methods: {
    tag(name) {
      this.$router.push({
        name: 'tag',
        params: {
          'name': name
        }
      })
    },
    // 获取个人设置
    getProfileInfo() {

      getPreferredArticle().then(res => {
        console.log(res, '999');
        this.cateList = res.data
      })
    },
    gotoCate(cid) {
      this.$router.push(`/category/${cid}`).catch((err) => err)
    },
    // 获取分类
    async GetCateList() {
      const { data: res } = await this.$http.get('category')
      this.cateList = res.data
    },
    handleCurrentChange: function (currentPage) {
      this.queryParam.pagenum = currentPage
      // eslint-disable-next-line no-console
      console.log(this.currentPage) // 点击第几页
      this.getArtList()
    },
    // 获取文章列表
    async getArtList() {
      const res = await getArticle({
        size: this.queryParam.pagesize,
        page: this.queryParam.pagenum
      })
      this.artList = res.data.list
      this.total = res.data.total
      // eslint-disable-next-line no-console
      console.log(this.artList)
    }
  }
}
</script>

<style scoped lang="css" src="./assets/index.rem.css">
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
  border-left: 3px solid #1ABCFC;
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

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.art-more .view {
  color: #aaa;
  font-size: 12px;
}

h5 {
  font-size: 18px;
}

.pagination {
  background-color: #F9F9F9;
}


</style>
<style scoped lang="scss">
  ::v-deep .content_box_sty {
  padding-left: 10px;
  padding-right: 10px;
  transform: translateY(-45px);
  background: #fff;
  /* padding-top: 0px; */
  margin: 0 10px;
  margin-top: 27px;
  border-radius: 10px;
  overflow: hidden;
}
.zx_sty {
  background: #F6F6F6;
}
.box_3 {
  /* background: none; */
  margin-bottom: 15px;
}
::v-deep .el-carousel__item {
  border-radius: 10px;
}
::v-deep .text-wrapper_2 {
  transform: translateY(-1px);
}
.author_box {
  display: flex;
  .img_box {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .nic_bo {
    margin-left: 15px;
    transform: translateY(5px);
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    font-size: .48rem;
    color: #D6D6D6;
    flex:1;
  }
  .time_box {
    transform: translateY(5px);
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    font-size: 12px;
    color: #D6D6D6;
  }
}
.creat_time_sty {
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 12px;
  margin: 0;
  color: #707070;
}
.image-text_13 {
  height: 6.554rem;
}
.text-group_14 {
  text-align: left;
  margin-bottom: 5px;
}
.content_box_sty {
  padding-bottom: 21px;
}
::v-deep .cont_box_sty_art {
  background: #fff;
  margin: 0 10px;
  border-radius: 8px;
  padding-top: 2px;
  transform: translateY(-29px);
  .text_9 {
    p {
      padding: 0 10px;
    }
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
.group_5 {
  margin-bottom: 12px;
}

</style>
<style></style>
