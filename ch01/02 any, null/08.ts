// ! 정제 옵션을 (!:nonnull assertion)를 사용해 해결가능하다.
// ! strict 옵션을 켜면 {"noImplicitAny":true,"strictNullChecks":true} 이 두 옵션 모두 자동적용된다.

const el = document.getElementById('status')
el.textContent = 'Ready'
// ~~ Object is possibly 'null'

if (el) {
	// 정제옵션.
	el.textContent = 'Ready' // OK, null has been excluded
}
el!.textContent = 'Ready' // OK, we've asserted that el is non-null

export default {}
