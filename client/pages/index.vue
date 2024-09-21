<template>
  <article class="container">
    <biz-search @search="$router.push(`/answer?searchText=${$event || ''}`)" />
    <div class="main">
      <section class="section">
        <div class="swiper_wrap">
          <el-carousel :autoplay="false" height="434px">
            <el-carousel-item v-for="(item, index) in articleData.list.slice(0, 3)" :key="item.id">
              <!-- <img class="swip_big_img" :src="baseUrlImg + item.coverImg"> -->
              <img v-if="index == 0" class="swip_big_img" src="@/assets/newBanner/first.png">
              <img v-if="index == 1" class="swip_big_img" src="@/assets/newBanner/second.png">
              <img v-if="index == 2" class="swip_big_img" src="@/assets/newBanner/thired.png">
              <div class="mark_swiper"></div>
              <div class="swiper_tit">
                <nuxt-link :to="`/article/${item.id}/${item.userId}`">
                  {{ item.title }}
                </nuxt-link>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="article-wrapper">
          <div class="article-list">
            <nuxt-link class="article-item" v-for="item in articleData.list" :key="item.id" :to="`/article/${item.id}/${item.userId}`" target="_blank">
              <fe-image class="article-item-cover" :src="item.coverImg" />
              <div class="article-item-body">
                <fe-title class="article-item-name" :level="2">{{ item.title }}</fe-title>
                <fe-paragraph class="article-item-content" :ellipsis="3">{{ item.content | text }}</fe-paragraph>
                <div class="article-item-meta">
                  <span>
                    <fe-icon icon="clock" />
                    <span>{{ item.createTime }}</span>
                  </span>
                  <span>
                    <fe-icon icon="eye" />
                    <span>{{ item.browseNumber }}</span>
                  </span>
                  <span>作者：{{ item.nickName }}</span>
                </div>
              </div>
            </nuxt-link>
          </div>
          <fe-pagination class="pagination" v-model="searchParams.page" :total="articleData.total">
            <template v-slot="{ page, type }">
                <nuxt-link :to="{ path: '/', query: { ...searchParams, page } }" replace>
                  <template v-if="type === 'page'">{{ page }}</template>
                  <span v-if="type === 'prev'">•••</span>
                  <span v-if="type === 'next'">•••</span>
                </nuxt-link>
              </template>
          </fe-pagination>
        </div>
      </section>
      <aside class="aside">
        <tag :cateList="cateList" />
      </aside>
    </div>
  </article>
</template>

<script>
import tag from '../components/tag'
import { website } from '@/services/index'

export default {
  name: 'Index',
  components: {
    tag
  },
  data() {
    return {
      articleData: {
        list: [],
        total: 0
      },
      searchParams: {},
      cateList: [],
    }
  },
  head() {
    return {
      title: '首页-海洋财经',
      meta: [
        {
          name: "keywords",
          content:
            "期货,期货开户,期货手续费,期货公司,期货账户,期货保证金",
        },
        // hid是一个唯一标识
        {
            hid: '首页', name: 'names', content: '首页'
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    const searchParams = Object.assign({
      page: 1,
      size: 10,
    });
    const [cateList, articleData] = await Promise.all([
      $axios.$get(website.getPreferredArticle),
      $axios.$get(website.getArticle, {
        params: searchParams,
      }),
    ]);
    return {
      cateList,
      articleData,
      searchParams,
    }
  },
  watch: {
    searchParams: {
      handler() {
        this.searchArticle();
      },
      deep: true
    },
    ['$route.query'](query) {
      Object.assign(this.searchParams, query);
    }
  },
  
  methods: {
    searchArticle() {
      this.$axios.$get(website.getArticle, {
        params: this.searchParams,
      }).then(articleData => {
        this.articleData = articleData;
      })
    },
  }
}
</script>

<style scoped lang="scss">

.main {
  width: 1200px;
  display: flex;
  column-gap: 26px;
  justify-content: space-between;
  margin: 36px auto 60px;

  .section {
    flex: 1;
  }

  .aside {
    width: 392px;
    border-radius: 16px;
  }
}

.section {
  ::v-deep .swiper_wrap {
    margin-bottom: 27px;
    width: 100%;
    height: 434px;
    border-radius: 16px;
    .el-carousel {
      position: relative;
      border-radius: 16px;
      .swip_big_img {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        position: absolute;
      }
      .mark_swiper {
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 60px;
        background: #000000;
        border-radius: 0 0 16px 16px;
        opacity: 0.4;
      }
      .swiper_tit {
        font-family: PingFang SC;
        font-weight: 500;
        font-size: 20px;
        color: #FFFFFF;
        position: absolute;
        bottom: 19px;
        left: 18px;
        z-index: 5;
        cursor: pointer;
      }
      .el-carousel__indicators--horizontal {
        left: 85%;
      }
    }
  }
}

.article {
  &-item {
    display: flex;
    column-gap: 20px;
    border-bottom: 2px solid #F8F8F8;
    padding: 18px;
    
    &-cover {
      width: 188px;
      height: 140px;
      border-radius: 12px;
      overflow: hidden;

      &:hover ::v-deep img {
        transform: scale(1.4);
      }

      ::v-deep img {
        transition: all 0.6s;
      }
    }

    &-body {
      flex: 1;
    }

    &-name {
      font-size: 18px;
      line-height: 34px;
    }

    &-content {
      font-size: 14px;
      color: #969696;
      line-height: 24px;
      margin-top: 4px;
      height: 72px;
    }

    &-meta {
      display: flex;
      justify-content: space-between;
      color: #9E9E9E;
      font-size: 12px;
      line-height: 14px;
      margin-top: 16px;
    }
  }
}

</style>