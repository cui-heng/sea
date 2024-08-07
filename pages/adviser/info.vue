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
            <fe-text class="adviser-tag" v-for="text of adviserInfo.tags" :key="text">{{ text }}</fe-text>
          </div>
          <fe-paragraph class="adviser-desc">{{ adviserInfo.selfIntroduction }}</fe-paragraph>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="contact-card contact-wechat">
        <div class="contact-card-content">
          <fe-title class="contact-card-title" :level="2">微信咨询</fe-title>
          <fe-text class="contact-card-desc">投资难题随时解答</fe-text>
        </div>
        <fe-button class="contact-card-button" type="wechat" size="large" icon="wechat" @click="$adviser.wechat.open(adviserInfo)">微信</fe-button>
        <div class="contact-card-tag">1对1专业解答</div>
      </div>
      <div class="contact-card contact-phone">
        <div class="contact-card-content">
          <fe-title class="contact-card-title" :level="2">电话咨询</fe-title>
          <fe-text class="contact-card-desc">电话高效沟通，快速解答疑问</fe-text>
        </div>
        <fe-button class="contact-card-button" type="primary" size="large" icon="phone" @click="$adviser.phone.open(adviserInfo)">电话</fe-button>
        <div class="contact-card-tag">1对1专业解答</div>
      </div>
    </div>
    <fe-card class="answer" title="最新问答">
      <div class="answer-list">
        <div class="answer-item" v-for="answer of answerList" :key="answer.id">
          <fe-title class="answer-title" :level="3">{{ answer.title }}</fe-title>
          <div class="answer-adviser">
            <fe-image class="answer-adviser-avatar" :src="answer.avatar" circle />
            <fe-text class="answer-adviser-name">{{ answer.nickName }}</fe-text>
          </div>
          <div class="answer-body">
            <fe-paragraph class="answer-content" :ellipsis="2">{{ answer.description }}</fe-paragraph>
            <div class="answer-meta">
              <div class="">
                <fe-icon icon="eye" />
                <fe-text>{{ answer.viewNumber }}次浏览</fe-text>
              </div>
              <div class="">
                <fe-icon icon="clock" />
                <fe-text>{{ answer.createTime }}</fe-text>
              </div>
            </div>
          </div>
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
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 52px;
      border-radius: 3px;

      &-content {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
      }

      &-title {
        font-size: 28px;
      }

      &-desc {
        font-size: 18px;
      }

      &-button {
        width: 155px;
      }

      &-tag {
        position: absolute;
        top: 0;
        left: 0;
        width: 155px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border-radius: 3px;
        font-size: 16px;
        color: #fff;
      }
    }

    &-wechat {
      background: #EAFFF8;

      .contact-card-tag {
        background: #10CB8C;
      }
    }

    &-phone {
      background: #E3F1FE;

      .contact-card-tag {
        background: #0242AC;
      }
    }
  }

  .answer {
    margin-top: 30px;

    &-item {
      padding: 24px 70px 20px 28px;
      border-bottom: 1px solid #F8F8F8;
    }

    &-title {
      color: #000;
      font-size: 28px;
    }

    &-adviser {
      display: flex;
      column-gap: 14px;
      align-items: center;
      margin: 20px 0 10px;
      &-avatar {
        width: 48px;
        height: 48px;
      }

      &-name {
        color: #000;
        font-size: 22px;
      }
    }

    &-body {
      margin-left: 62px;
    }

    &-content {
      color: #707070;
      font-size: 16px;
      line-height: 22px;
      height: 44px;
    }

    &-meta {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .fe-text {
        color: #9E9E9E;
        font-size: 16px;
      }
    }
  }
}
</style>
