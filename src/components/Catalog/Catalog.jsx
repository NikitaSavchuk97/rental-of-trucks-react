import './Catalog.css';
import catalogPhoto1 from '../../images/catalog-photo-1.jpg';
import catalogPhoto2 from '../../images/catalog-photo-2.jpg';
import catalogPhoto3 from '../../images/catalog-photo-3.jpg';
import catalogPhoto4 from '../../images/catalog-photo-4.jpg';
import catalogPhoto5 from '../../images/catalog-photo-5.jpg';
import catalogPhoto6 from '../../images/catalog-photo-6.jpg';
import catalogPhoto7 from '../../images/catalog-photo-7.jpg';
import catalogPhoto8 from '../../images/catalog-photo-8.jpg';

import Card from '../Card/Card';
import { useEffect, useState } from 'react';

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

	const [currentIndex, setCurrentIndex] = useState(1)
	const [length, setLength] = useState(trucks.length)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [indexForPrev, setIndexForPrev] = useState(1);
	const [indexForNext, setIndexForNext] = useState(2);

	function checkWindowWidth() {
		if (windowWidth < 1200) {
			setIndexForPrev(0);
			setIndexForNext(1);
			//setCurrentIndex(0);
		}

	}

	const next = () => {
		if (currentIndex < (length - 1)) {
			setCurrentIndex(prevState => prevState + 1)
		}
	}

	const prev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(prevState => prevState - 1)
		}
	}

	useEffect(() => {
		setWindowWidth(window.innerWidth)
		setLength(trucks.length)
		checkWindowWidth()
	}, [trucks, windowWidth])

	return (
		<section className='catalog'>

			<div className='catalog__padding-container'>

				<h2 className='catalog__title'>
					Каталог техники
				</h2>

				<div className='catalog__buttons'>

					{
						currentIndex > indexForPrev &&
						<button className='catalog__prev' onClick={prev}>
							<span className='catalog__prev-box'></span>
							&larr;
						</button>
					}


					{
						currentIndex < (length - indexForNext) &&
						<button className='catalog__next' onClick={next}>
							&rarr;
							<span className='catalog__next-box'></span>
						</button>
					}

				</div>

			</div>

			<div className='carousel-content-scroll'>
				<div className="carousel-content-wrapper">
					<div
						className="carousel-content"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						{
							trucks.map((card) => {
								return (
									<Card
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

<button className='catalog__prev'>
					Предыдущая
				</button>

				<button className='catalog__next'>
					Следующая
				</button>

				<div className='catalog__item'>
					<img className='catalog__image' src={catalogPhoto1} alt="" />
					<h3>Гусеничный кран Liebherr LR 1750</h3>
				</div>


				{
				currentIndex > 1 &&
				<button onClick={prev} className="left-arrow">
					&lt;
				</button>
			}

			

			{
				currentIndex < (length - 2) &&
				<button onClick={next} className="right-arrow">
					&gt;
				</button>
			}


*/