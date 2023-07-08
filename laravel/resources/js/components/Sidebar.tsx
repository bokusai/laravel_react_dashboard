import React from 'react';

import SidebarList from './SidebarList';
import SidebarListItem from './SidebarListItem';
import SidebarBlock from './SidebarBlock';

import SideBarHeader from './SidebarHeader';

import { RxDashboard } from 'react-icons/rx';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { SlCalender } from 'react-icons/sl';

const NavigationData = [
	{
		to: '/',
		icon: RxDashboard,
		name: 'Home',
	},
	{
		to: 'about',
		icon: TbBrandGoogleAnalytics,
		name: 'About',
	},
	{
		to: 'calender',
		icon: SlCalender,
		name: 'Calender',
	},
];

const Sidebar:React.FC<{}> = () => {
	return (
		<>
			<aside className="flex-col w-56 overflow-y-hidden h-screen bg-slate-900 duration-300 lg:static lg:translate-x-0 text-white shadow-md">
				<div className="flex items-center justify-between gap-2 px-5 py-5 ">
					<SideBarHeader />
				</div>
				<div className="h-screen no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
					<SidebarBlock
						title="Menu"
					>
						<SidebarList>
							{
								NavigationData.map((item, index) => {
									return (
										<SidebarListItem
											to={item.to}
											key={index}
										>
											<item.icon />
											<label>
												{item.name}
											</label>
										</SidebarListItem>
									);
									
								})
							}
						</SidebarList>
					</SidebarBlock>
				</div>
			</aside>
		</>
	);
};
export default Sidebar;