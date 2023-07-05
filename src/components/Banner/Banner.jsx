import './Banner.css';
import { Link } from 'react-router-dom';
import bannerLiebherrLogoLower from '../../images/banner-liebherr-logo-lower.svg'

function Banner(props) {
	return (
		<section className='banner'>

			<div className='banner__offer'>

				<img className='banner__logo-left' src={bannerLiebherrLogoLower} alt="" />

				<div className='banner__offer-container'>

					<div className='banner__line'></div>

					<h1 className='banner__title'>
						Аренда спецтехники<br />LIEBHERR для любых задач
					</h1>

					<p className='banner__subtitle'>
						Мобильные, гусеничные и башенные краны LIEBHERR в аренду для любых задач и грузов.<br />Работаем по всей России
					</p>

					<div className='banner__buttons'>
						<button className='banner__call' onClick={props.handleOpenFeedback}>
							Заказать звонок
						</button>

						<Link to='/catalog' className='banner__technic'>
							Каталог техники
						</Link>
					</div>
				</div>
			</div>

		</section>
	)
}

export default Banner;