// ! 옵셔널 프로퍼티
interface Options {
  title: string
  // * 속성옆에 ? 붙이면 옵셔널프로퍼티, 메서드 옆에 붙이면 옵셔널체이닝
	darkMode?: boolean 
}

const a:Options = {
  title:'a'
}
const b:Options = {
  title:'b',
  darkMode:true
}

export default {}