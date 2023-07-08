// Exclude<T, U>
// Exclude<T, U>はユニオン型から指定したUを取り除いたユニオン型を返す

// 例
type Grade = 'A' | 'B' | 'C' | 'D' | 'E'
type PassGrade = Exclude<Grade, 'E'>
// 上と下は同じ意味
type PassGrade = 'A' | 'B' | 'C' | 'D'
// 第2引数をユニオン型にすると、複数の方を同時に取り除くこともできる
type PassGrade = Exclude<Grade, 'D' | 'E'>

// UはTの部分集合である必要はないので,タイポなどには注意しないといけない

// 元のユニオンタイプに新たなタイプが追加された場合、Excludeの第2引数も変更しないといけない
type PullRequestState = 'draft' | 'reviewed' | 'rejected' | 'testFailed'
type MergeableState = Exclude<PullRequestState, 'draft' | 'rejected'>
