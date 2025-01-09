<template>
  <div class="container">
    <div class="backdrop">
      <img class="backdrop-img" src="@/assets/images/layout/backdrop.png" alt="" />
      <img class="backdrop-title" src="@/assets/images/service/title.png" alt="有求必应 服务至上">
    </div>
    <section class="section">
      <div class="top-adviser">
        <biz-adviser-card v-for="adviser of topAdvisers.slice(0, 3)" :key="adviser.id" :adviser="adviser">
          <fe-button class="wechat-button" size="small" @click="$adviser.wechat.open(adviser)" icon="chat" slot="meta">咨询</fe-button>
        </biz-adviser-card>
      </div>
      <div class="notice-wrapper">
        <div class="notice">
          <span class="notice-label">
            <fe-icon class="notice-icon" icon="notice" />
            <fe-text>顾问动态：</fe-text>
          </span>
          <fe-text>{{ firstAnswer?.title }}</fe-text>
        </div>
      </div>
      <hot-adviser :items="hotAdvisers" />
      <div class="content">
        <fe-card class="answer-card" title="最新回答">
          <answer-list :items="latestAnswers" />
        </fe-card>
        <fe-card class="answer-card" title="最新咨询">
          <consult-list :items="latestConsults" />
        </fe-card>
      </div>
    </section>
    
  </div>
</template>

<script>
import { website } from '@/services/index'
import StaffCard from './components/StaffCard.vue';
import hotAdviser from './components/HotAdviser.vue';
import answerList from './components/AnswerList.vue';
import consultList from './components/ConsultList.vue';
export default {
  name: 'Service',
  components: {
    StaffCard,
    hotAdviser,
    answerList,
    consultList,
  },
  async asyncData({ $axios }) {
    const [topAdvisers, hotAdvisers, latestAnswers, latestConsults, topAnaswer] = await Promise.all([
      $axios.$get(website.getRecommendUser),
      $axios.$get(website.getUsers),
      $axios.$get(website.getLatestAnswer),
      $axios.$get(website.getLasterAnswerII).then(result => result.list),
      $axios.$get(website.getFirstAnaswer)
    ]);

    return {
      topAdvisers,
      hotAdvisers,
      latestAnswers,
      latestConsults,
      firstAnswer: topAnaswer[0]
    }
  },

  data() {
    return {
      topAdvisers: [],
      hotAdvisers: [],
      latestAnswers: [],
      latestConsults: [],
      firstAnswer: null,
    }
  },
  head() {
    return {
      title: '一对一服务-海洋财经',
      meta: [
        {
          name: "keywords",
          content:
            "期货,期货开户,期货手续费,期货公司,期货账户,期货保证金",
        },
        // hid是一个唯一标识
        {
            hid: '一对一服务', name: 'names', content: '一对一服务'
        },
      ],
    };
  },
}
</script>

<style scoped lang="scss">
.container {
  .backdrop {
    position: relative;
    height: 400px;

    &-img {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    &-title {
      position: absolute;
      left: 50%;
      top: 158px;
      width: 565px;
      height: 60px;
      transform: translateX(-50%);
    }
  }

  .section {
    position: relative;
    width: 1280px;
    margin: 0 auto 30px;
    z-index: 10;
  }

  .top-adviser {
    display: flex;
    gap: 26px;
    justify-content: center;
    margin-top: -130px;

    ::v-deep .biz-adviser-card-meta {
      padding: 30px 0 36px;
      align-items: center;
    }

    .wechat-button {
      width: 120px;
    }
  }

  .notice {
    display: flex;
    align-content: center;

    &-wrapper {
      width: 925px;
      padding: 20px 24px;
      margin: 0 auto;
      border-radius: 8px;
      box-shadow: 0px 1px 5px 0px rgba(8,1,3,0.15);
      margin-top: 58px;
    }

    &-label {
      display: inline-flex;
      column-gap: 12px;

      span {
        color: #0242AC!important;
        font-weight: bold;
      }
    }

    &-icon {
      font-size: 22px;
    }

    .fe-text {
      color: #000;
      font-size: 20px;
      line-height: 22px;
    }
  }

  .content {
    display: flex;
    margin-top: 38px;
    column-gap: 33px;

    .answer-card {
      flex: 1;
    }
  }
}
</style>
@/client/services/index