// ! 기본형타입
/* 
 * 기본형 타입
 * string, number, boolean, bigint, symbol, null, undefined
 * 래퍼객체
 * String, Number, Boolean, Bigint, Symbol (null, undefined 는 객체래퍼가 부재)
 * 
 * 기본형은 어떻게 메서드를 실행하는가
 */



// ! 기본형 타입은 메서드를 가지고 있지 않다.
// * string에는 메서드가 없지만 String에는 메서드가 있고
// * 기본형과 객체래퍼는 자유롭게 변환한다.

let a1 = String('test') // 기본형
let a2 = new String('test') // 래퍼객체
let a3 = String
let a4 = String.prototype


// ! string 메서드 작동방식
// * string 타입을 String타입으로 래핑하고 메서드 실행 후, 생성객체제거
'primitive'.charAt(3) // m
let temp = new String('primitive')
temp.charAt(3)


// * 이 동작을 관찰하려면 몽키패치(게릴라->고릴라->몽키)를 사용
const originalCharAt = String.prototype.charAt
String.prototype.charAt = function (pos) {
	console.log(this)
	// String 'test' { [Iterator]  0: 't', 1: 'e', 2: 's', 3: 't' } 
  console.log(typeof this);
  // 'object' 
	return originalCharAt.call(this, pos)
}
console.log('test'.charAt(2)) // s

// ! 비동일성

console.log('hello'=== new String('hello')) // false
console.log(new String('hello')=== new String('hello')) // false

// ! 객체 자동삭제

/* 
  terminal : node
  > x='hello'
  'hello'
  > x.lang = 'en'
  'en'
  > x.lang
  undefined
 * x가 String 객체로 변환되어 속성을 저장후 저장된 객체가 버려져서 undefined가 출력
*/

function getStringLen(foo: String) {
	return foo.length
}

// ! 기본형 타입은 객체래퍼 타입의 할당을 허용 === 기본형은 객체래퍼로 자동변환가능
getStringLen('hello') // OK
getStringLen(new String('hello')) // OK

function isGreeting(phrase: String) {
  let result = ['hello', 'good day'].includes(phrase)
  // * String 객체를 string 기본형에 그냥 사용할 수 없음.
  result = ['hello', 'good day'].includes(phrase.toString())
	// * includes 메서드는 string 타입의 인수가 필요한데,
	// * String 래퍼객체를 주면 오류를 발생
  // * String.toString() -> string 굳이 이렇게 사용할 필요가 없음. 
  // * 타입선언시에는 객체래퍼를 사용하지 않고 기본형인 string을 사용할 것,
  return result
	// * String -> string(할당불가 : toString을 통한 수동변환), string -> String(할당가능 : 자동변환)
}

// * 객체래퍼를 타입선언 가능하나. 굳이 이렇게 사용할 필요가 없음. 
// * 소문자를 사용하여 기본형 타입을 사용할것.
const s: String = 'primitive'
const n: Number = 12
const b: Boolean = true

console.log(BigInt(123))
console.log(new BigInt(1234))
console.log(new String(123))
// ? 빅인트는 뉴키워드를 사용하지 않게 만들어놓음


export default {}
