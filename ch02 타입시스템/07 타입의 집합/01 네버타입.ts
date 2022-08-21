// ! never 타입

const x: never = 12

let a: number & string // * 불가능한 타입을 추론시키면 네버타입으로 표기
a = 0

// ~ Type '12' is not assignable to type 'never'

export default {}
