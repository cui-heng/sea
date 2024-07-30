<template>
  <div class="tag">
    <el-card class="box-card" style="border-radius:  15px;">
        <!-- <img class="card-icon" src="../assets/biaoqian.png"> -->
        <div class="right_tit">优选文章<span>Preferred articles</span></div>
        <div class="art_list_item" v-for="item in cateList.slice(0,9)">
          <nuxt-link  :to="`/article/` + item.id + '/' + item.userId" tag="span">
            <p class="tit_art">{{ item.title }}</p>
            <p class="content_art_sty" v-html=" item.content.slice(0,58) + '...' "></p>
          </nuxt-link>
          <div class="bottom_box">
            <nuxt-link class="flex_sty" :to="'/ydy/'+ item.userId">
              <div class="user_img_box">
                <img :src="baseUrlImg + item.avatar">
              </div>
              <span>{{ item.nickName }}</span>
            </nuxt-link>
            <div class="view">
              <i class="el-icon-view" />{{ item.browseNumber }}</div>
          </div>
        </div>
    </el-card>
  </div>
</template>

<script>
import { getPreferredArticle } from '@/services/index'
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
  mounted() {
    this.getProfileInfo()
    // this.GetCateList()
  },
  methods: {
    // 获取个人设置
    getProfileInfo() {
      getPreferredArticle().then(res => {
        console.log(res, '999');
        this.cateList = res.data
      })
    },
    // 获取分类
    async GetCateList() {
      const data = await this.$axios.$get('/article/v1/category');
      this.cateList = data
    }
  }
}
</script>

<style scoped lang="scss">
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
::v-deep .el-card__body {
  padding: 0;
}
.right_tit {
  height: 57px;
  border-bottom: 1px solid #E0E0E0;
  font-family: PingFang SC;
  font-weight: 800;
  font-size: 24px;
  color: #000000;
  display: flex;
  align-items: center;
  padding-left: 17px;
  span {
    font-family: PingFang SC;
    font-weight: 800;
    font-size: 12px;
    color: #838383;
    margin-left: 17px;
    transform: translateY(4px);
  }
}
.art_list_item {
  font-family: PingFang SC;
  border-bottom: 1px solid #E0E0E0;
  margin: 0 20px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  .tit_art {
    font-family: PingFang SC;
    font-weight: 800;
    font-size: 16px;
    color: #000000;
    line-height: 23px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .content_art_sty {
    font-family: PingFang SC;
    font-weight: 400;
    font-size: 12px;
    color: #969696;
    line-height: 23px;
    margin: 0;
  }
  .bottom_box {
    display: flex;
    justify-content: space-between;
  }
  .user_img_box {
    width: 26px;
    height: 26px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }
  .flex_sty {
    display: flex;
    flex: 1;
    span {
      font-family: PingFang SC;
      font-weight: 800;
      font-size: 14px;
      color: #000000;
      line-height: 23px;
    }
  }
}
.view {
  font-family: PingFang SC;
  font-weight: 500;
  font-size: 12px;
  color: #9E9E9E;
  i {
    font-size: 12px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #707070;
    line-height: 14px;
    margin-right: 8px;
  }
}
</style>
