// ! extends 키워드는 제네릭 타입에서 한정자로도 쓰이며, ~의 부분집합을 의미 

function getKey<K extends string>(val: any, key: K) {
  // ...
}

export default {}
