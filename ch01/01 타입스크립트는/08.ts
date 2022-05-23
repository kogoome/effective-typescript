// ! 인터페이스가 있다면, 프로퍼티 오타에 대해 제안도 해준다.

// HIDE
interface State {
  name: string
  capital: string
}
// END

const states: State[] = [
  { name: 'Alabama', capital: 'Montgomery' },
  { name: 'Alaska', capitol: 'Juneau' },
  // ~~~~~~~~~~~~~~~~~ Did you mean to write 'capital'?
  { name: 'Arizona', capital: 'Phoenix' },
  // ...
]

export default {}
