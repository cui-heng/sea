<template>
  <el-dialog
    class="biz-adviser-modal"
    :visible="visible"
    :show-close="false"
    width="700px"
  >
    <div class="biz-adviser-modal-top">
      <fe-title :level="2">金牌顾问</fe-title>
      <fe-text>一对一语音高效沟通方式，有助于解决复杂问题</fe-text>
    </div>
    <div class="biz-adviser-modal-content">
      <div class="biz-adviser-modal-number">{{ adviserNumber }}</div>
      <div class="biz-adviser-modal-tips">咨询时请说明来自海洋财经，以便得到更佳服务</div>
      <fe-button class="biz-adviser-modal-button" type="primary" @click="visible = false">关闭</fe-button>
    </div>
  </el-dialog>
</template>

<script>
import { formatNumberWithSeparator } from '@/utils';
export default {
  name: 'bizAdviserModalWechat',
  data() {
    return {
      adviser: null,
      visible: false,
    }
  },
  computed: {
    adviserNumber() {
      if (this.adviser?.phonenumber) {
        return formatNumberWithSeparator(this.adviser?.phonenumber)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./base.scss";

.biz-adviser-modal {
  &-number {
    color: #0242AC;
    font-size: 35px;
    font-weight: 800;
    line-height: 36px;
    margin-top: 106px;
  }

  &-tips {
    color: #0242AC;
    font-size: 14px;
    font-weight: 500;
    margin-top: 50px;
  }

  &-button {
    width: 214px;
    margin-top: 117px;
  }
}
</style>
