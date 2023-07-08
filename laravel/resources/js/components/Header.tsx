import React from "react";

import { BiSearchAlt } from 'react-icons/bi';

const Header = () => {
	return (
		<header className="flex w-full m-0 p-0 bg-white shadow-md">
			<div className="flex flex-grow justify-between px-4 py-2 items-center">
				<div className="m-1 py-1 inline">
					<form action="" method="get">
						<div className="flex justify-between items-center">
							<BiSearchAlt className="m-0 p-0" />
							<input type="text" placeholder="search ..." className="pl-2"></input>
						</div>
					</form>
				</div>
				<div className="m-1 py-1">
					user setting
				</div>
			</div>
		</header>
	);
}
export default Header;