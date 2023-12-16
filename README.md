# kintone-proxy-config-setting-plugin-demo

kintone アドベントカレンダー2023の記事  
[kintoneプラグインにAPIトークンを秘匿して、JSカスタマイズから利用する](https://qiita.com/the_red/private/fe166efaf98ce165c411)  
のサンプルプロジェクトです。

## サンプルその1: 自動採番

`src-example1`配下のコードがそのまま動きます。URLやIDは適宜変更してください。

* [/src-example1/auto-number-danger.js](/src-example1/auto-number-danger.js)
* [/src-example1/auto-number.js](/src-example1/auto-number.js)

## サンプルその2: 別アプリの参照・更新・コメント書き込み

`src-example2`以外はすべて「サンプルその2」用のコードです。
Goqoo on kintoneによるビルドが必要です。

### Install

「サンプルその1」以外のすべてのコードが

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
