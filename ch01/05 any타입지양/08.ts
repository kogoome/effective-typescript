interface ComponentProps {
	onSelectItem: (item: number) => void
}
// ! number is subset of any

function renderSelector(props: ComponentProps) {
	/* ... */
}

let selectedId: number = 0
function handleSelectItem(item: any) {
	selectedId = item.id
}

renderSelector({ onSelectItem: handleSelectItem })
// ! 프롭스의 객체 안에는 onSelectItem 의 함수가 들어와야하고 그 함수는  item : number를 매개변수로 가져야하지만, 핸들셀렉트는 매개변수로 넘버이외의 타입을 허용하고 있어 그 부분에서 타입체크를 무력화
// * any 타입은 타입시스템의 신뢰도를 떨어뜨립니다
// * any 타입의 단점을 보완하는 방법은 5장에서

export default {}
