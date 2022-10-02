const url1 = '1'

// ! await
async function fetchPages() {
	try {
		const response1 = await fetch(url1)
		const response2 = await fetch(url2)
		const response3 = await fetch(url3)
		// * await 처리된 함수가 reject되면 예외 스로잉
		return [response1, response2, response3]
	} catch (e) {
		// ...
	}
}
/*
 * 동기함수를 비동기함수로 강제
 * async 함수는 항상 프로미스를 반환하도록 강제
 * 가능하다면 promise보다 async/await 함수를 사용하는게 좋음
 * 불편한 resolve에 비해 async/await 함수의 리턴타입은 자동추론이 일반함수만큼이나 용이함
 * 일반적으로 더 간결하고 직관적인 코드 작성
 */

// !  * async 함수는 항상 프로미스를 반환하도록 강제
// * 함수 실행 순서를 조정하거나, 멀티스레드 병렬처리를 위해 사용할 수 있음
// * 선언식에서 사용
async function getNumber2() {
	return 42
}
// * 표현식에서 사용
const getNumber3 = async () => 42 // Type is () => Promise<number>

// * 프로미스를 직접 이용하면
const getNumber = () => Promise.resolve(42)


// ! 참고
// * 최신문법은 async 없이 비동기 함수를 최상위 수준에서 await 호출하는게 가능
await fetch(url1)
// * 이전에 사용하던 방법 async 함수를 래핑해서 사용
async function possibleAwait(url: string) {
	return await fetch(url)
}
possibleAwait(url1)

export default {}
