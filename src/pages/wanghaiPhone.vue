<template>
  <div class="box_personal_detail" ref="scrollview" @mousewheel="scrollChange($event)">
    <el-drawer :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <el-menu :default-active="activeIndex" :router="true" class="el-menu-vertical-demo">
        <el-menu-item index="/lanhu_shouye">首页</el-menu-item>
        <el-menu-item index="/lanhu_youwenbida">有问必答</el-menu-item>
        <el-menu-item index="/aboutPhone">期货手续费</el-menu-item>
        <el-menu-item index="/aboutPhone">期货保证金</el-menu-item>
        <el-menu-item index="/lanhu_qihuobaozhengjin">期货一对一服务</el-menu-item>
      </el-menu>
    </el-drawer>
    <div class="section_2 flex-col">
      <div class="block_2 flex-row">
        <div class="image-wrapper_1 flex-col justify-between">
          <img
            class="image_1"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGc7c8243b244fed5dd5ea65509a4bf192.png"
          />
          <img
            class="image_2"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGa248b93bac5dd25c5ba4e2eff60f7753.png"
          />
        </div>
        <div class="box_1 flex-col">
          <div class="image-wrapper_2 flex-col">
            <img
              class="label_4"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGc91b60cc0d136034d7e1cde253d50a91.png"
            />
          </div>
        </div>
        <img
        @click="drawer = true"
          class="label_5"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG85213edb0f33d45b7ecd052df3ec843a.png"
        />
      </div>
      <!-- <div class="group_3 flex-row">
        <span class="text_3">海洋财经</span>
        <img style=" margin: 0.107rem 0 0 0.48rem;width: 7px;height: 7px;" referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG378c59d9ff2c6ab7928bcb7dacf26fb5.png" />
        <div class="image-text_1 flex-row justify-between">
          <span class="text-group_1">期货一对一服务</span>
          <img class="thumbnail_2" referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG378c59d9ff2c6ab7928bcb7dacf26fb5.png" />
        </div>
      </div> -->
      <div class="mb_box">
          <p class="area">海洋财经</p>
          <img src="@/assets/img/mb-rih.png" alt="">
          <p>期货一对一服务</p>
          <img src="@/assets/img/mb-rih.png" alt="">
        </div>
      <div class="group_4 flex-col"></div>
      <div class="block_4 flex-col"></div>
    </div>
    <div class="section_3 flex-col">
      <div class="group_1 flex-col">
        <div class="group_2 flex-col">
          <div class="image-text_2 flex-col justify-between">
            <img
              class="image_3"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGdfa1386d28f53843d95972c52d3161ba.png"
            />
            <div class="text-group_2 flex-row justify-between">
              <span class="text_5">{{ dataList.nickName }}</span>
              <span class="text_6">{{ dataList.position }}</span>
            </div>
          </div>
          <div class="section_4 flex-row">
      
            <div class="box_4 flex-row">
              <div class="text-wrapper_2 flex-col" v-for="item in dataList.tags
