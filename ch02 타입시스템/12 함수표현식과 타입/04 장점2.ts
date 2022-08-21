const responseP = fetch('/quote?by=Mark+Twain') // Type is Promise<Response>


async function getQuote() {
  const response = await fetch('/quote?by=Mark+Twain')
  const quote = await response.json()
  return quote
}
// {
//   "quote": "If you tell the truth, you don't have to remember anything.",
//   "source": "notebook",
//   "date": "1894"
// }

// * fetch가 실패하면 거절된 프로미스를 응답하지 않는 문제가 있으니 상태체크 함수를 작성
// * fetch 타입선언은 다음과같이 내장되어있음.
// declare function fetch(
//   input:RequestInfo,
//   init?:RequestInit
// ): Promise<Response>

async function checkedFetch1(input: RequestInfo, init?: RequestInit) {
	const response = await fetch(input, init)
	if (!response.ok) {
		// 비동기 함수 내에서 거절된 프로미스로 변한
		throw new Error('Request failed: ' + response.status)
	}
	return response
}
// ! 다른 함수시그니처를 참조하려면 typeof 사용
// * 내장 fetch 타입을 이용하면 다음처럼 사용가능
const checkedFetch2: typeof fetch = async (input, init) => {
	const response = await fetch(input, init)
	if (!response.ok) {
		throw new Error('Request failed: ' + response.status)
	}
	return response
}

export default {}
