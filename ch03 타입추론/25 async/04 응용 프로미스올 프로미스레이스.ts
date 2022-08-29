function fetchURL(url: string, cb: (response: string) => void) {
	// 콜백 함수 -> 실행시 플랫폼으로 전달 연산처리
	cb(url)
}

const url1 = '1'
const url2 = '2'
const url3 = '3'

// ! Promise.all 병렬처리시 활용
// * 리턴타입이 배열로 나타남
async function fetchPages2() {
	// * iterable 한 객체(ex. array)를 인수로 받고 리턴
	// const result = await Promise.all([
	//   fetch(url1),
	// 	fetch(url2),
	// 	fetch(url3),
	// ])
	// return result
	// * 구조분해할당 찰떡
	const [response1, response2, response3] = await Promise.all([
		fetch(url1),
		fetch(url2),
		fetch(url3),
	])
	return [response1, response2, response3]
	// * Promise.all 안에 모든 비동기함수가 처리완료된 후 구조분해당 작동.
}

// 이를 콜백을 사용하려면
function fetchPagesCB() {
	let numDone = 0
	const responses: string[] = []
	const done = () => {
		const [response1, response2, response3] = responses
		// ...
	}
	const urls = [url1, url2, url3]
	urls.forEach((url, i) => {
		fetchURL(url, (r) => {
			responses[i] = url
			numDone++
			if (numDone === urls.length) done()
		})
	})
}
// 코드도 길어지고 가독성이 떨어질 뿐만 아니라 then 체인을 사용하기 어려움. 때문에 done 함수를 만들어서 랭스가 만족되면 함수작동 명령

// ! Promise.race 첫번째 처리될 때 완료 작동
// * 리턴타입이 하나의 리스폰스로 나타남
async function fetchPages3() {
	// * iterable 한 객체(ex. array)를 인수로 받고 리턴
	const result = await Promise.race([fetch(url1), fetch(url2), fetch(url3)])
	return result
	// * Promise.race 안에 비동기함수를 모두실행시키고 경주(race)에서 1등한 결과만 리졸브, 리턴
}

// * 책 예제의 경우
function timeout(ms: number): Promise<never> {
	return new Promise((resolve, reject) => {
		setTimeout(() => reject('timeout'), ms)
	})
	//* setTimeout은 이미 내장 비동기함수지만 리졸브 리젝트를 위해 프로미스로 래핑
}
// * 이 함수 리턴타입은 본래 Response | never, 유니온타입으로 구성되어져야 하지만, never는 공집합이므로 연산결과로서 Response 표기
async function fetchWithTimeout(url: string, ms: number) {
	return Promise.race([
		fetch(url), // 리턴타입이 response
		timeout(ms), // 리턴타입이 never
	])
}
