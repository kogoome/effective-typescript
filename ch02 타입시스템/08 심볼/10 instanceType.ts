// ! typeof 클래스, 인스턴스 타입 전환 2

class Cylinder {
	radius = 1
	height = 1
}

const v = typeof Cylinder // Value is "function"
type T = typeof Cylinder // Type is typeof Cylinder
type C = InstanceType<typeof Cylinder> // Type is Cylinder
// ! InstanceType을 통해 인스턴스 타입으로 전환, Cylinder타입으로 전환됨.

export default {}
