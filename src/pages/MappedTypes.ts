// Mapped Types
// インデックス型はどのようなキーも自由に設定できてしまい、アクセス時に毎回undefinedのチェックが必要
// 入力形式が決まっている場合はMappedTypeの使用を検討できる

// 主にユニオン型と組み合わせて使う
type SystemSupportLanguage = 'en' | 'fr' | 'it' | 'es'
// これをインデックス型と同じようにキー制約として使用することができる
type Butterfly = {
  [key in SystemSupportLanguage]: string
}
