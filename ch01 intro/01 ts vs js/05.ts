// ! 하지만 타입스크립트는 오류를 즉각적으로 내준다.

// HIDE
const states = [
	{ name: 'Alabama', capital: 'Montgomery' },
	{ name: 'Alaska', capital: 'Juneau' },
	{ name: 'Arizona', capital: 'Phoenix' },
	// ...
]
// END

for (const state of states) {
	console.log(state.capitol)
	// ~~~~~~~ Property 'capitol' does not exist on type
	//         '{ name: string; capital: string; }'.
	//         Did you mean 'capital'?
}

// export default {}
