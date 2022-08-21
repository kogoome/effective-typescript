// ! keyof

interface Point {
  x: number
  y: number
}
type PointKeys = keyof Point // Type is "x" | "y"

let k :PointKeys
k='x'
k='y'
k='z'

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  // COMPRESS
  vals.sort((a, b) => (a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : +1)) // 큰거 뒤로
  return vals
  // END
}

const pts: Point[] = [
  { x: 1, y: 1 },
  { x: 2, y: 0 },
]

sortBy(pts, 'x') // [ { x: 1, y: 1 }, { x: 2, y: 0 } ]
sortBy(pts, 'y') // [ { x: 2, y: 0 }, { x: 1, y: 1 } ]
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y') // OK, 'x'|'y' extends 'x'|'y'
sortBy(pts, 'z')
// ~~~ Type '"z"' is not assignable to parameter of type '"x" | "y"


export default {}
