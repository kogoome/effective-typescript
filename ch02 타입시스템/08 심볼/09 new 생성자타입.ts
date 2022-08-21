// ! typeof 클래스, 생성자를 이용한 인스턴스 타입 전환 1

class Cylinder {
	radius = 1
	height = 1
}

const v = typeof Cylinder // Value is "function"
type T = typeof Cylinder // Type is typeof Cylinder
// * 함수에 클래스 생성자 타입을 부여하고
declare let fn: T
// * new 키워드로 생성하면 인스턴스타입이 나타남
const c = new fn() // Type is Cylinder

export default {}
