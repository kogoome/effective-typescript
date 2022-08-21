interface Person {
  first: string
  last: string
}
// ! 키값으로 표현된 속성서 값에 타입을 부여할 수 없으므로 타입을 분리해야한다.

function email0(options: { person: Person; subject: string; body: string }) {
	// ...
}


function email({
  person: Person,
  subject: string,
  body: string,
}) {
  /* ... */
}

function email2({
	person,
	subject,
	body,
}: {
	person: Person
	subject: string
	body: string
}) {
	// ...
}
export default {}

