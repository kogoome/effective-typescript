// ! 하나의 함수에 동기 비동기 혼용 금지
// * 책 예제. 복잡함. 실행해서 확인하는 코드가 아님

// 비동기 함수
function fetchURL(url: string, cb: (response: string) => void) {
	cb(url) 
}

const _cache: { [url: string]: string } = {} // 인덱스 시그니처 사용
function fetchWithCache(url: string, callback: (text: string) => void) {
	if (url in _cache) {
		callback(_cache[url]) // 동기 호출
	} else { // 비동기 호출
		fetchURL(url, (text) => {
			_cache[url] = text
			callback(text)
		})
	}
}
// * 겉보기에 멀쩡해 보이지만 사용하기가 어려워짐.

let requestStatus: 'loading' | 'success' | 'error'
function getUser(userId: string) {
	fetchWithCache(`/user/${userId}`, (profile) => {
    // ? 프로필값 반환처리로직 . 어떻게? rxjs라도 써야할듯???
		requestStatus = 'success'
	})
	requestStatus = 'loading'
}

getUser('wis') 
/* 
최초 요청시. 함수 내부에 실행함수인 
  fetchWithCache(...)
  requestStatus = 'loading'가 콜스택에 순서대로 쌓이게 됨.
콜스택에서 fetchWithCache()를 처리할건데, 조건문에 의해 캐쉬객체가 비어있으므로, 비동기함수인 fetchURL(...)을 플랫폼(브라우저 웹api)에 전달, api에 따라 병렬처리.
비동기 함수 fetchURL(...)는 콜스택에서 비워졌으므로 
  requestStatus = 'loading' 가 실행, 명령이 콜스택이 비워짐

한편 플랫폼에서 fetchURL(url, cb) 를 실행하는데, 
입력인수로 전달받은 url 값이 `/user/wis`이고, 이를 콜백함수(cb)의 인수로 재전달하여 실행하는데, 이때 
(text) => {
  _cache[url] = text
  callback(text)
}
cb 함수에 의해 캐시에 `/user/wis`:`/user/wis` 를 저장,
fetchWithCache(url, callback)에서 입력된 callback함수의 입력값으로 cb함수의 인수(text)를 전달실행하게 된다.

(profile) => {
  requestStatus = 'success'
}
이 callback 함수에 전달된 프로필값으로 `/user/wis`를 전달받고
요청상태를 성공처리.


두번째 이상 요청시 캐시에 저장된 값을 callback함수의 인수로 전달, 요청상태 성공처리되지만, 이는 동기함수로 작동하기 때문에 콜스택에서 한방에 처리되고, 이후 따라오는 	requestStatus = 'loading'에 의해 요청상태가 로딩처리되는 문제.
*/



export default {}
