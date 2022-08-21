let age: number
age = '12'
// ~~~ Type '"12"' is not assignable to type 'number'
age = '12' as any // OK


// ! 함수 시그니처
type C = (arg:number) => number
const fn : C = (x) => x

function calculateAge(birthDate: Date): number {
  // COMPRESS
  return 0
  // END
}

let birthDate: any = '1990-01-19'

// ! any 타입은 함수 시그니처를 무력화
// ! any 타입은 다른 타입들의 수퍼셋
calculateAge(birthDate) // OK

export default {}
