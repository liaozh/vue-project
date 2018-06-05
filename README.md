# vue-project

> A Vue.js project

## 目录结构

    |-- build                            // webpack配置文件
    |-- config                           // 项目打包路径
    |-- src                              // 源码目录
    |   |-- zhUI                         // zhUI组件
    |   |-- components                   // 组件
    |           |-- base                 // 基础组件
    |           |-- layou           	   // 布局组件
    |           |-- page1                // 页面1组件
    |           |-- page2           	   // 页面1组件
    |   |-- paes                   	     // 主要路由页面
    |           |-- error                // 错误页面
    |           |-- home                 // home 页面
    |   |-- App.vue                      // 页面入口文件
    |   |-- main.js                      // 程序入口文件，加载各种公共组件
    |-- .babelrc                         // ES6语法编译配置
    |-- .editorconfig                    // 代码编写规格
    |-- .gitignore                       // 忽略的文件
    |-- index.html                       // 入口html文件
    |-- package.json                     // 项目及工具的依赖配置文件
    |-- README.md                        // 说明

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8085
yarn dev
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
