// ! 타입스크립트는 정적검사를 통해 잘못 쓴 메서드를 찾아준다.

let city = 'new york city'
console.log(city.toUppercase())
// ~~~~~~~~~~~ Property 'toUppercase' does not exist on type
//             'string'. Did you mean 'toUpperCase'?

export default {}
