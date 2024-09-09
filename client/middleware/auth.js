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
      '/': '/lanhu_shouye',
      '/article/': `/lanhu_shouyezixun/${queryArr}/${queryArr1}`
    }
    if (enumRouter[routerStr] && context.$isMobile) {
      // context.redirect(enumRouter[context.route.path]);
      context.redirect(enumRouter[routerStr]);

      // ${queryArr[0]}/${queryArr[1]}
    }
  }
}
