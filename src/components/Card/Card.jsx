import React from "react"

const Card = (props) => {
	return <div className={`p-4 m-3 shadow-md rounded-lg h-max ${props.className}`}>{props.children}</div>
}

export default Card
