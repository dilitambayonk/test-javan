const initialState = {
	amount: 0,
}

const amount = (state = initialState, action) => {
	switch (action.type) {
		case "INIT_AMOUNT":
			return {
				...state,
				amount: action.init,
			}
		case "PLUS_AMOUNT":
			return {
				...state,
				amount: state.amount + action.price,
			}
		case "MIN_AMOUNT":
			return {
				...state,
				amount: state.amount - action.price,
			}
		default:
			return state
	}
}

export default amount
