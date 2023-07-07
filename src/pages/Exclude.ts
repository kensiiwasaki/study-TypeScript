// Exclude<T, U>
// Exclude<T, U>はユニオン型から指定したUを取り除いたユニオン型を返す

// 例
type Grade = 'A' | 'B' | 'C' | 'D' | 'E'
type PassGrade = Exclude<Grade, 'E'>
