import React, { ReactNode, useState } from 'react';

import { NavLink } from 'react-router-dom';

const SidebarListItem: React.FC<{
	to: string,
	children: React.ReactNode,
}> = ({ to, children }) => {
	return (
		<li className='block my-2'>
			<NavLink
				to={ to }
				className={`group flex items-center gap-2 py-1 px-2 hover:bg-gray-600 text-base text-gray-100 transition-all duration-500 ease-out`}
			>
				{ children }
			</NavLink>
		</li>
	);
};
export default SidebarListItem;