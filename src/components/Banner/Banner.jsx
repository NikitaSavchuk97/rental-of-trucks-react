import './Banner.css';
import bannerLiebherr1 from '../../images/banner-liebherr-1.jpg'
import bannerLiebherr2 from '../../images/banner-liebherr-2.jpg'
import bannerLiebherr3 from '../../images/banner-liebherr-3.jpg'
import bannerLiebherr4 from '../../images/banner-liebherr-4.jpg'
import bannerLiebherr5 from '../../images/banner-liebherr-5.jpg'

import bannerLiebherrLogoLower from '../../images/banner-liebherr-logo-lower.svg'

function Banner() {
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
						<button className='banner__call'>
							Заказать звонок
						</button>

						<button className='banner__technic'>
							Каталог техники
						</button>
					</div>
				</div>
			</div>

			<div className='banner__gallery'>
				<img className='banner__image' src={bannerLiebherr1} alt="" />
				<img className='banner__image' src={bannerLiebherr2} alt="" />
				<img className='banner__image' src={bannerLiebherr3} alt="" />
				<img className='banner__image' src={bannerLiebherr4} alt="" />
				<img className='banner__image' src={bannerLiebherr5} alt="" />
			</div>

		</section>
	)
}

export default Banner;