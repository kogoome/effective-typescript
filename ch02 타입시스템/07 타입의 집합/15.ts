function getKey<K extends string>(val: any, key: K) {
  // ...
}

getKey({}, 'x') // OK, 'x' extends string
getKey({}, Math.random() < 0.5 ? 'a' : 'b') // OK, 'a'|'b' extends string
getKey({}, document.title) // OK, string extends string
getKey({}, 12)
// ~~ Type '12' is not assignable to parameter of type 'string'
// * 할당될 수 없습니다 => 상속할 수 없습니다  
// * 표현으로 바꿀 수 있고 12는 string의 부분집합이 아니라고 이해할 수 있다.

export default {}