">
                <span class="text_7">{{ item }}</span>
              </div>
            </div>
          </div>
          <span class="text_10"
            ><i style="opacity: 0;">11111</i>{{ dataList.selfIntroduction}}</span>
        </div>
      </div>
      <div class="group_3 flex-row justify-between">
        <div class="section_5 flex-col">
          <div class="text-wrapper_5 flex-col">
            <span class="text_11">1对1专业解答</span>
          </div>
          <div class="text-group_5 flex-col justify-between">
            <span class="text_12">微信咨询</span>
            <span class="text_13">投资难题随时解答</span>
          </div>
          <div class="box_5 flex-row">
            <div class="image-text_5 flex-row justify-between">
              <img
                class="thumbnail_6"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG9bd40b3d845709e9404ff86613d12d87.png"
              />
              <span class="text-group_6">微信</span>
            </div>
          </div>
        </div>
        <div class="section_6 flex-col">
          <div class="text-wrapper_6 flex-col">
            <span class="text_14">1对1专业解答</span>
          </div>
          <div class="text-group_7 flex-col justify-between">
            <span class="text_15">电话咨询</span>
            <span class="text_16">电话高效沟通，快速解答疑问</span>
          </div>
          <div class="box_6 flex-row">
            <div class="image-text_6 flex-row justify-between">
              <img
                class="thumbnail_7"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGd29b96d9f62ec237c29dd706fbcd56eb.png"
              />
              <span class="text-group_8">微信</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section_7 flex-col">
      <span class="text_17">顾问文章</span>
      <div class="section_8 flex-col">
        <div class="section_9 flex-col"></div>
      </div>
      <div v-for="item in artList" class="item_box">
      <span class="text_18"
        >{{ item.title }}</span
      >
      <div class="section_10 flex-row justify-between">
        <img
          class="image_4"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGcacd4e8b89ff5a9c2d3da38ecf73525a.png"
        />
        <div class="box_7 flex-col justify-between">
          <div class="group_4 flex-row justify-between">
            <div class="image-text_7 flex-row justify-between">
              <span class="text-group_9">{{ item.nickName }}</span>
              <div class="section_11 flex-col"></div>
            </div>
            <img
              class="thumbnail_8"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG882b7415e0412743045d62b1ec47477e.png"
            />
          </div>
          <div class="group_5 flex-row justify-between">
            <div class="text-wrapper_7 flex-col">
              <span class="text_19">{{ item.position }}</span>
            </div>
            <div class="text-wrapper_8 flex-col">
              <span class="text_20">帮助{{
        item.helpNumber
      }}万</span>
            </div>
          </div>
        </div>
      </div>
      <div class="image-text_8 flex-row">
        <div class="text-group_10 flex-row">
          <span class="text_21"
            >{{ item.description.slice(0,40) }}...</span
          >
          <span class="text_22">阅读全文</span>
        </div>
        <img
          class="thumbnail_9"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG584f90d49c98e6310780f47d9c604f0f.png"
        />
      </div>
      <div class="section_12 flex-row justify-between">
        <div class="image-text_9 flex-row justify-between">
          <img
            class="thumbnail_10"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGa5acaf6e4d1f540d7f3e33eaa0cd594b.png"
          />
          <span class="text-group_11">{{ item.viewNumber }}次浏览</span>
        </div>
        <div class="image-text_10 flex-row justify-between">
          <img
            class="thumbnail_11"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGc87bb6950347685034e50635f5df08de.png"
          />
          <span class="text-group_12">{{ item.createTime }}</span>
        </div>
      </div>
    </div>
 
    </div>
    <div >
    
      <!-- <div >
        <div class="list_1 flex-row">
          <div
            class="image-text_29 flex-col justify-between"
            v-for="(item, index) in loopData0"
            :key="index"
          >
            <img
              class="image_9"
              referrerpolicy="no-referrer"
              :src="item.lanhuimage0"
            />
            <span class="text-group_30" v-html="item.lanhutext0"></span>
          </div>
        </div>
        <div class="group_11 flex-col"></div>
        <span class="paragraph_1"
          >京ICP备19048506号-2&nbsp;Copyright<br />&#64;&nbsp;2024&nbsp;中国海洋财经有限公司&nbsp;All&nbsp;Rights&nbsp;Reserved.</span
        >
      </div> -->
      <div style="width: 100%;height: 10px;">
        <div class="block_5 flex-col" v-show="isShowImg">
          <div class="group_9 flex-row">
            <div class="image-text_23 flex-row justify-between">
              <img
                class="image_8"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGdfa1386d28f53843d95972c52d3161ba.png"
              />
              <div class="section_27 flex-col justify-between">
                <span class="text-group_25">{{ dataList.nickName }}</span>
                <div class="block_6 flex-row">
                  <div class="image-text_24 flex-row justify-between">
                    <img
                      class="thumbnail_24"
                      referrerpolicy="no-referrer"
                      src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG1d27ae6ac17e9ea5b63cac0e83aa76c3.png"
                    />
                    <span class="text-group_26">北京</span>
                  </div>
                  <div class="image-text_25 flex-row justify-between">
                    <img
                      class="thumbnail_24"
                      referrerpolicy="no-referrer"
                      src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG1d27ae6ac17e9ea5b63cac0e83aa76c3.png"
                    />
                    <span class="text-group_26">北京</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="box_14 flex-row">
              <div class="image-text_26 flex-row justify-between">
                <img
                  class="thumbnail_25"
                  referrerpolicy="no-referrer"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG295f1c636011260b486de975d0309304.png"
                />
                <span class="text-group_27">实名认证</span>
              </div>
            </div>
            <span class="text_39">期货顾问</span>
            <div class="box_15 flex-row">
              <div class="text-wrapper_16 flex-col">
                <span class="text_40">从业10年+</span>
              </div>
              <div class="text-wrapper_17 flex-col">
                <span class="text_41">响应及时</span>
              </div>
              <div class="text-wrapper_18 flex-col">
                <span class="text_42">经验丰富</span>
              </div>
            </div>
          </div>
          <div class="group_10 flex-row justify-between">
            <div class="section_28 flex-row">
              <div class="image-text_27 flex-row justify-between">
                <img
                  class="thumbnail_26"
                  referrerpolicy="no-referrer"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG79dd58795a0b538ba2563bab95c3e96c.png"
                />
                <span class="text-group_28">电话</span>
              </div>
            </div>
            <div class="section_29 flex-row">
              <div class="image-text_28 flex-row justify-between">
                <img
                  class="thumbnail_27"
                  referrerpolicy="no-referrer"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG95e5c14581117ddb18691a993bf92982.png"
                />
                <span class="text-group_29">微信</span>
              </div>
            </div>
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
    </div>
  </div>
