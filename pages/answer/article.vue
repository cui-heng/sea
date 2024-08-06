<template>
  <div class="container">
    <fe-breadcrumb :items="breadcrumbs" />
    <div class="main">
      <article class="article-wrapper">
        <fe-card class="article">
          <div class="article-header">
            <fe-title class="article-title">{{ articleInfo.title }}</fe-title>
            <fe-space class="article-meta" :size="42">
              <fe-space :size="4">
                <fe-icon />
                <fe-text type="disabled">{{ articleInfo.createTime }}</fe-text>
              </fe-space>
              <fe-space :size="4">
                <fe-icon icon="eye" />
                <fe-text type="disabled">{{ articleInfo.browseNumber }}次浏览</fe-text>
              </fe-space>
            </fe-space>
          </div>
          <div class="article-body">
            <div class="article-adviser">
              <fe-image class="article-adviser-avatar" :src="articleInfo.avatar" circle />
              <div class="article-adviser-body">
                <div class="article-adviser-info">
                  <fe-text class="article-adviser-name">{{ articleInfo.nickName }}</fe-text>
                  <fe-space class="article-adviser-tags" :size="8">
                    <fe-text class="article-adviser-title">{{ articleInfo.position }}</fe-text>
                    <fe-text class="article-adviser-help">帮助{{ articleInfo.helpNumber }}</fe-text>
                  </fe-space>
                  <fe-space class="article-adviser-meta" :size="30">
                    <fe-space :size="4">
                      <fe-icon icon="like" />
                      <fe-text>好评{{ articleInfo.positiveReviews }}</fe-text>
                    </fe-space>
                    <fe-space :size="4">
                      <fe-icon icon="eye" />
                      <fe-text>浏览量{{ articleInfo.positiveReviews }}</fe-text>
                    </fe-space>
                  </fe-space>
                </div>
                <fe-space class="article-adviser-actions">
                  <fe-button size="small" icon="phone" @click="$adviser.phone.open(articleInfo)">电话</fe-button>
                  <fe-button size="small" icon="wechat" type="wechat" ghost @click="$adviser.wechat.open(articleInfo)">微信</fe-button>
                </fe-space>
              </div>
            </div>
            <div class="article-content" v-html="articleInfo.content"></div>
          </div>
        </fe-card>
        <fe-card class="relative" title="推荐相关阅读">
          <div class="relative-list">
            <div class="relative-item" v-for="relative of relativeArticleList" :key="relative.id">
              <fe-image class="relative-cover" :src="relative.coverImg" />
              <div class="relative-body">
                <fe-title class="relative-title" :level="4">{{ relative.title }}</fe-title>
                <fe-paragraph class="relative-content" :ellipsis="2">{{ relative.content }}</fe-paragraph>
                <div class="relative-meta">
                  <div class="relative-adviser">
                    <fe-image class="relative-adviser-avatar" :src="relative.avatar" circle />
                    <fe-tex class="relative-adviser-name">{{ relative.nickName }}</fe-tex>
                  </div>
                  <div class="relative-data">
                    <fe-space :size="4">
                      <fe-icon icon="eye" />
                      <fe-text>阅读{{ relative.browseNumber }}</fe-text>
                    </fe-space>
                    <fe-space :size="4">
                      <fe-icon icon="eye" />
                      <fe-text>{{ relative.createTime }}</fe-text>
                    </fe-space>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fe-card>
      </article>
      <aside class="aside">
        <fe-card class="adviser" title="TA的文章">
          <fe-text slot="extra">更多 +</fe-text>
          <issue-list :items="articleList" />
        </fe-card>
        <fe-card class="hot-issue" title="TA的回答">
          <fe-text slot="extra">更多 +</fe-text>
          <issue-list :items="answerList" />
        </fe-card>
        <fe-card class="hot-issue" title="金牌顾问">
          <fe-text slot="extra">更多 +</fe-text>
          <adviser-list :items="adviserList" />
        </fe-card>
      </aside>
    </div>
    
  </div>
