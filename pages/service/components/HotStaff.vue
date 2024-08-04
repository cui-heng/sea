<template>
   <div class="hot-staff">
    <div class="hot-staff-header">
      <h3>人气顾问</h3>
      <h4>最具影响力的理财顾问</h4>
    </div>
    <div class="hot-staff-list">
      <staff-card v-for="staff of items" :key="staff" :staff="staff">
        <template slot="extra">
          <div class="hot-staff-meta">
            <div class="hot-staff-like">
              <Icon icon="like" />
              <span>好评{{ staff.positiveReviews }}</span>
            </div>
            <div class="hot-staff-eye">
              <Icon icon="eye" />
              <span>浏览量{{ staff.userViews }}</span>
            </div>
          </div>
          <div class="hot-staff-actions">
            <fe-button size="small" icon="phone" @click="$emit('view', { type: 'call', staff })">电话</fe-button>
            <fe-button type="wechat" size="small" icon="wechat" @click="$emit('view', { type: 'wechat', staff })">微信</fe-button>
          </div>
        </template>
      </staff-card>
    </div>
  </div>
</template>

<script>
import StaffCard from './StaffCard.vue';
export default {
  name: 'HotStaff',
  components: {
    StaffCard
  },
  props: {
    items: Array,
  },
}
</script>

<style scoped lang="scss">
.hot-staff {
  margin-top: 50px;

  &-header {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    width: 388px;
    height: 85px;
    margin: 0 auto 42px;
    background: url(~~/assets/images/service/hot-staff.png) no-repeat;
    background-size: contain;
    text-align: center;
    line-height: 1;
    color: #0242AC;

    h3 {
      margin: 0 0 22px;
      font-size: 34px;
      font-weight: 800;
    }

    h4 {
      margin: 0;
      font-size: 23px;
      font-weight: 500;
    }
  }

  &-meta {
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
    justify-content: center;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 22px;

    ::v-deep .staff-card-extra {
      flex-direction: column;
      padding: 20px 0 24px;
    }
  }
}
</style>
