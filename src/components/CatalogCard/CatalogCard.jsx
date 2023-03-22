import './CatalogCard.css';

function CatalogCard(props) {

	return (
		<div className='catalog-card__wrapper'>
			<div className='catalog-card'>

				<img className='catalog-card__image' src={props.card.image} alt={props.card.nameRU} />
				<h3 className='catalog-card__title' >
					{props.card.nameRU}
				</h3>

				<p className='catalog-card__subtitle'>
					Грузоподьемность:
					<span className='catalog-card__subtitle-value'>
						{props.card.loadCapacity}
					</span>
				</p>

				<p className='catalog-card__subtitle'>Длина стрелы:
					<span className='catalog-card__subtitle-value'>
						{props.card.craneLength} м
					</span>
				</p>

				<a className='catalog-card__link' href={props.card.link}>Все характеристики</a>

				<a href={props.card.link} className='catalog-card__rent-button'>
					Арендовать
				</a>
			</div >
		</div>

	)
}

export default CatalogCard;