// ! weak type 옵셔널 프로퍼티만 가지는 경우, 별도의 타입체크기능 - 공통속성 존재여부
// * 약한 타입의 경우 모든 속성이 옵셔널하기 때문에 모든 객체를 포함할 수 있으나
// * 이 경우 공통된 속성이 있는지 별도의 체크를 수행(hasCommonProperties) - 책 64p 가운데 문단 첫째줄
// * 공통속성이 존재하지 않고 다른속성이 존재하면 오류를 나타냄
// * 빈객체는 속성 자체가 부재하기 때문에 공통속성체크 회피 그냥 옵셔널만 처리해도 문제가 없음.

/* 
!심화학습
약한타입 판단함수
function isWeakType(type: Type): boolean {
    if (type.flags & TypeFlags.Object) {
        const resolved = resolveStructuredTypeMembers(type as ObjectType);

        return resolved.callSignatures.length === 0 
            && resolved.constructSignatures.length === 0 && resolved.indexInfos.length === 0 
            && resolved.properties.length > 0 
            && every(resolved.properties, p => !!(p.flags & SymbolFlags.Optional));
    }
    if (type.flags & TypeFlags.Intersection) {
        return every((type as IntersectionType).types, isWeakType);
    }
    return false;
}
공통속성체크 함수
function hasCommonProperties(source: Type, target: Type, isComparingJsxAttributes: boolean) {
    소스가 빈객체라면 포문이 안돌아가고 트루를 리턴할수 없음.
    for (const prop of getPropertiesOfType(source)) {
        타입소스에서 속성들 가져오고 for문 돌렸을때
        if (isKnownProperty(target, prop.escapedName, isComparingJsxAttributes)) {
            알려진 속성(공통속성)이 존재하면 
            return true;
            트루
        }
    }
    아니면 폴스리턴
    return false;
}

발동조건
if (
    위크타입이고 속성이 존재하면
*	isPerformingCommonPropertyChecks &&
    공통속성이 없으면
*	!hasCommonProperties(source, target, isComparingJsxAttributes)
) { 
*   리포트에러에 대한 다양한 처리구문에서 타입체커가 오류 처리 
}

공통속성체크여부를 판단하는 플래그 변수
const isPerformingCommonPropertyChecks =
	(relation !== comparableRelation || (relation === comparableRelation && isLiteralType(source))) 
      && !(intersectionState & IntersectionState.Target) 
      && source.flags & (TypeFlags.Primitive | TypeFlags.Object | TypeFlags.Intersection) 
      && source !== globalObjectType 
      && target.flags & (TypeFlags.Object | TypeFlags.Intersection) 
*     && isWeakType(target) 위크타입을 만족하고
*     && (getPropertiesOfType(source).length > 0 || typeHasCallOrConstructSignatures(source))
*        프로퍼티의 랭스가 1이상(속성이 존재)이거나 콜시그니처 혹은 생성자시그니처가 있는경우

? 콜시그니처란
const fn = (x:number)=>x>1
이라는 함수에서
fn.title = 'black'
을 주면 함수인데 프로퍼티를 가지게 된다. (자바스크립트 함수는 일급객체)
이런 함수의 타입을 정의할때

interface CallSignature {
    title:string
    (x: number):boolean;
} 
의 형식을 사용하는데 이런 함수타입의 정의를 콜시그니처라 한다.
(프로퍼티가 없어도 콜시그니처라 부른다.)

? 생성자시그니처란
interface StringConstructable {
    new(n: string): ComesFromString;
}
콜시그니처와 유사하지만 매개변수 앞에 new 키워드가 있을때를 말한다.

! 위크타입이고, 속성을 for문 돌려서 공통속성이 없을 때 오류리포트 해줌
*/

interface LineChartOptions {
	logscale?: boolean
	invertedYAxis?: boolean
	areaChart?: boolean
}

// * 타입리터럴 - 잉여속성체크
const o0: LineChartOptions = {}
const o1: LineChartOptions = { a: 122 } // 속성오류, 잉여속성을 체크하여 오류표시
const o2: LineChartOptions = { a: 122, logscale: true } // 속성오류
// * 변수매개 - 잉여속성체크 부재. 핵심 속성 이외의 모든 속성을 허용
const opts3 = {}
const o3: LineChartOptions = opts3 // 빈객체와 할당가능성
// NOTE 이론적으로 빈객체가 할당 가능하면 모든 객체가 허용되야 함.
// 이런 사태를 방지하기 위해 속성이 있고 위크타입인경우(위에 발동조건있음) 공통속성이 있는지 별도로 체크
const opts4 = { a: 122 } // 속성이 존재하나 공통속성이 부재. 오류
const o4: LineChartOptions = opts4
const opts5 = { a: 122, logscale: true }
const o5: LineChartOptions = opts5 // 속성이 존재하고 공통속성이 존재. 통과

// ! 복습, 속성의 포함관계와 할당가능성 - 구조적 타입체크
let a: string | number = 3 // 수퍼셋은
let a2: string = a // 타입오류, 섭셋에 할당 불가능

let b: string = '3' // 섭셋은
let b2: string | number = b // 수퍼셋에 할당가능

type C = { a: number; b: string }
type CSubset = { a: number; b: string; c: boolean }

let c: C = { a: 1, b: '2' }
let c2: CSubset = c // 타입오류

let d: CSubset = { a: 1, b: '2', c: true }
let d2: C = d

type NoPropertySet = {} // 빈객체 - 수퍼셋
type PropertySet = { a: number } // 빈객체의 부분집합
type EveryStringKeySet = { [key: string]: unknown }

let e: PropertySet = { a: 1 }
let e2: NoPropertySet = e

type NoPropertySet = {} // 빈객체 - 수퍼셋
type PropertySet = { a: number } // 빈객체의 부분집합
type EveryStringKeySet = { [key: string]: unknown }

let e3: EveryStringKeySet = { a: 1, b: '2', c: true, d: null }
let e4: NoPropertySet = e3 // 빈객체를 할당가능하다면 모든 객체타입을 매개한 변수 또한 할당가능

export default {}
