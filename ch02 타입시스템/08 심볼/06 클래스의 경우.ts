// ! 클래스와 이넘의 이름은 값과 타입의 두가지 공간을 모두 사용

class Cylinder {
  radius = 1
  height = 1
}

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape // * 클래스의 타입
    shape.radius // * number
  }
}

export default {}