</template>

<script>
import { getUserInfo,getAnswer, } from '@/api/index'
import route from '@/router'
export default {

  name: 'Index',
  components: {

  },
  data() {
    return {
      isShowImg: false,
      drawer:false,    
      queryParam: {
        pagesize: 10,
        pagenum: 1
      },
      artList:[],
      dataList: {},
      dataList1: [],
      dataList2: [],
      dataList3: [],
      constants: {},
      loopData0: [
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
    }
  },
  created() {
    getUserInfo({userId:route.history.current.params.id }).then(res => {
      this.dataList = res.data
    })
    this.getArtList()
    // getUsers().then(res => {
    //   this.dataList1 = res.data
    // })
  },
  mounted () {
    // 获取指定元素
    const scrollview = this.$refs['scrollview']
    // 添加滚动监听，该滚动监听了拖拽滚动条
    // 尾部的 true 最好加上，我这边测试没加 true ，拖拽滚动条无法监听到滚动，加上则可以监听到拖拽滚动条滚动回调
    scrollview.addEventListener('scroll', this.scrollChange, true)
  },
  // beforeDestroy 与 destroyed 里面移除都行
  beforeDestroy () {
    // 获取指定元素
    const scrollview = this.$refs['scrollview']
    // 移除监听
    scrollview.removeEventListener('scroll', this.scrollChange, true)
  },
  methods: {
    scrollChange (e) {
      if (e.layerY > 700) {
        this.isShowImg = true
      } else {
        this.isShowImg = false
      }
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
  height: 88.454rem;
  overflow: hidden;
}

.section_1 {
  background-color: rgba(255, 255, 255, 1);
  width: 20rem;
  height: 4.694rem;
}

.block_1 {
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

.section_2 {
  width: 20rem;
  height: 5.76rem;
}

.block_2 {
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

.box_1 {
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

.block_3 {
  width: 10.027rem;
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
  width: 3.36rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(138, 138, 138, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-left: 0.427rem;
}

.thumbnail_2 {
  width: 0.16rem;
  height: 0.16rem;
  margin: 0.107rem 0 0 0.454rem;
}

.image-text_1 {
  width: 2.534rem;
  height: 0.427rem;
  margin-left: 0.534rem;
}

.text-group_1 {
  width: 1.92rem;
  height: 0.427rem;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.427rem;
}

.thumbnail_3 {
  width: 0.16rem;
  height: 0.16rem;
  margin-top: 0.107rem;
}

.block_4 {
  background-color: rgba(224, 224, 224, 1);
  width: 20rem;
  height: 0.027rem;
  margin: 0.934rem 0 0.72rem 0;
}

.section_3 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  width: 18.827rem;
  height: 27.84rem;
  margin: -0.027rem 0 0 0.587rem;
}

.group_1 {
  height: 18.16rem;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG9de912f4322a4e6c14c6e719bf87ff74.png)
    100% no-repeat;
  background-size: 100% 100%;
  width: 17.654rem;
  margin: 0.587rem 0 0 0.587rem;
}

.group_2 {
  background-color: rgba(6, 63, 116, 0.5);
  width: 17.654rem;
  height: 18.16rem;
}

.image-text_2 {
  width: 5.707rem;
  height: 8rem;
  margin: 1.067rem 0 0 5.894rem;
}

.image_3 {
  width: 5.707rem;
  height: 6.774rem;
}

.text-group_2 {
  width: 5.227rem;
  height: 0.694rem;
  margin: 0.534rem 0 0 0.24rem;
}

.text_5 {
  width: 2.774rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.693rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
}

.text_6 {
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
  margin-top: 0.16rem;
}

.section_4 {
  width: 16.054rem;
  height: 0.96rem;
  margin: 0.72rem 0 0 0.8rem;
  display: flex;
  justify-content: center;
}

.box_2 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  width: 2.347rem;
  height: 0.96rem;
}

.image-text_3 {
  width: 1.627rem;
  height: 0.48rem;
  margin: 0.24rem 0 0 0.32rem;
}

.thumbnail_4 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_3 {
  width: 0.96rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
}

.box_3 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  width: 3.307rem;
  height: 0.96rem;
  margin-left: 0.374rem;
}

.image-text_4 {
  width: 2.614rem;
  height: 0.48rem;
  margin: 0.24rem 0 0 0.32rem;
}

.thumbnail_5 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_4 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
}

.box_4 {
  width: 9.574rem;
  height: 0.96rem;
  margin-left: 0.454rem;
}

.text-wrapper_2 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  height: 0.96rem;
  width: 2.934rem;
}

.text_7 {
  width: 2.32rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 0.24rem 0 0 0.32rem;
}

.text-wrapper_3 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  height: 0.96rem;
  margin-left: 0.32rem;
  width: 2.934rem;
}

