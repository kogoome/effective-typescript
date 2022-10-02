// ! 타입스크립트의 타입추론과 문맥

{
  // * 함수 매개변수의 가능타입을 기본형으로 주면
  function setLanguage(language: string) {
    /* ... */
  }
  
  // * 인라인형태
  setLanguage('JavaScript') // * OK
  
  // * 참조형태
  let language = 'JavaScript'
  setLanguage(language) // * OK
}

{
  // * 제한적으로 변경하면
	type Language = 'JavaScript' | 'TypeScript' | 'Python'
	function setLanguage(language: Language) {
		/* ... */
	}

	setLanguage('JavaScript') // OK
  // * let을 사용하면 변경가능성때문에 리터럴 타입으로 추론되지 않고 프리미티브 타입으로 추론
	let language = 'JavaScript' 
	setLanguage(language) // * 인수전달시 타입오류
  
  // * 해결1
  let language2:Language = 'JavaScript'
	setLanguage(language2)
  // * 해결2
  const language3 = 'JavaScript'
	setLanguage(language3)
}

export default {}
