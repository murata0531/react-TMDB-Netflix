# react-TMDB-Netflix

環境

React

node 16

TMDB

コンテナ作成

```
$ make init
```

コンテナとイメージ破棄

```
$ make destory
```

コンテナに入る


構築

```
$ make init
```

# 注意

.envファイルの ` DB_HOST ` の項目は ` db ` にする

mysqlのユーザやパスワードは ` mysql/Dockerfile ` に記述してある

詳細なコマンドは` Makefile`を確認
