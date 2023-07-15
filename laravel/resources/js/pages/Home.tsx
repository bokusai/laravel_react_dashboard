import React from 'react';
import { Link } from 'react-router-dom';

import { useGetCommonTable } from '../api/commonTable';

import Card from '../components/Card';
import CommonTable from '../components/CommonTable';
import Loading from '../components/Loading';


const Home = () => {
	const { data, isLoading, error } = useGetCommonTable();

	if (isLoading) return 'loading';

	if (error)  return 'error'

	return (
		<>
			<h2 className='font-bold text-2xl my-2 mx-1'>
				Home
			</h2>
			<div className='grid grid-cols-1'>
				<Card
					className=""
				>
					<h4
						className='font-bold px-2 py-2 text-'
					>
						table component
					</h4>
					<Loading isLoading={isLoading}>
						<CommonTable
							headers={data?.data.headers}
							bodyRecords={data?.data.bodyRecords}
						/>
					</Loading>
				</Card>
			</div>
            <div className='px-4 py-4'>
                <Link to="/about">about ページへ</Link>
            </div>
		</>
	);
};
export default Home;