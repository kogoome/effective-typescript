// ! typeof

interface Person {
	first: string
	last: string
}
const p: Person = { first: 'Jane', last: 'Jacobs' }
//    -           --------------------------------- Values
//       ------ Type
function email(p: Person, subject: string, body: string): Response {
	//     ----- -          -------          ----  Values
	//              ------           ------        ------   -------- Types
	// COMPRESS
	return new Response()
	// END
}
// ! typeof 와 타입
console.log(typeof 'a') // string
console.log(typeof 1) // number
console.log(typeof {}) // object

// * 타입에 할당
type T1 = typeof p // Type is Person
type T2 = typeof email // 함수시그니처
// Type is (p: Person, subject: string, body: string) => Response

// * 값에 할당
const v1 = typeof p // Value is "object"
const v2 = typeof email // Value is "function"
// ? typeof 의 리턴값으로 나오는 타입들을 보여줌.
// ? typeof 타입의 타입을 보여줘야 하기 때문이 아닐까
// ? 런타임이 실행되지 않았기 때문에 가능한타입들이 모두 표기

console.log(typeof (typeof p));
export default {}
