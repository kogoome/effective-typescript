// ! 객체 사용시

type Language = 'JavaScript' | 'TypeScript' | 'Python'
interface GovernedLanguage {
  language: Language
  organization: string
}

function complain(language: GovernedLanguage) {
  /* ... */
}
// * 리터럴로 사용시,  선언된 매개변수의 타입문맥에 따라 인수를 이해
complain({ language: 'TypeScript', organization: 'Microsoft' }) // OK

// * 변수 할당하여 사용시, 자동추론에 의해 문맥추론소실. 입력오류 발생
const ts = {
  language: 'TypeScript',
  organization: 'Microsoft',
} 
complain(ts)
// ! 변수할당시 타입을 선언, 또는 단언이 필요
export default {}
