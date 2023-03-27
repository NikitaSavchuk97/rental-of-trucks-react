import './Price.css';

import price01 from '../../images/price-01.svg'
import price02 from '../../images/price-02.svg'
import price03 from '../../images/price-03.svg'
import price04 from '../../images/price-04.svg'

function Price() {
	return (
		<section className='price'>
			<div className='price__lines'></div>

			<div className='price__title-container'>
				<h2 className='price__title123'>Из чего складывается стоимость аренды</h2>
			</div>

			<div className='price__content'>

				<div className='price__text'>
					<img className='price__image' src={price01} alt='пункт 1' />
					<p className='price__subtitle'>Стоимость аренды крана определяется так: 8 (восемь) часов работы каждой единицы спецтехники в течение смены.</p>
				</div>

				<div className='price__text'>
					<img className='price__image' src={price02} alt='пункт 2' />
					<p className='price__subtitle'>География доставки спецтехники – вся территория РФ и страны СНГ.</p>
				</div>

				<div className='price__text'>
					<img className='price__image' src={price03} alt='пункт 3' />
					<p className='price__subtitle'>Стоимость мобилизации и демобилизации за МКАД и на территорию в границах ТТК обговаривается индивидуально и требует дополнительной оплаты.</p>
				</div>

				<div className='price__text'>
					<img className='price__image' src={price04} alt='пункт 4' />
					<p className='price__subtitle'>Обозначенная в прайс-листе стоимость услуг включает НДС – 20 %.</p>
				</div>

			</div>

			<div className='price__lines'></div>
		</section>
	)
}

export default Price;