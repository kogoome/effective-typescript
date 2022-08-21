type AB = 'A' | 'B'
type AB12 = 'A' | 'B' | 12
// OK, {"A", "B"} is a subset of {"A", "B"}:
const ab: AB = Math.random() < 0.5 ? 'A' : 'B'
const ab12: AB12 = ab // OK, {"A", "B"} is a subset of {"A", "B", 12}

// ! declare 키워드를 사용하면 자바스크립트로 컴파일 되지 않고 타입스크립트 컴파일러에게 타입정보만을 알린다. 
declare let twelve: AB12
twelve = 12

const back: AB = twelve
// ~~~~ Type 'AB12' is not assignable to type 'AB'
//        Type '12' is not assignable to type 'AB'

export default {}
