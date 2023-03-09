import { useState } from 'react';
import '../Navigation/Navigation.css';
import logoSearch from '../../images/logo-search.svg';
import logoBurgerOpen from '../../images/logo-burger-open.svg';
import logoBurgerClose from '../../images/logo-burger-close.svg';

function Navigation() {

	const [menuOpened, setMenuOpened] = useState(false);

	function handleMenuOpen() {
		setMenuOpened(true);
	}

	function handleMenuClose() {
		setMenuOpened(false);
	}

	return (
		<>
			<div className='navigation'>
				<div className='navigation__container'>

					<button className='burger-button' onClick={menuOpened ? handleMenuClose : handleMenuOpen}>
						<img className='burger-button-image' src={menuOpened ? logoBurgerClose : logoBurgerOpen} alt="логотип меню" />
					</button>

					<ul className={`navigation__menu`}>
						<li className='navigation__item'>
							<a className='navigation__link' href='/catalog'>Каталог</a>
						</li>

						<li className='navigation__item'>
							<a className='navigation__link' href='/services'>Услуги</a>
						</li>

						<li className='navigation__item'>
							<a className='navigation__link' href='/about-the-company'>О компании</a>
						</li>

						<li className='navigation__item'>
							<a className='navigation__link' href='/objects'>Объекты</a>
						</li>

						<li className='navigation__item'>
							<a className='navigation__link' href='/prices'>Цены</a>
						</li>

						<li className='navigation__item'>
							<a className='navigation__link' href='/blog'>Блог</a>
						</li>

						<li className='navigation__item'>
							<a className='navigation__link' href='/contacts'>Контакты</a>
						</li>
					</ul>

					<form className='navigation__search' action="">
						<input className='navigation__search-input' type="search" required />
						<button className='navigation__search-button' type='submit' >
							<img className='navigation__search-button-logo' src={logoSearch} alt="логотип поиск" />
						</button>
					</form>
				</div>
			</div>

			<ul className={`navigation__submenu ${menuOpened ? 'navigation__menu-opened' : ''}`}>
				<li className='navigation__item'>
					<a className='navigation__link' href='/catalog'>Каталог</a>
				</li>

				<li className='navigation__item'>
					<a className='navigation__link' href='/services'>Услуги</a>
				</li>

				<li className='navigation__item'>
					<a className='navigation__link' href='/about-the-company'>О компании</a>
				</li>

				<li className='navigation__item'>
					<a className='navigation__link' href='/objects'>Объекты</a>
				</li>

				<li className='navigation__item'>
					<a className='navigation__link' href='/prices'>Цены</a>
				</li>

				<li className='navigation__item'>
					<a className='navigation__link' href='/blog'>Блог</a>
				</li>

				<li className='navigation__item'>
					<a className='navigation__link' href='/contacts'>Контакты</a>
				</li>
			</ul>
		</>
	)
}

export default Navigation;