.text_8 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 0.24rem 0 0 0.507rem;
}

.text-wrapper_4 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  height: 0.96rem;
  margin-left: 0.454rem;
  width: 2.934rem;
}

.text_9 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 0.24rem 0 0 0.507rem;
}

.text_10 {
  width: 16.054rem;
  height: 5.44rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.907rem;
  margin: 0.774rem 0 1.2rem 0.8rem;
}

.group_3 {
  width: 17.654rem;
  height: 7.494rem;
  margin: 0.8rem 0 0.8rem 0.587rem;
}

.section_5 {
  background-color: rgba(234, 255, 248, 1);
  border-radius: 8px;
  width: 8.534rem;
  height: 7.494rem;
}

.text-wrapper_5 {
  background-color: rgba(16, 203, 140, 1);
  border-radius: 8px 8px 0px 22px;
  height: 1.547rem;
  width: 4.427rem;
}

.text_11 {
  width: 3.307rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 0.534rem 0 0 0.56rem;
}

.text-group_5 {
  width: 3.84rem;
  height: 1.627rem;
  margin: 0.96rem 0 0 2.347rem;
}

.text_12 {
  width: 3.414rem;
  height: 0.747rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.853rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.747rem;
  margin-left: 0.214rem;
}

.text_13 {
  width: 3.84rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(74, 74, 74, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.4rem;
}

.box_5 {
  background-color: rgba(16, 203, 140, 1);
  border-radius: 8px;
  width: 5.04rem;
  height: 1.334rem;
  margin: 0.96rem 0 1.067rem 1.76rem;
}

.image-text_5 {
  width: 1.707rem;
  height: 0.48rem;
  margin: 0.427rem 0 0 1.68rem;
}

.thumbnail_6 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_6 {
  width: 0.96rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
}

.section_6 {
  background-color: rgba(227, 241, 254, 1);
  border-radius: 8px;
  width: 8.534rem;
  height: 7.494rem;
}

.text-wrapper_6 {
  background-color: rgba(63, 143, 240, 1);
  border-radius: 8px 8px 0px 22px;
  height: 1.547rem;
  width: 4.427rem;
}

.text_14 {
  width: 3.307rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 0.534rem 0 0 0.56rem;
}

.text-group_7 {
  width: 6.24rem;
  height: 1.627rem;
  margin: 0.96rem 0 0 1.147rem;
}

.text_15 {
  width: 3.414rem;
  height: 0.747rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.853rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.747rem;
  margin-left: 1.414rem;
}

.text_16 {
  width: 6.24rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(74, 74, 74, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.4rem;
}

.box_6 {
  background-color: rgba(63, 143, 240, 1);
  border-radius: 8px;
  width: 5.04rem;
  height: 1.334rem;
  margin: 0.96rem 0 1.067rem 1.76rem;
}

.image-text_6 {
  width: 1.707rem;
  height: 0.48rem;
  margin: 0.427rem 0 0 1.68rem;
}

.thumbnail_7 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_8 {
  width: 0.96rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
}

.section_7 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  width: 18.827rem;
  height: auto;
  margin: 0.8rem 0 0 0.587rem;
}

.text_17 {
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
  margin: 1.014rem 0 0 0.534rem;
}

.section_8 {
  background-color: rgba(224, 224, 224, 1);
  height: 0.027rem;
  margin-top: 0.587rem;
  width: 18.827rem;
}

.section_9 {
  background-image: linear-gradient(
    90deg,
    rgba(26, 188, 252, 1) 0,
    rgba(7, 150, 210, 1) 100%
  );
  width: 2.987rem;
  height: 0.08rem;
  margin: -0.054rem 0 0 0.534rem;
}

.text_18 {
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
  margin: 0.694rem 0 0 0.64rem;
}

.section_10 {
  width: 7.28rem;
  height: 1.707rem;
  margin: 0.694rem 0 0 0.64rem;
}

.image_4 {
  width: 1.707rem;
  height: 1.707rem;
}

.box_7 {
  width: 5.094rem;
  height: 1.52rem;
  margin-top: 0.134rem;
}

.group_4 {
  width: 4.427rem;
  height: 0.56rem;
}

.image-text_7 {
  width: 3.627rem;
  height: 0.56rem;
}

.text-group_9 {
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
  margin-top: 0.027rem;
}

.section_11 {

 background-image: url(../assets/2929.png);
 background-size: 100% 100%;
  width: 0.634rem;
  height: 0.607rem;
}

.thumbnail_8 {
  width: 0.534rem;
  height: 0.534rem;
}

.group_5 {
  width: 5.094rem;
  height: 0.8rem;
  margin-top: 0.16rem;
}

.text-wrapper_7 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
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

.text-wrapper_8 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
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

.image-text_8 {
  width: 15.547rem;
  height: 1.92rem;
  margin: 0.534rem 0 0 2.827rem;
}

.text-group_10 {
  width: 15.36rem;
  height: 1.92rem;
}

.text_21 {
  width: 15.36rem;
  height: 1.92rem;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.96rem;
}

.text_22 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(26, 188, 252, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 1.174rem 0.56rem 0 -2.48rem;
}

.thumbnail_9 {
  width: 0.267rem;
  height: 0.267rem;
  margin: 1.334rem -0.054rem 0 -0.027rem;
}

.section_12 {
  width: 15.36rem;
  height: 0.534rem;
  margin: 0.587rem 0 0 2.827rem;
}

.image-text_9 {
  width: 2.774rem;
  height: 0.534rem;
}

.thumbnail_10 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_11 {
  width: 2.027rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.027rem;
}

.image-text_10 {
  width: 5.6rem;
  height: 0.534rem;
}

.thumbnail_11 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_12 {
  width: 4.854rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.48rem;
  position: relative;
  right: 0;
  margin-top: 0.027rem;
}

.section_13 {
  width: 18.827rem;
  height: 0.027rem;
  border: 1px dashed rgba(224, 224, 224, 1);
  margin-top: 0.907rem;
}

.text_23 {
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
  margin: 0.854rem 0 0 0.64rem;
}

.section_14 {
  width: 7.28rem;
  height: 1.707rem;
  margin: 0.694rem 0 0 0.64rem;
}

.image_5 {
  width: 1.707rem;
  height: 1.707rem;
}

.box_8 {
  width: 5.094rem;
  height: 1.52rem;
  margin-top: 0.134rem;
}

.group_6 {
  width: 4.427rem;
  height: 0.56rem;
}

.image-text_11 {
  width: 3.627rem;
  height: 0.56rem;
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
  margin-top: 0.027rem;
}

.group_7 {
  background-color: rgba(243, 188, 36, 1);
  width: 0.534rem;
  height: 0.507rem;
}

.thumbnail_12 {
  width: 0.534rem;
  height: 0.534rem;
}

.group_8 {
  width: 5.094rem;
  height: 0.8rem;
  margin-top: 0.16rem;
}

.text-wrapper_9 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
}

