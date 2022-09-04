function flatArr(arr: any[]) {
	let tempArr = [...arr]
	let result: any[] = []
	let deepBool = false
	flat()

	function flat() {
		deepBool = false
		result = []
		tempArr.forEach((x) => {
			if (x[0]) {
				result = [...result, ...x]
				deepBool = true
			} else {
				result.push(x)
			}
		})
		tempArr = result
		if (deepBool) flat()
	}

	return result
}

console.log(flatArr([1, [[2]], [[3], 4, [5]]]))
