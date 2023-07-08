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
