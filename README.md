## 環境構築

1. node.jsのバージョンをプロジェクトに合わせる

```bash
# nを使用している場合
n auto
```

2. パッケージのインストール

```bash
npm i
```

3. 環境変数の設定
   .env.developmentをlocal環境変数用ファイルにコピーし、空になっている部分を設定する。

```bash
cp .env.development .env.development.local
```

4. Devサーバーの立ち上げ

```bash
npm run dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
