// ! 근데 어떤 문자가 잘못된것인지 타입스크립트는 구분하지 못한다.

const states = [
  { name: 'Alabama', capitol: 'Montgomery' },
  { name: 'Alaska', capitol: 'Juneau' },
  { name: 'Arizona', capitol: 'Phoenix' },
  // ...
]
for (const state of states) {
  console.log(state.capital)
  // ~~~~~~~ Property 'capital' does not exist on type
  //         '{ name: string; capitol: string; }'.
  //         Did you mean 'capitol'?
}

export default {}
