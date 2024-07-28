<template>
  <div class="container">
    <div class="top-staff">
      <staff-card v-for="staff of topStaffs.slice(0, 3)" :key="staff" :staff="staff">
        <Button class="wechat-button" icon="wechat" slot="extra">咨询</Button>
      </staff-card>
    </div>
    <div class="notice-wrapper">
      <p class="notice">
        <span class="notice-label">
          <Icon icon="notice" />
          <span>顾问动态：</span>
        </span>
        <span>郭瑾顾问刚刚回答了一条问题:《有冠心病还可以买哪家保险公司的百万医疗?》</span>
      </p>
    </div>
    <hot-staff :items="hotStaffs" />
    <div class="content">
      <answer-card class="answer-card" title="最新回答">
        <answer-list :items="latestAnswers" />
      </answer-card>
      <answer-card class="answer-card" title="最新咨询">
        <consult-list :items="latestConsults" />
      </answer-card>
    </div>
  </div>
</template>

<script>
import { website } from '@/services/index'
import { getTransactionCategory, getTransactionData, getTransactionData1, getExchangeInfo, getBreedInfo } from '@/services/index'
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
    const [topStaffs, hotStaffs, latestAnswers, latestConsults] = await Promise.all([
      $axios.$get(website.getRecommendUser),
      $axios.$get(website.getUsers),
      $axios.$get(website.getLatestAnswer),
      $axios.$get(website.getLasterAnswerII, {
        params: { name: 'all' },
      }).then(result => result.list),
    ]);
    return {
      topStaffs,
      hotStaffs,
      latestAnswers,
      latestConsults,
    }
  },

  data() {
    return {
      topStaffs: [],
      hotStaffs: [],
      latestAnswers: [],
      latestConsults: [],
    }
  },
  mounted() {
    console.log(this.topStaffs, this.hotStaffs, this.latestAnswers, this.latestConsults, '123123');
  },
  methods: {
    
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
      display: inline-flex;
      column-gap: 12px;

      ::v-deep .icon img {
        width: 22px;
        height: 20px;
      }
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
