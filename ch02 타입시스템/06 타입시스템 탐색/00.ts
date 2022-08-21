// ! 타입 자동 추론

// * 변수
let a = 10
let x = [1,2,3]
// number[] 타입은 제네릭으로도 표현가능
let x2 : Array<number> = [1,2,3]

// ! 튜플의 경우 타입을 명시해야 사용가능
let y:[number,number,string] = [1,2,'abc']
y[2]= 3

// * 함수
function sum(a: number, b: number) {
	return a + b
}

// * 조건추론, 타입정제
function logMessage(msg: string | null) {
	if (msg) { // :string | null
		console.log(msg) // :string
	}
}

// * 메서드 추론 제네릭 타입, 
let z = ['1','2','3']
z.slice(1).join('.')



export default {}
