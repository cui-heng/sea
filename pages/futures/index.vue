<template>
  <div class="container">

  </div>
</template>

<script>
import { website } from '@/services/index'
import { getTransactionCategory, getTransactionData, getTransactionData1, getExchangeInfo, getBreedInfo } from '@/services/index'
export default {
  name: 'About',
  data() {
    return {
      isMain: false,
      mbx: this.$route.path,
      title1: '',
      productName1: '',
      msData1: "",
      listData: [],
      tableData: [{
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
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
        this.tableData = res.data
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
  
}
</style>
