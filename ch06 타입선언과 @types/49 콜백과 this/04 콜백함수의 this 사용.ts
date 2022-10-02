// ! 콜백함수에서 this 사용하는 방법

function addKeyListener(
	el: HTMLElement,
	// ! 콜백함수의 this 바인딩은 매개변수의 this 선언부 명시적필요.
	fn: (this: HTMLElement, e: KeyboardEvent) => void
) {
	el.addEventListener('keydown', (e) => {
		// * this 매개변수는 call메서드를 호출해야만 바인딩 가능
		fn.call(el, e)
	})
}

{
	// ! call 바인딩을 사용하지 않는다면
	function addKeyListener1(
		el: HTMLElement,
		fn: (this: HTMLElement, e: KeyboardEvent) => void
	) {
		el.addEventListener('keydown', (e) => {
			// * call 메서드를 사용하지 않는 경우
			fn(el, e)
			// ~ Expected 1 arguments, but got 2
		})
	}
	function addKeyListener2(
		el: HTMLElement,
		fn: (this: HTMLElement, e: KeyboardEvent) => void
	) {
		el.addEventListener('keydown', (e) => {
			// * 하나의 인수만 사용하는 경우
			fn(e)
		})
	}
}

// ! 사용사례
declare let el: HTMLElement
addKeyListener(el, function (e) {
	// * 콜백함수에서 this 사용할 수 있고 타입도 잘 추론됨.
	this.innerHTML
})

// ! 클래
class Foo {
	registerHandler(el: HTMLElement) {
		addKeyListener(el, (e) => {
			// * 화살표함수는 this가 부재
			// * 하여 클래스의 this 의미를 가짐
			this.innerHTML
			// ~~~~~~~~~ Property 'innerHTML' does not exist on type 'Foo'
		})
	}
}

export default {}
