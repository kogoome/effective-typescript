interface Person {
	name: string
}

// ! 타입 선언 type declaration
// * 속성을 꼼꼼히 검사 - 속성의 부재, 잉여속성
const alice: Person = { name: 'Alice' } // Type is Person
const a2: Person = {}
const a1: Person = { name: 'a', age: 20 }

// ! 타입 단언 type assertion
const bob = { name: 'Bob' } as Person // 객체의 부분집합 Person
const b1 = {} as Person
const b2 = { name: 'a', age: 20 } as Person
const b3 = 3 as Person

// ! 잘 사용되지 않는 타입단언 (리액트 컴포넌트 태그와 유사하기 때문에 잘 사용하지 않고 jsx에서 사용불가)
const c1 = <Person>{}

// ? as 키워드는 추론된타입의 부분집합으로 단언이 가능한듯. 부분집합이 아니라면 단언 불가?
const a = 12 as string
const b = 23 as 1

export default {}
