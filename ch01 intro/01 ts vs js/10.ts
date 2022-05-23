// ! 하지만 자바스크립트에서 정상적으로 동작하는 코드지만 오류를 보여주기도 한다.

const a = null + 7 // Evaluates to 7 in JS
// ~~~~ Operator '+' cannot be applied to types ...
const b = [] + 12 // Evaluates to '12' in JS
// ~~~~~~~ Operator '+' cannot be applied to types ...
// ! 타입스크립트는 인수조건을 해석해서 경고를 표시해준다.
alert('Hello', 'TypeScript') // alerts "Hello"
// ~~~~~~~~~~~~ Expected 0-1 arguments, but got 2

export default {}
