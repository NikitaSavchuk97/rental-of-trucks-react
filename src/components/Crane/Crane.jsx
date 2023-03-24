import { useState } from 'react';

import './Crane.css';

import cranePhoto1 from '../../images/crane-photo-1.jpg'
import cranePhoto2 from '../../images/crane-photo-2.jpg'
import cranePhoto3 from '../../images/crane-photo-3.jpg'

import SliderArrows from '../SliderArrows/SliderArrows';
import CraneCard from '../CraneCard/CraneCard';

function Crane() {

	const trucks = [
		{ id: 0, image: cranePhoto1, nameRU: 'Гусиничный кран', about: 'Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.', link: '/excavator' },
		{ id: 1, image: cranePhoto2, nameRU: 'Автомбильный кран', about: 'Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.', link: '/excavator' },
		{ id: 2, image: cranePhoto3, nameRU: 'Фронтальный погрузчик', about: 'Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.', link: '/excavator' },
	]

	const [currentIndex, setCurrentIndex] = useState(0)

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

	return (
		<section className='crane'>

			<div className='crane__title-container'>
				<h2 className='crane__title-orange' >
					Спецтехника <span className='crane__title'>в аренду</span>
				</h2>
			</div>

			<div className='crane__slider'>
				<div
					className='crane__wrapper'
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{
						trucks.map((card) => {
							return (
								<CraneCard
									key={card.id}
									card={card}
								/>
							)
						})
					}
				</div>

			</div>

			<SliderArrows
				prev={prev}
				next={next}
				length={trucks.length}
				currentIndex={currentIndex}
				indexForNext={1}
				indexForPrev={0}
			/>

		</section >
	)
}

export default Crane;

/*

*/