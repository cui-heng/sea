<template>
  <div class="footer_box">
  <div class="f-footer">
    <div class="top_code">
      <dl>
        <dt class="first_img"> <img :src="baseUrlImg + codeList[0].wxQrCode"/></dt>
        <dd>咨询</dd>
      </dl>
      <dl>
        <dt class="second_img"> <img :src="baseUrlImg + codeList[1].wxQrCode"/></dt>
        <dd>关注</dd>
      </dl>
    </div>
    <div class="bottom_safe">
      <div class="safe_click">
        <div v-for="item in footerList" :key="item.code" @click="choseInd(item.code)">{{ item.name }} 
          <span class="line_sty" v-if="item.code !== 3">|</span>
        </div>
      </div>
      
      @2024 中国海洋财经有限公司 All Rights Reserved,<br/>
      <img style="margin-left: 10px;transform: translateY(5px);" src="@/assets/gn.jpg" alt="">
      京公网安备11011402054225号    京ICP备2024075475号-1
    </div>
    <el-dialog :visible.sync="dialogTableVisible" width="700px" class="footer_dia">
      <div class="submit_box" v-if="chooseType == 3 || chooseType == 2">
        <img class="ques_img" src="@/assets/newBanner/question.png" alt="">
        <div class="text_box">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="textarea2">
          </el-input>
        </div>
        <div class="bott_inp_box">
          <div class="name_en">联系方式</div>
          <el-input v-model="phoneNumber" placeholder="请输入手机号"></el-input>
        </div>
        <div class="sub_btn" @click="submitText()">
          提交
        </div>
      </div>
      <!-- 免责声明 -->
      <div class="submit_box" v-if="chooseType == 0">
        <img class="ques_img" src="@/assets/newBanner/mianze.png" alt="">
        <div class="text_box_sty">
          <span></span>以下声明适用于所有访问本网站的用户及浏览者，海洋财经网站保留随时修订、更新本声明的权利。若您不同意以下条款，请停止使用本网站。对于违反规则的行为，海洋财经网站有权采取法律和公平的补救措施。
          海洋财经网站可以在没有任何通知或提示的情况下随时对本网站上的内容进行修改，为了得到最新版本的信息，请定时访问本网站。
          <br/><span></span><b>第三方链接</b><br/>
          <span></span>本网站或保留与第三方网站或网址的链接，访问这些链接将由用户自己做出决定，海洋财经网站并不保证这些链接上所提供的任何文本信息、图片、数据、观点、陈述或建议的准确性、完整性、充分性和可靠性。海洋财经网站提供这些链接仅仅在于提供方便，并不表示海洋财经网站对这些信息的认可和推荐，若对您或任何人通过使用本网站上提供的第三方链接的信息所导致的损失或损害，责任均由使用者自行承担（包括但不限于疏忽责任）。
          <br/><span></span><b>免责声明</b><br/>
          <span></span>海洋财经网站在此声明，您浏览的他方网站、与本网站相关的任何内容、服务、产品或其它链接至本网站的站点、内容均不作直接、间接、法定或约定的保证。
          本网站中的所有问答、资讯、文章等内容均由入驻海洋财经网站的作者撰写，仅供网友交流学习，并不构成买卖建议。本站核实主体信息并允许作者发表之言论并不代表本站同意其内容，亦不代表本站对该信息内容予以核实，据此操作者，风险自担。同时提醒网友提高风险意识，请勿私下汇款给作者，避免造成金钱损失。
          用户使用本网站服务所存在的风险以及产生的一切后果均由其自行承担。在任何情况下，对于因使用本网站内容或无法进入本网站而导致的任何直接的、间接的、附带的、给第三人造成的损失（包括但不限于利润损失、信息数据丢失、财产毁坏等损失），本网站都无须承担任何法律责任。
        </div>
        <div class="sub_btn" @click="dialogTableVisible = false">
          关闭
        </div>
      </div>
      <!-- 版权声明 -->
      <div class="submit_box" v-if="chooseType == 1">
        <img class="ques_img" src="@/assets/newBanner/banquan.png" alt="">
        <div class="text_box_sty">
          <span></span>海洋财经网站的所有图片及文本内容均由入驻海洋财经网站的作者自发贡献，其目的在于促进信息传播及交流，文中观点仅代表作者本人，并不代表本网站赞同其观点或对其内容的真实性负责。本网站仅提供信息存储空间服务，不拥有所有权，不承担相关法律责任。如发现网站有涉嫌抄袭侵权/违法违规的内容，请发送邮件至liuxg969@163.com 举报，一经本查实，本网站将立刻删除。
        </div>
        <div class="sub_btn" @click="dialogTableVisible = false">
          关闭
        </div>
      </div>
    </el-dialog>
  </div>
</div>
</template>

