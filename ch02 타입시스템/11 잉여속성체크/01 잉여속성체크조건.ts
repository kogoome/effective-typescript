// ! 잉여속성의 체크
// * 잉여속성의 체크는 할당가능성과 다른개념
// * 잉여속성체크는 엄격한 객체 리터럴 체크라고도 불림.
// * 잉여속성의 체크는 객체리터럴 또는 인수전달에서만 사용

interface Room {
  numDoors: number
  ceilingHeightFt: number
}
// * 객체 리터럴 직접 할당시 속성체크
const r: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
}

// * 변수 매개시 타입의 포함관계에 의해 선언 가능(구조적타입체크)
const obj1 = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present', // 잉여속성
}
const r2: Room = obj1 // 타입할당가능
const obj2 = {
	numDoors: 2,
	// ceilingHeightFt: 10, 부재속성
}
const r3: Room = obj2 // 타입할당불가

// * 매개변수 입력시 속성체크
interface Options {
	title: string
	darkMode?: boolean
}
function createWindow(options: Options) {}


createWindow({
	title: 'Spider Solitaire',
	darkmode: true,
})

// * 마찬가지로 변수에 할당하여 사용시 속성 체크 하지 않고 사용가능성만 확인
let mode1 = {title:'sand man', dark:true}
let mode2 = {content:'lorel ...'}
createWindow(mode1)
createWindow(mode2)

// * 객체리터럴이 아니면 잉여속성체크를 하지 않음.
const o1: Options = document // OK
const o2: Options = new HTMLAnchorElement() // OK

// * 타입 단언문을 사용할 때 잉여속성체크가 적용되지 않음.
const o3: Options = {title:"next",content:"lorel..."} as Options

export default {}
