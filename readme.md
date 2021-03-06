# 项目小助手

## 预览

![preview](./doc/preview.png)

## 开发

#### 环境

-   [node](http://nodejs.cn/download/)
-   [yarn](https://www.yarnpkg.com/lang/en/)

#### 安装依赖

```
yarn -W // 会自动安装顶层和各项目的依赖包
```

#### 启动

```
// page部分
// 见page下package.json start
```

```
// electron部分
// 见electron下package.json start
```

#### 打包

1. 先执行 page 的 build
2. 再执行 elec 的 build

---

## 常见问题

#### electron 安装

1. 打开[electron-release](https://github.com/electron/electron/releases?after=v9.0.0-nightly.20191222)

1. 找到 electron-v7.1.7-win32-x64.zip, 自行对应系统和版本

1. 打开项目下的 node_modules/electron

1. 放入解压的 dist

1. 添加 path.txt, 在 install.js 找到要写的内容, windows: electron.exe; mac: Electron.app/Contents/MacOS/Electron

## 某个包安装卡住

```
yarn config set registry https://registry.npm.taobao.org -g

yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```

## 在工作区安装依赖

```
yarn add some -W // 顶层需要-W
// 子项目直接yarn add即可, node_modules文件会放到顶层
```
