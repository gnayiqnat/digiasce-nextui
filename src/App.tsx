import { Route, Routes } from 'react-router-dom';

import IndexPage from '@/pages/index';
import BlogPage from './pages/blog';
import AboutPage from './pages/about';
import GamesPage from './pages/games';

function App() {
	return (
		<Routes>
			<Route element={<IndexPage />} path='/' />
			<Route element={<GamesPage />} path='/games' />
			<Route element={<AboutPage />} path='/about' />
			<Route element={<BlogPage />} path='/blog' />
		</Routes>
	);
}

export default App;
