import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';

import Hero from './components/pages/Hero';
import About from './components/pages/About';
import Eventos from './components/pages/Eventos';
import Team from './components/pages/Team';
import Contato from './components/pages/Contato';
import Blog from './components/pages/Blog';
import CreatePost from './api/CreatePost';

import Footer from './components/Footer';

import './styles/main.scss';


function App() {
	return (
		<>
			<Navbar />
			<main>
				<Routes>
					<Route path='/' element={<Hero />} />
					<Route path='/about' element={<About />} />
					<Route path='/eventos' element={<Eventos />} />
					<Route path='/team' element={<Team />} />
					<Route path='/contato' element={<Contato />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/create' element={<CreatePost />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
