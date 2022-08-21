let age: number

// ! 타입 어설션, 강제 타입 as
// ! 타입어설션을 사용하면 다른 타입을 넣어도 오류를 알려주지 않습니다
age = '12' as any // OK
// * 보통 Dom 태그의 타입을 강제할 때 많이 사용합니다
// * const div = document.getElementById('div') as HTMLDivElement

age += 1 // OK; at runtime, age is now "121"

export default {}
