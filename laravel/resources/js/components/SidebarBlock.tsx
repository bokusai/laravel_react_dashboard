import React, { ReactNode } from "react";

const SidebarBlock: React.FC<{
	title: string,
	children: React.ReactNode,
}> = ({ title, children }) => {
	return (
		<nav className="mt-9 p-4">
			<label className="text-base my-1 mx-1 text-gray-400">
				{ title }
			</label> 
			<div className=''>
				{children}
			</div>
		</nav>
	);
}
export default SidebarBlock;