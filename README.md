# RealWorld Next.js
ブログプラットフォームを作る[RealWorld](https://github.com/gothinkster/realworld/tree/main)というOSSのプロジェクトがあります。これは実在するものと同じ機能を持つサイトを作成することで、学習したいフレームワークの技術を習得することを目的とするプロジェクトです。

そのRealWorldに則り、Medium.comのクローンサイトである[Conduit](https://demo.realworld.io/#/)のフロントエンドをNext.jsで作成したという内容です。

本リポジトリは、株式会社ユーブルが運営するサービス「アプレンティス」における学習の一環で作成したものになります。

## Conduitとは
Medium.comは、ユーザーがログインをして記事を投稿するサイトです。

Conduitはそんなサイトのクローンとして作成するので、ユーザーの登録、ログイン/ログアウト機能、記事の投稿機能などが求められます。

## 本リポジトリについて
Dockerで作成したNext.jsアプリとなります。

ルート直下にはDockerfile, compose.ymlが存在し、Next.jsはdocker-composeコマンドで起動することになります。

その他は通常のNext.jsアプリの構成と変わりません。

## 使用技術
Next.js 14.0.4

## 実装したもの
- JWTトークンを用いた認証/認可
- 他ユーザー情報の表示
- 記事の投稿/表示/編集/削除
- 投稿時にタグをつける
- お気に入り(一覧表示以外)

## 実装してないもの
- ユーザーの登録/表示/編集
- フォロー
- 記事へのコメントの投稿/編集
- タグ更新、一覧表示
- お気に入り記事の一覧表示

## 工夫した点
- お気に入りはフロント側だけ先に表示を変えて、後で整合性を確認する形で実装したので、レスポンスが早く感じる
- data fetchが必要な部分はSuspenseで囲ってスピナーを表示するようにした

## 使用方法
本リポジトリをgit cloneで取得してから、以下のコマンドを実行してください。

```
docker-compose build
docker-compose up -d
```

[Realworld API](https://github.com/I635230/realworld_api)も必要になるので、必要に応じてそちらもgit cloneしてください。