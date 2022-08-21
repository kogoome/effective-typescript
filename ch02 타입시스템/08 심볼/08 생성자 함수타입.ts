// ! typeof 클래스, 생성자 함수 타입

class Cylinder {
  radius = 1
  height = 1
}


console.log(typeof Cylinder) // * function
// * new 키워드를 사용할 때 나오는 생성자 `함수`
type T = typeof Cylinder // * 생성자 함수로서의 타입

export default {}
