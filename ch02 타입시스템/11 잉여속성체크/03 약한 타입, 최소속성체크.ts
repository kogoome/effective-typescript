// ! weak type 옵셔널 프로퍼티만 가지는 경우, 별도의 타입체크기능 - 공통속성 존재여부
// * 약한 타입의 경우 모든 속성이 옵셔널하기 때문에 모든 객체를 포함할 수 있으나
// * 이 경우 공통된 속성이 있는지 별도의 체크를 수행 - 책 64p 가운데 문단 첫째줄
// * 공통속성이 존재하지 않고 다른속성이 존재하면 오류를 나타냄
// * 빈객체는 속성 자체가 부재하기 때문에 공통속성체크 회피

interface LineChartOptions {
	logscale?: boolean
	invertedYAxis?: boolean
	areaChart?: boolean
}

// * 타입리터럴 - 잉여속성체크
const o0: LineChartOptions = {}
const o1: LineChartOptions = { a: 122 } // 잉여속성을 체크하여 오류표시
const o2: LineChartOptions = { a: 122, logscale: true }
// * 변수매개 - 잉여속성체크 부재. 핵심 속성 이외의 모든 속성을 허용
const opts3 = {}
const o3: LineChartOptions = opts3 // 빈객체와 할당가능성
// NOTE 이론적으로 빈객체가 할당 가능하면 모든 객체가 허용되야 함.
// 이런 사태를 방지하기 위해 속성이 존재한다면 공통속성이 있는지 별도로 체크
const opts4 = { a: 122 } // 속성이 존재하나 공통속성이 부재. 오류
const o4: LineChartOptions = opts4
const opts5 = { a: 122, logscale: true }
const o5: LineChartOptions = opts5 // 속성이 존재하고 공통속성이 존재. 통과

// ! 복습, 속성의 포함관계와 할당가능성 - 구조적 타입체크
let a: string | number = 3 // 수퍼셋은
let a2: string = a // 섭셋에 할당 불가능

let b: string = '3' // 섭셋은
let b2: string | number = b // 수퍼셋에 할당가능

type C = { a: number; b: string }
type CSubset = { a: number; b: string; c: boolean }

let c: C = { a: 1, b: '2' }
let c2: CSubset = c

let d: CSubset = { a: 1, b: '2', c: true }
let d2: C = d

type EmptySet = {}
type EmptySetSubset = { a: number } // 공집합의 부분집합
type EveryStringKeySet = { [key:string]:unknown}

let e: EmptySetSubset = { a: 1 }
let e2: EmptySet = e 

let e3: EveryStringKeySet = { a:1, b:'2', c:true, d:null}
let e4: EmptySet = e3 // 공집합을 할당가능하다면 모든 객체타입을 매개한 변수 또한 할당가능

export default {}
