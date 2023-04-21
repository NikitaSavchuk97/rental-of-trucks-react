import { useState } from 'react';

import './Realized.css';
import realizedLogo from '../../images/realized-logo.svg';
import { trucksRealized } from '../../trucks/trucks'

import RealizedCard from '../RealizedCard/RealizedCard';
import SliderArrows from '../SliderArrows/SliderArrows';


function Realized() {
	const trucks = trucksRealized;
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
		<section className='realized'>
			<div className='realized__title-container'>
				<h2 className='realized__title'>Реализованные проекты</h2>
			</div>


			<div className='realized__preview' >
				<div className='realized__preview-wrapper'>
					{
						trucks.map((card) => {
							return (
								<div
									id={card.id}
									className={`realized__preview-item ${currentIndex === card.id ? 'realized__preview-item-active' : ''}`} key={card.id}
									style={{ transform: `translateX(-${currentIndex * 100}%)` }}
								>
									< img className={`realized__preview-item-image ${currentIndex === card.id ? 'realized__preview-item-image-active' : ''}`} src={card.image} alt="" />
								</div>
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

			<div className='realized__slider'>
				<div
					className='realized__slider-wrapper'
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{
						trucks.map((card) => {
							return (
								<RealizedCard
									key={card.id}
									card={card}
								/>
							)
						})
					}
				</div>
			</div>

			<img className='realized__banner' src={realizedLogo} alt="" />

		</section >
	)
}

export default Realized;