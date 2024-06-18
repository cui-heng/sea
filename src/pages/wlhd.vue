<template>
  <div >
    <el-drawer :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <el-menu :default-active="activeIndex" :router="true" class="el-menu-vertical-demo">
        <el-menu-item index="/lanhu_shouye">首页</el-menu-item>
        <el-menu-item index="/lanhu_youwenbida">有问必答</el-menu-item>
        <el-menu-item index="/aboutPhone">期货手续费</el-menu-item>
        <el-menu-item index="/aboutPhone">期货保证金</el-menu-item>
        <el-menu-item index="/lanhu_qihuobaozhengjin">期货一对一服务</el-menu-item>
      </el-menu>
    </el-drawer>
    <div class="section_3 flex-col">
      <div class="box_1 flex-row">
        <div class="image-wrapper_1 flex-col justify-between">
          <img
            class="image_1"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG9cf3904f6a6a21980c3c3433343b1ade.png"
          />
          <img
            class="image_2"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGa248b93bac5dd25c5ba4e2eff60f7753.png"
          />
        </div>
        <div class="group_1 flex-col">
          <div class="image-wrapper_2 flex-col">
            <img
              class="label_4"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGc91b60cc0d136034d7e1cde253d50a91.png"
            />
          </div>
        </div>
        <img
          class="label_5"  @click="drawer = true"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG85213edb0f33d45b7ecd052df3ec843a.png"
        />
      </div>

      <div class="box_3 flex-col"></div>
    </div>
    <div class="section_4 flex-col">
      <img
        class="image_3"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGdd1814597a1b72dd05ccae47d8be3947.png"
      />
      <div class="text-group_2 flex-col justify-between">
        <span class="text_4">股神_2053【店铺主页】</span>
        <span class="text_5"
          >北京&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;黄金会员</span
        >
      </div>
      <div class="section_5 flex-row justify-between">
        <div class="group_2 flex-row justify-between">
          <div class="text-group_3 flex-col justify-between">
            <span class="text_6">黄金会员</span>
            <span class="text_7">剩余116天</span>
          </div>
          <div class="text-wrapper_2 flex-col">
            <span class="text_8">升级会员</span>
          </div>
        </div>
        <div class="group_3 flex-row justify-between">
          <div class="text-group_4 flex-col justify-between">
            <span class="text_9">星耀会员</span>
            <span class="text_10">剩余230天</span>
          </div>
          <div class="text-wrapper_3 flex-col">
            <span class="text_11">查看推广</span>
          </div>
        </div>
      </div>
    </div>
    <div class="section_6 flex-col">
      <div class="group_4 flex-col">
        <div class="box_4 flex-row">
          <img
            class="label_6"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG2b8d7248a7a3a3848fe038b522290366.png"
          />
          <span class="text_12">有问必答</span>
          <img
            class="thumbnail_3"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGb059524319d385f9c7c0a5544d8c2958.png"
          />
        </div>
        <div class="box_5 flex-row"><div class="box_6 flex-col"></div></div>
        <div class="box_7 flex-row">
          <img
            class="label_7"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG98c2094b405e9ac7b00dd2b34d250cc2.png"
          />
          <span class="text_13">文章与资讯</span>
          <img
            class="thumbnail_4"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGb059524319d385f9c7c0a5544d8c2958.png"
          />
        </div>
        <div class="box_8 flex-row"><div class="box_9 flex-col"></div></div>
        <div class="box_10 flex-row">
          <img
            class="label_8"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG600b48b23f3425fb02b54c49d5b966a4.png"
          />
          <span class="text_14">个人资料</span>
          <img
            class="thumbnail_5"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGb059524319d385f9c7c0a5544d8c2958.png"
          />
        </div>
      </div>
      <div class="group_5 flex-col">
        <div class="list_1 flex-row">
          <div
            class="image-text_2 flex-col justify-between"
            v-for="(item, index) in loopData0"
            :key="index"
          >
            <img
              class="image_4"
              referrerpolicy="no-referrer"
              :src="item.lanhuimage0"
            />
            <span class="text-group_5" v-html="item.lanhutext0"></span>
          </div>
        </div>
        <div class="group_6 flex-col"></div>
        <span class="paragraph_1"
          >京ICP备19048506号-2&nbsp;Copyright<br />&#64;&nbsp;2024&nbsp;中国海洋财经有限公司&nbsp;All&nbsp;Rights&nbsp;Reserved.</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer:false,
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
      constants: {},
    };
  },
  methods: {},
};
</script>
<style scoped>
html {
  font-size: 37.5px;
}

.page {
  background-color: rgba(246, 246, 246, 1);
  position: relative;
  width: 20rem;
  height: 43.307rem;
  overflow: hidden;
}

.section_1 {
  background-color: rgba(255, 255, 255, 1);
  width: 20rem;
  height: 4.694rem;
}

