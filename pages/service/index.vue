<template>
  <div class="container">
    <div class="backdrop">
      <img class="backdrop-img" src="@/assets/images/layout/backdrop.png" alt="" />
      <img class="backdrop-title" src="@/assets/images/service/title.png" alt="有求必应 服务至上">
    </div>
    <section class="section">
      <div class="top-staff">
        <staff-card v-for="staff of topStaffs.slice(0, 3)" :key="staff.key" :staff="staff">
          <fe-button class="wechat-button" size="small" icon="message" slot="extra">咨询</fe-button>
        </staff-card>
      </div>
      <div class="notice-wrapper">
        <div class="notice">
          <span class="notice-label">
            <fe-icon class="notice-icon" icon="notice" />
            <span>顾问动态：</span>
          </span>
          <span>{{ firstAnswer?.title }}</span>
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
    const [topStaffs, hotAdvisers, latestAnswers, latestConsults, topAnaswer] = await Promise.all([
      $axios.$get(website.getRecommendUser),
      $axios.$get(website.getUsers),
      $axios.$get(website.getLatestAnswer),
      $axios.$get(website.getLasterAnswerII, {
        params: { name: 'all' },
      }).then(result => result.list),
      $axios.$get(website.getFirstAnaswer)
    ]);

    return {
      topStaffs,
      hotAdvisers,
      latestAnswers,
      latestConsults,
      firstAnswer: topAnaswer[0]
    }
  },

  data() {
    return {
      topStaffs: [],
      hotStaffs: [],
      latestAnswers: [],
      latestConsults: [],
      firstAnswer: null,
    }
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

  .top-staff {
    display: flex;
    gap: 26px;
    justify-content: center;
    margin-top: -130px;

    .wechat-button {
      width: 120px;
      margin: 30px 0 36px;
    }
  }

  .notice {
    font-size: 20px;
    color: #000;
    line-height: 1;
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
      color: #0242AC;
      font-weight: bold;
      display: inline-flex;
      column-gap: 12px;
    }

    &-icon {
      width: 22px;
      height: 22px;
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

  .service-dialog {
    ::v-deep{
      .el-dialog {
        border-radius: 12px;
        overflow: hidden;
      }
      .el-dialog__header {
        display: none;
      }
      .el-dialog__body {
        padding: 0;
        
      }
    }

    &-top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 167px;
      line-height: 1;
      padding-left: 52px;
      padding-right: 22px;
      background: linear-gradient(90deg, #BEDEFF, #D2E4FF, #E2EAFF);

      h4 {
        color: #0242AC;
        font-size: 30px;
        margin: 0;
        margin-bottom: 14px;
        font-weight: 800;
      }

      p {
        color: #0242AC;
        font-size: 14px;
        font-weight: 500;
        margin: 0;
      }
    }

    &-content {
      display: flex;
      height: 383px;
      flex-direction: column;
      align-items: center;
    }
  }

  .call-dialog {
    &-number {
      color: #0242AC;
      font-size: 35px;
      font-weight: 800;
      line-height: 36px;
      margin-top: 106px;
    }

    &-tips {
      color: #0242AC;
      font-size: 14px;
      font-weight: 500;
      margin-top: 50px;
    }

    &-button {
      width: 214px;
      margin-top: 117px;
    }
  }

  .wechat-dialog {
    &-qrcode {
      margin-top: 22px;
      .fe-image {
        width: 146px;
        height: 146px;
      }

      &-tips {
        color: #293468;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        margin-top: 12px;
      }
    }

    &-number {
      color: #0242AC;
      font-size: 35px;
      font-weight: 800;
      line-height: 36px;
      margin-top: 27px;
    }

    &-tips {
      color: #293468;
      font-size: 14px;
      font-weight: 500;
      margin-top: 18px;
    }

    &-button {
      width: 214px;
      margin-top: 32px;
    }
  }
}
</style>
