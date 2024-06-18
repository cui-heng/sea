<template>
  <div>
    <div >
      <div class="group_5 flex-col">
        <div class="section_1 flex-row">
          <img class="image_3" 
                :src="baseUrlImg + dataList.avatar">
          <div class="section_2 flex-col">
            <div class="text-wrapper_3 flex-row justify-between" style="margin-left: 5px;">
              <span class="text_10">{{ dataList.nickName }}</span>
              <span class="text_11">{{ dataList.position }}</span>
            </div>
            <div class="box_2 flex-row justify-between">
              <!-- <div class="group_6 flex-row">
                <div class="image-text_1 flex-row justify-between">
                  <img
                    class="thumbnail_2"
                    referrerpolicy="no-referrer"
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGdc406e835a02405f35d3dec4e3f4252d.png"
                  />
                  <span class="text-group_1">北京</span>
                </div>
              </div>
              <div class="group_7 flex-row">
                <div class="image-text_2 flex-row justify-between">
                  <img
                    class="thumbnail_3"
                    referrerpolicy="no-referrer"
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG24544f87e4d5d861a07566e985257ba0.png"
                  />
                  <span class="text-group_2">实名认证</span>
                </div>
              </div> -->
              <div class="group_8 flex-row justify-between">
                <div class="text-wrapper_4 flex-col" v-for="item in dataList.tags
