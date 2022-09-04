// npm i lodash @types/lodash

// ! 로대시의 함수형 기능들은 타입플로우가 제공되있기 때문에 로대시 메서드 사용시 루프의 타입체크를 관리할 필요가 없음.


// * csv 데이터를 파싱하려면
const csvData = 'a,b,c,d,e\n1,2,3,4,5\n6,7,8,9,10\n11,12,13,14,15'
const rawRows = csvData.split('\n')
// 헤더와 데이터 [ 'a,b,c,d,e', '1,2,3,4,5', '6,7,8,9,10', '11,12,13,14,15' ]
const headers = rawRows[0].split(',')
// 헤더 [ 'a', 'b', 'c', 'd', 'e' ]

// * 루프 구현시
const rows1 = rawRows.slice(1).map((rowStr) => {
	const row: {
		// 타입을 관리해줘야함
		[key: string]: string
	} = {}

	rowStr // 데이터만 가져와서
		.split(',') // 컴마 분리해서
		.forEach((val, i) => {
			row[headers[i]] = val // 객체의 키 헤더, 값 데이터 맞춰서 저장
		})

	return row
})

console.log(rows1)
/* 
[ { a: '1', b: '2', c: '3', d: '4', e: '5' },
  { a: '6', b: '7', c: '8', d: '9', e: '10' },
  { a: '11', b: '12', c: '13', d: '14', e: '15' } ]
*/

// * reduce 사용시 코드를 약간 절약. 타입관리는 여전히 필요
const rows2 = rawRows.slice(1).map((rowStr) =>
	rowStr
    .split(',')
    .reduce(
      (row: { [key: string]: string }, val, i) => ((row[headers[i]] = val), row),
		  {}
	  )
)

// * 로대시의 zipObject사용시 간결, 그러나 사용시 시간소모가 크면 고려. 타입관리를 안해도 되는게 가장 큰 장점
import _ from 'lodash'
const rowsA = rawRows
	.slice(1)
	.map((rowStr) => _.zipObject(headers, rowStr.split(',')))

// * 메서드 설명
_.zipObject(['name','age'], ['john',23]) // {name: 'John', age: '23}
/* 
* Dictionary 타입은 {[key:string]:string}, Record<string, string>과 동일
*/
export default {}
