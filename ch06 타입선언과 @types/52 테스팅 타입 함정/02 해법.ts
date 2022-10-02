// ! 해법 1. double함수의 경우

const double = (x: number) => 2 * x
// * 매개변수 타입 테스트
const p: Parameters<typeof double> = null!
assertType<[number, number]>(p)

// * 리턴 타입 테스트
const r: ReturnType<typeof double> = null!
assertType<number>(r) // OK

// ! 해법 2. map의 경우

const beatles = ['john', 'paul', 'george', 'ringo']
function assertType<T>(x: T) {
	console.log(x)
}
declare function map<U, V>(
	array: U[],
	fn: (this: U[], u: U, i: number, array: U[]) => V
): V[]

assertType<number[]>(
	map(beatles, function (name, i, array) {
		assertType<string>(name)
		assertType<number>(i)
		assertType<string[]>(array)
		assertType<string[]>(this)
		return name.length
	})
)

export default {}
