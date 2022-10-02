// * 웹앱을 만든다고 가정할 때, 페이지 상태설계를 다음처럼 하고자한다.
interface State {
	pageText: string
	isLoading: boolean
	error?: string
}
declare let currentPage: string

// * 페이지를 그리는 렌더 페이지 함수는 상태객체 필드를 고려해야함
function renderPage(state: State) {
	if (state.error) {
		return `Error! Unable to load ${currentPage}: ${state.error}`
	} else if (state.isLoading) {
		return `Loading ${currentPage}...`
	}
	return `<h1>${currentPage}</h1>\n${state.pageText}`
}
// * 분기조건이 명확히 분리되어있지 않음. 로딩중이면서 에러가 존재하면 구분이 불명확

function getUrlForPage(p: string) {
	return ''
}

// * 페이지 전환 함수
async function changePage(state: State, newPage: string) {
	state.isLoading = true
	try {
		const response = await fetch(getUrlForPage(newPage))
		if (!response.ok) {
			throw new Error(`Unable to load ${newPage}: ${response.statusText}`)
		}
		const text = await response.text()
		state.isLoading = false
		state.pageText = text
	} catch (e) {
		state.error = '' + e
	}
}
/* 
오류 발생시 state.isLoading = false 로직이 빠져있다
state.error 를 초기화하지 않았기 때문에 페이지 전환중에 과거 에러를 보여줌
페이지 로딩중에 사용자각 페이지를 바꾸면 예측불가
오류거나, 응답순서에 따라 변화될수도 있음.
*/

export default {}
