// ! 튜플과 타입맥락

function panTo(where: [number, number]) {
  /* ... */
}


// ! 리터럴 사용시
panTo([10, 20]) // OK


// ! 1. 자동추론시
const loc = [10, 20]
// * 타입 문맥은, [number, number] is in number[], 수퍼셋타입을 섭셋타입에 인수전달 할 수 없기때문에
// * 포함관계에 의한 타입오류가 작동
panTo(loc)


// ! 2. 튜플강제시 정상작동
const loc2: [number, number] = [1, 2]
panTo(loc2) // OK


// ! const assertion
const loc3 = [1, 2] as const
// * 요청된 함수는 튜플타입으로 수정가능성이 내포되어있기때문에 오류송출
panTo(loc3)


// ! readonly
function panToR(where: readonly [number, number]) {
	/* ... */
}
const loc4 = [1, 2] as const
panToR(loc4) // OK


// ! readonly 단점
const loc5 = [1,2,3] as const
panToR(loc5) 
// ? 호출하는 곳에서 오류를 내보내준다는게 단점이라고 함. 중첩객체에서 오류 발생한다면 원인파악이 쉽지않다는데,
// ? 오류내용에도 인수의 랭스가 길다는걸 잘 알려주고 있어서 원인파악이 어려운 이유를 모르겠음


export default {}