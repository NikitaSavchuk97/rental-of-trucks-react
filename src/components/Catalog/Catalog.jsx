import { useEffect, useState } from 'react';

import './Catalog.css';

import { trucksCatalog } from '../../trucks/trucks'
import CatalogCard from '../CatalogCard/CatalogCard';
import SliderArrows from '../SliderArrows/SliderArrows';
import { Link } from 'react-router-dom';

function Catalog(props) {

	const trucks = trucksCatalog;
	const [currentIndex, setCurrentIndex] = useState(0)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [indexForPrev, setIndexForPrev] = useState(0);
	const [indexForNext, setIndexForNext] = useState(1);

	function checkWindowWidth() {
		setWindowWidth(window.innerWidth);
		if (windowWidth > 1200) {
			setIndexForPrev(1);
			setIndexForNext(2);
			if (currentIndex !== 1) {
				setCurrentIndex(1);
			}
		}
	}

	const next = () => {
		if (currentIndex < (trucks.length - 1)) {
			setCurrentIndex(prevState => prevState + 1)
		}
	}

	const prev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(prevState => prevState - 1)
		}
	}

	useEffect(() => {
		checkWindowWidth()
	}, [checkWindowWidth])

	return (
		<section className='catalog'>

			<div className='catalog__padding-container'>

				<h2 className='catalog__title'>
					Каталог техники
				</h2>

				<SliderArrows
					prev={prev}
					next={next}
					length={trucks.length}
					currentIndex={currentIndex}
					indexForNext={indexForNext}
					indexForPrev={indexForPrev}
				/>

			</div>

			<div className='catalog__content-scroll'>
				<div className="catalog__content-wrapper">
					<div
						className="catalog__content"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						{
							trucks.map((card) => {
								return (
									<CatalogCard
										setFeedbackForm={props.setFeedbackForm}
										pathname={props.location}
										key={card.id}
										card={card}
									/>
								)
							})
						}
					</div>
				</div>
			</div>

			<Link className='catalog__link' to={'/catalog'}>
				Перейти в каталог
			</Link>

		</section>
	)
}

export default Catalog;


/*

*/