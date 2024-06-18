<template>
  <div class="page flex-col">
    <img
      class="image_1"
      referrerpolicy="no-referrer"
      src="./assets/img/FigmaDDSSlicePNG98c5bc5f50d252746043a47d32d33336.png"
    />
    <img
      class="image_2"
      referrerpolicy="no-referrer"
      src="./assets/img/FigmaDDSSlicePNGc99fdf18684b30e3fef612ad5d029f3f.png"
    />
    <div class="box_1 flex-row">
      <div class="section_1 flex-col">
        <div class="image-wrapper_1 flex-col">
          <img
            class="image_3"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGea77ca25fd24e7db4d20c4f1f7f8ee8b.png"
          />
        </div>
      </div>
      <div class="section_2 flex-col">
        <div class="text-wrapper_1 flex-row justify-between">
          <span class="text_1" @click="dianji">会员登录通道</span>
          <span class="text_2" >会员入驻通道</span>
        </div>
        <div class="section_3 flex-col"></div>
        <div class="section_4 flex-row">
          <div class="section_5 flex-col justify-between">
            <div class="text-wrapper_2 flex-row justify-between">
              <span class="text_3">黄金会员</span>
              <span class="text_4">(￥8000/月)</span>
            </div>
            <span class="paragraph_1">
              电话咨询，微信咨询
              <br />
              黄金会员每日200条发帖
            </span>
          </div>
          <img
            class="image_4"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGab98b9bd1d5d108b9261d43c6e042a92.png"
          />
        </div>
        <div class="section_6 flex-row">
          <div class="box_2 flex-col justify-between">
            <div class="text-wrapper_3 flex-row justify-between">
              <span class="text_5">星耀会员</span>
              <span class="text_6">(￥79998/年)</span>
            </div>
            <span class="paragraph_2">
              价格享8折优惠，电话咨询
              <br />
              微信咨询，星耀年费会员每日不限量发帖
            </span>
          </div>
          <img
            class="image_5"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG6e0090af7fe83d408ef7e81cfc7be584.png"
          />
        </div>
        <div class="text-wrapper_4 flex-col"><span class="text_7">立即入驻</span></div>
      </div>
    </div>
    <span class="paragraph_3">
      投资耆关系&nbsp;|&nbsp;关于我们&nbsp;|&nbsp;软件下载&nbsp;|&nbsp;法律声明&nbsp;|&nbsp;运營许可&nbsp;|&nbsp;联系我们&nbsp;」&nbsp;友情链接&nbsp;|&nbsp;招聘英才&nbsp;」&nbsp;
      <br />
      用户体验计划CopyrightCHithink&nbsp;Royalflush&nbsp;Infomation&nbsp;Network&nbsp;Co,Ltd.Al&nbsp;rights&nbsp;reserved,
      <br />
      浙江海洋财经网络信息股份有限公司版权所有ICP证:浙ICP备09003598号
      <br />
      证券投资咨询服务提供:浙江海洋财经软件有限公司(中国证监会核发证书编号:ZX0050)
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      constants: {}
    };
  },
  methods: {
    dianji(){
      this.$emit('dianji',true)
    }
  }
};
</script>
<style scoped lang="css" src="./assets/index.css" />