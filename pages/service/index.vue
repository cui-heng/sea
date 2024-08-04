<template>
  <div class="container">
    <div class="top-staff">
      <staff-card v-for="staff of topStaffs.slice(0, 3)" :key="staff" :staff="staff">
        <fe-button class="wechat-button" size="small" icon="message" slot="extra">咨询</fe-button>
      </staff-card>
    </div>
    <div class="notice-wrapper">
      <p class="notice">
        <span class="notice-label">
          <fe-icon class="notice-icon" icon="notice" />
          <span>顾问动态：</span>
        </span>
        <span>{{ firstAnswer?.title }}</span>
      </p>
    </div>
    <hot-staff :items="hotStaffs" @view="handleView" />
    <div class="content">
      <answer-card class="answer-card" title="最新回答">
        <answer-list :items="latestAnswers" />
      </answer-card>
      <answer-card class="answer-card" title="最新咨询">
        <consult-list :items="latestConsults" />
      </answer-card>
    </div>
    <el-dialog
      class="service-dialog call-dialog"
      :visible="callDialog"
      :show-close="false"
      width="700px"
    >
      <div class="service-dialog-top">
        <h4>金牌顾问</h4>
        <p>一对一语音高效沟通方式，有助于解决复杂问题</p>
      </div>
      <div class="service-dialog-content">
        <div class="call-dialog-number">{{ staffInfo?.phonenumber }}</div>
        <div class="call-dialog-tips">咨询时请说明来自海洋财经，以便得到更佳服务</div>
        <fe-button class="call-dialog-button" type="primary" @click="callDialog = false">关闭</fe-button>
      </div>
    </el-dialog>
    <el-dialog
      class="service-dialog wechat-dialog"
      :visible="wechatDialog"
      :show-close="false"
      width="700px"
    >
      <div class="service-dialog-top">
        <h4>金牌顾问</h4>
        <p>一对一语音高效沟通方式，有助于解决复杂问题</p>
      </div>
      <div class="service-dialog-content">
        <div class="wechat-dialog-qrcode">
          <fe-image :src="staffInfo?.wxQrCode" :alt="staffInfo?.phonenumber" />
          <div class="wechat-dialog-qrcode-tips">微信扫一扫  添加顾问</div>
        </div>
        <div class="wechat-dialog-number">{{ staffInfo?.phonenumber }}</div>
        <div class="wechat-dialog-tips">咨询时请说明来自海洋财经，以便得到更佳服务</div>
        <fe-button class="wechat-dialog-button" type="primary" @click="wechatDialog = false">关闭</fe-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { website } from '@/services/index'
import StaffCard from './components/StaffCard.vue';
import HotStaff from './components/HotStaff.vue';
import AnswerCard from './components/AnswerCard.vue';
import AnswerList from './components/AnswerList.vue';
import ConsultList from './components/ConsultList.vue';
export default {
  name: 'Service',
  components: {
    StaffCard,
    HotStaff,
    AnswerCard,
    AnswerList,
    ConsultList,
  },
  async asyncData({ $axios }) {
    const [topStaffs, hotStaffs, latestAnswers, latestConsults, topAnaswer] = await Promise.all([
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
      hotStaffs,
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
      staffInfo: null,
      callDialog: false,
      wechatDialog: false,
    }
  },
  methods: {
    handleView({ type, staff }) {
      this.staffInfo = staff;
      if (type === 'call') {
        this.callDialog = true;
      } else {
        this.wechatDialog = true;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 1280px;
  margin: 0 auto;

  .top-staff {
    display: flex;
    gap: 26px;
    justify-content: center;
    margin-top: -60px;

    .wechat-button {
      width: 120px;
      margin: 30px 0 36px;
    }
  }

  .notice {
    margin: 0;
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
