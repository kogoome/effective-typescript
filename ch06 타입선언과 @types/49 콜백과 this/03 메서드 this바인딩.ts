// ! 생성자를 통한 클래스 메서드의 this 바인딩
{
	function makeButton(props: { text: string; onClick: () => void }) {
		console.log(props.onClick())
		// * { text: 'Reset', onClick: [λ: onClick] } 호출객체 출력
	}
	class ResetButton {
		render() {
			return makeButton({ text: 'Reset', onClick: this.onClick })
		}
		onClick() {
			// * 여기서 리턴되는 this의 스코프가 호출처인 { text: 'Reset', onClick: this.onClick }를 지칭
			return this
		}
	}
	const a = new ResetButton()
	a.render()
}
{
	function makeButton(props: { text: string; onClick: () => void }) {
		console.log(props.onClick())
		// * ResetButton { onClick: [λ: bound onClick] } 클래스 스코프의 this가 출력
	}
	class ResetButton {
		constructor() {
			// * onClick메서드 안에서 사용되는 this를 동적스코프로 두는게 아닌, 클래스 스코프의 this를 바인딩
			this.onClick = this.onClick.bind(this)
			/*
      * 변환된 코드, 함수를 그대로 사용하되 this를 _this로 치환
      var _this = this
		  this.onClick = ()=>{
        return _this
      }
			*/
		}
		render() {
			return makeButton({ text: 'Reset', onClick: this.onClick })
		}
		onClick() {
			return this
		}
	}
	const a = new ResetButton()
	a.render()
}

export {}
