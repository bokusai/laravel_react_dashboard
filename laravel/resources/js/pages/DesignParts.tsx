import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import Layout from '../layouts/Admin';

import axios from 'axios';

import Card from '../components/Card';
import CommonTable from '../components/CommonTable';

import Loading from '../components/Loading';

import { MdOutlineMail } from 'react-icons/md';

const sampleCardData = [
	{
		'title': 'test',
		'content': 'card content',
	},
	{
		'title': 'test',
		'content': 'card content',
	},
	{
		'title': 'test',
		'content': 'card content',
	},
	{
		'title': 'test',
		'content': 'card content',
	},
];

const sampleTableData = {
	'header': [
		'header',
		'header',
		'header',
	],
	'bodyRecords': [
		[
			'contents',
			'contents',
			'contents',
		],
		[
			'contents',
			'contents',
			'contents',
		],
		[

			'contents',
			'contents',
			'contents',
		],
		[

			'contents',
			'contents',
			'contents',
		],
	],
};


const DesignParts = () => {

	return (
		<>
			<h2 className='font-bold text-2xl my-2 mx-1'>
				Home
			</h2>
			<div className='grid grid-cols-1'>
				<Card
					className=""
				>
					<h4 className='font-bold'>
						Sign In
					</h4>
					<form>
						<div className='mb-4'>
							<div className='relative'>
								<input type="email" className='w-full py-4 pl-6 pr-10 border' />
							</div>
							<span className=''>
								<MdOutlineMail />
							</span>
						</div>
					</form>

				</Card>
			</div >
			<div className='grid grid-cols-2'>
				{sampleCardData.map((item, index) => (
					<Card
						className=""
						key={index}
					>
						<h4>{item.title}</h4>
						<p>{item.content} </p>
					</Card>
				))}
			</div>
			<div className='grid grid-cols-1'>
				<Card
					className=""
				>
					<h4
						className='font-bold px-2 py-2 text-'
					>
						table component
					</h4>
					<Loading isLoading={false} isError={false}>
						<CommonTable
							headers={sampleTableData.header}
							bodyRecords={sampleTableData.bodyRecords}
						/>
					</Loading>
				</Card>
			</div>
			<div className='grid grid-cols-1'>
				<Card
					className=""
				>
					<h4
						className='font-bold px-2 py-2 text-'
					>
						table component
					</h4>
					<Loading isLoading={true} isError={false}>
						<CommonTable
							headers={sampleTableData.header}
							bodyRecords={sampleTableData.bodyRecords}
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
export default DesignParts;