.text_24 {
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

.text-wrapper_10 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
}

.text_25 {
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

.image-text_12 {
  width: 15.547rem;
  height: 1.92rem;
  margin: 0.534rem 0 0 2.827rem;
}

.text-group_14 {
  width: 15.36rem;
  height: 1.92rem;
}

.text_26 {
  width: 15.36rem;
  height: 1.92rem;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.96rem;
}

.text_27 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(26, 188, 252, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 1.174rem 0.56rem 0 -2.48rem;
}

.thumbnail_13 {
  width: 0.267rem;
  height: 0.267rem;
  margin: 1.334rem -0.054rem 0 -0.027rem;
}

.section_15 {
  width: 15.36rem;
  height: 0.534rem;
  margin: 0.587rem 0 0 2.827rem;
}

.image-text_13 {
  width: 2.774rem;
  height: 0.534rem;
}

.thumbnail_14 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_15 {
  width: 2.027rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.027rem;
}

.image-text_14 {
  width: 5.6rem;
  height: 0.534rem;
}

.thumbnail_15 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_16 {
  width: 4.854rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.027rem;
}

.section_16 {
  width: 18.827rem;
  height: 0.027rem;
  border: 1px solid rgba(224, 224, 224, 1);
  margin-top: 0.907rem;
}

.text-wrapper_11 {
  position: relative;
  width: 13.494rem;
  height: 0.587rem;
  margin: 0.854rem 0 0 0.64rem;
}

.text_28 {
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
}

.text_29 {
  position: absolute;
  left: 0;
  top: 0;
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
}

.section_17 {
  width: 7.28rem;
  height: 1.707rem;
  margin: 0.694rem 0 0 0.64rem;
}

.image_6 {
  width: 1.707rem;
  height: 1.707rem;
}

.box_9 {
  width: 5.094rem;
  height: 1.52rem;
  margin-top: 0.134rem;
}

.section_18 {
  width: 4.427rem;
  height: 0.56rem;
}

.image-text_15 {
  width: 3.627rem;
  height: 0.56rem;
}

.text-group_17 {
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
  margin-top: 0.027rem;
}

.section_19 {
  background-color: rgba(243, 188, 36, 1);
  width: 0.534rem;
  height: 0.507rem;
}

.thumbnail_16 {
  width: 0.534rem;
  height: 0.534rem;
}

.section_20 {
  width: 5.094rem;
  height: 0.8rem;
  margin-top: 0.16rem;
}

.text-wrapper_12 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
}

