interface Person {
  name: string
}

// *1 map 함수 내 타입을 단언으로 하면
const people = ['alice', 'bob', 'jan'].map(name => ({ name } as Person)) // Type is Person[]


// *2 단언은 속성을 제대로 검사하지 않기 때문에 오류를 정확하게 전달하지 않음
const people2 = ['alice', 'bob', 'jan'].map(name => ({} as Person))

// *3 변수를 통해 타입을 선언할 수 있지만
const people3 = ['alice', 'bob', 'jan'].map(name => {
  const person: Person = { name }
  return person
}) // Type is Person[]

// *4 리턴값의 타입 선언을 통해 해결할 수 있음 -> 추천
const people4 = ['alice', 'bob', 'jan'].map((name): Person => ({ name })) // Type is Person[]

// *5 변수에 타입을 명시하여 추론하게 함. 
// ? 속성부재는 오류추적가능하나, 추가된 속성은 오류로 나타내지 않음(구조적 타입체크) -> 비추천
const people5: Person[] = ['alice', 'bob', 'jan'].map(
	(name) => ({ name, age:1 })
)
// * 추가된 속성의 경우 자동완성을 지원하지 않음. Person타입이기 때문에 당연
people5[0].

export default {}

