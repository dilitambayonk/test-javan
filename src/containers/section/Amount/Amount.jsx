import React from "react"
import Card from "../../../components/Card/Card"
import Divider from "../../../components/Divider/Divider"
import { IoIosArrowDown } from "react-icons/io"

const Amount = () => {
	return (
		<>
			<Card>
				<p className="font-bold text-lg mb-4">The total amount of</p>
				<div className="flex justify-between text-secondary mb-2">
					<p>Temporary amount</p>
					<p>$53.90</p>
				</div>
				<div className="flex justify-between text-secondary">
					<p>Shopping</p>
					<p>Gratis</p>
				</div>
				<Divider />
				<div className="flex justify-between items-center font-medium">
					<p>
						The total amount of <br />
						(including VAT)
					</p>
					<p>$53.90</p>
				</div>
				<div className="mt-6 p-3 text-center text-white bg-blue-600 rounded-lg hover:cursor-pointer hover:bg-blue-700">GO TO CHECKOUT</div>
			</Card>
			<Card>
				<div className="flex justify-between items-center">
					<p className="text-secondary">Add a checkout code [options]</p>
					<IoIosArrowDown size="1.3em" className="hover:cursor-pointer" />
				</div>
			</Card>
		</>
	)
}

export default Amount
