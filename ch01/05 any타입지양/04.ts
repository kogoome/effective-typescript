interface Person {
  first: string
  last: string
}

const formatName = (p: Person) => `${p.first} ${p.last}`
// .사용으로 객체 필드를 추천

// ! any 타입은 자동완성 추천을 해주지 않습니다.
const formatNameAny = (p: any) => `${p.first} ${p.last}`
// 객체의 추천어가 부재


export default {}
