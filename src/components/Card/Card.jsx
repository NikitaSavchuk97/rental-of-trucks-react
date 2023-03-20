import './Card.css';

function Card(props) {

	return (
		<div className='card-wrapper'>
			<div className='card'>

				<img className='card__image' src={props.card.image} alt={props.card.nameRU} />
				<h3 className='card__title' >
					{props.card.nameRU}
				</h3>

				<p className='card__subtitle'>
					Грузоподьемность:
					<span className='card__subtitle-value'>
						{props.card.loadCapacity}
					</span>
				</p>

				<p className='card__subtitle'>Длина стрелы:
					<span className='card__subtitle-value'>
						{props.card.craneLength} м
					</span>
				</p>

				<a className='card__link' href={props.card.link}>Все характеристики</a>

				<a href={props.card.link} className='card__rent-button'>
					Арендовать
				</a>
			</div >
		</div>

	)
}

export default Card;