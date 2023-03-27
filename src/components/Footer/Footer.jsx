import './Footer.css';

import logo from '../../images/logo.svg';
import logoInstagram from '../../images/logo-instagram.svg';
import logoTwitter from '../../images/logo-twitter.svg';
import logoWhatsapp from '../../images/logo-whatsapp.svg';
import logoVkontakte from '../../images/logo-vkontakte.svg';
import logoYandex from '../../images/logo-yandex.svg';






function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container'>

				<div className='footer__logo'>
					<img className='footer__logo-image' src={logo} alt="лого" />
					<p className='footer__logo-title'>
						Аренда мобильных и<br />гусеничных кранов<br />LIEBHERR
					</p>

					<p className='footer__logo-subtitle'>
						© 2000-2023 Все права защищены
					</p>
				</div>

				<nav className='footer__nav-list'>
					<h3 className='footer__nav-list-title'>Клиентам</h3>
					<ul className='footer__nav-list-links'>
						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								О компании
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Услуги
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Каталог техники
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Аренда кранов
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Наши работы
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Цены
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Контакты
							</a>
						</li>
					</ul>
				</nav>

				<nav className='footer__nav-list'>
					<h3 className='footer__nav-list-title'>Техника</h3>
					<ul className='footer__nav-list-links'>
						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Гусиничные краны
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Мобильные краны
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Низеорамные краны
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Модульные платформы
							</a>
						</li>
					</ul>
				</nav>

				<nav className='footer__nav-list'>
					<h3 className='footer__nav-list-title'>Услуги</h3>
					<ul className='footer__nav-list-links'>
						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Аренда гусеничного крана
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Аренда мобильного крана
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Аренда башенного крана
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="#">
								Перевозка негабаритного груза
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="">
								Разработка ППРК
							</a>
						</li>
					</ul>
				</nav>

				<div className='footer__contact-me'>

					<button className='footer__contact-me-button'>
						Свяжитесь со мной
					</button>

					<ul className='footer__icon-links'>
						<li className='footer__icon-links-item'>
							<a href="#">
								<img className='footer__icon' src={logoInstagram} alt="инстаграм" />
							</a>
						</li>

						<li className='footer__icon-links-item'>
							<a href="#">
								<img className='footer__icon' src={logoTwitter} alt="твиттер" />
							</a>
						</li>

						<li className='footer__icon-links-item'>
							<a href="#">
								<img className='footer__icon' src={logoWhatsapp} alt="вотсапп" />
							</a>
						</li>

						<li className='footer__icon-links-item'>
							<a href="#">
								<img className='footer__icon' src={logoVkontakte} alt="вконтакте" />
							</a>
						</li>

						<li className='footer__icon-links-item'>
							<a href="#">
								<img className='footer__icon' src={logoYandex} alt="яндекс" />
							</a>
						</li>
					</ul>

				</div>

				<nav className='footer__nav-list'>
					<h3 className='footer__nav-list-title'>Контакты</h3>
					<ul className='footer__nav-list-links'>
						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="tel:+74999299666">
								+7 (499) 929-96-66
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="tel:+79853645518">
								+7 (985) 364-55-18
							</a>
						</li>

						<li className='footer__nav-list-item'>
							<a className='footer__nav-list-item-link' href="tel:79853645518">
								+7 (985) 226-20-30
							</a>
						</li>
					</ul>
				</nav>

			</div>
		</footer>
	)
}

export default Footer;