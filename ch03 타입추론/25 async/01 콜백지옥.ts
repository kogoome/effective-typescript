function fetchURL(url: string, cb: (response: string) => void) {
	// 콜백 함수 -> 실행시 플랫폼으로 전달 연산처리
	cb(url)
}
// 힙영역에 저장
const url1 = '1'
const url2 = '2'
const url3 = '3'

// ! 콜백지옥
/* 
* 가독성 저하
* 타입추론에 불리
*/
fetchURL(url1, function (response1) {
	fetchURL(url2, function (response2) {
		fetchURL(url3, function (response3) {
			// ...
			console.log(1)
		})
		console.log(2)
	})
	console.log(3)
})
console.log(4)

// Logs:
// 4
// 3
// 2
// 1


export default {}
