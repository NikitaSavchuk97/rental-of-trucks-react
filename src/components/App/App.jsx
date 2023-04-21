import { useState } from 'react';
import { Routes, Route, Location, useLocation } from "react-router-dom";

import './App.css';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Crane from '../Crane/Crane';
import Reliable from '../Reliable/Reliable';
import Catalog from '../Catalog/Catalog';
import Realized from '../Realized/Realized';
import Price from '../Price/Price';
import Delivery from '../Delivery/Delivery';
import About from '../About/About';
import Services from '../Services/Services';
import Text from '../Text/Text';
import Questions from '../Questions/Questions';
import Map from '../Map/Map';
import CatalogMain from '../CatalogMain/CatalogMain';

function App() {
	const { pathname } = useLocation()
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
							<main className='main'>
								<Banner />
								<Crane />
								<Reliable />
								<Realized />
								<Catalog />
								<Price />
								<Delivery />
								<About />
								<Services />
								<Text />
								<Questions />
								<Map />
							</main>
						}
					/>

					<Route
						path='/catalog/*'
						element={
							<main className='main'>
								<CatalogMain
									location={pathname}
								/>
							</main>
						}
					/>

				</Routes>

				<Footer />

			</div>
		</CurrentUserContext.Provider >
	);
}

export default App;
