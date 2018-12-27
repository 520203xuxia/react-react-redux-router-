## 项目简介
主要展示了react结合react-redux结合router的基本使用方法。
其中react-redux中的connect可以使用装饰器的写法，项目需要安装支持装饰器的babel，以及进行相关配置如下：
```
  npm install babel-plugin-transform-decorators-legacy --save-dev
  npm install @babel/plugin-proposal-decorators --save-dev

```
```
 // package.json
 "babel": {
   "presets": [
     "react-app"
   ],
   // 添加如下配置
   "plugins": [
     [
       "@babel/plugin-proposal-decorators",
       {
         "legacy": true
       }
     ],
     [
       "@babel/plugin-proposal-class-properties",
       {
         "loose": true
       }
     ]
   ]
 }
```
