// Exclude<T, U>
// Exclude<T, U>はユニオン型から指定したUを取り除いたユニオン型を返す

// 例
type Grade = 'A' | 'B' | 'C' | 'D' | 'E'
type PassGrade = Exclude<Grade, 'E'>
// 上と下は同じ意味
type PassGrade = 'A' | 'B' | 'C' | 'D'
