// tsConfig: {"strictNullChecks":false}

// ! 타입 단언이 필요한 경우
// * dom 엘리먼트의 경우 타입스크립트에서 관리하지 않기 때문에 as 어설션을 통해 관리하는게 적절
// ? 아이템 55에서 자세히 다룸
document.querySelector('#myButton')?.addEventListener('click', e => {
  e.currentTarget // Type is EventTarget
  const button = e.currentTarget as HTMLButtonElement
  button // Type is HTMLButtonElement
})

// ! ( 접미사! : non null assertion ) 는 널값을 제거하여 해석

const elNull = document.getElementById('foo')
const el = document.getElementById('foo')!
interface Person {
	name: string
}
const body = document.body
const el = body as Person
// * dom 엘리먼트와 객체엘리먼트의 타입은 포함관계가 형성되어잇지 않기 때문에 as 키워드를 사용할 수 없음
const el2 = document.body as unknown as Person // OK

export default {}
