<template>
  <article class="container">
    <fe-breadcrumb :items="breadcrumb" />
    <section class="section">
      <el-tabs v-model="activeName" @tab-click="msData">
          <el-tab-pane class="tab_bar_sty" v-for="item in listData" :label="item.title" :name="item.title" :key="item.id">
            <div class="item_div"  style="width: 100%;height: 40px;border-bottom: 1px solid #E0E0E0;font-size: 22px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #000000;
line-height: 22px;margin-top: 10px;">期货全品种手续费一览表</div>
            <p class="discrip_sty" style="font-size: 18px;
                
                font-family: PingFang SC-Medium, PingFang SC;
                font-weight: 500;
                color: #090909;
                line-height: 36px;" v-html="msData1">
            </p>
            <div v-if="activeName == '手续费总表'">
              <!-- {{ item.items }} -->
              <div class="tit_sty_div" v-for="item1 in item.items">
                <p class="second_tit" style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500; 
color: #242629;">{{ item1.title }}:</p>
                <div>
                  <span style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #023665;
line-height: 16px;padding-right: 25px;cursor: pointer;" @click="handleClick(item1, item2)"
                    v-for="item2 in item1.items">{{ item2
                    }}</span>
                </div>
              </div>
            </div>
            <div v-else class="tit_sty_div">
              <p class="second_tit" style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #242629;">{{ item.title }}:</p>
              <div cl>
                <span style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #023665;
line-height: 16px;padding-right: 25px;cursor: pointer;" v-for="item1 in item.items"
                  @click="handleClick(item, item1)">{{ item1
                  }}</span>
              </div>
            </div>
            <div style="margin-top: 14px; margin-bottom: 14px;">
              <el-button type="primary" size="small" @click="showZhuli">{{ isMain? '显示全部': '只显示主力合约' }}</el-button>
              <!-- <el-button class="down_btn" type="primary" size="small" @click="dlowData">下载手续费Excel表格</el-button> -->
              <span style="font-size: 14px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #545454;
line-height: 14px;">(手续费更新时间:2024-03-12 17:45:12.528，价格更新时间:2024-03-12 17:45:12.528)</span>
            </div>
            <div style="padding-bottom: 100px;" v-if="activeName == '手续费总表'">
              <div v-for="itemT in tableData">
                <p class="table_title_sty" style="text-align: center;">{{ itemT.title }}</p> 
                <el-table :data="itemT.items" style="width: 100%">
                <el-table-column prop="productName" label="合约品种">
                </el-table-column>
                <el-table-column prop="curPrice" label="现价">
                </el-table-column>
                <el-table-column label="手续费(万分之*或*元)">
                  <el-table-column prop="openValue" label="开仓">
                  </el-table-column>
                  <el-table-column label="平昨" prop="flatYesValue">

                  </el-table-column>
                  <el-table-column label="平今" prop="flatTodayValue">

                  </el-table-column>

                </el-table-column>
                <el-table-column label="手续费(开+平)" prop="sxfkjp">

                </el-table-column>
                <el-table-column label="备注" prop="remark">

                </el-table-column>
              </el-table>
            </div>
            </div>
            <div style="padding-bottom: 100px;" v-else>
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="productName" label="合约品种">
                </el-table-column>
                <el-table-column prop="curPrice" label="现价">
                </el-table-column>
                <el-table-column label="手续费(万分之*或*元)">
                  <el-table-column prop="openValue" label="开仓">
                  </el-table-column>
                  <el-table-column label="平昨" prop="flatYesValue">

                  </el-table-column>
                  <el-table-column label="平今" prop="flatTodayValue">

                  </el-table-column>

                </el-table-column>
                <el-table-column label="手续费(开+平)" prop="sxfkjp">

                </el-table-column>
                <el-table-column label="备注" prop="remark">

                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
        </el-tabs>
    </section>
  </article>
</template>

