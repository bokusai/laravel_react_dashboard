import { ReactNode, useState } from 'react';

const SidebarLinkGroup = (children, isActive) => {
	const [isOpen, setIsOpen] = useState(isActive);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<li>
						
			</li>
		</>
	);
}
export default SidebarLinkGroup;