<script>
import { website } from '@/services/index'
import request from '@/utils/request'
import {insertLeaveMessage} from '@/services/index.js'
export default {
  name: 'Vfooter',
  data(){
    return {
      textarea2: '',
      chooseType: 0,
      phoneNumber: '',
      codeList: [
        {
          wxQrCode: ''
        },
        {
          wxQrCode: ''
        }
      ],
      dialogTableVisible: false,
      footerList: [
        {
          name: '免责声明',
          code: 0
        },
        {
          name: '版权声明',
          code: 1
        },
        {
          name: '投诉窗口',
          code: 2
        },
        {
          name: '联系我们',
          code: 3
        }
      ]
    }
   
  },
  mounted() {
    this.getCode()
  },
  methods: {
    choseInd(code) {
      this.chooseType = code
      this.textarea2 = ''
      this.phoneNumber = ''
      this.dialogTableVisible = true
    },
    async getCode() {
      // const data = await website.getCodeImgs
      request({
        url: website.getCodeImgs,
        method: 'get',
      })
        .then(resData => {
          this.codeList = resData.data
        })
        .catch(err => {
          
        })
    },
    async submitText() {
      const data = await insertLeaveMessage({
        content: this.textarea2,
        mobile: this.phoneNumber
      })
      if (data.code == 1) {
        this.$message({
          message: '提交成功',
          type: 'success'
        })
        this.dialogTableVisible = false
        return
      }
      this.$message.error(data.message)
    }
  }
}
</script>

<style scoped lang="scss">
.f-footer {
  width: 100%;
  height: 240px;
  text-align: center;
  color: #fff;
  background: #3D3C44;
  font-family: PingFang SC;
}

.main {
  width: 70%;
  margin: 0 auto;
  color: #ccc;
}

.out-link {
  text-decoration: none;
  color: #ccc;
}

.out-link:hover {
  color: #5e5252;
}

.item-col {
  text-align: left;
}

.item-col.weside {
  font-size: 14px;
}

.item-col .title {
  color: #ddd;
  margin-bottom: 10px;
}

.item span {
  margin-right: 5px;
}
.font_fot {
  font-size: 12px;
  color: #fff;
}
.top_code {
  height: 150px;
  width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid #ABAAAA;
  margin-bottom: 17px;
  display: flex;
  justify-content: center;
  dl {
    margin: 0 44px;
    img {
      width: 95px;
      height: 95px;
      margin: 0 12px;
      margin-top: 12px;
    }
    dd {
      text-align: center;
      font-family: PingFang SC;
      font-weight: 500;
      font-size: 20px;
      color: #ABAAAA;
      margin: 0;
    }
  }
}
.bottom_safe {
  width: 1200px;
  margin: 0 auto;
  font-family: PingFang SC;
  font-weight: 500;
  font-size: 14px;
  color: #ABAAAA;
  line-height: 22px;
  text-align: center;
}
.first_img {
  margin-left: 0 !important;
}
.second_img {
  margin-right: 0 !important;
}
.safe_click {
  display: flex;
  justify-content: center;
  div {
    cursor: pointer;
  }
  .line_sty {
    display: inline-block;
    margin: 0 10px;
  }
}
.ques_img {
  width: 700px;
  height: 167px;
  margin-bottom: 22px;
}
::v-deep .footer_dia {
  border-radius: 16px;
  padding: 0;
  .el-dialog__header {
    display: none;

  }
  .el-dialog__body {
    border-radius: 16px;
    padding: 0;
    
  }
  
}
.submit_box {
  padding-bottom: 25px;
}
::v-deep .el-dialog {
  border-radius: 16px;
}
::v-deep .text_box {
  width: 660px;
  height: 215px;
  background: #F4F4F4;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 22px;
    .el-textarea {
      width: 660px;
      height: 215px;
      .el-textarea__inner {
        height: 100% !important;
        background: #F4F4F4;
      }
    }
  }
  ::v-deep .bott_inp_box {
    width: 660px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 25px;
    .name_en {
      font-family: PingFang;
      font-weight: 800;
      font-size: 18px;
      color: #293468;
      line-height: 39px;
      width: 100px;
    }
    .el-input {
      flex: 1;
      .el-input__inner {
        background: #F4F4F4;
      }
    }
  }
  .sub_btn {
    width: 214px;
    height: 34px;
    background: #0242AC;
    border-radius: 6px;
    margin: 0 auto;
    font-family: PingFang;
    font-weight: 800;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 34px;
    margin-bottom: 25px;
    cursor: pointer;
  }
  .text_box_sty {
    font-family: PingFang SC;
    font-weight: 500;
    font-size: 14px;
    color: #293468;
    line-height: 24px;
    margin: 0 25px;
    text-align: left;
    margin-bottom: 25px;
    b {
      font-size: 18px;
      font-weight: bold;
    }
    span {
      display: inline-block;
      width: 30px
    }
  }

</style>
