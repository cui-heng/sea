# Fblog


## NUXT TODO
- [-] env.js 文件的问题
- [-] js-cookie的问题
- [ ] store hasPermission的问题
- [-] login token的问题
- [-] nuxt-link 替换成nuxt-link
- [-] moblie 布局的问题
- [-] tui-editor 安装不成功 暂时删除 



## 安装
```
npm install
```
## 运行
```
npm run dev
```

## 打包
```
npm run build
```

## 部署
把build的dist文件命名为fBlog(自取)上传到服务器

### nginx配置
```
location /fBlog/ {
	root /usr/local/nginx/;#fBlog所在的更目录
	try_files $uri $uri/ /fBlog/;
}
```

## 演示
```
博客域名:9527
管理后台域名:9527/admin
```