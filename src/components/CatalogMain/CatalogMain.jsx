import './CatalogMain.css';

import Path from '../Path/Path';
import CatalogCard from '../CatalogCard/CatalogCard';

import { useEffect, useState } from 'react';
import { RangeSlider } from "react-double-range-slider";
import { trucksCatalog } from '../../trucks/trucks';

function CatalogMain(props) {

	const [trucks, setTrucks] = useState(trucksCatalog)
	const [mobileCrane, setMobileCrane] = useState(false);
	const [crawlerСrane, setСrawlerСrane] = useState(false);
	const [lowFrameTrawl, setLowFrameTrawl] = useState(false);
	const [mobileCraneMenu, setMobileCraneMenu] = useState(false);
	const [crawlerСraneMenu, setСrawlerСraneMenu] = useState(false);
	const [lowFrameTrawlMenu, setLowFrameTrawlMenu] = useState(false);
	const [loadCapacityValue, setLoadCapacityValue] = useState({ min: 40, max: 750 });
	const [liftingHeightValue, setLiftingHeightValue] = useState({ min: 3, max: 130 });
	const [departureArrowValue, setDepartureArrowValue] = useState({ min: 35, max: 140 });

	useEffect(() => {
		if (mobileCrane) {
			console.log('авто')
			setTrucks(trucksCatalog.filter((item) =>
				item.type === 'automobileCrane'
				&&
				(item.loadCapacity >= loadCapacityValue.min && item.loadCapacity <= loadCapacityValue.max)
				&&
				(item.liftingHeight >= liftingHeightValue.min && item.liftingHeight <= liftingHeightValue.max)
				&&
				(item.departureArrow >= departureArrowValue.min && item.departureArrow <= departureArrowValue.max)
			));
		} else if (crawlerСrane) {
			console.log('гусин')
			setTrucks(trucksCatalog.filter((item) =>
				item.type === 'crawlerCrane'
				&&
				(item.loadCapacity >= loadCapacityValue.min && item.loadCapacity <= loadCapacityValue.max)
				&&
				(item.liftingHeight >= liftingHeightValue.min && item.liftingHeight <= liftingHeightValue.max)
				&&
				(item.departureArrow >= departureArrowValue.min && item.departureArrow <= departureArrowValue.max)
			));
		} else if (lowFrameTrawl) {
			console.log('тралл')
			setTrucks(trucksCatalog.filter((item) =>
				item.type === 'lowFrameTrawl'
				&&
				(item.loadCapacity >= loadCapacityValue.min && item.loadCapacity <= loadCapacityValue.max)
			));
		} else {
			console.log('все')
			setTrucks(trucksCatalog);
		}
	}, [mobileCrane, crawlerСrane, lowFrameTrawl, loadCapacityValue, liftingHeightValue, departureArrowValue])


	function handleChangeValue() {

	}

	function handleResetFiltres() {
		setMobileCrane(false)
		setСrawlerСrane(false);
		setLowFrameTrawl(false);
		setLoadCapacityValue({ min: 40, max: 750 })
		setDepartureArrowValue({ min: 35, max: 140 })
		setLiftingHeightValue({ min: 3, max: 130 })
	}

	function handleOpenList(e) {
		if (e.target.id === 'MC') {
			if (mobileCraneMenu) {
				setMobileCraneMenu(false)
				return
			}
			setMobileCraneMenu(true)
		}
		if (e.target.id === 'CC') {
			if (crawlerСraneMenu) {
				setСrawlerСraneMenu(false)
				return
			}
			setСrawlerСraneMenu(true)
		}
		if (e.target.id === 'LT') {
			if (lowFrameTrawlMenu) {
				setLowFrameTrawlMenu(false)
				return
			}
			setLowFrameTrawlMenu(true)
		}
	}

	function handleChangeCheckbox(e) {
		setMobileCrane(false)
		setСrawlerСrane(false);
		setLowFrameTrawl(false);
		if (e.target.name === 'MC') {
			setMobileCrane(e.target.checked);
		}
		if (e.target.name === 'GC') {
			setСrawlerСrane(e.target.checked);
		}
		if (e.target.name === 'LT') {
			setLowFrameTrawl(e.target.checked);
		}
	}

	return (
		<section className='catalog-main'>
			<Path
				pathName={'Каталог техники'}
			/>

			<div className='catalog-main__content'>

				<h1 className='catalog-main__title'>
					Каталог техники
				</h1>

				<div className='catalog-main__grid-container'>
					<button className='catalog-main__filter-button'>
						{
							'10 Тонн'
						}
					</button>
				</div>

				<div className='catalog-main__filtres-and-content'>
					<div className='catalog-main__filtres'>

						<div className='catalog-main__filtres-main-box'>
							<h2 className='catalog-main__filtres-main-title'>Параметры</h2>

							<div className='catalog-main__filtres-container'>

								<h3 className='catalog-main__filtres-title'>Вид техники</h3>

								<ul className='catalog-main__filtres-ul'>
									<li className='catalog-main__filtres-li'>
										<input className='catalog-main__filtres-checkbox' type="checkbox" checked={mobileCrane} onChange={handleChangeCheckbox} name="MC" />
										<label className='catalog-main__filtres-label' >Мобильные краны</label>
									</li>

									<li className='catalog-main__filtres-li'>
										<input className='catalog-main__filtres-checkbox' type="checkbox" checked={crawlerСrane} onChange={handleChangeCheckbox} name="GC" />
										<label className='catalog-main__filtres-label' >Гусеничные краны</label>
									</li>

									<li className='catalog-main__filtres-li'>
										<input className='catalog-main__filtres-checkbox' type="checkbox" checked={lowFrameTrawl} onChange={handleChangeCheckbox} name="LT" />
										<label className='catalog-main__filtres-label' >Низкорамные тралы</label>
									</li>
								</ul>

								<div className='catalog-main__filtres-content'>
									<h3 className='catalog-main__filtres-title'>Грузоподъемность, т.</h3>

									<div className='catalog-main__filtres-subcontainer'>
										<form className='catalog-main__filtres-amount-min' >
											<input className='catalog-main__filtres-input' value={loadCapacityValue.min} onChange={handleChangeValue} name='LCVmin' type="number" />
										</form>

										<div className='catalog-main__filtres-amount-max'>
											<input className='catalog-main__filtres-input' value={loadCapacityValue.max} onChange={handleChangeValue} name='LCVmax' type="number" />
										</div>
									</div>

									<RangeSlider
										value={{ min: 40, max: 750 }}
										onChange={(e) => {
											setLoadCapacityValue({
												min: e.min,
												max: e.max
											});
										}}
										tooltipVisibility="hover"
									/>

								</div>

								<div className='catalog-main__filtres-content'>
									<h3 className='catalog-main__filtres-title'>Вылет стрелы, м.</h3>

									<div className='catalog-main__filtres-subcontainer'>
										<form className='catalog-main__filtres-amount-min' >
											<input className='catalog-main__filtres-input' value={departureArrowValue.min} onChange={handleChangeValue} name='LHVmin' type="number" />
										</form>

										<div className='catalog-main__filtres-amount-max'>
											<input className='catalog-main__filtres-input' value={departureArrowValue.max} onChange={handleChangeValue} name='LHVmax' type="number" />
										</div>
									</div>

									<RangeSlider
										value={{ min: 35, max: 140 }}
										onChange={(e) => {
											setDepartureArrowValue({
												min: e.min,
												max: e.max
											});
										}}
										tooltipVisibility="hover"
									/>

								</div>

								<div className='catalog-main__filtres-content'>
									<h3 className='catalog-main__filtres-title'>Высота подъема, м.</h3>

									<div className='catalog-main__filtres-subcontainer'>
										<form className='catalog-main__filtres-amount-min' >
											<input className='catalog-main__filtres-input' value={liftingHeightValue.min} onChange={handleChangeValue} name='LHVmin' type="number" />
										</form>

										<div className='catalog-main__filtres-amount-max'>
											<input className='catalog-main__filtres-input' value={liftingHeightValue.max} onChange={handleChangeValue} name='LHVmax' type="number" />
										</div>
									</div>

									<RangeSlider
										value={{ min: 3 || liftingHeightValue.min, max: 135 || liftingHeightValue.max }}
										onChange={(e) => {
											setLiftingHeightValue({
												min: e.min,
												max: e.max
											});
										}}
										tooltipVisibility="hover"
									/>

								</div>

								<button className='catalog-main__filtres-clear' onClick={handleResetFiltres}>
									Очистить фильтры
								</button>
							</div>

						</div>

						<div className='catalog-main__filtres-main-box'>
							<h2 className='catalog-main__filtres-main-title'>Парк техники</h2>

							<div className='catalog-main__filtres-container'>
								<ul className='catalog-main__filtres-list'>
									<li className='catalog-main__filtres-item'>
										<button className='catalog-main__filtres-li-button' onClick={handleOpenList}>
											<h2 className='catalog-main__filtres-li-title' id='MC'> Мобильные краны Liebherr LTM</h2>
											<h2 className='catalog-main__filtres-li-plus-minus' id='MC'>{mobileCraneMenu ? '-' : '+'}</h2>
										</button>
										<ul className={`catalog-main__filtres-sub-list ${mobileCraneMenu ? 'catalog-main__filtres-sub-list_type_active' : ''}`}>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
										</ul>
									</li>

									<li className='catalog-main__filtres-item'>
										<button className='catalog-main__filtres-li-button' onClick={handleOpenList} name='CC'>
											<h2 className='catalog-main__filtres-li-title' id='CC'> Гусеничные краны Liebherr LR</h2>
											<h2 className='catalog-main__filtres-li-plus-minus' id='CC'>{crawlerСraneMenu ? '-' : '+'}</h2>
										</button>
										<ul className={`catalog-main__filtres-sub-list ${crawlerСraneMenu ? 'catalog-main__filtres-sub-list_type_active' : ''}`}>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
										</ul>
									</li>

									<li className='catalog-main__filtres-item'>
										<button className='catalog-main__filtres-li-button' onClick={handleOpenList} name='LT'>
											<h2 className='catalog-main__filtres-li-title' id='LT'>  Низкорамные тралы Liebherr LT</h2>
											<h2 className='catalog-main__filtres-li-plus-minus' id='LT'>{lowFrameTrawlMenu ? '-' : '+'}</h2>
										</button>
										<ul className={`catalog-main__filtres-sub-list ${lowFrameTrawlMenu ? 'catalog-main__filtres-sub-list_type_active' : ''}`}>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
											<li className='catalog-main__filtres-sub-item'><a className='catalog-main__filtres-sub-item-link' href="/">LTM 1040 (40 т.)</a></li>
										</ul>
									</li>
								</ul>
							</div>
						</div>

					</div>

					<div className={`catalog-main__cards-container ${trucks.length === 0 ? 'catalog-main__cards-container-empty' : ''}`}>
						{
							trucks.length === 0 ?
								(
									<div className='catalog-main__error-of-search'>

										<h2 className='catalog-main__error-title'>
											Нет подходящей техники
										</h2>

										<p className='catalog-main__error-subtitle'>
											попробуйте смягчить условия поиска или поискать в другой категории
										</p>

										<button className='catalog-main__error-button-reset' onClick={handleResetFiltres}>
											Сбросить фильтры
										</button>

									</div>
								)
								:
								(
									trucks.map((card) => {
										return (
											<CatalogCard
												location={props.location}
												key={card.id}
												card={card}
											/>
										)
									})
								)
						}
					</div>

				</div>
			</div>
		</section >
	)
}

export default CatalogMain;