.text_30 {
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

.text-wrapper_13 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
}

.text_31 {
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

.image-text_16 {
  width: 15.547rem;
  height: 1.92rem;
  margin: 0.534rem 0 0 2.827rem;
}

.text-group_18 {
  width: 15.36rem;
  height: 1.92rem;
}

.text_32 {
  width: 15.36rem;
  height: 1.92rem;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.96rem;
}

.text_33 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(26, 188, 252, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 1.174rem 0.56rem 0 -2.48rem;
}

.thumbnail_17 {
  width: 0.267rem;
  height: 0.267rem;
  margin: 1.334rem -0.054rem 0 -0.027rem;
}

.section_21 {
  width: 15.36rem;
  height: 0.534rem;
  margin: 0.587rem 0 0 2.827rem;
}

.image-text_17 {
  width: 2.774rem;
  height: 0.534rem;
}

.thumbnail_18 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_19 {
  width: 2.027rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.027rem;
}

.image-text_18 {
  width: 5.6rem;
  height: 0.534rem;
}

.thumbnail_19 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_20 {
  width: 4.854rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.027rem;
}

.section_22 {
  width: 18.827rem;
  height: 0.027rem;
  border: 1px solid rgba(224, 224, 224, 1);
  margin-top: 0.907rem;
}

.text_34 {
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
  margin: 0.854rem 0 0 0.64rem;
}

.section_23 {
  width: 7.28rem;
  height: 1.707rem;
  margin: 0.694rem 0 0 0.64rem;
}

.image_7 {
  width: 1.707rem;
  height: 1.707rem;
}

.box_10 {
  width: 5.094rem;
  height: 1.52rem;
  margin-top: 0.134rem;
}

.box_11 {
  width: 4.427rem;
  height: 0.56rem;
}

.image-text_19 {
  width: 3.627rem;
  height: 0.56rem;
}

.text-group_21 {
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
  margin-top: 0.027rem;
}

.box_12 {
  background-color: rgba(243, 188, 36, 1);
  width: 0.534rem;
  height: 0.507rem;
}

.thumbnail_20 {
  width: 0.534rem;
  height: 0.534rem;
}

.box_13 {
  width: 5.094rem;
  height: 0.8rem;
  margin-top: 0.16rem;
}

.text-wrapper_14 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
}

