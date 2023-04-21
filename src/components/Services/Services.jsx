import './Services.css';
import { trucksServices } from '../../trucks/trucks'

function Services() {

	const trucks = trucksServices;

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
								<img className='services__card-image' src={card.image} alt={card.nameRU} />
								<div className='services__card-title'>
									{
										card.title
									}
								</div>
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