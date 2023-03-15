import './Reliable.css';

import reliableLogo1 from '../../images/reliable-logo-1.svg'
import reliableLogo2 from '../../images/reliable-logo-2.svg'
import reliableLogo3 from '../../images/reliable-logo-3.svg'
import reliableLogo4 from '../../images/reliable-logo-4.svg'

function Reliable() {
	return (
		<section className='reliable'>

			<div className='reliable__container'>

				<div className='reliable__title-container'>
					<h2 className='reliable__title'>
						С нами надежно
					</h2>
				</div>


				<div className='reliable__info-container'>

					<div className='reliable__text-container'>

						<p className='reliable__text'>
							Компания Еврокран успешно работает на территории РФ с 2000 года.
							<br />
							<br />
							В нашем автопарке гусеничные и мобильные краны известного немецкого бренда.
							<br />
							<br />
							Среди них есть модели любой грузоподъемности, для погрузочных, монтажных, транспортировочных и других работ.
							<br />
							<br />
							Обращение в компанию гарантирует комплексный подход к решению поставленных задач. Получить больше информации можно у менеджеров Компании Еврокран.
						</p>

						<button className='reliable__link'>
							Заказать звонок
						</button>

					</div>

					<div className='reliable__icons'>

						<div className='reliable__item'>
							<img src={reliableLogo1} alt="Поставка техники точно в срок" />
							<p>Поставка техники точно в срок</p>
						</div>

						<div className='reliable__item'>
							<img src={reliableLogo2} alt="Сопровождение спецтехники" />
							<p>Сопровождение спецтехники</p>
						</div>

						<div className='reliable__item'>
							<img src={reliableLogo3} alt="Квалифицированнные специалисты" />
							<p>Квалифицированнные специалисты</p>
						</div>

						<div className='reliable__item'>
							<img src={reliableLogo4} alt="Автопарк от ведущих мировых производителей" />
							<p>Автопарк от ведущих мировых производителей</p>
						</div>

					</div>

				</div>
			</div>

			<div className='reliable__black'>
				<div className='reliable__lines'></div>

				<div className='reliable__black-content'>

					<div className='reliable__black-text'>
						<h3 className='reliable__black-title'>20</h3>
						<p className='reliable__black-subtitle'>лет на рынке</p>
					</div>

					<div className='reliable__black-text'>
						<h3 className='reliable__black-title'>1000+</h3>
						<p className='reliable__black-subtitle'>выполненых проектов</p>
					</div>

					<div className='reliable__black-text'>
						<h3 className='reliable__black-title'>20+</h3>
						<p className='reliable__black-subtitle'>единиц техники всегда в наличии</p>
					</div>

				</div>

				<div className='reliable__lines'></div>
			</div>
		</section>
	)
}

export default Reliable;