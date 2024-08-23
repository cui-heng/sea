<template>
  <div class="container">
    <biz-search :defaultValue="searchParams.searchText" @search="handleSearch" />
    <article class="article">
      <fe-breadcrumb :items="breadcrumbs" />
      <div class="main">
        <section class="section">
          <tabs class="tabs" v-model="searchParams.orderBy" />
          <div class="answer-list">
            <nuxt-link class="answer-item" v-for="answer of answerData.list" :key="answer.id" :to="`/answer/${answer.id}`" target="_blank">
              <fe-image class="answer-image" />
              <div class="answer-info">
                <fe-title class="answer-title" :level="3">{{ answer.title }}</fe-title>
                <nuxt-link class="answer-creater" :to="`/adviser/${answer.userId}`" target="_blank">
                  <fe-image :src="answer.avatar" :alt="answer.nickName" />
                  <fe-text>{{ answer.nickName }}</fe-text>
                </nuxt-link>
                <fe-paragraph class="answer-desc" :ellipsis="2">{{ answer.description }}</fe-paragraph>
                <div class="answer-meta">
                  <fe-text class="answer-source">来源：期贷</fe-text>
                  <span class="answer-meta-info">
                    <span class="answer-meta-text">
                      <fe-icon icon="comment" />
                      <fe-text class="answer-message">{{ answer.replyCount }}个回答</fe-text>
                    </span>
                    <span class="answer-meta-text">
                      <fe-icon icon="eye" />
                      <fe-text class="answer-view">{{ answer.viewNumber }}次浏览</fe-text>
                    </span>
                  </span>
                </div>
                <fe-text class="answer-time" type="disabled">{{ answer.createTime }}</fe-text>
              </div>
            </nuxt-link>
          </div>
          <fe-pagination class="pagination" v-model="searchParams.page" :total="answerData.total">
            <template v-slot="{ page, type }">
                <nuxt-link :to="{ path: '/answer', query: { ...searchParams, page } }" replace>
                  <template v-if="type === 'page'">{{ page }}</template>
                  <span v-if="type === 'prev'">•••</span>
                  <span v-if="type === 'next'">•••</span>
                </nuxt-link>
              </template>
          </fe-pagination>
        </section>
        <aside class="aside">
          <fe-card class="adviser" title="期货顾问推荐">
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
    </article>
  </div>
</template>

<script>
import { website } from '@/services/index'
import tabs from './components/tabs.vue';
import issueList from './components/issue-list.vue';
import adviserList from './components/adviser-list.vue';
export default {
  name: 'AnswerList',
  components: {
    tabs,
    issueList,
    adviserList
  },
  async asyncData({ $axios, query }) {
    const searchParams = Object.assign({
      page: 1,
      size: 10,
      orderBy: 'all',
      searchText: ''
    }, query);
    const [answerData, adviserList, hotAnswers] = await Promise.all([
      $axios.$get(website.getAnswer, {
        params: searchParams
      }),
      $axios.$get(website.getRecommendUser),
      $axios.$get(website.getHotAnswer)
    ]);

    return {
      answerData,
      adviserList,
      hotAnswers,
      searchParams,
    }
  },
  data() {
    return {
      breadcrumbs: [
        {
          label: '海洋财经',
          pathname: '/'
        },
        {
          label: '百问百答',
        },
      ],
      answerData: {
        list: [],
        total: 0
      },
      adviserList: [],
      hotAnswers: [],
    }
  },
  watch: {
    searchParams: {
      handler() {
        this.search();
      },
      deep: true
    },
    ['$route.query'](query) {
      Object.assign(this.searchParams, query);
    }
  },
  methods: {
    search() {
      this.$axios.$get(website.getAnswer, {
        params: this.searchParams,
      }).then(answerData => {
        this.answerData = answerData;
      })
    },
    handleSearch(text) {
      this.searchParams.page = 1;
      this.searchParams.searchText = text;
      this.$router.replace({
        path: this.$route.path,
        query: this.searchParams
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  .article {
    min-width: 1280px;
    max-width: 1480px;
    margin: 0 auto 52px;
    padding-top: 6px;
  }

  .main {
    display: flex;
    column-gap: 28px;

    .section {
      flex: 1;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0px 1px 17px 1px rgba(8,1,3,0.07);

      .tabs {
        padding: 24px 0 16px;
        border-bottom: 2px solid #F8F8F8;
      }

      .pagination {
        padding: 0 20px;
      }
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
      display: none;

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

      &-text {
        display: flex;
        column-gap: 4px;
        color: #9E9E9E;
        font-size: 12px;
      }

      .fe-text {
        color: #9E9E9E;
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
}
</style>