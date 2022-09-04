// *  요청 상태별 속성타입 선언
interface RequestPending {
	state: 'pending'
}
interface RequestError {
	state: 'error'
	error: string
}
interface RequestSuccess {
	state: 'ok'
	pageText: string
}
type RequestState = RequestPending | RequestError | RequestSuccess


interface State {
	currentPage: string
	requests: { [page: string]: RequestState }
}
// * -> 코드가 길어졌지만 각 상태를 명시적으로 모델링

function getUrlForPage(p: string) {
	return ''
}

// * 페이지 렌더링
function renderPage(state: State) {
	const { currentPage } = state
	const requestState = state.requests[currentPage]
	switch (requestState.state) {
		case 'pending':
			return `Loading ${currentPage}...`
		case 'error':
			return `Error! Unable to load ${currentPage}: ${requestState.error}`
		case 'ok':
			return `<h1>${currentPage}</h1>\n${requestState.pageText}`
	}
}

// * 페이지 변환
async function changePage(state: State, newPage: string) {
	state.requests[newPage] = { state: 'pending' }
	state.currentPage = newPage
	try {
		const response = await fetch(getUrlForPage(newPage))
		if (!response.ok) {
			throw new Error(`Unable to load ${newPage}: ${response.statusText}`)
		}
		const pageText = await response.text()
		state.requests[newPage] = { state: 'ok', pageText }
	} catch (e) {
		state.requests[newPage] = { state: 'error', error: '' + e }
	}
}

export default {}
