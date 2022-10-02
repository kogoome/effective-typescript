// ! 라이브러리 작성 배포시 타입 의존성 문제
// * 아래 함수를 라이브러리로 배포할 때
// * Buffer 타입은 @types/node 에 의존하기 때문에 특정 사용자에게 문제가 발생
function parseCSV(contents: string | Buffer): { [column: string]: string }[] {
	if (typeof contents === 'object') {
		// It's a buffer
		return parseCSV((contents as Buffer).toString('utf-8'))
	}
	// COMPRESS
	return []
	// END
}

/*
 * 문제되는 사용자 그룹
 ! - 바닐라 자바스크립트 개발자 (버퍼타입 작동 x)
 ! - @types/node 가 설치되지 않은 타입스크립트 개발자 (버퍼타입 작동 x)
 * - @types/node 가 설치된 타입스크립트 개발자 (정상작동)
 */

{
	// ! 구조적 타이핑으로 해결
	// * Buffer 타입에서 필요한 부분만을 명시적으로 사용
	// * @types/node를 의존하지 않기 때문에 위 문제점을 해결 가능
	interface CsvBuffer {
		toString(
			encoding: 'utf-8' // ? string 오류 -> 호출처에서 사용하는 인코딩 타입으로 제한
		): string
	}
	function parseCSV(
		contents: string | CsvBuffer
	): { [column: string]: string }[] {
		// COMPRESS
		return []
		// END
	}
	let bf = new Buffer('hello world')
	parseCSV(bf)
}
// ! 선언 미러링으로 해결
{
	type Buffer = {
		// * @types/node의 Buffer 선언부 복붙
	}

	parseCSV(new Buffer('column1,column2\nval1,val2', 'utf-8')) // OK
	// * 만약 버퍼오브젝트를 직접 사용하여 라이브러리를 제작한다면
	// * @types/node 안에 내장된 Buffer 선언부를 그대로 가져와 미러링하여 라이브러리에 넣는게 다른 사용자들에게 좋음.
	// * (노드개발자와 다르게 웹개발자는 @types/node가 불필요)
	// * 만약 프로젝트의 의존성이 다양해지고 필수 의존성이 추가되면서 미러링이 힘들면
	// * 명시적으로 @types 의존성을 추가하는게 나음.
}
export default {}
