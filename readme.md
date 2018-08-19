# snailreading

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

<!-- rem -->
  html font-size = 50px,
  1rem = 50px

<!-- Eslint -->
 1、安装Eslint插件
 2、首选项中进行如下配置可自动eslint
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
      "javascript",
      "javascriptreact",
      {
          "language": "html",
          "autoFix": true
      },
      {
          "language": "vue",
          "autoFix": true
      }
  ]