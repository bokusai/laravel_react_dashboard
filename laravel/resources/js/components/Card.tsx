import React from "react";


const Card: React.FC<{
	className: string,
	children: React.ReactNode,
}> = ({ className, children }) => {
	return (
		<div className={`my-3 mx-1 p-5 bg-white shadow-md ${className}`}>
			{ children }
		</div>
	);
}
export default Card;