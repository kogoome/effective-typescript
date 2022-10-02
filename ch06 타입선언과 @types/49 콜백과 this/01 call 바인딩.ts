// ! dynamic scope (this)
/* 
let 이나 const 키워드는 lexical scope 를 따르기 때문에 블럭 안에서 키워드를 해석하지만
자바스크립트의 this는 dynamic scope를 따르기 때문에 this 키워드가 사용되는 블럭에서 의미를 갖습니다.
때문에 내부함수를 외부에서 참조하면서 this를 사용하게 되면 함수스코프에 this를 사용하는게 아닌 외부 스코프상 this의 의미를 가지게 됩니다.

 */


class C {
  vals = [1, 2, 3]
  logSquares() {
    for (const val of this.vals) { // ! <- this
      console.log(val * val)
    }
  }
}

const c = new C()
c.logSquares() 
// * 1, 4, 9
// * 클래스 스코프에서 메서드를 호출하였기 때문에 this는 c 클래스에 바인딩

const method = c.logSquares
method() 
// * Cannot read properties of undefined (reading 'vals') 
// * 메서드를 변수에 직접 할당하고 난 후 메서드에서 사용되는 this가 무엇을 지칭하는지 알 수 없게됨
// * 이런 this바인딩 해제를 회피하기 위해 call 메서드를 사용하면 해결

method.call(c) 
// * 1, 4, 9
// * this를 c 클래스에서 호출

export default {}
