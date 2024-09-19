export default function (context) {
  let queryArr = ''
  let queryArr1 = ''
  if (context.route.path.match(/\d+/g) && context.route.path.match(/\d+/g)[0]) {
    queryArr = context.route.path.match(/\d+/g)[0]
    queryArr1 = context.route.path.match(/\d+/g)[1]
  }
  let routerStr = context.route.path.match(/[a-zA-Z_/]+/g)[0]
  if (context.isMobile) {
    const enumRouter = {
      '/': '/lanhu_shouye', //首页
      '/article/': `/lanhu_shouyezixun/${queryArr}/${queryArr1}`, //文章
      '/answer': '/lanhu_youwenbida', //百问百答
      '/service': '/lanhu_qihuobaozhengjin', //一对一
      '/commission': '/aboutPhone', //手续费
      '/earnest': '/aboutPhoneMargin', //保证金
      '/adviser/':`/lanhu_wanghaijingli/${queryArr}`,//个人顾问首页
      '/answer/':`/wendaxiangqingphone/${queryArr}`//回答详情
    }
    if (enumRouter[routerStr] && context.$isMobile) {
      // context.redirect(enumRouter[context.route.path]);
      context.redirect(enumRouter[routerStr]);

      // ${queryArr[0]}/${queryArr[1]}
    }
  } else {
    const enumRouterPc = {
      '/lanhu_shouye': '/', //首页
      // '/lanhu_shouyezixun/': `/article/${queryArr}/${queryArr1}`, //文章
      '/lanhu_shouyezixun/': `/article/${queryArr}/${queryArr1}`, //文章
      '/lanhu_youwenbida': '/answer', //百问百答
      '/lanhu_qihuobaozhengjin': '/service', //一对一
      '/aboutPhone': '/commission', //手续费
      '/aboutPhoneMargin': '/earnest', //保证金
      '/lanhu_wanghaijingli/':`/adviser/${queryArr}`,//个人顾问首页
      '/wendaxiangqingphone/':`/answer/${queryArr}`//回答详情
    }
    if (enumRouterPc[routerStr]) {
      context.redirect(enumRouterPc[routerStr]);
    }
  }
}
