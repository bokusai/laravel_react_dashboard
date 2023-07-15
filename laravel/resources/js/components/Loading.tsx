import React, { Children, ReactNode } from "react";

import { ImSpinner11 } from 'react-icons/im';

const Loading:React.FC<{
	children: ReactNode
	isLoading: boolean
	size?: string
}> = ({children, isLoading, size = '1.8rem'}) => {
	return (
		<div
			className="relative w-full h-full"
		>
			<div
				className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isLoading ? 'block' : 'hidden'}`}
			>
				<ImSpinner11
					className='animate-spin'
					size={size}
				 />
			</div>	
			<div className={isLoading ? 'opacity-50' : ''}>
				{children}
			</div>
		</div>
	);
}
export default Loading;