import React, { useEffect } from "react"
import Card from "../../../components/Card/Card"
import Divider from "../../../components/Divider/Divider"
import Item from "../../../components/Item/Item"
import { connect } from "react-redux"

const Items = ({ initAmount }) => {
	useEffect(() => {
		initAmount()
	}, [])

	return (
		<>
			<Card>
				<p className="font-bold text-lg mb-4">Cart (2 items)</p>
				<Item image="https://unsplash.it/150/200?random" name="Blue denim shirt" code="SHIRT - BLUE" color="BLUE" size="M" price={17.99} />
				<Divider />
				<Item image="https://unsplash.it/150/200" name="Red hoodie" code="HOODIE - RED" color="RED" size="M" price={35.99} />
			</Card>
		</>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		initAmount: () => dispatch({ type: "INIT_AMOUNT", init: 17.99 + 35.99 }),
	}
}

export default connect(null, mapDispatchToProps)(Items)
