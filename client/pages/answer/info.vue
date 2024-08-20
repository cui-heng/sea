<template>
  <div class="container">
    <fe-breadcrumb :items="breadcrumbs" />
    <div class="main">
      <article class="article">
        <fe-card class="answer">
          <div class="answer-tags">
            <fe-text class="answer-tag">{{ answerInfo.tag }}</fe-text>
          </div>
          <div class="answer-content">
            <fe-title class="answer-title">{{ answerInfo.title }}</fe-title>
            <fe-text class="answer-meta">
              <fe-text>{{ answerInfo.position }}</fe-text>
              <span class="answer-meta-text">
                <fe-icon icon="eye" />
                <fe-text>{{ answerInfo.viewNumber }}次浏览</fe-text>
              </span>
            </fe-text>
            <fe-space class="answer-actions" :size="20">
              <fe-button size="large" type="primary" icon="edit">我来回答</fe-button>
              <fe-button size="large" danger icon="real-name">入驻注册</fe-button>
            </fe-space>
          </div>
        </fe-card>
        <fe-card class="reply" :title="`共${answerReplyList.length}个回答`">
          <div class="reply-list">
            <div class="reply-item" v-for="reply of answerReplyList" :key="reply.id">
              <div class="reply-adviser">
                <nuxt-link class="flex_sty" :to="'/adviser/'+ answerInfo.userId">
                  <fe-image :src="answerInfo.avatar" circle />
                </nuxt-link>
                <div class="reply-adviser-info">
                  <fe-space :size="12">
                    <fe-title class="reply-adviser-name">{{ reply.nickName }}</fe-title>
                    <span class="reply-adviser-online"></span>
                  </fe-space>
                  <div class="reply-adviser-tags">
                    <span class="reply-adviser-position">{{ reply.position }}</span>
                    <span class="reply-adviser-help">帮助{{ reply.helpNumber | number }}</span>
                  </div>
                </div>
                <fe-space class="reply-adviser-action">
                  <fe-button size="small" icon="phone" @click="$adviser.phone.open(reply)">电话</fe-button>
                  <fe-button size="small" icon="wechat" type="wechat" ghost @click="$adviser.wechat.open(reply)">微信</fe-button>
                </fe-space>
              </div>
              <div class="reply-body">
                <fe-paragraph class="reply-content" v-html="reply.result"></fe-paragraph>
                <div class="reply-toolbar">
                  <div class="reply-toolbar-group">
                    <div class="reply-toolbar-action">
                      <fe-icon icon="like" />
                      <span>赞</span>
                    </div>
                    <div class="reply-toolbar-group-divider"></div>
                    <div class="reply-toolbar-action">
                      <fe-icon icon="dislike" />
                      <span>踩</span>
                    </div>
                  </div>
                  <fe-space class="reply-toolbar-actions" :size="24">
                    <div class="reply-toolbar-action" @click="$adviser.wechat.open(reply)">
                      <fe-icon />
                      <span>追问</span>
                    </div>
                    <div class="reply-toolbar-action">
                      <fe-icon icon="share" />
                      <span>分享</span>
                    </div>
                    <div class="reply-toolbar-action" @click="$adviser.wechat.open(reply)">
                      <fe-icon icon="more" />
                      <span>更多</span>
                    </div>
                  </fe-space>
                </div>
              </div>
            </div>
          </div>
        </fe-card>
      </article>
      <aside class="aside">
        <fe-card class="adviser" title="金牌顾问">
          <nuxt-link slot="extra" class="more-link" to="/service" target="_blank">
            <span>更多</span>
            <fe-icon icon="plus" />
          </nuxt-link>
          <adviser-list :items="adviserList" />
        </fe-card>
        <fe-card class="hot-issue" title="热议问题">
          <nuxt-link slot="extra" class="more-link" to="/answer" target="_blank">
            <span>更多</span>
            <fe-icon icon="plus" />
          </nuxt-link>
          <issue-list :items="hotAnswers">
            <template v-slot="{ item }">
              <nuxt-link :to="`/answer/${item.id}`" target="_blank">{{ item.title }}</nuxt-link>
            </template>
          </issue-list>
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
  name: 'AnswerInfo',
  components: {
    issueList,
    adviserList
  },
  async asyncData({ $axios, params }) {
    const [answerData, adviserList, hotAnswers] = await Promise.all([
      $axios.$get(website.getAnswerInfo, {
        params: {
          answerId: params.id
        }
      }),
      $axios.$get(website.getRecommendUser),
      $axios.$get(website.getHotAnswer)
    ]);

    return {
      answerInfo: answerData.answer,
      answerReplyList: answerData.answerReplyList,
      adviserList,
      hotAnswers,
      breadcrumbs: [
        {
          label: '海洋财经',
          pathname: '/'
        },
        {
          label: answerData.answer?.title,
        },
      ]
    }
  },

  data() {
    return {
      breadcrumbs: [],
      answerInfo: {},
      answerReplyList: [],
      adviserList: [],
      hotAnswers: [],
    }
  },
}
</script>

