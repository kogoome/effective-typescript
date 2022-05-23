// ! 프로퍼티에서도 자바스크립트는 오류를 찾아주지 못한다.

const states = [
  { name: 'Alabama', capital: 'Montgomery' },
  { name: 'Alaska', capital: 'Juneau' },
  { name: 'Arizona', capital: 'Phoenix' },
  // ...
]
for (const state of states) {
  console.log(state.capitol)
}

export default {}
