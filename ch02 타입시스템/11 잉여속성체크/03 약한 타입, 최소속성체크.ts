// ! weak type 옵셔널 프로퍼티만 가지는 타입.
// * 약한 타입의 경우 모든 속성이 옵셔널하기 때문에 모든 객체를 포함할 수 있으나
// * 이 경우 공통된 속성이 있는지 별도의 체크를 수행
// * 최소 하나의 공통속성이 있어야 함.

interface LineChartOptions {
	logscale?: boolean
	invertedYAxis?: boolean
	areaChart?: boolean
}
const opts1 = { logScale: true }
const o: LineChartOptions = opts1
// ~ Type '{ logScale: boolean; }' has no properties in common
//   with type 'LineChartOptions'
export default {}
