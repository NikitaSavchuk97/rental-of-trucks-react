
import '../Product/Product.css';
import Path from '../Path/Path';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Product(props) {

	const location = useLocation();
	const card = location.state.card;
	const [description, setDescription] = useState(true);
	const [documentation, setDocumentation] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	function setActiveDoc() {
		setDescription(true);
		setDocumentation(false);
	}

	function setActiveDes() {
		setDescription(false);
		setDocumentation(true);
	}



	return (
		<section className='product'>
			<Path
				pathName={'Каталог техники'}
				subPathName={'Страница товара'}
			/>

			<div className='product__main-content'>
				<div className='product__main-content-wrapper'>

					<h1 className='product__name'>{card.nameRU}</h1>

					<div className='product__info'>

						<img className='product__image-main' src={card.image} alt="" />

						<div className='product__tech-info'>
							<ul className='product__tech-info-list'>

								<li className='product__tech-info-list-item'>
									<p className='product__tech-info-list-item-point'>Максимальная грузоподъемность:</p>
									<span className='product__tech-info-list-item-value'>
										{card.loadCapacity} т
									</span>
								</li>

								{
									card.type === 'lowFrameTrawl' ?
										<>
											<li className='product__tech-info-list-item'>
												<p className='product__tech-info-list-item-point'>Количество осей:</p>
												<span className='product__tech-info-list-item-value'>
													{card.axles}
												</span>
											</li>

											<li className='product__tech-info-list-item'>
												<p className='product__tech-info-list-item-point'>Высота платформы:</p>
												<span className='product__tech-info-list-item-value'>
													{card.platformHeight} м
												</span>
											</li>

											<li className='product__tech-info-list-item'>
												<p className='product__tech-info-list-item-point'>Длина платформы:</p>
												<span className='product__tech-info-list-item-value'>
													{card.platformWidth} м
												</span>
											</li>

											<li className='product__tech-info-list-item'>
												<p className='product__tech-info-list-item-point'>Масса без нагрузки:</p>
												<span className='product__tech-info-list-item-value'>
													{card.weightWithoutLoad} т
												</span>
											</li>
										</>
										:
										''
								}

								{
									card.type === 'lowFrameTrawl' ?
										''
										:
										<>
											<li className='product__tech-info-list-item'>
												<p className='product__tech-info-list-item-point'>Максимальный вылет стрелы:</p>
												<span className='product__tech-info-list-item-value'>
													{card.departureArrow} м
												</span>
											</li>

											<li className='product__tech-info-list-item'>
												<p className='product__tech-info-list-item-point'>Максимальная высота подъема:</p>
												<span className='product__tech-info-list-item-value'>
													{card.liftingHeight} м
												</span>
											</li>
										</>
								}

								<li className='product__tech-info-list-item'>
									<p className='product__tech-info-list-item-point'>Максимальная скорость:</p>
									<span className='product__tech-info-list-item-value'>
										{card.maxSpeed} км/ч
									</span>
								</li>

								<li className='product__tech-info-list-item'>
									<p className='product__tech-info-list-item-point'>Стоимость аренды:</p>
									<span className='product__tech-info-list-item-value'>
										{card.price} р/ч
									</span>
								</li>

							</ul>

							<button className='product__rent-button' onClick={props.handleOpenFeedback}>
								Заказать
							</button>

						</div>
					</div>

					<div className='product__buttons'>
						<button className={`product__info-button ${description ? 'product__info-button-active' : ''} `} onClick={setActiveDoc}>Описание</button>
						<button className={`product__info-button ${documentation ? 'product__info-button-active' : ''} `} onClick={setActiveDes}>Документация</button>
					</div>

					<div className='product__text'>
						{
							description ?
								<p>
									{
										card.description
									}
								</p>
								:
								''
						}
					</div>
				</div>
			</div>

		</section >
	)
}

export default Product;










