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

// * async await을 사용하면 원하는 결과값을 얻을 수 있음

async function consol() {
	console.log(await SyncAsyncMixedFn())
	console.log(await SyncAsyncMixedFn())
	console.log(await SyncAsyncMixedFn())
	console.log(await SyncAsyncMixedFn())
	console.log(cache)
}
consol()


export default {}