.text_35 {
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

.text-wrapper_15 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 0.8rem;
  width: 2.4rem;
}

.text_36 {
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

.image-text_20 {
  width: 15.547rem;
  height: 1.92rem;
  margin: 0.534rem 0 0 2.827rem;
}

.text-group_22 {
  width: 15.36rem;
  height: 1.92rem;
}

.text_37 {
  width: 15.36rem;
  height: 1.92rem;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 0.96rem;
}

.text_38 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(26, 188, 252, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 1.174rem 0.56rem 0 -2.48rem;
}

.thumbnail_21 {
  width: 0.267rem;
  height: 0.267rem;
  margin: 1.334rem -0.054rem 0 -0.027rem;
}

.section_24 {
  width: 15.36rem;
  height: 0.534rem;
  margin: 0.587rem 0 1.067rem 2.827rem;
}

.image-text_21 {
  width: 2.774rem;
  height: 0.534rem;
}

.thumbnail_22 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_23 {
  width: 2.027rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.027rem;
}

.image-text_22 {
  width: 5.6rem;
  height: 0.534rem;
}

.thumbnail_23 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_24 {
  width: 4.854rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(122, 122, 122, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.027rem;
}

.section_25 {
  width: 20rem;
  height: 13.68rem;
  margin-bottom: 0.027rem;
}

.section_26 {
  height: 6.32rem;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG3a0548f58da7306ee11b1385ebfdb55f.png)
    100% no-repeat;
  background-size: 100% 100%;
  margin-top: 0.8rem;
  width: 20rem;
}

.block_5 {
  background-color: rgba(6, 63, 116, 0.5);
  height: 6.32rem;
  width: 20rem;
  background-image: url('../assets/img/1212.png');
  background-size: 100%;
  position: fixed;
  bottom: 0;
}

.group_9 {
  width: 18.827rem;
  height: 2.347rem;
  margin: 1.014rem 0 0 0.587rem;
}

.image-text_23 {
  width: 5.547rem;
  height: 2.347rem;
}

.image_8 {
  width: 2.347rem;
  height: 2.347rem;
  border-radius: 50%;
}
::v-deep .text-group_26, .text-group_27, .text_40 {
  font-size: .48rem !important;
}

.text_40, .text-wrapper_17, .text_42 {
  text-align: center;
  padding-left: 8px;
  font-size: .48rem !important;
}
.text_39 {
  font-size: .53rem !important;
}



.section_27 {
  width: 2.774rem;
  height: 2.08rem;
  margin-top: 0.134rem;
}

.text-group_25 {
  width: 2.774rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.693rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
}

.block_6 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  position: relative;
  width: 2.347rem;
  height: 0.96rem;
  margin-top: 0.427rem;
}

.image-text_24 {
  width: 1.627rem;
  height: 0.48rem;
  margin: 0.24rem 0 0 0.32rem;
}

.thumbnail_24 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_26 {
  width: 0.96rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.3rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
}

