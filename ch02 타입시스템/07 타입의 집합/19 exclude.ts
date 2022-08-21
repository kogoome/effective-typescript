// ! Exclude

// * type Exclude<T, U> = T extends U ? never : T
// * T 에서 U 를 제외


type T = Exclude<string | Date, string|number > // Type is Date
/* 
  경우의 수를 따져보면

  Exclude<string, string> : never === empty set
  Exclude<string, number> : string 
  -> Exclude<string, number|string> : never

  Exclude<Date, string> : Date
  Exclude<Date, number> : Date
  -> Exclude<Date, string|number> : Date

  never or Date -> Date
*/


type NonZeroNums = Exclude<number, 0> // Type is still just number

export default {}
