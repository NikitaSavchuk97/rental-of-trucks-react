import './Services.css';

import servicesPhoto1 from '../../images/services-photo-1.jpg'
import servicesPhoto2 from '../../images/services-photo-2.jpg'
import servicesPhoto3 from '../../images/services-photo-3.jpg'
import servicesPhoto4 from '../../images/services-photo-4.jpg'
import servicesPhoto5 from '../../images/services-photo-5.jpg'
import servicesPhoto6 from '../../images/services-photo-6.jpg'

function Services() {

	const trucks = [
		{ id: 0, nameRU: 'Аренда', image: servicesPhoto1, link: '/excavator' },
		{ id: 1, nameRU: 'Аренда', image: servicesPhoto2, link: '/excavator' },
		{ id: 2, nameRU: 'Аренда', image: servicesPhoto3, link: '/excavator' },
		{ id: 3, nameRU: 'Аренда', image: servicesPhoto4, link: '/excavator' },
		{ id: 4, nameRU: 'Аренда', image: servicesPhoto5, link: '/excavator' },
		{ id: 5, nameRU: 'Аренда', image: servicesPhoto6, link: '/excavator' },
	]

	return (
		<section className='services'>

			<h2 className='services__title'>Услуги</h2>

			<div className='services__content'>
				{
					trucks.map((card) => {
						return (
							<a
								className='services__card-link-wrapper'
								href={card.link}
								key={card.id}
							>
								<img className='services__card' src={card.image} alt={card.nameRU} />
							</a>
						)
					})
				}
			</div>

			<div className='services__banner'></div>

		</section>
	)
}

export default Services;