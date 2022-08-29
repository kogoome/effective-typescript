// * 리턴타입에서 Promise<Promise<T>> 와 같은 중첩래핑은 일어나지 않음.
async function getJSON(url: string) {
	const response = await fetch(url)
	const jsonPromise = response.json() // Type is Promise<any>
	return jsonPromise
}

export default {}
