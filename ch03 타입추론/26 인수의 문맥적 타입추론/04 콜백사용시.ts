function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
  fn(Math.random(), Math.random())
}


// * 정의된 콜백함수의 시그니처의 타입문맥을 참조하여
callWithRandomNumbers((a, b) => {
  // * 사용되는 영역의 타입을 추론
  a // Type is number
  b // Type is number
  console.log(a + b)
})

// * 콜백함수를 상수로 뽑아내면 문맥이 소실
const fn = (a, b) => {
	// ~    Parameter 'a' implicitly has an 'any' type
	//    ~ Parameter 'b' implicitly has an 'any' type
	console.log(a + b)
} // * 매개변수에 직접 타입을 입력하여 해결가능
callWithRandomNumbers(fn)

// ! 결론 : 리터럴로 사용하거나, 선언 단언을 활용하고. 필요한 인수가 상수일때는 as const 를 사용하자.
export default {}
