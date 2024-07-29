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
              <img :src="baseUrlImg + item.coverImg">
            </div>
            <div class="item_right">
              <div class="left_tit">{{ item.title }}</div>
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
      <div class="cont_right"></div>
    </div>
    <el-row id="artList" type="flex" justify="space-around" style="background-color: #fff;display: flex;">
      <el-col :span="17">
        <el-row class="art-item">
          <h5><nuxt-link to="/article/1" tag="span" class="art-title">今日1资讯<span style="font-size: 12px;
color: #8A8A8A;"> Today's news</span></nuxt-link></h5>
          <!-- <el-card shadow="hover"> -->
       
            <!-- <el-carousel height="400px" style="border-radius:  15px;">
              <el-carousel-item v-for="item in artList.slice(0, 3)" :key="item">
                <div>
                  <div class="swip_box" style="position: absolute;background-color: rgba(0,0,0,0.4);width: 100%;height: 100%;">
                    <div style="position: relative;top: 52%;padding: 20px;">
                      <nuxt-link :to="`/article/` + item.id + '/' + item.userId" tag="span">
                      <p style="font-size: 14px;
                        font-family: PingFang SC-Bold, PingFang SC;
                        font-weight: bold;
                        color: #fff;cursor: pointer;
                        line-height: 22px;">{{ item.title }}</p>
 <div class="art-abstract" style="font-size: 12px;" v-html="item.content.slice(0,100)">
                  </div>
                  <div class="ava_pic">
                    <img style="width: 100%;height: 100%;" :src="baseUrlImg + item.avatar">
                  </div>
                </nuxt-link>
                  <div class="art-abstract nick_na" style="font-size: 12px;">
                   作者：{{ item.nickName }}
                  </div>
                </div>
                  </div>
                  <img style="width: 100%;height: 100%;" :src="baseUrlImg + item.coverImg">
                </div>
              
              </el-carousel-item>
            </el-carousel> -->
            <div v-for="item in artList.slice(4, artList.length)" style="margin-top: 10px;">
              <el-row class="art-body">
                <div class="side-img hidden-sm-and-down"><img class="art-banner" :src="baseUrlImg + item.coverImg" style="border-radius:  15px;">
                </div>
                <div class="side-abstract">
                  <nuxt-link :to="`/article/` + item.id + '/' + item.userId" tag="span">
                    <span style="font-size: 14px;
font-family: PingFang SC-Bold, PingFang SC;
font-weight: bold;
color: #242629;cursor: pointer">{{ item.title }}</span>
                  </nuxt-link>
                  <div class="art-abstract co_sty" style="font-size: 14px;font-family: PingFang SC, PingFang SC;
font-weight: 500;
font-size: 14px;
color: #5b5959;" v-html="item.content.slice(0,100)">
                  </div>
                  <div class="art-more">
                    <div class="view">{{ item.createTime }}</div>
                      <div class="view"><i class="el-icon-view" />{{ item.browseNumber }}</div>
                    <div class="view">作者：{{ item.nickName }}
                    </div>
                  </div>
                </div>
              </el-row>
            </div>
          <!-- </el-card> -->
          <!-- <img class="star" src="../assets/star.png"> -->
        </el-row>

        <div class="block pagination">
          <el-pagination layout="prev, pager, next" :page.sync="queryParam.pagenum" :limit.sync="queryParam.pagesize" :total="total" @pagination="getArtList"/>
        </div>
      </el-col>
      <el-col id="side" :span="6" class="hidden-sm-and-down">
        <div class="item">
          <tag />
        </div>
        <div class="item">
          <!-- <friend /> -->
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import tag from '../components/tag'
import { website } from '@/services'

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
      total: 0
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
      background: yellow;
      height: auto;
    }
  }

















#side .item {
  margin-bottom: 30px;
}

.art-item {
  margin-bottom: 30px;
  position: relative;
}

.art-item .star {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  right: 0;
}

img.tag {
  width: 16px;
  height: 16px;
}

.art-title {
  border-left: 3px solid #1ABCFC;
  padding-left: 5px;
  cursor: pointer;
}

.art-title:hover {
  padding-left: 10px;
  color: #409EFF;
}

.art-time {
  margin-right: 20px;
}

.art-body {
  display: flex;
  padding: 10px 0;
}

.side-img {
  height: 124px;
  width: 214px;
  overflow: hidden;
  margin-right: 20px;
}

img.art-banner {
  width: 100%;
  height: 100%;
  transition: all 0.6s;
}

img.art-banner:hover {
  transform: scale(1.4);
}

.side-abstract {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.art-abstract {
  flex: 1;
  color: #aaa;
}

.art-more {

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.art-more .view {
  color: #aaa;
  font-size: 12px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 12px;
  color: #707070;
}

h5 {
  font-size: 18px;
}

.pagination {
  background-color: #F9F9F9;
}
.ava_pic {
  position: absolute;
  width: 32px;
  height: 32px;
  transform: translateY(-10px);
  img {
    border-radius: 50%;
  }
}
.nick_na {
  padding-left: 55px;
}
::v-deep .art-abstract {
  p {
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    font-size: 14px;
    color: #D6D6D6;
    
    line-height: 20px;
  }
  
}
::v-deep .co_sty {
  p {
    color: #5b5959;

  }
  }

::v-deep .el-carousel  {
  margin-bottom: 28px;
}
</style>
