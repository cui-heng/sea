<template>
  <el-dialog
    class="biz-adviser-modal wechat-dialog"
    :visible="visible"
    :show-close="false"
    width="700px"
  >
    <div class="biz-adviser-modal-top">
      <fe-title :level="2">金牌顾问</fe-title>
      <fe-text>一对一语音高效沟通方式，有助于解决复杂问题</fe-text>
    </div>
    <div class="biz-adviser-modal-content">
      <div class="biz-adviser-modal-qrcode">
        <fe-image :src="adviser?.wxQrCode" :alt="adviser?.phonenumber" />
        <div class="biz-adviser-modal-qrcode-tips">微信扫一扫  添加顾问</div>
      </div>
      <div class="biz-adviser-modal-number">{{ adviser?.phonenumber }}</div>
      <div class="biz-adviser-modal-tips">咨询时请说明来自海洋财经，以便得到更佳服务</div>
      <fe-button class="biz-adviser-modal-button" type="primary" @click="visible = false">关闭</fe-button>
    </div>
  </el-dialog>
</template>

<script>

export default {
  name: 'bizAdviserModalWechat',
  data() {
    return {
      visible: false,
      adviser: null,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./base.scss";

.biz-adviser-modal {
  &-qrcode {
    margin-top: 22px;
    .fe-image {
      width: 146px;
      height: 146px;
    }

    &-tips {
      color: #293468;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      margin-top: 12px;
    }
  }

  &-number {
    color: #0242AC;
    font-size: 35px;
    font-weight: 800;
    line-height: 36px;
    margin-top: 27px;
  }

  &-tips {
    color: #293468;
    font-size: 14px;
    font-weight: 500;
    margin-top: 18px;
  }

  &-button {
    width: 214px;
    margin-top: 32px;
  }
}
</style>
