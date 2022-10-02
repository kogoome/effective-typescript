// ! 반환타입의 체크가 없는 경우 1
// 로대시의 map 함수의 타입선언을 작성한다고 가정.
declare function map<U, V>(array: U[], fn: (u: U) => V): V[]
// 함수 호출 테스트 작성, 반환타입 체크가 없음.
map(['2017', '2018', '2019'], (v) => Number(v))

// ! 반환타입의 체크가 없는 경우 2
const square = (x: number) => x * x
function test(testNm: string, cb: () => void) {
	console.log('Testing name :', testNm)
	// test logic
	cb()
}
test('square a number', () => {
	square(1)
	square(2)
	// 이 테스트 코드도 실행만 하고 리턴값을 확인하지 않아서 문제
	// 반환값을 변수에 할당하여 타입체크가 필요
})

// * 반환타입을 체크
const lengths: number[] = // ! [item19 불필요한 타입선언]은 테스트코드에서 중요
	map(['john', 'paul'], (name) => name.length)
/* 
item 19) 타입스크립트가 타입을 추론할 수 있다면 타입구문을 작성하지 않는게 좋다
자동 추론된 타입과 사용자가 의도한 타입이 일치하는지 확인하기 위해서
타입을 명시하면 반환타입 테스트가 잘 구성되지만,
* 근본적인 두가지 문제가 발생
* 1. 불필요한 변수 선언이 필요
* 2. 자동추론된 타입과 사용자 선언 타입의 동일체크가 아닌 할당체크를 수행
*/

// ! 불필요한 변수선언 대신 헬퍼함수 정의
function assertType<T>(x: T) {}
// 제네릭 T가 매개변수의 타입으로 들어와야하므로
assertType<number[]>(map(['john', 'paul'], (name) => name.length))
// map함수의 리턴타입이 number[]가 나와야함이 명시
// ! 하지만 여전히 타입이 동일한지 체크하는게 아닌 number[] 타입에 할당 가능한지를 구조적 체크하는게 문제.

// * 1. 프리미티브타입의 경우
const n = 12
assertType<number>(n) // string에 12가 할당가능하기 때문에 오류 없음.

// * 2. 객체의 경우
const beatles = ['john', 'paul', 'george', 'ringo']
assertType<{ name: string }[]>(
	map(beatles, (name) => ({
		name,
		inYellowSubmarine: name === 'ringo',
	}))
) // map의 리턴타입은 {name:string, inYellowSubmarine:boolean}인데 서브마린속성을 무시함.

// * 3-1. 함수의 경우
const add = (a: number, b: number) => a + b
assertType<(a: number, b: number) => number>(add) // OK

const double = (x: number) => 2 * x
assertType<(a: number, b: string) => number>(double) // OK
// * 타입스크립트의 함수는 매개변수가 더 적은 타입에 할당 가능

const triple = (a: number, b: number, c: number) => a + b + c
assertType<(a: number, b: string) => number>(triple) // 매개변수가 많아서 불가

// * 3-2. 매개변수 할당가능성 예제
// map(array, (name, index, array)=>{/* ... */ })
function cbParams(name:string, cb:(a:number, b:number)=>void) {
}
function cb1(a:number) {console.log(a)}
function cb2(a:number, b:number) {console.log(a+b)}
function cb3(a:number, b:number, c:number) {console.log(a+b+c)}
cbParams('one', cb1) 
cbParams('two', cb2) 
cbParams('three', cb3) 


export default {}
