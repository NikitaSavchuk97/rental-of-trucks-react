//import logo from './logo.svg';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Crane from '../Crane/Crane';

function App() {

	const [currentUser, setCurrentUser] = useState({});

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className='page'>

				<Header />
				<Navigation />

				<main className='main'>
					<Routes>

						<Route
							path='/'
							element={
								<>
									<Banner />
									<Crane />
								</>
							}
						/>

					</Routes>
				</main>

				<Footer />

			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