<style scoped lang="scss">
.container {
  min-width: 1280px;
  max-width: 1480px;
  margin: 0 auto 32px;
  padding-top: 8px;

  .main {
    display: flex;
    column-gap: 28px;

    .article {
      flex: 1;
    }

    .aside {
      width: 392px;
      display: flex;
      flex-direction: column;
      row-gap: 25px;
    }

    .more-link {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -2px;
    }
  }

  .answer {
    padding: 18px 26px 30px;

    &-tags {
      display: flex;
      column-gap: 22px;
    }

    &-tag {
      display: inline-block;
      color: #0242AC;
      min-width: 86px;
      line-height: 16px;
      font-size: 16px;
      text-align: center;
      padding: 6px 10px;
      background: #E3F1FE;
      border-radius: 28px;
    }

    &-title {
      font-size: 28px;
      line-height: 40px;
      margin-top: 12px;
    }

    &-meta {
      display: flex;
      margin-top: 15px;
      column-gap: 24px;

      &-text {
        display: flex;
        column-gap: 4px;
        font-size: 16px;
        color: #9E9E9E;
      }

      .fe-text {
        font-size: 16px;
        color: #9E9E9E;
      }
    }

    &-actions {
      margin-top: 20px;
    }
  }

  .reply {
    margin-top: 30px;

    &-item {
      padding: 20px 24px;
      border-bottom: 1px solid #F8F8F8;
    }

    &-adviser {
      display: flex;
      align-items: center;
      .fe-image {
        width: 72px;
        height: 72px;
      }

      &-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 12px;
        margin-left: 12px;
      }

      &-name {
        color: #000;
        font-size: 22px;
        font-weight: 500;
      }

      &-tags {
        display: flex;
        column-gap: 6px;
        span {
          display: inline-block;
          padding: 2px 6px;
          font-size: 14px;
          border: 1px solid;
        }
      }

      &-help {
        color: #0242AC;
        border-color: #0242AC;
      }

      &-position {
        color: #FF0000;
        border-color: #FF0000;
      }
    }

    &-body {
      margin-top: 12px;
      margin-left: 84px;
    }

    &-content {
      color: #707070;
      font-size: 16px;
      line-height: 22px;
    }

    &-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 14px;

      &-group {
        display: flex;
        align-items: center;
        height: 30px;
        border-radius: 30px;
        background: #E3F1FE;

        &-divider {
          width: 1px;
          height: 16px;
          background: #0242AC;
        }

        .reply-toolbar-action {
          width: 52px;
          color: #0242AC;
          align-items: center;
          justify-content: center;
        }
      }

      &-action {
        display: flex;
        column-gap: 2px;
        cursor: pointer;
        color: #9E9E9E;
        font-size: 16px;
      }
    }
  }
}
</style>
@/client/services/index