.section_2 {
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

.section_3 {
  width: 20rem;
  height: 5.76rem;
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

.group_1 {
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
  width: 5.467rem;
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

.image-text_1 {
  width: 2.56rem;
  height: 0.427rem;
  margin-left: 0.347rem;
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

.thumbnail_2 {
  width: 0.16rem;
  height: 0.16rem;
  margin-top: 0.107rem;
}

.box_3 {
  background-color: rgba(224, 224, 224, 1);
  width: 20rem;
  height: 0.027rem;
  margin: 0.934rem 0 0.72rem 0;
}

.section_4 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  width: 18.827rem;
  height: 10.774rem;
  justify-content: flex-center;
  margin: -0.027rem 0 0 0.587rem;
}

.image_3 {
  width: 2.56rem;
  height: 2.56rem;
  margin: 1.067rem 0 0 8.134rem;
}

.text-group_2 {
  width: 6.987rem;
  height: 1.547rem;
  margin: 0.694rem 0 0 5.92rem;
}

.text_4 {
  width: 6.987rem;
  height: 0.64rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.64rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.64rem;
}

.text_5 {
  width: 3.947rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 0.48rem;
  margin: 0.427rem 0 0 1.52rem;
}

.section_5 {
  width: 17.76rem;
  height: 2.934rem;
  margin: 0.907rem 0 1.067rem 0.534rem;
}

.group_2 {
  background-color: rgba(255, 251, 233, 1);
  border-radius: 12px;
  width: 8.614rem;
  height: 2.934rem;
  border: 1px solid rgba(255, 233, 152, 1);
}

.text-group_3 {
  width: 2.774rem;
  height: 1.414rem;
  margin: 0.747rem 0 0 0.64rem;
}

.text_6 {
  width: 2.774rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 0.693rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 0.694rem;
}

.text_7 {
  width: 2.32rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 61, 61, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.24rem;
}

.text-wrapper_2 {
  background-color: rgba(233, 187, 17, 1);
  border-radius: 88px;
  height: 1.387rem;
  width: 3.894rem;
  margin: 0.774rem 0.64rem 0 0;
}

.text_8 {
  width: 2.56rem;
  height: 0.64rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.64rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 0.64rem;
  margin: 0.374rem 0 0 0.667rem;
}

.group_3 {
  background-color: rgba(226, 249, 255, 1);
  border-radius: 12px;
  width: 8.614rem;
  height: 2.934rem;
  border: 1px solid rgba(166, 226, 242, 1);
}

.text-group_4 {
  width: 2.774rem;
  height: 1.414rem;
  margin: 0.747rem 0 0 0.64rem;
}

.text_9 {
  width: 2.774rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(36, 38, 41, 1);
  font-size: 0.693rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 0.694rem;
}

.text_10 {
  width: 2.32rem;
  height: 0.48rem;
  overflow-wrap: break-word;
  color: rgba(255, 61, 61, 1);
  font-size: 0.48rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 0.48rem;
  margin-top: 0.24rem;
}

.text-wrapper_3 {
  background-color: rgba(255, 61, 61, 1);
  border-radius: 88px;
  height: 1.387rem;
  width: 3.894rem;
  margin: 0.774rem 0.64rem 0 0;
}

.text_11 {
  width: 2.56rem;
  height: 0.64rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.64rem;
  font-family: PingFang SC-Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 0.64rem;
  margin: 0.374rem 0 0 0.667rem;
}

.section_6 {
  width: 20rem;
  height: 22.134rem;
  margin-bottom: 0.027rem;
}

.group_4 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  height: 8.08rem;
  width: 18.827rem;
  margin: 0.534rem 0 0 0.587rem;
}

.box_4 {
  width: 17.147rem;
  height: 0.747rem;
  margin: 0.96rem 0 0 0.8rem;
}

.label_6 {
  width: 0.747rem;
  height: 0.747rem;
}

.text_12 {
  width: 2.987rem;
  height: 0.747rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.746rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.747rem;
  margin-left: 0.854rem;
}

.thumbnail_3 {
  width: 0.347rem;
  height: 0.347rem;
  margin: 0.134rem -0.027rem 0 12.24rem;
}

.box_5 {
  width: 16.427rem;
  height: 0.027rem;
  margin: 0.96rem 0 0 2.4rem;
}

.box_6 {
  background-color: rgba(224, 224, 224, 1);
  width: 16.427rem;
  height: 0.027rem;
}

.box_7 {
  width: 17.147rem;
  height: 0.747rem;
  margin: 0.96rem 0 0 0.8rem;
}

.label_7 {
  width: 0.747rem;
  height: 0.747rem;
}

.text_13 {
  width: 3.734rem;
  height: 0.747rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.746rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.747rem;
  margin-left: 1.12rem;
}

.thumbnail_4 {
  width: 0.347rem;
  height: 0.347rem;
  margin: 0.107rem -0.027rem 0 11.227rem;
}

.box_8 {
  width: 16.427rem;
  height: 0.027rem;
  margin: 0.96rem 0 0 2.4rem;
}

.box_9 {
  background-color: rgba(224, 224, 224, 1);
  width: 16.427rem;
  height: 0.027rem;
}

.box_10 {
  width: 17.147rem;
  height: 0.747rem;
  margin: 0.96rem 0 0.987rem 0.8rem;
}

.label_8 {
  width: 0.747rem;
  height: 0.747rem;
}

.text_14 {
  width: 2.987rem;
  height: 0.747rem;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 0.746rem;
  font-family: PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 0.747rem;
  margin-left: 1.12rem;
}

.thumbnail_5 {
  width: 0.347rem;
  height: 0.347rem;
  margin: 0.107rem -0.027rem 0 11.974rem;
}

.group_5 {
  background-color: rgba(61, 60, 68, 1);
  width: 20rem;
  height: 6.534rem;
  justify-content: flex-center;
  margin: 6.96rem 0 0.027rem 0;
}

.list_1 {
  width: 8.96rem;
  height: 3.467rem;
  justify-content: space-between;
  margin: 0.427rem 0 0 5.52rem;
}

.image-text_2 {
  width: 2.667rem;
  height: 3.467rem;
  margin-right: 3.627rem;
}

.image_4 {
  width: 2.667rem;
  height: 2.667rem;
}

.text-group_5 {
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

.group_6 {
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
