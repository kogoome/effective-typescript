// ! 널체크 옵션을 켜면 널값에 대해서도 오류를 보여준다.
// ! 자바스크립트 오류의 90% 이상이 널값에서 비롯된다. 이 옵션은 프로젝트 초기에 켜고 진행하는게 좋다. 
// tsConfig: {"strictNullChecks":false}

const x: number = null // OK, null is a valid number

export default {}
