const url1 = '1'
const url2 = '2'
const url3 = '3'

// ! 프로미스
// * 코드작성이 콜백보다 수월, 콜백보다는 타입추론에 용이
function pro() {
	// 제네릭에 언노운. 리졸브 리젝트 타입 지정을 하지 않아서 생기는 문제인듯.
	return new Promise((resolve, reject) => {
		// processing...
		const random = Math.random()
		const result: string = random > 0 ? 'processing complete' : ''
		const rejMsg: string = 'rejected'
		// * 여기서 타입 지정해도 함수의 리턴타입 추론은 소용이 없음
		result ? resolve(result) : reject(rejMsg)
		/*
		 * 함수의 리턴타입으로 리졸브 값의 타입을 지정해주면 타입체크 발생.
		 * 함수의 리턴타입을 자동추론하게 하려면 프로미스 내부 익명함수에서 매개함수의 타입을 디테일하게 조정해줘야함.
		 * resolve: (value: string ) => void,
		 * reject: (value: string ) => void
		 * 불편
		 */
	})
}
function pro2() {
	// * 리턴타입 추론
	return new Promise(
		// * 매개변수 타입 지정에 의한
		(resolve: (value: string) => void, reject: (value: string) => void) => {
			const random = Math.random()
			const result: string = random > 0 ? 'processing complete' : ''
			const rejMsg: string = 'rejected'
			result ? resolve(result) : reject(rejMsg)
		}
	)
}
pro()
	.then((result) => console.log(result))
	.catch((error) => console.log(error))

// * 책 예제
const page1Promise = fetch(url1)
page1Promise
	.then((response1) => {
		return fetch(url2)
	})
	.then((response2) => {
		return fetch(url3)
	})
	.then((response3) => {
		// ...
	})
	.catch((error) => {
		// ...
	})




export default {}
