// ! 함수표현식은 함수시그니처를 타입으로 선언하여 함수표현식에 재사용 가능.
// * 함수시그니처 : 인자의 갯수, 인자의 순서와 타입, 리턴값의 타입

type DiceRollFn = (sides: number) => number // 표현식으로 함수타입 선언
const rollDice: DiceRollFn = sides => {
  /* COMPRESS */ return 0 /* END */
}

export default {}
