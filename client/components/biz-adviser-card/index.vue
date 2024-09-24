<template>
  <div class="biz-adviser-card">
    <div class="biz-adviser-card-info">
      <div class="biz-adviser-card-body">
        <fe-title class="biz-adviser-card-name" :level="2">
          <nuxt-link class="answer-creater" :to="`/adviser/${adviser.userId}`" target="_blank">
            {{ adviser.nickName }}
          </nuxt-link>
          </fe-title>
        <div class="biz-adviser-card-desc">
          <fe-text>{{ adviser.remark }}</fe-text>
          <fe-text>帮助{{ adviser.helpNumber | number }}</fe-text>
        </div>
      </div>
      <div class="biz-adviser-card-meta">
        <slot name="meta">
          <div class="biz-adviser-card-record">
            <span class="biz-adviser-card-like">
              <fe-icon icon="like" />
              <fe-text>好评{{ adviser.positiveReviews }}</fe-text>
            </span>
            <span class="biz-adviser-card-view">
              <fe-icon icon="eye" />
              <fe-text>浏览量{{ adviser.userViews | number }}</fe-text>
            </span>
          </div>
          <div class="biz-adviser-card-actions">
            <fe-button size="small" icon="phone" @click="$adviser.phone.open(adviser)">电话</fe-button>
            <fe-button type="wechat" size="small" icon="wechat" ghost @click="$adviser.wechat.open(adviser)">微信</fe-button>
          </div>
        </slot>
      </div>
    </div>
    <nuxt-link class="answer-creater" :to="`/adviser/${adviser.userId}`" target="_blank">
      <fe-image class="biz-adviser-card-avatar" :src="adviser.avatar" :alt="adviser.nickName" />
    </nuxt-link>
  </div>
</template>

<script>

export default {
  name: 'BizAdviserCard',
  props: {
    adviser: Object,
  }
}
</script>

<style lang="scss">
.biz-adviser-card {
  display: inline-flex;
  width: 382px;
  height: 192px;
  background: #fff;
  box-shadow: 0px 1px 17px 1px rgba(8,1,3,0.07);

  &-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 12px 0 18px;
  }

  &-body {
    flex: 1;
    align-content: center;
    border-bottom: 1px solid #E0E0E0;
  }

  &-name {
    color: #000;
    font-size: 18px;
  }

  &-desc {
    display: flex;
    column-gap: 20px;
    margin-top: 14px;

    .fe-text {
      color: #aaa;
      font-size: 12px;
    }
  }

  &-meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px 0 24px;
  }

  &-record {
    display: flex;
    margin-bottom: 14px;
    column-gap: 22px;
    .biz-adviser-card-like, .biz-adviser-card-view {
      display: flex;
      column-gap: 4px;
      line-height: 16px;
    }

    .fe-icon {
      color: #A8A8A8;
      font-size: 16px;
    }

    .fe-text {
      color: #A8A8A8;
      font-size: 12px;
      font-weight: 800;
      line-height: 16px;
      vertical-align: middle;
    }
  }

  &-actions {
    display: flex;
    column-gap: 12px;
  }

  &-avatar {
    width: 132px;
    height: calc(100% - 10px);
    margin: 5px;
  }
}
</style>
