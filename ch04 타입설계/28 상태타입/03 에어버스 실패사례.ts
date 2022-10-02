// ! 에어버스 303 실패사례

// * 비행기 조작부 왼쪽 오른쪽 독립된 스틱 모댈 - 이중입력모드상태

interface CockpitControls {
	/** Angle of the left side stick in degrees, 0 = neutral, + = forward */
	leftSideStick: number // * 기장조작스틱
	/** Angle of the right side stick in degrees, 0 = neutral, + = forward */
	rightSideStick: number // * 부기장 조작스틱
}

// * 현재 스틱 설정을 계산하는 함수
// * 왼쪽만 사용시
function getStickSetting(controls: CockpitControls) {
	return controls.leftSideStick
}
// * 오른쪽만 사용시 왼쪽이 중립일때
function getStickSetting2(controls: CockpitControls) {
	const { leftSideStick, rightSideStick } = controls
	if (leftSideStick === 0) {
		return rightSideStick
	}
	return leftSideStick
  // * 이 로직은 왼쪽 사용 오른쪽 중립일때 분기처리 X
}
// * 둘중 하나가 중립일 때
function getStickSetting3(controls: CockpitControls) {
	const { leftSideStick, rightSideStick } = controls
	if (leftSideStick === 0) {
		return rightSideStick
	} else if (rightSideStick === 0) {
		return leftSideStick
	}
	// ? 두 스틱이 중립이 아닌경우
}
// * 두 스틱이 중립이 아니고 비슷한 값일때
function getStickSetting4(controls: CockpitControls) {
	const { leftSideStick, rightSideStick } = controls
	if (leftSideStick === 0) {
		return rightSideStick
	} else if (rightSideStick === 0) {
		return leftSideStick
	}
	if (Math.abs(leftSideStick - rightSideStick) < 5) {
		return (leftSideStick + rightSideStick) / 2
	}
	// ? 각도가 매우 다른경우
}
// * 기장은 스틱을 밀고, 부기장은 당기는 긴급상황시
function getStickSetting5(controls: CockpitControls) {
	return (controls.leftSideStick + controls.rightSideStick) / 2
  // ? 이렇게 계산된 에어버스 303은 기장은 밀고 부기장은 당겨서 평균값이 0이 되었고, 추락중에 아무 조작도 성공하지 못해 그대로 추락.
}

// * 대부분의 비행기는 왼쪽 스틱과 오른쪽 스틱이 분리되지 않고, 부기장이 당기면 기장의 스틱도 당겨지는 형태를 띔
interface CockpitControls {
	/** Angle of the stick in degrees, 0 = neutral, + = forward */
	stickAngle: number
}