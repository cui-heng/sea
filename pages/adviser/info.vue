<template>
  <article class="container">
    <div class="adviser">
      <img class="adviser-backdrop" src="@/assets/images/adviser/backdrop.png" alt="" />
      <div class="adviser-body">
        <fe-image class="adviser-avatar" :src="adviserInfo.avatar" circle />
        <div class="adviser-info">
          <div class="adviser-full-name">
            <fe-title class="adviser-name">{{ adviserInfo.nickName }}</fe-title>
            <fe-text class="adviser-title">{{ adviserInfo.position }}</fe-text>
          </div>
          <div class="adviser-tags">
            <fe-text class="adviser-tag">
              <fe-icon icon="location" />
              <span>{{ adviserInfo.address }}</span>
            </fe-text>
            <fe-text class="adviser-tag">
              <fe-icon icon="real-name" />
              <span>实名认证</span>
            </fe-text>
            <fe-text class="adviser-tag" v-for="text of adviserInfo.tags">{{ text }}</fe-text>
          </div>
          <fe-paragraph class="adviser-desc">{{ adviserInfo.selfIntroduction }}</fe-paragraph>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="contact-card contact-wechat"></div>
      <div class="contact-card contact-phone"></div>
    </div>
    <fe-card class="answer" title="最新问答">
      <div class="answer-list">
        <div class="answer-item" v-for="reply of answerReplyList" :key="reply.id">
        </div>
      </div>
    </fe-card>
  </article>
</template>

<script>
import { website } from '@/services/index'
export default {
  name: 'AdviserInfo',
  components: {
    // issueList,
    // adviserList
  },
  async asyncData({ $axios, params }) {
    const [adviserInfo, answerData] = await Promise.all([
      $axios.$get(website.getUserInfo, {
        params: {
          userId: params.id
        }
      }),
      $axios.$get(website.getAnswer, {
        params: {
          page: 1,
          size: 10
        }
      }),
    ]);

    return {
      adviserInfo,
      answerList: answerData.list,
    }
  },

  data() {
    return {
      adviserInfo: {},
      answerList: [],
    }
  },

  mounted() {
    console.log(this.$data);
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 1200px;
  margin: 0 auto;

  .adviser {
    box-shadow: 0px 1px 17px 1px rgba(8,1,3,0.07);
    &-backdrop {
      width: 100%;
      height: 250px;
      display: block;
    }

    &-body {
      display: flex;
      height: 185px;
      padding: 0 34px;
      background: #fff;
    }

    &-avatar {
      width: 190px;
      height: 190px;
      padding: 2px;
      background: #fff;
      transform: translateY(-50%);
      border-radius: 100%;
      margin-left: 10px;
    }

    &-info {
      flex: 1;
      padding-top: 20px;
      margin-left: 20px;
    }

    &-full-name {
      display: flex;
      column-gap: 20px;
      align-items: flex-end;
    }

    &-name {
      color: #000;
      font-size: 28px;
    }

    &-title {
      color: #C4C4C4;
      font-size: 16px;
    }

    &-tags {
      display: flex;
      column-gap: 12px;
      margin-top: 14px;
    }

    &-tag {
      padding: 4px 10px;
      color: #0242AC;
      border: 1px solid #0242AC;
      border-radius: 3px;

      .fe-icon {

      }
    }

    &-desc {
      color: #9E9E9E;
      font-size: 14px;
      line-height: 20px;
      margin-top: 14px;
    }
  }

  .contact {
    height: 197px;
    display: flex;
    column-gap: 24px;
    margin-top: 25px;

    &-card {
      flex: 1;
      border-radius: 3px;
    }

    &-wechat {
      background: #EAFFF8;
    }

    &-phone {
      background: #E3F1FE;
    }
  }

  .answer {
    margin-top: 30px;
  }
}
</style>
