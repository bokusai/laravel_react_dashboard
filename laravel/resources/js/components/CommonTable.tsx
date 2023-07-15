import React, { ReactNode } from 'react';

const CommonTable: React.FC<{
	headers: (ReactNode|string)[],
	bodyRecords: (ReactNode|string)[][]
}> = ({headers, bodyRecords}) => {
	return (
		<div
			className="max-w-full overflow-x-auto"
		>
			<table
				className='w-full table-auto text-left'
			>
				<thead>
					<tr
						className='bg-gray-100'
					>
						{ headers.map((header, index) => {
							return (
								<th 
									className='py-4 px-5'
									key={index}
								>
									{header}
								</th>
							);
						}) }
					</tr>
				</thead>
				<tbody
					className=''
				>
					{ bodyRecords.map((contents, index) => (
							<tr
								className='border-solid border-2 border-gray-100'
								key={index}
							>
								{ contents.map((content, index) => (
									<td
										className='px-5 py-3'
										key={index}
									>
										{content}
									</td>
								)) }
							</tr>
						)
					) }
				</tbody>
			</table>
		</div>
	);
}
export default CommonTable;
