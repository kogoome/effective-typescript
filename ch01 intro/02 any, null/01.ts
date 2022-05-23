// ! tsc에 any 타입 오류발생 설정을 주면 아래 인수가 any타입이라고 오류를 내보내준다.
// tsc : {"noImplicitAny":true}

function add(a, b) {
	return a + b
}
add(10, null)

export default {}
