import React, { useState } from "react"
import { BiMinus, BiPlus } from "react-icons/bi"
import { FaHeart } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { connect } from "react-redux"

const Item = (props) => {
	const { image, name, code, color, size, price } = props
	const [amount, setAmount] = useState(1)

	const handlePlus = () => {
		setAmount(amount + 1)
		props.handlePlus(price)

		// console.log(name, price)
	}

	const handleMin = () => {
		if (amount > 1) {
			setAmount(amount - 1)
			props.handleMin(price)

			// console.log(name, price)
		}
	}

	return (
		<div className="flex">
			<div>
				<img className="rounded-lg max-h-fit" src={image} alt="" />
			</div>
			<div className="flex-grow">
				<div className="sm:flex justify-between h-max">
					<div className="pl-4">
						<p className="text-lg font-bold mb-2">{name}</p>
						<div className="text-secondary">
							<p className="text-xs mb-3">{code}</p>
							<p className="text-sm mb-2">COLOR: {color}</p>
							<p className="mb-3">SIZE: {size}</p>
							<div className="flex flex-col lg:flex-row">
								<div className="flex items-center mr-6 mt-2 hover:cursor-pointer">
									<MdDelete />
									<span className="ml-1 text-sm">REMOVE ITEM</span>
								</div>
								<div className="flex items-center mt-2 hover:cursor-pointer">
									<FaHeart />
									<span className="ml-1 text-sm">ADD TO FAVORITE</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex sm:flex-col flex-col-reverse justify-between items-end">
						<div className="flex items-center border border-neutral-300 rounded-md">
							<div onClick={handleMin} className="px-2 h-full flex items-center hover:cursor-pointer hover:bg-neutral-200">
								<BiMinus />
							</div>
							<div className="px-3 border-x">{amount}</div>
							<div onClick={handlePlus} className="px-2 h-full flex items-center hover:cursor-pointer hover:bg-neutral-200">
								<BiPlus />
							</div>
						</div>
						<p className="my-3 sm:my-0 text-primary font-semibold">${price}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		handlePlus: (price) => dispatch({ type: "PLUS_AMOUNT", price: price }),
		handleMin: (price) => dispatch({ type: "MIN_AMOUNT", price: price }),
	}
}

export default connect(null, mapDispatchToProps)(Item)
