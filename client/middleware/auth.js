export default function (context) {
  if (context.isMobile) {
    let enumRouter = {
      '/': '/lanhu_shouye',
    }

    enumRouter['/lanhu_shouye']
    if (enumRouter[context.route.path]) {
      context.redirect(enumRouter[context.route.path]);
    }
    console.log(context.route, 'con')

    
  }
}
