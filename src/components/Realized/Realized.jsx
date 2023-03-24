import { useState } from 'react';

import './Realized.css';

import realizedPhoto1 from '../../images/realized-photo-1.jpg'
import realizedPhoto2 from '../../images/realized-photo-2.jpg'
import realizedPhoto3 from '../../images/realized-photo-3.jpg'
import realizedPhoto4 from '../../images/realized-photo-4.jpg'
import realizedPhoto5 from '../../images/realized-photo-5.jpg'
import realizedPhoto6 from '../../images/realized-photo-6.jpg'
import realizedPhoto7 from '../../images/realized-photo-7.jpg'

import RealizedCard from '../RealizedCard/RealizedCard';
import SliderArrows from '../SliderArrows/SliderArrows';


function Realized() {

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

	const trucks = [
		{
			id: 0,
			image: realizedPhoto1,
			nameRU: 'Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750',
			addres: ' Калужская обл., Дзержинский район, пос. Полотняный завод',
			about: 'Монтаж вакуумных колонн К-201 и К-2 «Техническое перевооружение установки АТ-101»Монтаж произведен двумя гусеничными кранами LIEBHERR LR1300 и LIEBHERR LR1750.',
			link: '/excavator'
		},
		{
			id: 1,
			image: realizedPhoto2,
			nameRU: 'Монтаж сегментов моста автокраном LIEBHERR LTM1500',
			addres: '',
			about: 'Автокран LIEBHERR LTM1500 монтирует сегменты металлического пролетного строения моста.',
			link: '/excavator'
		},
		{
			id: 2,
			image: realizedPhoto3,
			nameRU: 'Перегрузка дизельного двигателя автокраном LIEBHERR LTM1250',
			addres: 'г.Жуковский',
			about: 'Перегрузка дизельного двигателя автокраном LIEBHERR LTM1250',
			link: '/excavator'
		},
		{
			id: 3,
			image: realizedPhoto4,
			nameRU: 'Разгрузка сухогруза кранами LIEBHERR LTM 1250 LIEBHERR LTM 1500',
			addres: 'Г. Кстово, причал «Логопром»',
			about: 'Разгрузка сухогруза на правом берегу р.Волга 933 км судового хода кранами LIEBHERR LTM 1250 LIEBHERR LTM 1500',
			link: '/excavator'
		},
		{
			id: 4,
			image: realizedPhoto5,
			nameRU: 'Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500',
			addres: 'г.Туапсе',
			about: 'Разгрузка и монтаж трансформатора ТРДН 80000-110 весом 90т автокраном LIEBHERR LTM1500 грузоподъемностью 500т.',
			link: '/excavator'
		},
		{
			id: 5,
			image: realizedPhoto6,
			nameRU: 'Погрузка, перевозка и разгрузка КТГ',
			addres: 'Москва-Сити',
			about: '',
			link: '/excavator'
		},
		{
			id: 6,
			image: realizedPhoto7,
			nameRU: 'Перегрузка дизельного двигателя автокраном LIEBHERR LTM1250',
			addres: 'порт Беседы',
			about: 'Два крана LIEBHERR LTM1500 и LIEBHERR LTM1400. Перевалка грузов максимальным весом 140 тонн в поту Беседы.',
			link: '/excavator'
		}
	]


	return (
		<section className='realized'>
			<h2 className='realized__title'>Реализованные проекты</h2>

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

		</section >
	)
}

export default Realized;