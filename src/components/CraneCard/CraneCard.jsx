import './CraneCard.css';

function CraneCard(props) {
	return (

		<div className='crane-card__content'>
			<img className='crane-card__image' src={props.card.image} alt={props.card.nameRU} />
			<div className='crane-card__text'>
				<h3 className='crane-card__text-title'>
					{
						props.card.nameRU
					}
				</h3>
				<p className='crane-card__text-subtitle'>
					{
						props.card.about
					}
				</p>
				<a className='crane-card__link' href={'/catalog'}>Выбрать спецтехнику</a>
			</div>
		</div>

	)
}

export default CraneCard;