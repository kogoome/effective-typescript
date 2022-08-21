// ! 속성접근자

interface Person {
	first: string
	last: string
}
// * 인덱스 위치에는 유니온 타입과 기본형등 모든 타입을 사용가능
// * 속성접근자는 아이템 14에서 더 자세히 다룸
type PersonEl = Person['first' | 'last'] // string

type Tuple = [string, number, Date]
type A1 = Tuple[1]
type A2 = Tuple[number] // string | number | Date (number가 0, 1, 2 중에 하나만 올 수 있으니까)
type A3 = Tuple[Date]

export default {}
