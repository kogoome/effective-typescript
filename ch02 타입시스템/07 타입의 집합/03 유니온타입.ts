// ! 유니온 타입 | 연산자
// * 집합 A 와 집합 B의 합집합의 원소는 A집합에 포함되거나 B집합에 포함된다.
// * or 연산자를 사용하여 유니온

type AB = 'A' | 'B'
type AB12 = 'A' | 'B' | 12

let a: AB12 = 'A'
a = 'B'
a = 12

// * or연산자는 합집합인가 ?
type X = { // 집합
  a:number // 집합의 조건
  b:number
}
type Y = {
  b:number
  c:number
}


// * 객체의 경우 오류는 안나지만
let x :X|Y = {
  a:0, // 값 , 원소
  b:0, // 값 
  c:0
}
let x2 :X&Y = {
  a:0,
  b:0,
  c:0
}
// * 자동완성에서 속성을 표기해주지 않음. 즉 숨겨진 오류로 이해
x.

export default {}
