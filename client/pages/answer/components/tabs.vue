<template>
  <div class="tabs">
    <ul class="tabs-list">
      <li class="tabs-tab" :class="{ 'tabs-tab--active': activeKey === tab.value }" @click="activeKey = tab.value" v-for="tab of tabs" :key="tab.value">{{ tab.label }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'AnswerTabs',
  props: {
    title: String,
  },
  data() {
    return {
      activeKey: 'all'
    }
  },
  computed: {
    tabs() {
      return [
        {
          label: '全部',
          value: 'all'
        },
        {
          label: '热门回答',
          value: 'hot'
        },
        {
          label: '最新回答',
          value: 'latest'
        },
        {
          label: '最新点赞回答',
          value: 'latest-like'
        },
        {
          label: '最新分享回答',
          value: 'latest-share'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.tabs {
  li {
    list-style: none;
  }

  &-list {
    display: flex;
    margin: 0;
    padding: 0 14px;
  }

  &-tab {
    color: #A6A6A6;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    padding: 0 14px;
    cursor: pointer;
    border-right: 1px solid #A6A6A6;

    &:last-child {
      border-right: none;
    }

    &--active {
      color: #0242AC;
    }
  }
}
</style>
