import './Header.css';
import logo from '../../images/logo.svg';
import logoClock from '../../images/logo-clock.svg';
import logoSpot from '../../images/logo-spot.svg';
import logoPhone from '../../images/logo-phone.svg';
import Navigation from '../Navigation/Navigation';


function Header() {
	return (
		<>
			<header className='header'>

				<div className='header__logo'>

					<img className='header__logo-image' src={logo} alt="логотип главный" />
					<p className='header__logo-title'>
						Аренда спецтехники LIEBHERR c 2000 года
					</p>

				</div>

				<div className='header__clock'>
					<img className='header__clock-logo' src={logoClock} alt="логотип часы" />
					<p className='header__clock-title'>10:00-17:00</p>
				</div>

				<div className='header__address'>
					<img className='header__address-logo' src={logoSpot} alt="логотип точка" />
					<p className='header__address-title'>г.Москва, ул.Куликовская, 12</p>
				</div>

				<button className='header__contact-me'>
					Свяжитесь со мной
				</button>

				<div className='header__phone-numbers'>

					<img className='header__phone-numbers-logo' src={logoPhone} alt="" />

					<ul className='header__phone-numbers-list'>
						<li className='header__phone-numbers-item'>
							<span className='header__phone-numbers-title'>
								+7 (499) 929-96-66
							</span>
						</li>

						<li className='header__phone-numbers-item'>
							<span className='header__phone-numbers-title'>
								+7 (499) 929-96-66
							</span>
						</li>

						<li className='header__phone-numbers-item'>
							<span className='header__phone-numbers-title'>
								+7 (499) 929-96-66
							</span>
						</li>
					</ul>

				</div>

			</header >

			<Navigation />
		</>
	)
}

export default Header;