<template>
   <div class="hot-staff">
    <div class="hot-staff-header">
      <fe-title :level="2">人气顾问</fe-title>
      <fe-text :level="3">最具影响力的理财顾问</fe-text>
    </div>
    <div class="hot-staff-list">
      <biz-adviser-card v-for="adviser of items.slice(0, 6)" :key="adviser.id" :adviser="adviser" />
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

    .fe-title {
      margin: 0 0 22px;
      font-size: 34px;
    }

    .fe-text {
      font-size: 22px;
    }
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 22px;
  }
}
</style>
