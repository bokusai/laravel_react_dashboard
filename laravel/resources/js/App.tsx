import './bootstrap';

import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// layouts
import LayoutAdmin from './layouts/Admin';

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import DesignParts from './pages/DesignParts';


const queryClient = new QueryClient()

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path="/" element={<LayoutAdmin />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/designparts" element={<DesignParts />} />
				</Route>
			</Routes>		
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
export default App;
