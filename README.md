# 📝 Todo App (React学習プロジェクト)

React.jsを使用したモダンなTodoアプリケーションです。

## 🌟 機能

- ✅ Todoの追加・削除・完了切り替え
- 💾 ローカルストレージでデータ永続化
- 📊 タスク統計表示（全体・完了・未完了）
- 📱 レスポンシブデザイン対応
- ✨ ホバーアニメーション

## 🛠️ 使用技術

- **React** 18.x (Hooks: useState, useEffect)
- **CSS3** (Flexbox, CSS Grid, アニメーション)
- **localStorage** (データ永続化)
- **ES6+** (Arrow Functions, Destructuring, Spread Operator)

## 🚀 セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/kouki0318/demo_app.git

# 依存関係をインストール
npm install

# 開発サーバー起動
npm start
```

## 📱 デモ

![Todo App Screenshot](https://via.placeholder.com/600x400/667eea/white?text=Todo+App+Demo)

### 主な機能
1. **タスク追加**: 入力欄にタスクを入力してEnterまたは「追加」ボタン
2. **完了切り替え**: チェックボックスでタスクの完了状態を切り替え
3. **タスク削除**: 「削除」ボタンでタスクを除去
4. **データ永続化**: ブラウザを閉じても データが保持される

## 💡 学習ポイント

このプロジェクトで習得した技術：

### React Hooks
- `useState`: 状態管理（todos, inputValue）
- `useEffect`: 副作用処理（ローカルストレージ連携）

### JavaScript ES6+
- スプレッド演算子: `[...todos, newTodo]`
- 分割代入: `const [todos, setTodos] = useState([])`
- アロー関数: `todos.map(todo => ...)`

### データ操作
- 配列メソッド: `map`, `filter`
- JSON操作: `JSON.stringify`, `JSON.parse`
- ローカルストレージAPI

## 🎯 今後の改善予定

- [ ] TypeScript導入
- [ ] コンポーネント分割
- [ ] テスト追加（Jest + React Testing Library）
- [ ] ドラッグ&ドロップ機能
- [ ] ダークモード切り替え

## 👤 作成者

**kouki0318**
- 情報系専門学校卒
- React学習中（2025年開始）
- 目標: フロントエンド開発者として転職

## 📄 ライセンス

MIT License
