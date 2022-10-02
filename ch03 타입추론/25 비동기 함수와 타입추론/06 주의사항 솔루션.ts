// ! async 를 사용하면 혼용우려 없이 항상 비동기로 작동
const _cache: { [url: string]: string } = {}
async function fetchWithCache(url: string) {
	if (url in _cache) {
		return _cache[url]
	}
	const response = await fetch(url)
	const text = await response.text()
	_cache[url] = text
	return text
}

let requestStatus: 'loading' | 'success' | 'error'
async function getUser(userId: string) {
	requestStatus = 'loading'
	const profile = await fetchWithCache(`/user/${userId}`)
	requestStatus = 'success'
}
