// Mapped Types
// インデックス型はどのようなキーも自由に設定できてしまい、アクセス時に毎回undefinedのチェックが必要
// 入力形式が決まっている場合はMappedTypeの使用を検討できる

// 主にユニオン型と組み合わせて使う
type SystemSupportLanguage = 'en' | 'fr' | 'it' | 'es'
// これをインデックス型と同じようにキー制約として使用することができる
type Butterfly = {
  [key in SystemSupportLanguage]: string
}
// このようにdeが設定、使用できなくなる
const butterflies: Butterfly = {
  en: 'Butterfly',
  fr: 'Papillon',
  it: 'Farfalla',
  es: 'Mariposa',
  de: 'Schmetterling',
}

// Readonly<T>もこの機能で実現されている
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

// Mapped Typesには追加のプロパティが書けない(インデックス型と異なる点)
type KeyValuesAndName = {
  [K in string]: string
  //name: string これはできずエラーが出る
}

// 追加プロパティはその部分をオブジェクト型として定義した後にMapped Typesとインターセクション型を成す必要がある
// 例
type KeyValues = {
  [K in string]: string
}
type Name = {
  name: string // 追加のプロパティ
}
type KeyValuesAndName = KeyValues & Name
// 下のようにまとめることもできる
type KeyValuesAndName = {
  [K in string]: string
} & {
  name: string // 追加のプロパティ
}
