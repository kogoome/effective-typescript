// ! []를 이용한 속성타입접근 .표기법사용불가

interface Person {
  first: string
  last: string
}
const p: Person = { first: 'Jane', last: 'Jacobs' }

const first2: Person.first = p['first']
const first1: Person['first'] = p['first']

type a = Person['first'] // string
type b = Person.first

export default {}
