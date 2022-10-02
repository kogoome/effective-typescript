// ! dtslint

/* 
dtslint 는 특별한 형태의 주석으로 타입이 동작함.
npm i dtslint
어떻게 쓰는지 모르겟다.
*/

declare function map<U, V>(array: U[], fn: (u: U) => V): V[]
const beatles = ['john', 'paul', 'george', 'ringo']
map(
	beatles,
	function (
		name, // $ExpectType string
		i, // $ExpectType number
		array // $ExpectType string[]
	) {
		this // $ExpectType string[]
		return name.length
	}
) // $ExpectType number[]

export default {}
