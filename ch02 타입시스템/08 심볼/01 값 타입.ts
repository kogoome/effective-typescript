// ! 심볼과 공간
// * 심볼(이름. 변수명 타입명 클래스명)은 값과 타입 두가지 공간을 가짐.
// * 콜론기호 왼쪽은 값 오른쪽은 타입, 값 : 타입
// * 클래스와 이넘의 이름은 값과 타입의 공간을 모두 사용
// * 맥락적으로 사용

// 타입
interface Cylinder { 
  radius: number
  height: number
}

// 값
const Cylinder = (radius: number, height: number) => ({ radius, height })

export default {}
