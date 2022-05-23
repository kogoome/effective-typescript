// ! 타입스크립트는 배열의 갯수를 평가하지 않고, 아래의 오류 코드는 오류를 지적해줄 수 없다.
// ! 타입스크립트는 정적 타입의 정확성을 보장해주는게 목적이 아니다. 정적타입의 정확성을 위해서라면 리즌이나 엘름 같은 언어를 쓰는게 좋다.
const names = ['Alice', 'Bob']
console.log(names[2].toUpperCase())

// export default {}
