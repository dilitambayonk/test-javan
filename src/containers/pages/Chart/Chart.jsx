import React from "react"
import Amount from "../../section/Amount/Amount"
import Items from "../../section/Items/Items"

const Chart = () => {
	return (
		<div>
			<div className="p-6 bg-neutral-100 text-center font-bold text-xl">Shoping Chart</div>
			<div className="container mx-auto p-2 md:flex">
				<div className="md:w-2/3">
					<Items />
				</div>
				<div className="md:w-1/3">
					<Amount />
				</div>
			</div>
		</div>
	)
}

export default Chart
