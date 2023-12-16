# kintone-proxy-config-setting-plugin-demo

kintone アドベントカレンダー2023の記事  
[kintoneプラグインにAPIトークンを秘匿して、JSカスタマイズから利用する](https://qiita.com/the_red/private/fe166efaf98ce165c411)  
のサンプルプロジェクトです。

## サンプルその1: 自動採番

* [auto-number-danger.js](/src/apps/auto-number-danger.js)
* [auto-number.js](/src/apps/auto-number.js)

## サンプルその2: 別アプリの参照・更新・コメント書き込み


### Install

```shell
git clone https://github.com/goqoo-on-kintone/kintone-proxy-config-setting-plugin-demo.git
cd kintone-proxy-config-setting-plugin-demo
yarn install
cp .env.example .env # Edit .env
cp goqoo.config.js.example goqoo.config.js # Edit goqoo.config.js
```

### Build

```shell
yarn build
```

### Start dev server

```shell
yarn start
```
