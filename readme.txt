TypeScript+Expressのベース環境作成手順

【作成するディレクトリ構成】
project
  dist
  src
    routes

【作成手順】

１．ディレクトリを作成
mkdir typeExpBase
cd typeExpBase

mkdir dist
mkdir src
mkdir src/routes

２．初期化
yarn init -y
git init

.gitignoreファイルを作成
/node_modules/

３．必要なライブラリをインストール

（１）TypeScript
yarn add typescript --dev
yarn add ts-node --dev

（２）Express
yarn add express @types/express

（３）その他
yarn add express-session @types/express-session
yarn add http-errors @types/http-errors


４．tsconfig.jsonの作成
tsc --init

作成後、tsconfig.jsonを修正

{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true, ← とりあえず置き
        "noImplicitAny": true, ← とりあえず置き
        "module": "commonjs",
        "target": "es6"
    },
    "include": [
        "./src/**/*"
    ]
}

５．ESLintの設定
yarn add --dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier eslint-plugin-prettier

.eslintrc.json を追加
npx eslint --init

以下を選択
To check syntax, find problems, and enforce code style
JavaScript modules (import/export) 
None of theses
（Reactを使う場合はReactを選択）
Does your project use TypeScript? yを選択
? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)  
BrowserとNodeを選択
Use a popular style guide
Airbnb (https://github.com/airbnb/javascript)
? What format do you want your config file to be in?  JSONを選択
? Would you like to install them now with npm? (Y/n) nを選択

ファイルを編集

追加パッケージをインストール
yarn add --dev eslint-config-airbnb-base eslint-plugin-import




５．起動スクリプトの作成
app.tsファイルを作成する

routes/index.tsを作成する

６．package.jsonを追加
以下のスクリプトを追加する

  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "debug": "ts-node src/index.ts"
  },