">
                  <span class="text_12">{{ item }}</span>
                </div>
              </div>
            </div>
            <span class="text_15" style="margin-left: 20px;">{{ dataList.selfIntroduction}}</span
            >
          </div>
        </div>
      </div>
      <div class="group_9 flex-row justify-between">
        <div class="block_5 flex-col">
          <div class="section_3 flex-row">
            <div class="text-wrapper_7 flex-col">
              <span class="text_16">1对1专业解答</span>
            </div>
          </div>
          <div class="section_4 flex-row justify-between">
            <div class="text-group_3 flex-col justify-between">
              <span class="text_17">微信咨询</span>
              <span class="text_18">投资难题随时解答</span>
            </div>
            <div class="group_10 flex-row">
              <div class="image-text_3 flex-row justify-between">
                <img
                  class="thumbnail_4"
                  referrerpolicy="no-referrer"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG9bd40b3d845709e9404ff86613d12d87.png"
                />
                <span class="text-group_4">微信</span>
              </div>
            </div>
          </div>
        </div>
        <div class="block_6 flex-col">
          <div class="block_7 flex-row">
            <div class="text-wrapper_8 flex-col">
              <span class="text_19">1对1专业解答</span>
            </div>
          </div>
          <div class="block_8 flex-row justify-between">
            <div class="text-group_5 flex-col justify-between">
              <span class="text_20">电话咨询</span>
              <span class="text_21">电话高效沟通，快速解答疑问</span>
            </div>
            <div class="group_11 flex-row">
              <div class="image-text_4 flex-row justify-between">
                <img
                  class="thumbnail_5"
                  referrerpolicy="no-referrer"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGd29b96d9f62ec237c29dd706fbcd56eb.png"
                />
                <span class="text-group_6">查看</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="text_22">顾问文章</span>
      <div class="group_12 flex-col"></div>
      <div v-for="item in artList" style="margin-top: 20px;">
      <span class="text_23"
        >{{ item.title }}</span
      >
      <div class="group_13 flex-row justify-between">
        <img
          class="image_4"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG3cbfc6d04a123c96d9a121efa7966fd9.png"
        />
        <div class="block_9 flex-col justify-between">
          <div class="section_5 flex-row justify-between">
            <div class="image-text_5 flex-row justify-between">
              <span class="text-group_7">{{ item.nickName }}</span>
              <!-- <div class="block_10 flex-col"></div> -->
            </div>
            <img
              class="thumbnail_6"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGdc5136bc9e1a65a4fc3c9210a87813f2.png"
            />
          </div>
          <div class="section_6 flex-row justify-between">
            <div class="text-wrapper_9 flex-col">
              <span class="text_24">{{ item.position }}</span>
            </div>
            <div class="text-wrapper_10 flex-col">
              <span class="text_25">帮助{{
        item.helpNumber
      }}万</span>
            </div>
          </div>
        </div>
      </div>
      <p class="text_26" style="width: 50%;"
        > {{ item.description.slice(0,50) }}</p
      >
      <div class="image-text_6 flex-row justify-between">
        <router-link :to="`/wendaxiangqing/${item.id}`" tag="span">
        <span class="text-group_8">阅读全文</span>
        </router-link>
        <img
          class="thumbnail_7"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGff3db857aa9e8c4d5ec40a48f598762b.png"
        />
      </div>
      <div class="group_14 flex-row">
        <div class="image-text_7 flex-row justify-between">
          <img
            class="thumbnail_8"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG0fc2578a01594721160e334416afe9d1.png"
          />
          <span class="text-group_9">{{ item.viewNumber }}次浏览</span>
        </div>
        <div class="image-text_8 flex-row justify-between" style="margin-left: 200px;">
          <img
            class="thumbnail_9"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG42891ec7ef08688b4a0e2df15eb92f9d.png"
          />
          <span class="text-group_10">{{ item.createTime }}</span>
        </div>
      </div>
      <div ></div>
    </div>
    <div style="height: 100px;width: 100%;"></div>
      <div >
        <div class="box_6 flex-row" style="position: relative;top: 20px">
          <img
            class="image_7"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGa3e0f7df5659c6a1801493fa77018235.png"
          />
          <div class="block_11 flex-col justify-between">
            <div class="text-wrapper_15 flex-row justify-between">
              <span class="text_35">王海经理</span>
              <span class="text_36">期货顾问</span>
            </div>
            <div class="box_7 flex-row justify-between">
              <div class="box_8 flex-row">
                <div class="image-text_17 flex-row justify-between">
                  <img
                    class="thumbnail_18"
                    referrerpolicy="no-referrer"
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGdc406e835a02405f35d3dec4e3f4252d.png"
                  />
                  <span class="text-group_19">北京</span>
                </div>
              </div>
              <div class="box_9 flex-row">
                <div class="image-text_18 flex-row justify-between">
                  <img
                    class="thumbnail_19"
                    referrerpolicy="no-referrer"
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG24544f87e4d5d861a07566e985257ba0.png"
                  />
                  <span class="text-group_20">实名认证</span>
                </div>
              </div>
            </div>
          </div>
          <div class="block_12 flex-row justify-between">
            <div class="text-wrapper_16 flex-col">
              <span class="text_37">从业10年+</span>
            </div>
            <div class="text-wrapper_17 flex-col">
              <span class="text_38">响应及时</span>
            </div>
            <div class="text-wrapper_18 flex-col">
              <span class="text_39">经验丰富</span>
            </div>
          </div>
          <div class="block_13 flex-row">
            <div class="image-text_19 flex-row justify-between">
              <img
                class="thumbnail_20"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGd29b96d9f62ec237c29dd706fbcd56eb.png"
              />
              <span class="text-group_21">电话</span>
            </div>
          </div>
          <div class="block_14 flex-row">
            <div class="image-text_20 flex-row justify-between">
              <img
                class="thumbnail_21"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG9bd40b3d845709e9404ff86613d12d87.png"
              />
              <span class="text-group_22">微信</span>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 180px;width: 100%;"></div>
    </div>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
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
    return {      queryParam: {
        pagesize: 10,
        pagenum: 1
      },
      artList:[],
      dataList: {},
      dataList1: [],
      dataList2: [],
      dataList3: [],
      constants: {},
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
  methods: {

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
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 1920px;
  height: 2553px;
  overflow: hidden;
}

.block_1 {
  width: 1920px;
  height: 483px;
  background: url(./img/FigmaDDSSlicePNG1359293f48a39df490eb1b4e950fa14b.png)
    100% no-repeat;
  background-size: 100% 100%;
}

.block_2 {
  width: 1220px;
  height: 63px;
  margin: 224px 0 0 340px;
}

.group_1 {
  width: 220px;
  height: 61px;
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
  margin: 14px 0 0 26px;
}

.group_2 {
  background-color: rgba(255, 255, 255, 1);
  width: 368px;
  height: 36px;
  border: 1px solid rgba(217, 217, 217, 1);
  margin: 27px 0 0 397px;
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

.group_3 {
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

.block_3 {
  height: 78px;
  background: url(./img/FigmaDDSSlicePNG790e53f599c308ec59f922984f0bfea4.png)
    100% no-repeat;
  background-size: 100% 100%;
  width: 1238px;
  margin: 24px 0 0 341px;
}

.text-wrapper_2 {
  width: 784px;
  height: 20px;
  margin: 31px 0 0 393px;
}

.text_5 {
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

.text_6 {
  width: 80px;
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

.text_7 {
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
  width: 140px;
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

.group_4 {
  width: 40px;
  height: 3px;
  margin: 12px 0 12px 1087px;
}

.box_1 {
  background-color: rgba(255, 255, 255, 1);
  width: 40px;
  height: 3px;
}

.thumbnail_1 {
  width: 6px;
  height: 6px;
  margin: 30px 0 58px 526px;
}

.block_4 {
  width: 1920px;
  height: 1826px;
}

.group_5 {
  height: 400px;
  background: url(./img/FigmaDDSSlicePNG5355d8c46fbe34660f68952b60618421.png)
    100% no-repeat;
  background-size: 100% 100%;
  margin-left: 340px;
  width: 1240px;
}

.section_1 {
  background-color: rgba(6, 63, 116, 0.5);
  width: 1240px;
  height: 400px;
}

.image_3 {
  width: 224px;
  height: 254px;
  margin: 73px 0 0 60px;
}

.section_2 {
  width: 895px;
  height: 245px;
  margin: 73px 41px 0 30px;
}

.text-wrapper_3 {
  width: 188px;
  height: 24px;
}

.text_10 {
  width: 96px;
  height: 24px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 24px;
}

.text_11 {
  width: 72px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 6px;
}

.box_2 {
  width: 473px;
  height: 30px;
  margin-top: 29px;
}

.group_6 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  width: 69px;
  height: 30px;
}

.image-text_1 {
  width: 47px;
  height: 14px;
  margin: 8px 0 0 11px;
}

.thumbnail_2 {
  width: 14px;
  height: 14px;
}

.text-group_1 {
  width: 28px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
}

.group_7 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  width: 96px;
  height: 30px;
  margin-left: 16px;
}

.image-text_2 {
  width: 75px;
  height: 14px;
  margin: 8px 0 0 11px;
}

.thumbnail_3 {
  width: 14px;
  height: 14px;
}

.text-group_2 {
  width: 56px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
}

.group_8 {
  width: 276px;
  height: 30px;
  margin-left: 16px;
}

.text-wrapper_4 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  height: 30px;
  width: 88px;
}

.text_12 {
  width: 68px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
  margin: 8px 0 0 10px;
}

.text-wrapper_5 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  height: 30px;
  margin-left: 16px;
  width: 78px;
}

.text_13 {
  width: 56px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
  margin: 8px 0 0 11px;
}

.text-wrapper_6 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  height: 30px;
  margin-left: 16px;
  width: 78px;
}

.text_14 {
  width: 56px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
  margin: 8px 0 0 11px;
}

.text_15 {
  width: 895px;
  height: 136px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 34px;
  margin-top: 26px;
}

.group_9 {
  width: 1240px;
  height: 204px;
  margin: 20px 0 0 340px;
}

.block_5 {
  background-color: rgba(234, 255, 248, 1);
  border-radius: 8px;
  height: 204px;
  width: 608px;
}

.section_3 {
  width: 166px;
  height: 44px;
}

.text-wrapper_7 {
  background-color: rgba(16, 203, 140, 1);
  border-radius: 8px 8px 0px 22px;
  height: 44px;
  width: 166px;
}

.text_16 {
  width: 112px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin: 13px 0 0 27px;
}

.section_4 {
  width: 485px;
  height: 61px;
  margin: 28px 0 71px 67px;
}

.text-group_3 {
  width: 144px;
  height: 61px;
}

.text_17 {
  width: 112px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 28px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 28px;
}

.text_18 {
  width: 144px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(74, 74, 74, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 15px;
}

.group_10 {
  background-color: rgba(16, 203, 140, 1);
  border-radius: 8px;
  width: 189px;
  height: 50px;
  margin-top: 5px;
}

.image-text_3 {
  width: 64px;
  height: 18px;
  margin: 16px 0 0 63px;
}

.thumbnail_4 {
  width: 18px;
  height: 18px;
}

.text-group_4 {
  width: 36px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
}

.block_6 {
  background-color: rgba(227, 241, 254, 1);
  border-radius: 8px;
  height: 204px;
  width: 608px;
}

.block_7 {
  width: 166px;
  height: 44px;
}

.text-wrapper_8 {
  background-color: rgba(63, 143, 240, 1);
  border-radius: 8px 8px 0px 22px;
  height: 44px;
  width: 166px;
}

.text_19 {
  width: 112px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin: 13px 0 0 27px;
}

.block_8 {
  width: 485px;
  height: 61px;
  margin: 28px 0 71px 67px;
}

.text-group_5 {
  width: 234px;
  height: 61px;
}

.text_20 {
  width: 112px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 28px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 28px;
}

.text_21 {
  width: 234px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(74, 74, 74, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 15px;
}

.group_11 {
  background-color: rgba(63, 143, 240, 1);
  border-radius: 8px;
  width: 189px;
  height: 50px;
  margin-top: 5px;
}

.image-text_4 {
  width: 64px;
  height: 18px;
  margin: 16px 0 0 63px;
}

.thumbnail_5 {
  width: 18px;
  height: 18px;
}

.text-group_6 {
  width: 36px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
}

.text_22 {
  width: 112px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 28px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 128px;
  margin: 40px 0 0 340px;
}

.group_12 {
  background-color: rgba(224, 224, 224, 1);
  width: 1240px;
  height: 1px;
  margin: 20px 0 0 340px;
}

.text_23 {
  width: 460px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
  margin: 30px 0 0 340px;
}

.group_13 {
  width: 210px;
  height: 52px;
  margin: 14px 0 0 340px;
}

.image_4 {
  width: 50px;
  height: 50px;
  margin-top: 2px;
}

.block_9 {
  width: 148px;
  height: 52px;
}

.section_5 {
  width: 139px;
  height: 20px;
}

.image-text_5 {
  width: 109px;
  height: 19px;
}

.text-group_7 {
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
  margin-top: 2px;
}

.block_10 {
  background-color: rgba(243, 188, 36, 1);
  width: 20px;
  height: 19px;
}

.thumbnail_6 {
  width: 20px;
  height: 20px;
}

.section_6 {
  width: 148px;
  height: 24px;
  margin-top: 8px;
}

.text-wrapper_9 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  width: 66px;
}

.text_24 {
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

.text-wrapper_10 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  width: 72px;
}

.text_25 {
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

.text_26 {
  width: 1178px;
  height: 72px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 36px;
  margin: 10px 0 0 402px;
}

.image-text_6 {
  width: 88px;
  height: 16px;
  margin: 10px 0 0 402px;
}

.text-group_8 {
  width: 64px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(26, 188, 252, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.thumbnail_7 {
  width: 6px;
  height: 6px;
  margin-top: 8px;
}

.group_14 {
  width: 1098px;
  height: 14px;
  margin: 20px 0 0 442px;
}

.image-text_7 {
  width: 79px;
  height: 14px;
}

.thumbnail_8 {
  width: 14px;
  height: 14px;
}

.text-group_9 {
  width: 59px;
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

.image-text_8 {
  width: 162px;
  height: 14px;
}

.thumbnail_9 {
  width: 14px;
  height: 14px;
}

.text-group_10 {
  width: 142px;
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

.group_15 {
  background-color: rgba(224, 224, 224, 1);
  width: 1240px;
  height: 1px;
  margin: 28px 0 0 340px;
}

.text_27 {
  width: 460px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
  margin: 28px 0 0 340px;
}

.group_16 {
  width: 210px;
  height: 52px;
  margin: 14px 0 0 340px;
}

.image_5 {
  width: 50px;
  height: 50px;
  margin-top: 2px;
}

.group_17 {
  width: 148px;
  height: 52px;
}

.box_3 {
  width: 139px;
  height: 20px;
}

.image-text_9 {
  width: 109px;
  height: 19px;
}

.text-group_11 {
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
  margin-top: 2px;
}

.section_7 {
  background-color: rgba(243, 188, 36, 1);
  width: 20px;
  height: 19px;
}

.thumbnail_10 {
  width: 20px;
  height: 20px;
}

.box_4 {
  width: 148px;
  height: 24px;
  margin-top: 8px;
}

.text-wrapper_11 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  width: 66px;
}

.text_28 {
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

.text-wrapper_12 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  width: 72px;
}

.text_29 {
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

.text_30 {
  width: 1178px;
  height: 72px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 36px;
  margin: 10px 0 0 402px;
}

.image-text_10 {
  width: 88px;
  height: 16px;
  margin: 10px 0 0 402px;
}

.text-group_12 {
  width: 64px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(26, 188, 252, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.thumbnail_11 {
  width: 6px;
  height: 6px;
  margin-top: 8px;
}

.group_18 {
  width: 1098px;
  height: 14px;
  margin: 20px 0 0 442px;
}

.image-text_11 {
  width: 79px;
  height: 14px;
}

.thumbnail_12 {
  width: 14px;
  height: 14px;
}

.text-group_13 {
  width: 59px;
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

.image-text_12 {
  width: 162px;
  height: 14px;
}

.thumbnail_13 {
  width: 14px;
  height: 14px;
}

.text-group_14 {
  width: 142px;
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

.group_19 {
  background-color: rgba(224, 224, 224, 1);
  width: 1240px;
  height: 1px;
  margin: 28px 0 0 340px;
}

.text_31 {
  width: 460px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
  margin: 28px 0 0 340px;
}

.group_20 {
  width: 210px;
  height: 52px;
  margin: 14px 0 0 340px;
}

.image_6 {
  width: 50px;
  height: 50px;
  margin-top: 2px;
}

.box_5 {
  width: 148px;
  height: 52px;
}

.group_21 {
  width: 139px;
  height: 20px;
}

.image-text_13 {
  width: 109px;
  height: 19px;
}

.text-group_15 {
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
  margin-top: 2px;
}

.group_22 {
  background-color: rgba(243, 188, 36, 1);
  width: 20px;
  height: 19px;
}

.thumbnail_14 {
  width: 20px;
  height: 20px;
}

.group_23 {
  width: 148px;
  height: 24px;
  margin-top: 8px;
}

.text-wrapper_13 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  width: 66px;
}

.text_32 {
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

.text-wrapper_14 {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 4px;
  height: 24px;
  width: 72px;
}

.text_33 {
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

.text_34 {
  width: 1178px;
  height: 72px;
  overflow-wrap: break-word;
  color: rgba(112, 112, 112, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: justified;
  line-height: 36px;
  margin: 10px 0 0 402px;
}

.image-text_14 {
  width: 88px;
  height: 16px;
  margin: 10px 0 0 402px;
}

.text-group_16 {
  width: 64px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(26, 188, 252, 1);
  font-size: 16px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;
}

.thumbnail_15 {
  width: 6px;
  height: 6px;
  margin-top: 8px;
}

.group_24 {
  width: 1098px;
  height: 14px;
  margin: 20px 0 0 442px;
}

.image-text_15 {
  width: 79px;
  height: 14px;
}

.thumbnail_16 {
  width: 14px;
  height: 14px;
}

.text-group_17 {
  width: 59px;
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

.image-text_16 {
  width: 162px;
  height: 14px;
}

.thumbnail_17 {
  width: 14px;
  height: 14px;
}

.text-group_18 {
  width: 142px;
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

.group_25 {
  background-color: rgba(224, 224, 224, 1);
  width: 1240px;
  height: 1px;
  margin: 28px 0 0 340px;
}

.group_26 {
  height: 194px;
  background: url(./img/FigmaDDSSlicePNGf4207291a5500c36f83b24b5b6b66c83.png)
    100% no-repeat;
  background-size: 100% 100%;
  width: 1920px;
  margin: 61px 0 1px 0;
}

.box_6 {
  background: url(./img/FigmaDDSSlicePNGf4207291a5500c36f83b24b5b6b66c83.png)
    100% no-repeat;
  background-size: 100% 100%;
  /* background-color: rgba(6, 63, 116, 0.5); */
  width: 1920px;
  height: 194px;
  justify-content: flex-center;
}

.image_7 {
  width: 132px;
  height: 132px;
  margin: 31px 0 0 340px;
}

.block_11 {
  width: 188px;
  height: 83px;
  margin: 56px 0 0 35px;
}

.text-wrapper_15 {
  width: 188px;
  height: 24px;
}

.text_35 {
  width: 96px;
  height: 24px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 24px;
}

.text_36 {
  width: 72px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 6px;
}

.box_7 {
  width: 181px;
  height: 30px;
  margin-top: 29px;
}

.box_8 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  width: 69px;
  height: 30px;
}

.image-text_17 {
  width: 47px;
  height: 14px;
  margin: 8px 0 0 11px;
}

.thumbnail_18 {
  width: 14px;
  height: 14px;
}

.text-group_19 {
  width: 28px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
}

.box_9 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  width: 96px;
  height: 30px;
}

.image-text_18 {
  width: 75px;
  height: 14px;
  margin: 8px 0 0 11px;
}

.thumbnail_19 {
  width: 14px;
  height: 14px;
}

.text-group_20 {
  width: 56px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
}

.block_12 {
  width: 276px;
  height: 30px;
  margin: 109px 0 0 9px;
}

.text-wrapper_16 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  height: 30px;
  width: 88px;
}

.text_37 {
  width: 68px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
  margin: 8px 0 0 10px;
}

.text-wrapper_17 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  height: 30px;
  margin-left: 16px;
  width: 78px;
}

.text_38 {
  width: 56px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
  margin: 8px 0 0 11px;
}

.text-wrapper_18 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  height: 30px;
  margin-left: 16px;
  width: 78px;
}

.text_39 {
  width: 56px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
  margin: 8px 0 0 11px;
}

.block_13 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 8px;
  width: 189px;
  height: 50px;
  margin: 72px 0 0 188px;
}

.image-text_19 {
  width: 64px;
  height: 18px;
  margin: 16px 0 0 63px;
}

.thumbnail_20 {
  width: 18px;
  height: 18px;
}

.text-group_21 {
  width: 36px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
}

.block_14 {
  background-color: rgba(16, 203, 140, 1);
  border-radius: 8px;
  width: 189px;
  height: 50px;
  margin: 72px 340px 0 34px;
}

.image-text_20 {
  width: 64px;
  height: 18px;
  margin: 16px 0 0 63px;
}

.thumbnail_21 {
  width: 18px;
  height: 18px;
}

.text-group_22 {
  width: 36px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
}

.block_15 {
  background-color: rgba(61, 60, 68, 1);
  width: 1920px;
  height: 245px;
  margin-top: -1px;
  justify-content: flex-center;
}

.group_27 {
  width: 336px;
  height: 130px;
  margin: 16px 0 0 792px;
}

.image-text_21 {
  width: 100px;
  height: 130px;
}

.image_8 {
  width: 100px;
  height: 100px;
}

.text-group_23 {
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

.image-text_22 {
  width: 100px;
  height: 130px;
}

.image_9 {
  width: 100px;
  height: 100px;
}

.text-group_24 {
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

.group_28 {
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

</style>