interface ComponentProps {
	onSelectItem: (item: number) => void
}

function renderSelector(props: ComponentProps) {
	/* ... */
}

let selectedId: number = 0
function handleSelectItem(item: {id:number}) {
	selectedId = item.id
}

renderSelector({ onSelectItem: handleSelectItem })
// ! any 타입을 사용하지 않으면 오류를 제대로 알려준다. 최대한 사용을 피하자.

export default {}

