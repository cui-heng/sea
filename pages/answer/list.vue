<template>
  <div class="container">
    <article class="main">
      <tabs class="tabs" />
      <div class="answer-list">
        <div class="answer-item" v-for="answer of answerData.list" :key="answer.id">
          <fe-image class="answer-image" />
          <div class="answer-info">
            <fe-title class="answer-title" :level="3">{{ answer.title }}</fe-title>
            <div class="answer-creater">
              <fe-image :src="answer.avatar" :alt="answer.nickName" />
              <fe-text>{{ answer.nickName }}</fe-text>
            </div>
            <fe-paragraph class="answer-desc" :ellipsis="2">{{ answer.description }}</fe-paragraph>
            <div class="answer-meta">
              <fe-text class="answer-source" type="disabled">来源：期贷</fe-text>
              <span class="answer-meta-info">
                <fe-text class="answer-message" type="disabled">{{ answer.replyCount }}个回答</fe-text>
                <fe-text class="answer-view" type="disabled">{{ answer.viewNumber }}次浏览</fe-text>
              </span>
            </div>
            <fe-text class="answer-time" type="disabled">{{ answer.createTime }}</fe-text>
          </div>
        </div>
      </div>
    </article>
    <div class="aside">
      <fe-card class="adviser" title="期货顾问推荐">
        <fe-text slot="extra">更多 +</fe-text>
        <adviser-list :items="adviserList" />
      </fe-card>
      <fe-card class="hot-issue" title="热议问题">
        <fe-text slot="extra">更多 +</fe-text>
        <issue-list :items="hotAnswers" />
      </fe-card>
    </div>
  </div>
</template>

<script>
import { website } from '@/services/index'
import tabs from './components/tabs.vue';
import issueList from './components/issue-list.vue';
import adviserList from './components/adviser-list.vue';
export default {
  name: 'Essay',
  components: {
    tabs,
    issueList,
    adviserList
  },
  async asyncData({ $axios }) {
    const [answerData, adviserList, hotAnswers] = await Promise.all([
      $axios.$get(website.getAnswer, {
        params: {
          page: 1,
          size: 10,
          searchText: ''
        }
      }),
      $axios.$get(website.getRecommendUser),
      $axios.$get(website.getHotAnswer)
    ]);

    return {
      answerData,
      adviserList,
      hotAnswers,
    }
  },

  data() {
    return {
      answerData: {
        list: [],
        total: 0
      },
      adviserList: [],
      hotAnswers: [],
    }
  },
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

  .answer {
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
  }

  .adviser-list {
    padding: 10px 12px;
    .biz-staff-fe-card {
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
}
</style>
