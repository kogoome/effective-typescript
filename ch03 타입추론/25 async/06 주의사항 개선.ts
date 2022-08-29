// * 개선 예제
function syncFn() {
	return '.sync'
}

async function asyncFn(): Promise<string> {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res('.async')
		}, 100)
	})
}

const cache: string[] = []
let count = 0
function SyncAsyncMixedFn() {
	count++
	if (Math.random() > 0.5) {
		cache.push(String(count) + syncFn())
		return 'sync cached'
	} else {
		const numTemp = count
		asyncFn().then((res) => {
			cache.push(String(numTemp) + res)
		})
		return 'async cached'
	}
}

console.log(SyncAsyncMixedFn()) // sync cached
console.log(SyncAsyncMixedFn()) // async cached
console.log(SyncAsyncMixedFn()) // async cached
console.log(SyncAsyncMixedFn()) // async cached
// * 함수를 실행해도 결과값의 상태가 비동기 처리과정에 따라 달라짐
console.log(cache) // [ '1.sync' ] ​
setTimeout(() => console.log(cache), 300)
// [ '1.sync', '2.async', '3.async', '4.async' ]

export default {}
