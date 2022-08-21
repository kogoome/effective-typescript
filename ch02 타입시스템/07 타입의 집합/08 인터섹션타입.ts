// ! 인터섹션 타입 & 연산자
// * 집합에서 집합 A와 B의 교집합은 공통원소들을 말하지만 
// * 인터섹션타입은 A타입의 조건을 만족시키면서 B타입의 조건을 동시에 만족시켜야 한다.
// * NOTE 인터페이스의 속성은 집합의 원소가 아닌 집합 조건제시법의 조건으로 이해
// * &연산자로 조건을 모두 충족시켜야하므로 각 타입에 부여된 속성이 모두 필요

// * 수학에서 강약의 개념을 보면, 조건이 더 많고 집합의 원소가 더 명확해질 수록 강조건이라고 부름. & 연산자는 조건을 강하게 만들고 | 연산자는 조건을 약하게 만듬.

interface Person {
  name: string
}
interface Lifespan {
  birth: Date
  death?: Date
}

type PersonSpan = Person & Lifespan

const a:PersonSpan = {
  name:'fly',
  birth: new Date(2022,1,1),
}
// * 자동완성 속성 확인


export default {}
