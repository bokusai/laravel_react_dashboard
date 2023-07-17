import React, { Children, ReactNode } from "react";
import { BiError } from 'react-icons/bi';

import { ImSpinner11 } from 'react-icons/im';

const Loading:React.FC<{
	children: ReactNode
	isLoading: boolean
	isError: boolean
	size?: string
}> = ({children, isLoading, isError, size = '1.8rem'}) => {
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
			<div className={`${isLoading || isError ? 'opacity-50' : ''} `}>
				{children}
			</div>
			<div
				className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between items-center py-2 px-4 bg-gray-100 text-black ${isError ? 'block' : 'hidden'}`}
			>
				<BiError
					className=''
					size={size}
				 />
				 <span className="mx-2">通信エラーが発生しました</span>
			</div>
		</div>
	);
}
export default Loading;