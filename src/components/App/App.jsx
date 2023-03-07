//import logo from './logo.svg';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from '../Header/Header';

function App() {

	const [currentUser, setCurrentUser] = useState({});

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className='page'>
				<Header />
				<Routes>

					<Route
					></Route>

				</Routes>
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
