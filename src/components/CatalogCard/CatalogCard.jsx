import './CatalogCard.css';

function CatalogCard(props) {
	//console.log(props.location.pathname)

	return (

		<div className={`catalog-card ${props.location === '/catalog' ? 'catalog-card__givemesomethissmallcards' : ''} `} >

			<img className='catalog-card__image' src={props.card.image} alt={props.card.nameRU} />
			<h3 className='catalog-card__title' >
				{props.card.nameRU}
			</h3>

			<p className='catalog-card__subtitle'>
				Грузоподьемность:
				<span className='catalog-card__subtitle-value'>
					{props.card.loadCapacity} т
				</span>
			</p>

			<p className='catalog-card__subtitle'>Вылет стрелы:
				<span className='catalog-card__subtitle-value'>
					{props.card.departureArrow} м
				</span>
			</p>

			<p className='catalog-card__subtitle'>Высота подъема:
				<span className='catalog-card__subtitle-value'>
					{props.card.liftingHeight} м
				</span>
			</p>

			<a className='catalog-card__link' href={props.card.link}>Все характеристики</a>

			<a href={props.card.link} className='catalog-card__rent-button'>
				Арендовать
			</a>
		</div >


	)
}

export default CatalogCard;