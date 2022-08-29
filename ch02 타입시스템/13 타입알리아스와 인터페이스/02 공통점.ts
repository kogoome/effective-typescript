// ! 타입알리아스와 인터페이스 사용상의 공통기능
type TState = {
	name: string
	capital: string
}
interface IState {
	name: string
	capital: string
}

// * 어느 정의를 사용하던 리터럴객체의 잉여속성을 체크
const wyoming1: TState = {
	name: 'Wyoming',
	capital: 'Cheyenne',
	population: 500_000,
}
const wyoming2: IState = {
	name: 'Wyoming',
	capital: 'Cheyenne',
	population: 500_000,
}

// * 인덱스 시그니처
type TDict = { 
  [key: string]: string 
}
interface IDict {
	[key: string]: string
}

// * 함수타입
type TFn = (x: number) => string // * 함수 시그니처
interface IFn {
  (x: number): string // * 함수시그니처
} // * 콜시그니처

const toStrT: TFn = x => '' + x // OK
const toStrI: IFn = x => '' + x // OK

// * 콜시그니처 (자바스크립트의 함수는 일급객체로 속성 부여, 접근이 가능)
type TFnWithProperties = {
	(x: number): number
	prop: string
}
interface IFnWithProperties {
	(x: number): number
	prop: string
}

// * 제네릭
type TPair<T> = {
	first: T
	second: T
}
interface IPair<T> {
	first: T
	second: T
}

// * 확장(서브타입, 조건강화)
interface IStateWithPop extends TState {
	population: number
}
type TStateWithPop = IState & { population: number }

// * 클래스 구현
class StateT implements TState {
	name: string = ''
	capital: string = ''
}
class StateI implements IState {
	name: string = ''
	capital: string = ''
}
