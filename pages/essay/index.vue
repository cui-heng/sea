<template>
  <div class="container">
    <article class="main">
      <tabs class="tabs" />
      <div class="essay-list">
        <div class="essay-item" v-for="essay of essayData.list" :key="essay.id">
          <fe-image class="essay-image" />
          <div class="essay-info">
            <fe-title class="essay-title" :level="3">{{ essay.title }}</fe-title>
            <div class="essay-creater">
              <fe-image :src="essay.avatar" :alt="essay.nickName" />
              <fe-text>{{ essay.nickName }}</fe-text>
            </div>
            <fe-paragraph class="essay-desc">{{ essay.description }}</fe-paragraph>
            <div class="essay-meta">
              <fe-text class="essay-source" type="disabled">来源：期贷</fe-text>
              <span class="essay-meta-info">
                <fe-text class="essay-message" type="disabled">{{ essay.replyCount }}个回答</fe-text>
                <fe-text class="essay-view" type="disabled">{{ essay.viewNumber }}次浏览</fe-text>
              </span>
            </div>
            <fe-text class="essay-time" type="disabled">{{ essay.createTime }}</fe-text>
          </div>
        </div>
      </div>
    </article>
    <div class="aside">
      <div class="aside-card adviser">
        <div class="aside-card-header">
          <fe-title>期货顾问推荐</fe-title>
          <div class="aside-card-header-extra">
            <fe-text>更多 +</fe-text>
          </div>
        </div>
        <div class="aside-card-body">
          <div class="staff-list">
            <biz-staff-card :staff="staff" v-for="staff of recommendList" :key="staff.id"></biz-staff-card>
          </div>
        </div>
      </div>
      <div class="aside-card hot-issue">
        <div class="aside-card-header">
          <fe-title>热议问题</fe-title>
          <div class="aside-card-header-extra">
            <fe-text>更多 +</fe-text>
          </div>
        </div>
        <div class="aside-card-body">
          <ol class="issue-list">
            <li class="issue-item" v-for="(answer, index) in hotAnswers" :key="answer.id">
              <span class="issue-index" :class="getIssueIndexClassName(index)">{{ `${index + 1}`.padStart(2, '0') }}</span>
              <span class="issue-text">{{ answer.title }}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { website } from '@/services/index'
import tabs from './components/tabs.vue';
export default {
  name: 'Essay',
  components: {
    tabs
  },
  async asyncData({ $axios }) {
    const [essayData, recommendList, hotAnswers] = await Promise.all([
      $axios.$get(website.getAnswer, {
        page: 1,
        size: 10,
        searchText: ''
      }),
      $axios.$get(website.getRecommendUser),
      $axios.$get(website.getHotAnswer)
    ]);

    return {
      essayData,
      recommendList,
      hotAnswers,
    }
  },

  data() {
    return {
      essayData: {
        list: [],
        total: 0
      },
      recommendList: [],
      hotAnswers: [],
    }
  },
  methods: {
    getIssueIndexClassName(index) {
      const backgroundEnum = ['issue-index--first', 'issue-index--second', 'issue-index--third'];

      return backgroundEnum[index];
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  min-width: 1280px;
  max-width: 1480px;
  column-gap: 28px;
  margin: 0 auto;

  .main {
    flex: 1;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0px 1px 17px 1px rgba(8,1,3,0.07);

    .tabs {
      padding: 24px 0 16px;
      border-bottom: 2px solid #F8F8F8;
    }
  }

  .essay {
    &-item {
      display: flex;
      padding: 20px;
      column-gap: 20px;
      border-bottom: 1px solid #F8F8F8;
      position: relative;

      &:last-child {
        border-bottom: none;
      }
    }

    &-image {
      width: 188px;
      height: 140px;
      border-radius: 12px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    &-info {
      flex: 1;
    }

    &-title {
      font-size: 18px;
      margin-top: 4px;
    }
    
    &-creater {
      display: flex;
      align-items: center;
      margin-top: 12px;
      .fe-image {
        width: 26px;
        height: 26px;
        overflow: hidden;
        border-radius: 100%;
      }

      span {
        color: #000;
        font-weight: 14px;
        font-weight: 800;
        margin-left: 8px;
      }
    }

    &-desc {
      color: #969696;
      height: 44px;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-top: 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-meta {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;

      &-info {
        display: flex;
        column-gap: 20px;
      }

      .fe-text {
        font-size: 12px;
      }
    }

    &-time {
      position: absolute;
      right: 22px;
      top: 10px;
      font-size: 12px;
    }
  }

  .aside {
    width: 392px;
    display: flex;
    flex-direction: column;
    row-gap: 25px;

    .aside-card {
      background: #fff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0px 1px 17px 1px rgba(8,1,3,0.07);

      &-header {
        height: 55px;
        padding: 0 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #CECECE;

        .fe-title {
          color: #000;
          height: 55px;
          line-height: 55px;
          font-size: 24px;
          border-bottom: 3px solid #0242AC;
          margin-left: 10px;
        }

        &-extra .fe-text {
          color: #0242AC;
          font-size: 14px;
          cursor: pointer;
        }
      }

      &-body {
        background: #fff;
      }
    }
  }

  ::v-deep .staff-list {
    padding: 10px 12px;
    .biz-staff-card {
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

  .issue-list {
    margin: 0;
    padding: 20px 32px;
    display: flex;
    flex-direction: column;
    row-gap: 36px;

    .issue-item {
      display: flex;
      align-items: center;
      list-style: none;
      color: #6D6D6D;
      font-weight: 500;
    }

    .issue-index {
      width: 24px;
      height: 24px;
      font-size: 12px;
      text-align: center;
      line-height: 24px;
      margin-right: 10px;

      &--first, &--second, &--third {
        color: #fff;
      }

      &--first {
        background: #FF5065;
      }

      &--second {
        background: #FF704E;
      }

      &--third {
        background: #FF964E;
      }
    }

    .issue-text {
      flex: 1;
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
