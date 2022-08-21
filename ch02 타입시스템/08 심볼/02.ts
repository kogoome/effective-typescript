// ! 타입심볼 값심볼

// 타입 실린더
interface Cylinder {
  radius: number
  height: number
}

// 값 실린더
const Cylinder = (radius: number, height: number) => ({ radius, height })

function calculateVolume(shape: unknown) {
  // * instanceof 는 값을 참조하므로 Cylinder는 함수를 가져옴
  if (shape instanceof Cylinder) { 
    // * 함수를 가져왓기 때문에 타입속성을 가지지 않음
    shape.radius
    // ~~~~~~ Property 'radius' does not exist on type '{}'
  }
}

export default {}
