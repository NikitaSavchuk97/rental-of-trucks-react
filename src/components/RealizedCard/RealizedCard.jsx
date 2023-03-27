import './RealizedCard.css';


import logoSpot from '../../images/logo-spot.svg';


function RealizedCard(props) {
	return (
		<div className='realized-card'>

			<img className='realized-card__image' src={props.card.image} alt={props.card.nameRU} />
			<div className='realized-card__text'>

				<h3 className='realized-card__text-title'>
					{
						props.card.nameRU
					}
				</h3>

				<div className={`realized-card__location-container 	${props.card.addres === '' ? 'realized-card__location-container-disabled' : ''}`}>
					<img className='realized-card__location-img' src={logoSpot} alt="" />
					<p className='realized-card__location-text'>{props.card.addres}</p>
				</div>

				<p className='realized-card__text-subtitle'>
					{props.card.about}
				</p>

				<a className='realized-card__link' href={props.card.link}>Подробнее</a>
			</div>

		</div >
	)
}

export default RealizedCard;