<script>
import { website } from '@/services/index'
import { getTransactionCategory, getTransactionData, getTransactionData1, getExchangeInfo, getBreedInfo } from '@/services/index'
export default {
  name: 'About',
  data() {
    return {
      breadcrumb: [
        {
          label: '海洋财经',
          pathname: '/',
        },
        {
          label: '期货手续费',
        },
      ],
      isMain: false,
      mbx: this.$route.path,
      title1: '',
      productName1: '',
      msData1: "",
      listData: [],
      tableData: [],
      activeName: '手续费总表',
      formLabelAlign: {
        name: '',
        email: '',
        content: ''
      },
      rules: {
        name: [{
          required: true,
          message: this.$t('about.nameTip'),
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: this.$t('about.emailTip1'),
          trigger: 'blur'
        },
        {
          type: 'email',
          message: this.$t('about.emailTip2'),
          trigger: ['blur', 'change']
        }
        ],
        content: [{
          required: true,
          message: this.$t('about.contentTip'),
          trigger: 'blur'
        }]
      }
    }
  },
  head() {
    return {
      title: '期货手续费-海洋财经',
      meta: [
        {
          name: "keywords",
          content:
            "期货,期货开户,期货手续费,期货公司,期货账户,期货保证金",
        },
        // hid是一个唯一标识
        {
            hid: '期货手续费', name: 'names', content: '期货手续费'
        },
      ],
    };
  },
  watch: {
    // 此处监听variable变量，当期有变化时执行
    $route(item1, item2) {
      this.mbx = this.$route.path
    }
  },
  async asyncData({ $axios }) {
    const [data, data1] = await Promise.all([
      $axios.$get(website.getTransactionCategory),
      $axios.$get(website.getExchangeInfo, {
        name: 'all'
      }),
    ]);
    let newList = JSON.parse(JSON.stringify(data))
      let newItems = []
      newItems = JSON.parse(JSON.stringify(data))
      newList.unshift({
        title: '手续费总表',
        items: newItems
      })

    return {
      listData: newList,
      msData1: data1.remark
    }
  },
  mounted() {
    // console.log(this.$route.path, 'kkkk');
    // getTransactionCategory().then(res => {
    //   this.listData = JSON.parse(JSON.stringify(res.data))
    //   let newItems = []
    //   newItems = JSON.parse(JSON.stringify(res.data))
    //   this.listData.unshift({
    //     title: '手续费总表',
    //     items: newItems
    //   })
    // })

    // getExchangeInfo({ name: 'all' }).then(res => {
    //   this.msData1 = res.data.remark
    // })
    this.dataList()
  },
  methods: {
    msData(val) {
      let newAc=''
      if (this.activeName == '手续费总表') {
        newAc = 'all'
      }else{
        newAc = this.activeName
      }
      getExchangeInfo({ name: newAc }).then(res => {
        console.log(res, 'shang')
        this.msData1 = res.data.remark
      })
      this.dataList()
      console.log(this.msData1)
    },
    dlowData() {
      console.log(this.title1, this.productName1)
      getTransactionData1({
        title: this.title1,
        productName: this.productName1,
        remark: this.isMain? '主力合约': '',
        export: true
      }).then(res => {
        let blob = new Blob([res], { type: 'application/vnd.ms-excel' });
        let objectUrl = URL.createObjectURL(blob);
        window.location.href = objectUrl;
      })
    },
    handleClick(val, val1) {
      console.log(val, val1)
      this.title1 = val.title
      this.productName1 = val1
      this.dataList()
    },
    dataList() {

      if (this.activeName == '手续费总表') {
        getTransactionData({
        title: this.title1,
        productName: this.productName1,
        remark:  this.isMain? '主力合约': '',
      }).then(res => {
        console.log(res, 'zong')
        this.tableData = res.data.slice(0,2)
      })
      }else{
        getTransactionData({
        title: this.activeName,
        productName: this.productName1,
        remark: this.isMain? '主力合约': '',
      }).then(res => {
        console.log(res, 'fen ')
        this.tableData = res.data[0].items
      })
      }
    },
    showZhuli() {
      this.isMain = !this.isMain
      console.log(this.isMain)

      this.dataList('主力合约')
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 1200px;
  margin: 0 auto;
  padding: 6px 0;
}

::v-deep .el-table thead.is-group th {
  background-color: #023665 !important;
  color: #fff;
}

.dl-blog dd {
  margin-left: 30px;
}

.dl-blog .icon {
  width: 20px;
  height: 20px;
}

.title {
  margin-top: 40px;
}

.statement {
  border-left: 3px solid #F56C6C;
  padding: 20px;
  background-color: #EBEEF5;
  margin-top: 20px;
}
.tit_sty_div {
  font-weight: 500;
  font-size: 20px;
  color: #242629;
  div {
    span {
      font-weight: 500;
      font-size: 20px;
      color: #023665;
      line-height: 36px;
      margin-bottom: 17px;
      display: inline-block;
    }
  }
  .second_tit {
    border-bottom: 1px dashed #E0E0E0;
  }
}
::v-deep .down_btn {
  width: 190px;
  height: 32px;
  background: #F0F0F0;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid #8a8a8a;
  font-size: 14px;
  color: #8a8a8a;
  transform: translateY(3px);
  margin-right: 20px;
}
.table_title_sty {
  height: 50px;
  background: #F7F9FA;
  margin: 0;
  border: .5px solid #999999;
  font-family: PingFang SC, PingFang SC;
  line-height: 50px;
  font-weight: bold;
  font-size: 18px;
  color: #023665;
  margin-top: 24px;

}
// .discrip_sty {
//   margin-bottom: -44px;
// }
</style>
@/client/services/index@/client/services/index