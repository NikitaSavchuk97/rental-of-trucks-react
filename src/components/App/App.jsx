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
import Reliable from '../Reliable/Reliable';
import Catalog from '../Catalog/Catalog';

function App() {

	const [currentUser, setCurrentUser] = useState({});

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className='page'>

				<Header />
				<Navigation />

				<Routes>

					<Route
						exact
						path='/*'
						element={
							<>
								<Banner />
								<Crane />
								<Reliable />
								<Catalog />
							</>
						}
					/>

				</Routes>

				<Footer />

			</div>
		</CurrentUserContext.Provider >
	);
}

export default App;
