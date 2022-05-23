// ! 따라서 기준이 될 인터페이스를 통해 무엇이 잘못된 표현인지 타입스크립트에게 인지시켜줄 수 있다.

interface State {
  name: string
  capital: string
}
const states: State[] = [
  { name: 'Alabama', capitol: 'Montgomery' },
  // ~~~~~~~~~~~~~~~~~~~~~
  { name: 'Alaska', capitol: 'Juneau' },
  // ~~~~~~~~~~~~~~~~~
  { name: 'Arizona', capitol: 'Phoenix' },
  // ~~~~~~~~~~~~~~~~~~ Object literal may only specify known
  //         properties, but 'capitol' does not exist in type
  //         'State'.  Did you mean to write 'capital'?
  // ...
]
for (const state of states) {
  console.log(state.capital)
}

export default {}
