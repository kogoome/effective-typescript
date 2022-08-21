

function getElement(elOrId: string | HTMLElement | null): HTMLElement {
  // * 타입정제, null도 object타입이므로 정제되지 않는다.
  if (elOrId === null) {
    return document.body
  } else if (typeof elOrId === 'object') {
    return elOrId
    // ~~~~~~~~~~~~~~ 'HTMLElement | null' is not assignable to 'HTMLElement'
  }  else {
    const el = document.getElementById(elOrId) 
    return el
    // ~~~~~~~~~~ 'HTMLElement | null' is not assignable to 'HTMLElement'
  }
}


function getElement2(elOrId: string | HTMLElement | null): HTMLElement {
  if (typeof elOrId === 'object' && elOrId !== null) {
		return elOrId
		// ~~~~~~~~~~~~~~ 'HTMLElement | null' is not assignable to 'HTMLElement'
	} else if (elOrId === null) {
    return document.body
  } else {
		const el = document.getElementById(elOrId) as HTMLElement
		return el
		// ~~~~~~~~~~ 'HTMLElement | null' is not assignable to 'HTMLElement'
	}
}
export default {}
