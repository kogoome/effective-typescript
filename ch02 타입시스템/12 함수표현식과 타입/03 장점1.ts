// ! 함수타입사용의 장점
{
  // * 시그니처가 같지만 용도가 다른 함수들을
  function add(a: number, b: number) {
    return a + b
  }
  function sub(a: number, b: number) {
    return a - b
  }
  function mul(a: number, b: number) {
    return a * b
  }
  function div(a: number, b: number) {
    return a / b
  }
}

{ 
  // * 같은 함수타입으로 통합사용 가능
  type BinaryFn = (a: number, b: number) => number
  // * 매개변수와 리턴타입이 추론됨.
  const add: BinaryFn = (a, b) => a + b
  const sub: BinaryFn = (a, b) => a - b
  const mul: BinaryFn = (a, b) => a * b
  const div: BinaryFn = (a, b) => a / b
}

// * 리액트는 MouseEvent 타입 대신 함수 전체에 적용가능한 MouseEventHandler 타입을 제공.
// * 라이브러리를 만든다면 공통 콜백함수를 위한 타입선언하는게 좋음.
export default {}
