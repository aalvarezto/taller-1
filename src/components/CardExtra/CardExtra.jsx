import React from "react"
import "./styles.css"

const CardExtra = ({
	children,
	isVerical = false,
	isSmall = false,
	onPrimaryClick = () => null,
}) => {
	const sizeClassName = isSmall ? "small" : "large"
	const layoutClassName = isVerical ? "portrait" : "landscape"

	return (
		<div className={`card ${sizeClassName} ${layoutClassName}`}>
			{children}

			<button onClick={onPrimaryClick}></button>
		</div>
	)
}

export default CardExtra
