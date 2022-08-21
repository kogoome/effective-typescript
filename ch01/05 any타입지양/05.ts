// ! F2 심볼 이름 변경으로 동일 타입이 변경가능
interface Person {
  firstName222: string
  last: string
}
const formatName = (p: Person) => `${p.firstName222} ${p.last}`

// * any 타입은 자동변경이 불가능
const formatNameAny = (p: any) => `${p.firstName} ${p.last}`

export default {}
