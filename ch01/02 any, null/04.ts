// ! any 타입을 추론하지 않게 타입을 명시하면 가독성 생산성에 도움이 된다.

// tsConfig: {"noImplicitAny":true}

function add(a: number, b: number) {
	return a + b
}

export default {}
