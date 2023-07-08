// Extract<T, U>
// Extract<T, U>はユニオン型から指定した型だけを抽出した型を返す

// 例
type Grade = 'A' | 'B' | 'C' | 'D' | 'E'
type FailGrade = Extract<Grade, 'D' | 'E'>
