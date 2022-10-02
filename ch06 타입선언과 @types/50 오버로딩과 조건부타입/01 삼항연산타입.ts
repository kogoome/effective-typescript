// ! 조건부타입 (삼항연산타입)

{
	// * 함수 시그니처 선언
	function double(x: number | string): number | string
	// * 함수 구현
	function double(x: any) {
		return x + x
	}
	const num = double(12) // * string | number
	const str = double('x') // * string | number
}
{
	// * 제네릭 사용
	function double<T extends number | string>(x: T): T
	function double(x: any) {
		return x + x
	}
	const num = double(12) // * Type is 12 -> "24" or number
	const str = double('x') // * Type is "x" -> "xx"
	// * 결과 타입을 제대로 반영하지 못함.
}
{
	// * 오버로딩을 이용한 함수 시그니처 선언
	function double(x: number): number
	function double(x: string): string
	function double(x: any) {
		return x + x
	}

	const num = double(12) // Type is number
	const str = double('x') // Type is string

	function f(x: number | string) {
		return double(x)
	}
}
{
	// ! 제네릭과 조건부타입을  사용한 개선
	function double<T extends number | string>(
		x: T
	): T extends string ? string : number // ! 판단못하는 경우는 개별타입의 유니온으로 일반화하여 반환
	/* 
	* 유니온 타입 추론과정
			(number|string) extends string? string:number
	->	number extends string ? string:number |
			string extends string ? string:number
	-> 	number|string
	 */
	function double(x: any) {
		return x + x
	}
	const num = double(12) // * number
	const str = double('x') // * string 정상출력

	// function f(x: string | number): string | number
	function f(x: number | string) {
		return double(x) // * 오류 없음.
	}
}
export default {}
