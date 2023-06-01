import { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

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
import Product from '../Product/Product';
import NotFound from '../NotFound/NotFound';

function App() {
	const { pathname } = useLocation()
	const [currentUser, setCurrentUser] = useState({});

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className='page'>

				<Header />
				<Navigation
					location={pathname}
				/>

				<Routes>

					<Route
						exact
						path='/'
						element={
							<>
								<Banner />
								<Crane />
								<Reliable />
								<Realized />
								<Catalog
									location={pathname}
								/>
								<Price />
								<Delivery
									phraseY={'Оперативно'}
									phraseW={'поставим технику'}
								/>
								<About />
								<Services />
								<Text />
								<Questions />
								<Map />
							</>
						}
					/>

					<Route
						path='catalog'
						element={
							<CatalogMain
								location={pathname}
							/>
						}
					/>

					<Route
						path='catalog/product/:id'
						element={
							<Product />
						}
					/>



					<Route
						path='*'
						element={
							<NotFound />
						}
					/>




				</Routes>

				<Footer />

			</div>
		</CurrentUserContext.Provider >
	);
}

export default App;
