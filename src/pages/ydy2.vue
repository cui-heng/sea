<template>
  <div>
    <el-row :gutter="200" style="z-index: 999999;position: relative;display: flex;">
      <el-col :span="24">
        <div class="grid-content bg-purple" style="height: 250px;display: flex;  
    align-items: center">
          <el-col :span="12">
<img style="width:30%;"
                :src="baseUrlImg + dataList.avatar">
          </el-col>
          <el-col :span="12">
            <p style="width: 87px;
height: 18px;
font-family: PingFang SC, PingFang SC;
font-weight: 500;
font-size: 18px;
color: #000000;
line-height: 18px;
text-align: center;
font-style: normal;
text-transform: none;">{{ dataList.nickName }}</p>
            <p style="width: 48px;
height: 16px;
font-family: PingFang SC, PingFang SC;
font-weight: 500;
font-size: 16px;
color: #8A8A8A;
line-height: 16px;
text-align: center;
font-style: normal;
text-transform: none;"></p>
            <p style="width: 74px;
height: 18px;
font-family: PingFang SC, PingFang SC;
font-weight: bold;
font-size: 18px;
color: #000000;
line-height: 18px;
text-align: center;
font-style: normal;
text-transform: none;">{{ dataList.selfIntroduction }}</p>

          </el-col>
        </div>
      </el-col>
    </el-row>
    <div v-for="item in artList">
              <p style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #8A8A8A;
line-height: 16px;">来自：期货</p>
              <p style="font-size: 20px;
font-family: PingFang SC-Bold, PingFang SC;
font-weight: bold;
color: #000000;
line-height: 20px;">{{ item.title }}</p>
              <el-row class="art-body">

                <div><img style="border-radius: 50%;width:50px;height: 50px;" :src="baseUrlImg + item.avatar"></div>
                <div class="side-abstract">
                  <p style="font-size: 16px;
font-family: PingFang SC-Bold, PingFang SC;
font-weight: bold;
color: #242629;
line-height: 6px;padding-left: 10px;">{{ item.nickName }}<img src="../assets/2929.png" /> <img
                      src="../assets/2921.png" /></p>
                  <div style="text-align: center;line-height: 24px;font-size: 12px;">
                    <div style="width: 72px;height: 24px;background-color: #F7F7F7;float: left;">{{ item.position }}
                    </div>
                    <div style="width: 72px;height: 24px;background-color: #F7F7F7;float: left;margin-left: 10px;">帮助{{
        item.helpNumber
      }}</div>
                  </div>
                  <router-link :to="`/wendaxiangqing/${item.id}`" tag="span">
                    <p style="font-size: 18px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #707070;
line-height: 36px;">
                      {{ item.description }}
                    </p>
                  </router-link>
                </div>

              </el-row>
              <div class="art-more">
                <div class="view">
                  {{ item.replyCount }}个回答
                </div>
                <div class="view"><i class="el-icon-view" />{{ item.viewNumber }}</div>

                <el-row class="art-info d-flex align-items-center justify-content-start">
                  <div class="view"><i class="el-icon-time" />：{{ item.createTime }}</div>

                </el-row>

              </div>
            </div>
  </div>
</template>
<script>
import { getUserInfo,getAnswer, } from '@/api/index'
import route from '@/router'
export default {

  name: 'Index',
  components: {

  },
  data() {
    return {      queryParam: {
        pagesize: 10,
        pagenum: 1
      },
      artList:[],
      dataList: {},
      dataList1: [],
      dataList2: [],
      dataList3: []
    }
  },
  created() {
    getUserInfo({userId:route.history.current.params.id }).then(res => {
      this.dataList = res.data
    })
    this.getArtList()
    // getUsers().then(res => {
    //   this.dataList1 = res.data
    // })
  },
  methods: {

    // 获取文章列表
    async getArtList(val) {
      const res = await getAnswer({
        size: this.queryParam.pagesize,
        page: this.queryParam.pagenum,
        searchText: val
      })
      this.artList = res.data.list
      this.total = res.data.total
    }
  }
}
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #fff;
}

.bg-purple {
  color: #fff;
  background-image: url(../assets/img/3491.png);
  background-size: 100% 200px;
}

.bg-purple-light {
  background: #fff;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.art-more {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.art-more1 {
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* position: relative;
  top: 25px; */
}

.art-more .view {
  color: #aaa;
  font-size: 12px;
}
</style>