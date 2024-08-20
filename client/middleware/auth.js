export default function (context) {
  if (context.isMobile) {
    const enumRouter = {
      '/': '/lanhu_shouye',
    }

    if (enumRouter[context.route.path] && context.$isMobile) {
      context.redirect(enumRouter[context.route.path]);
    }
  }
}