</template>

<script>
import { website } from '@/services/index'
import issueList from './components/issue-list.vue';
import adviserList from './components/adviser-list.vue';
export default {
  name: 'AnswerArticle',
  components: {
    issueList,
    adviserList
  },
  async asyncData({ $axios, params }) {
    const [articleInfo, adviserList, relativeArticleList] = await Promise.all([
      $axios.$get(website.getArticleInfo, {
        params: {
          articleId: params.id
        }
      }),
      $axios.$get(website.getRecommendUser),
      $axios.$get(website.getRelativeArticle),
    ]);

    const userId = articleInfo.userId;
    const [articleList, answerList] = await Promise.all([
      $axios.$get(website.getFiveArticle, {
        params: {
          userId
        }
      }),
      $axios.$get(website.getFiveAnswer, {
        params: {
          userId
        }
      })
    ]);

    return {
      articleInfo,
      adviserList,
      articleList,
      answerList,
      relativeArticleList,
      breadcrumbs: [
        {
          label: '海洋财经',
          pathname: '/'
        },
        {
          label: '资讯',
        },
        {
          label: articleInfo?.title,
        },
      ]
    }
  },

  data() {
    return {
      breadcrumbs: [],
      articleInfo: {},
      adviserList: [],
      articleList: [],
      answerList: [],
      relativeArticleList: [],
    }
  },

  mounted() {
    console.log(this.$data);
  }
}
</script>

<style scoped lang="scss">
.container {
  min-width: 1280px;
  max-width: 1480px;
  margin: 0 auto;

  .main {
    display: flex;
    column-gap: 28px;
    
    .article-wrapper {
      flex: 1;
    }

    .aside {
      width: 392px;
      display: flex;
      flex-direction: column;
      row-gap: 25px;
    }
  }

  .article {
    &-header {
      padding: 44px 32px 20px;
      border-bottom: 1px solid #F8F8F8;
    }

    &-title {
      color: #000;
      font-size: 26px;
    }

    &-meta {
      margin-top: 28px;
    }

    &-body {
      padding: 18px;
    }

    &-adviser {
      display: flex;
      background: #F5F5F5;
      margin-bottom: 20px;
      border-radius: 16px;
      padding: 26px 44px;

      &-avatar {
        width: 72px;
        height: 72px;
      }

      &-body {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 12px;
      }

      &-name {
        color: #000;
        font-size: 22px;
      }

      &-tags {
        margin-top: 10px;

        span {
          display: inline-block;
          padding: 2px 6px;
          border: 1px solid;
        }
      }

      &-title {
        color: #FF0000;
        border-color: #FF0000;
      }

      &-help {
        color: #0242AC;
        border-color: #0242AC;
      }

      &-meta {
        margin-top: 12px;

        span {
          color: #A8A8A8;
        }
      }
    }
  }

  .relative {
    margin-top: 20px;

    &-item {
      display: flex;
      padding: 12px 14px;
    }

    &-cover {
      width: 186px;
      height: 138px;
      border-radius: 12px;
      overflow: hidden;
    }

    &-body {
      flex: 1;
      margin-left: 18px;
    }

    &-title {
      font-size: 18px;
      line-height: 32px;
    }

    &-content {
      height: 48px;
      margin-top: 10px;
      color: #969696;
      font-size: 14px;
      line-height: 24px;
    }

    &-meta {
      display: flex;
      margin-top: 24px;
    }

    &-adviser {
      display: flex;
      align-items: center;
      column-gap: 10px;

      &-avatar {
        width: 24px;
        height: 24px;
      }

      &-name {
        color: #969696;
        font-size: 14px;
        font-weight: 800;
      }
    }

    &-data {
      display: flex;
      column-gap: 32px;
      margin-left: 79px;
      span {
        color: #969696;
        font-size: 14px;
      }
    }
  }
}
</style>
