import React, { ReactNode, useState } from 'react';

const SidebarList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<ul className='text-xl'>
			{ children }
		</ul>
	);
};
export default SidebarList;