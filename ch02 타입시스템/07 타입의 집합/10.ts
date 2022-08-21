interface Identified {
  id: string
}
interface Person {
  name: string
}
interface Lifespan {
  birth: Date
  death?: Date
}
type PersonSpan = Person & Lifespan

// * Type is never
type T1 = keyof (Person | Lifespan) // never 타입
type B = string & number
type T2 = keyof Person & keyof Lifespan // never 타입
type T3 = keyof (Person & Lifespan) // 인터섹션 타입
type T4 = keyof Person | keyof Lifespan // 인터섹션 타입
/* 
  Person 타입은 name 속성을 필요로 하고
  Lifespan 타입은 birth 속성을 필요로 하기 때문에
  Person | Lifespan 타입은 
  Person | Lifespan 타입이 불가능해서가 아닌
  슈뢰딩거의 고양이처럼 그 속성을 추론할 수 없는 상태에 있어 never타입으로 결론내는듯 하다.

  keyof (A&B) = keyof A | keyof B
  keyof (A|B) = keyof A & keyof B  -> 좋은 예시인가? 
  
  */

// * 유니온 타입으로 테스트
type K2 = Person | Lifespan
const k2 :K2 = {
  name:'a',
  birth: new Date(2022,1,1)
} // * 타입체크가 명확히 이루어지지 않음. 아마 입력 편의를 위해?

// * 한 타입을 선택해주면 추천, 인터섹션 조건을 만족하면 추천 x
k2.


export default {}