.image-text_25 {
  position: absolute;
  left: 0.32rem;
  top: 0.24rem;
  width: 1.627rem;
  height: 0.48rem;
}

.box_14 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  width: 3.307rem;
  height: 0.96rem;
  margin: 1.254rem 0 0 -0.054rem;
}

.image-text_26 {
  width: 2.614rem;
  height: 0.48rem;
  margin: 0.24rem 0 0 0.32rem;
}

.thumbnail_25 {
  width: 0.48rem;
  height: 0.48rem;
}

.text-group_27 {
  /* width: 1.96rem;
  height: 0.48rem; */
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.3rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
}

.text_39 {
  width: 2.134rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.3rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.534rem;
  margin: 0.294rem 0 0 -2.934rem;
}

.box_15 {
  width: 9.574rem;
  height: 0.96rem;
  margin: 1.254rem 0 0 1.254rem;
}

.text-wrapper_16 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  height: 0.96rem;
  width: 2.934rem;
}

.text_40 {
  width: 2.32rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.3rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 0.24rem 0 0 0rem;
}

.text-wrapper_17 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  height: 0.96rem;
  margin-left: 0.32rem;
  width: 2.934rem;
}

.text_41 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 0.24rem 0 0 0.2rem
}

.text-wrapper_18 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  height: 0.96rem;
  margin-left: 0.454rem;
  width: 2.934rem;
}

.text_42 {
  width: 1.92rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 0.24rem 0 0 0.2rem;
}

.group_10 {
  width: 10.987rem;
  height: 1.334rem;
  margin: 0.747rem 0 0.88rem 4.507rem;
}

.section_28 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 8px;
  width: 5.04rem;
  height: 1.334rem;
}

.image-text_27 {
  width: 1.814rem;
  height: 0.534rem;
  margin: 0.4rem 0 0 1.627rem;
}

.thumbnail_26 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_28 {
  width: 1.067rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.027rem;
}

.section_29 {
  background-color: rgba(16, 203, 140, 1);
  border-radius: 8px;
  width: 5.04rem;
  height: 1.334rem;
}

.image-text_28 {
  width: 1.814rem;
  height: 0.534rem;
  margin: 0.4rem 0 0 1.627rem;
}

.thumbnail_27 {
  width: 0.534rem;
  height: 0.534rem;
}

.text-group_29 {
  width: 1.067rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.533rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.027rem;
}

.section_30 {
  background-color: rgba(61, 60, 68, 1);
  width: 20rem;
  height: 6.534rem;
  margin-bottom: 0.027rem;
  justify-content: flex-center;
}

.list_1 {
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

.image_9 {
  width: 2.667rem;
  height: 2.667rem;
}

.text-group_30 {
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

.group_11 {
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
  ::v-deep .label_4 {
    margin: 0.127rem 0 0 0.147rem !important;
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
  .box_personal_detail {
    padding-bottom: 271px;
    overflow-y: scroll;
    background: #F6F6F6;
    .text-wrapper_2 {
      margin-right: 14px;
    }
    .section_5 {
      .text-wrapper_5 {
        border-radius: 4px 2px 18px 0px;
      }
    }
    .section_6 {
      .text-wrapper_6 {
        border-radius: 4px 2px 18px 0px;
      }
    }
  }
  .section_7 {
    margin-bottom: .8rem;
    .item_box {
      border-bottom: 1px dashed rgba(224, 224, 224, 1);
      padding-bottom: 0.907rem;
      margin-bottom: 10px;
    }
  }
  ::v-deep .thumbnail_11 {
    margin-right: 5px !important;
  }
  .section_40 {
  background-color: rgba(61, 60, 68, 1);
  width: 20rem;
  height: 6.534rem;
  justify-content: flex-center;
  margin-bottom: 200px;
}
.flex-col {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}

.image_15 {
    width: 2.667rem;
    height: 2.667rem;
}
.text-group_48 {
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
.group_28 {
    background-color: rgba(110, 110, 124, 1);
    width: 20rem;
    height: 0.027rem;
    margin-top: 0.267rem;
}
.paragraph_1 {
    width: 14rem;
    text-align: center
  }
</style>