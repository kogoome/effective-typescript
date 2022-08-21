// ! extends
// * 확장인터페이스는 서브타입을 만든다.

interface Person {
  name: string
}
interface PersonSpan extends Person {
  birth: Date
  death?: Date
}

// * PersonSpan 타입은 속성으로 name, birth, death를 모두 가지고 있고
// * 이는 Person & Lifespan 타입으로 이해할 수 있다.
// * 수학적으로도 Person 타입에 비해 원소가 아닌 조건이 많아졌고, 강조건이라고 볼 수 있다. 

// * 자연수,    자연수이고 10보다 작은 수,  자연수이고 10보다 작고 소수
// * superset <--------------------> subset
// * week     <--------------------> strong
// * &조건적음  <--------------------> &조건많음
// * |조건많음  <--------------------> |조건적음
// * 원소많음   <--------------------> 원소적음

export default {}
