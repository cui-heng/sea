<template>
  <div class="tag">
    <el-card class="box-card" style="border-radius:  15px;">
      <div slot="header" class="d-flex align-items-center">
        <!-- <img class="card-icon" src="../assets/biaoqian.png"> -->
        <span class="art-title">优选文章<span style="font-size: 12px;
color: #8A8A8A;"> Preferred article</span></span>
      </div>
      <div v-for="item in cateList.slice(0,9)">
        <router-link :to="`/article/` + item.id + '/' + item.userId" tag="span">
        <p style="font-size: 14px;
font-family: PingFang SC-Bold, PingFang SC;
font-weight: bold;
color: #242629;
line-height: 22px;">{{ item.title }}</p>
        <p style="font-size: 14px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #707070;
line-height: 20px;" v-html=" item.content.slice(0,50) "></p>
</router-link>
        <div>


          <router-link :to="'/ydy/'+ item.userId">
            <div style="width: 22px;
height: 22px;float: left;
border-radius: 50%;background-color: red">
            <img :src="baseUrlImg + item.avatar" style="width: 22px;
height: 22px;float: left;
border-radius: 50%;">
          </div>
          <span style="font-size: 14px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #242629;
line-height: 22px;float: left;margin-left: 10px;">{{ item.nickName }}</span>
          </router-link>
          <div class="view" style="float: right;font-size: 12px;"><i class="el-icon-view" style="font-size: 12px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #707070;
line-height: 14px;" />{{ item.browseNumber }}</div>
          <div style="width: 100%;height: 40px;border-bottom:1px dashed #E0E0E0;"></div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getPreferredArticle } from '@/api/index'
export default {
  name: 'Tag',
  data() {
    return {
      profileInfo: {
        id: 1
      },
      cateList: [],
      typeList: ['warning', 'success', 'info', 'danger']
    }
  },
  created() {
    this.getProfileInfo()
    this.GetCateList()
  },
  methods: {
    tag(name) {
      this.$router.push({
        name: 'tag',
        params: {
          'name': name
        }
      })
    },
    // 获取个人设置
    getProfileInfo() {

      getPreferredArticle().then(res => {
        console.log(res, '999');
        this.cateList = res.data
      })
    },
    gotoCate(cid) {
      this.$router.push(`/category/${cid}`).catch((err) => err)
    },
    // 获取分类
    async GetCateList() {
      const { data: res } = await this.$http.get('category')
      this.cateList = res.data
    }
  }
}
</script>

<style scoped>
.box-card .item:hover {
  color: #409EFF;
  cursor: pointer;
}

.box-card span {
  font-weight: bold;
}

.card-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.tag-item {
  margin: 4px 2px;
}
.art-title {
  border-left: 3px solid #1ABCFC;
  padding-left: 5px;
  cursor: pointer;
}
</style>
