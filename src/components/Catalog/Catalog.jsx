import { useEffect, useState } from 'react';

import './Catalog.css';

import catalogPhoto1 from '../../images/catalog-photo-1.jpg';
import catalogPhoto2 from '../../images/catalog-photo-2.jpg';
import catalogPhoto3 from '../../images/catalog-photo-3.jpg';
import catalogPhoto4 from '../../images/catalog-photo-4.jpg';
import catalogPhoto5 from '../../images/catalog-photo-5.jpg';
import catalogPhoto6 from '../../images/catalog-photo-6.jpg';
import catalogPhoto7 from '../../images/catalog-photo-7.jpg';
import catalogPhoto8 from '../../images/catalog-photo-8.jpg';

import CatalogCard from '../CatalogCard/CatalogCard';
import SliderArrows from '../SliderArrows/SliderArrows';

function Catalog() {

	const trucks = [
		{ id: 0, image: catalogPhoto1, nameRU: 'Экскаватор', loadCapacity: 5, craneLength: 1, link: '/excavator' },
		{ id: 1, image: catalogPhoto2, nameRU: 'Бульдозер', loadCapacity: 5, craneLength: 1, link: '/excavator' },
		{ id: 2, image: catalogPhoto3, nameRU: 'Самосвал', loadCapacity: 5, craneLength: 1, link: '/excavator' },
		{ id: 3, image: catalogPhoto4, nameRU: 'Погрузчик', loadCapacity: 5, craneLength: 1, link: '/excavator' },
		{ id: 4, image: catalogPhoto5, nameRU: 'Грейдер', loadCapacity: 5, craneLength: 1, link: '/excavator' },
		{ id: 5, image: catalogPhoto7, nameRU: 'Трубокладчик', loadCapacity: 5, craneLength: 1, link: '/excavator' },
		{ id: 6, image: catalogPhoto6, nameRU: 'Автокран', loadCapacity: 5, craneLength: 1, link: '/excavator' },
		{ id: 7, image: catalogPhoto8, nameRU: 'Перегружатель', loadCapacity: 5, craneLength: 1, link: '/excavator' },
	]

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
	}, [windowWidth])

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
										key={card.id}
										card={card}
									/>
								)
							})
						}
					</div>
				</div>
			</div>

			<button className='catalog__link'>
				Перейти в каталог
			</button>

		</section>
	)
}

export default Catalog;


/*

*/