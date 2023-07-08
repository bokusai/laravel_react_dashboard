import React from 'react';
import { Link } from 'react-router-dom';
//import Layout from '../layouts/Admin';

import Card from '../components/Card';

const Home = () => {
	return (
		<>
			<h2 className='font-bold text-2xl my-2 mx-1'>
				Home
			</h2>
			<div className='grid grid-cols-2'>
				<Card
					className=""
				>
					<p>
						card content
					</p>
				</Card>
				<Card
					className=""
				>
					<p>
						card content
					</p>
				</Card>
				<Card
					className=""
				>
					<p>
						card content
					</p>
				</Card>
				<Card
					className=""
				>
					<p>
						card content
					</p>
				</Card>
			</div>
            <div>
                <Link to="/about">about ページへ</Link>
            </div>
		</>
	);
};
export default Home;