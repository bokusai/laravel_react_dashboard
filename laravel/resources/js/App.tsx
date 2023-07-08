import './bootstrap';

import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

// layouts
import LayoutAdmin from './layouts/Admin';

// pages
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<LayoutAdmin />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>		
		</>
	);
};
export default App;
