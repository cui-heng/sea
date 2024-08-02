<template>
  <div class="biz-staff-card">
    <div class="biz-staff-card-info">
      <div class="biz-staff-card-body">
        <p class="biz-staff-card-name">{{ staff.nickName }}</p>
        <div class="biz-staff-card-desc">
          <span>{{ staff.remark }}</span>
          <span>帮助{{ staff.helpNumber }}</span>
        </div>
      </div>
      <div class="biz-staff-card-meta">
        <template>
          <div class="biz-staff-card-record">
            <div class="biz-staff-card-like">
              <fe-icon icon="like" />
              <fe-text>好评{{ staff.positiveReviews }}</fe-text>
            </div>
            <div class="biz-staff-card-view">
              <fe-icon icon="eye" />
              <fe-text>浏览量{{ staff.userViews }}</fe-text>
            </div>
          </div>
          <div class="biz-staff-card-actions">
            <fe-button size="small" icon="phone" @click="$emit('view', { type: 'call', staff })">电话</fe-button>
            <fe-button type="wechat" size="small" icon="wechat" @click="$emit('view', { type: 'wechat', staff })">微信</fe-button>
          </div>
        </template>
      </div>
    </div>
    <fe-image class="biz-staff-card-avatar" :src="staff.avatar" :alt="staff.nickName" />
  </div>
</template>

<script>

export default {
  name: 'BizStaffCard',
  props: {
    staff: Object,
  },
  data() {
    return {
      
    }
  },
  watch: {
    
  },
  mounted() {
    console.log(this.staff);
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
.biz-staff-card {
  display: inline-flex;
  width: 383px;
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
    margin: 0;
    margin-bottom: 16px;
  }

  &-desc {
    color: #aaa;
    font-size: 12px;
  }

  &-meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0 14px;
  }

  &-record {
    display: flex;
    margin-bottom: 14px;
    & > div {
      flex: 1;
      display: flex;
      column-gap: 5px;
    }
    span {
      color: #A8A8A8;
      font-size: 12px;
      font-weight: 800;
      line-height: 16px;
      vertical-align: middle;
    }
  }

  &-eye {
    ::v-deep .icon img {
      width: 18px;
      height: 11px;
    }
  }

  &-actions {
    display: flex;
    column-gap: 12px;
  }

  &-avatar {
    width: 143px;
    height: 100%;
  }
}
</style>
