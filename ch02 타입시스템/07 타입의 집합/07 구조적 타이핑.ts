
interface Identified {
  id: string
}
// * 어떤 객체가 string으로 할당 가능한 id 속성을 가지고 있다면 그 객체는 Identified
// * 구조적 타이핑


const a = {
  id: 'a',
  name: 'john'
}

function aaa(arg:Identified) {
  return arg.id
}

aaa(a)


export default {}
