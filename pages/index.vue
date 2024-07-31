<template>
  <div class="home" >
    <div class="front_cont">
      <div class="cont_left">
        <div class="swiper_wrap">
          <el-carousel :autoplay="false" height="434px">
            <el-carousel-item v-for="item in artList.slice(0, 3)" :key="item.id">
              <img class="swip_big_img" :src="baseUrlImg + item.coverImg">
              <div class="mark_swiper">
              </div>
              <div class="swiper_tit">
                <nuxt-link :to="`/article/` + item.id + '/' + item.userId" tag="span">
                  {{ item.title }}
                </nuxt-link>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="left_bottom">
          <div class="left_item" v-for="item in artList.slice(4, artList.length)" :key="item.id">
            <div class="item_pic_box">
              <img class="art-banner" :src="baseUrlImg + item.coverImg">
            </div>
            <div class="item_right">
              <nuxt-link :to="`/article/` + item.id + '/' + item.userId" tag="span">
                <div class="left_tit">{{ item.title }}</div>
              </nuxt-link>
              <div class="left_mid" v-html="item.content.slice(0,100)+ '...'"></div>
              <div class="left_bott">
                <p>{{ item.createTime }}</p>
                <p><i class="el-icon-view" />{{ item.browseNumber }}</p>
                <p>作者：{{ item.nickName }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cont_right">
        <tag :cateList="cateList"/>
      </div>
    </div>

  </div>
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
      artList: [],
      queryParam: {
        pagesize: 11,
        pagenum: 1
      },
      total: 0,
      cateList: []
    }
  },

  async asyncData(context) {
    const res = await context.$axios.$get(website.getArticle, {
      page: context.query.current || 1,
      size: context.query.pageSize || 10
    });
    return {
      artList: res.list || [],
      total: res.total,
    }
  },
  
  methods: {
    // 获取文章列表
    async getArtList() {
      const res = await this.$axios.$get(website.getArticle, {
        size: this.queryParam.pagesize,
        page: this.queryParam.pagenum
      })
      this.artList = res.data.list
      this.total = res.data.total
      // eslint-disable-next-line no-console
      console.log(this.artList)
    }
  }
}
</script>

<style scoped lang="scss">
  .front_cont {
    width: 1200px;
    height: auto;
    display: flex;
    justify-content: space-between;
    .cont_left {
      width: 780px;
      height: auto;
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
      .left_bottom {
        font-family: PingFang SC;
        margin-left: 17px;
        .left_item {
          display: flex;
          height: 160px;
          border-bottom: 2px solid #F8F8F8;
          margin-bottom: 18px;
          .item_pic_box {
            width: 188px;
            height: 140px;
            margin-right: 20px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              border-radius: 16px;
            }
          }
          .item_right {
            margin-top: 10px;
            margin-right: 17px;
            flex: 1;
            .left_tit {
              font-weight: 800;
              font-size: 18px;
              color: #3C3C3C;
              cursor: pointer;
            }
            .left_mid {
              font-weight: 400;
              font-size: 14px;
              color: #969696;
              line-height: 23px;
              margin-bottom: -12px;
            }
            .left_bott {
              display: flex;
              justify-content: space-between;
              font-family: PingFang SC;
              font-weight: 500;
              font-size: 12px;
              color: #9E9E9E;
            }
          }
        }
      }

    }
    .cont_right {
      width: 392px;
      height: auto;
      border-radius: 16px;
      
    }
  }

  img.art-banner {
  width: 100%;
  height: 100%;
  transition: all 0.6s;
}

img.art-banner:hover {
  transform: scale(1.4);
}


</style>
