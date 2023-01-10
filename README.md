This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Set Up

```ts
npx create-next-app@latest xxx --experimental-app --typescript --eslint
cd xxx
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

(tailwind.config.js)
```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

(/app/globals.css)
```ts
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

### Directory Construction

```
.
├── README.md
├── next-env.d.ts
├── next.config.js
├── node_modules
│   ├── ・・・
・・・
├── package-lock.json
├── package.json
├── public ・・・ 画像やフォント等の素材群
│   ├── favicon.ico
│   └── vercel.svg
│
├── app
│   ├── layout.tsx　・・・　共通レイアウトの定義ファイル
│   ├── page.tsx　・・・　初期ページのUI定義ファイル
│   └── xxx　（各ページ名） ・・・　各ページのUI定義
│　　　　　├── layout.tsx　・・・　ページ固有のレイアウト定義ファイル
│　　　　　└── page.tsx　・・・　ページ固有のUI定義ファイル
│
├── components　・・・ 汎用的なコンポーネント
│   ├── Base　・・・　基礎的な機能(名詞)そのもの、事実上の “型” を表すコンポーネント群
│   ├── Case　・・・　Baseを拡張して作られる　状況(動詞/形容詞)や状態(名詞)を表すコンポーネント群
│   ├── Common　・・・　Domain部分で共通して使われる要素を切り出したコンポーネント群
│   └── Domain　・・・　人(ロール)や物(名詞)など "関心の対象" を表すコンポーネント群
│
├── consts　・・・　中央管理したい定数群
│
├── globalStates　・・・　Recoil　で制御するステート群
│   └── xxx（各ドメイン名） ・・・　各ドメインのディレクトリ
│        ├── xxxAtoms ・・・　ステートを管理するためのデータストア群　　　　　　
│        └── xxxSelectors　　・・・　Atomのstateを加工した値を返したり、Atomのstateを加工して更新するなどの処理を可能にする関数群
│　　　　　　
├── hooks　・・・　汎用的なカスタムフック
│
└── styles
│
├── postcss.config.js
│
├── tailwind.config.js
│
└── tsconfig.json
```
