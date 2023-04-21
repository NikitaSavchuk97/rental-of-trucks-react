import { useState } from 'react';

import './Crane.css';

import SliderArrows from '../SliderArrows/SliderArrows';
import CraneCard from '../CraneCard/CraneCard';
import { trucksCrane } from '../../trucks/trucks';

function Crane() {

	const trucks = trucksCrane;
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