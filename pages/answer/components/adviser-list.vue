<template>
  <div class="adviser-list">
    <biz-adviser-card :adviser="adviser" v-for="adviser of items" :key="adviser.id" />
  </div>
</template>

<script>
export default {
 name: 'AdviserList',
 props: {
   items: Array,
 }
}
</script>

<style scoped lang="scss">
.adviser-list {
  padding: 10px 12px;
  ::v-deep .biz-adviser-card {
    width: 100%;
    height: 143px;
    background: #F3F5F9;
    box-shadow: none;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }

    &-info {
      padding-left: 20px;
    }

    &-name {
      margin-bottom: 10px;
    }

    &-avatar {
      width: 120px;
    }
  }
}
</style>
