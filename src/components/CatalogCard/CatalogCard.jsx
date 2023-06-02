import { Link } from 'react-router-dom';
import './CatalogCard.css';

function CatalogCard(props) {

	function handleOpenFeedback() {
		props.setFeedbackForm(true)
	}

	return (
		<div className={`catalog-card ${props.location === '/catalog' ? 'catalog-card__givemesomethissmallcards' : ''} `} >


			<Link to={`${props.pathname === '/' ? 'catalog/product/' : 'product/'}${props.card.id}`} state={{ card: props.card }} className='catalog-card__image-wrapper'>
				<img className='catalog-card__image' src={props.card.image} alt={props.card.nameRU} />
			</Link>


			<h3 className='catalog-card__title' >
				{props.card.nameRU}
			</h3>

			<p className='catalog-card__subtitle'>
				Грузоподьемность:
				<span className='catalog-card__subtitle-value'>
					{props.card.loadCapacity} т
				</span>
			</p>

			{
				props.card.type === 'lowFrameTrawl' ?
					<>
						<p className='catalog-card__subtitle'>Высота платформы:
							<span className='catalog-card__subtitle-value'>
								{props.card.platformHeight} м
							</span>
						</p>

						<p className='catalog-card__subtitle'>Длина платформы:
							<span className='catalog-card__subtitle-value'>
								{props.card.platformWidth} м
							</span>
						</p>
					</>
					:
					<>
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
					</>
			}

			<Link to={`${props.pathname === '/' ? 'catalog/product/' : 'product/'}${props.card.id}`} state={{ card: props.card }} className='catalog-card__link'>
				Все характеристики
			</Link>

			<button className='catalog-card__rent-button' onClick={handleOpenFeedback} >
				Арендовать
			</button>
		</div >
	)
}

export default CatalogCard;




/*
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
*/