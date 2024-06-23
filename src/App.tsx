import { Route, Routes } from 'react-router-dom';

import IndexPage from '@/pages/index';
import AboutPage from './pages/about';
import GamesPage from './pages/games';
import ContactPage from './pages/contact';

function App() {
	return (
		<Routes>
			<Route element={<IndexPage />} path='/' />
			<Route element={<GamesPage />} path='/games' />
			<Route element={<AboutPage />} path='/about' />
			<Route element={<ContactPage />} path='/contact' />
		</Routes>
	);
}

export default App;
