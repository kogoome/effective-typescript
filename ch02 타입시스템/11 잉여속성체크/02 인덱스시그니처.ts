// ! 인덱스 시그니처
// * 잉여속성을 체크하고 싶지 않을 때

type Option = {
	title: string
	[ㅁㄴㅇ: string]: any // 키값을 스트링으로 주면 다른 스트링키값의 타입에도 영향을 미침.
	[key: number]: number[]
}
let a: Option = {
	title: 'index signature',
	darkMode: true,
  ㅁㄴㅇ: 123,
	12: [2, 24],
}
