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
import FeedbackForm from '../FeedbackForm/FeedbackForm';

import Contacts from '../Contacts/Contacts';








function App() {
	const { pathname } = useLocation()
	const [currentUser, setCurrentUser] = useState({});

	const [feedbackForm, setFeedbackForm] = useState(false);

	function handleOpenFeedback() {
		setFeedbackForm(true)
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className='page'>

				<Header

					handleOpenFeedback={handleOpenFeedback}
				/>
				<Navigation
					location={pathname}
				/>

				<Routes>

					<Route
						exact
						path='/'
						element={
							<>
								<Banner
									handleOpenFeedback={handleOpenFeedback}
								/>
								<Crane />
								<Reliable
									handleOpenFeedback={handleOpenFeedback}
								/>
								<Realized />
								<Catalog
									location={pathname}
									handleOpenFeedback={handleOpenFeedback}
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
								handleOpenFeedback={handleOpenFeedback}
							/>
						}
					/>

					<Route
						path='catalog/product/:id'
						element={
							<Product
								handleOpenFeedback={handleOpenFeedback}
							/>
						}
					/>

					<Route
						path='contacts'
						element={
							<Contacts/>
						}

					/>

					<Route
						path='*'
						element={
							<NotFound />
						}
					/>

				</Routes>

				<Footer
					handleOpenFeedback={handleOpenFeedback}
				/>

				<FeedbackForm
					setFeedbackForm={setFeedbackForm}
					feedbackForm={feedbackForm}
				/>
			</div>

		</CurrentUserContext.Provider >
	);
}

export default App;
