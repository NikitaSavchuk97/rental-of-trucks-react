import './Crane.css';
import cranePhoto1 from '../../images/crane-photo-1.jpg'
import cranePhoto2 from '../../images/crane-photo-2.jpg'
import cranePhoto3 from '../../images/crane-photo-3.jpg'



function Crane() {

	let slideIndex = 1;
	const slides = document.getElementsByClassName('crane__content')

	function nextSlide() {
		slideIndex += 1
		if (slideIndex > slides.length) {
			slideIndex = 1
		}
		if (slideIndex < 1) {
			slideIndex = slides.length
		}
		for (let slide of slides) {
			slide.style.display = "none";
		}
		slides[slideIndex - 1].style.display = "flex";
		slides[slideIndex - 1].style.animation = "next 1s ease-in-out";
	}

	function previousSlide() {
		slideIndex -= 1
		if (slideIndex > slides.length) {
			slideIndex = 1
		}
		if (slideIndex < 1) {
			slideIndex = slides.length
		}
		for (let slide of slides) {
			slide.style.display = "none";
		}
		slides[slideIndex - 1].style.display = "flex";
		slides[slideIndex - 1].style.animation = "previous 1s ease-in-out";
	}

	return (
		<section className='crane'>

			<h2 className='crane__title-orange' >
				Спецтехника <span className='crane__title'>в аренду</span>
			</h2>

			<div className='crane__slider'>

				<div className='crane__content crane__content_type_active'>
					<img className='crane__image' src={cranePhoto1} alt="" />
					<div className='crane__text'>
						<h3 className='crane__text-title'>
							Гусеничные краны
						</h3>
						<p className='crane__text-subtitle'>
							Аренда гусеничного крана – актуальная услуга для многих строительных площадок.
							Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.
						</p>
						<button type='button' className='crane__link' href="/">Выбрать спецтехнику</button>
					</div>
				</div>

				<div className='crane__content'>
					<img className='crane__image' src={cranePhoto2} alt="" />
					<div className='crane__text' >
						<h3 className='crane__text-title' >
							Автомобильные краны
						</h3>
						<p className='crane__text-subtitle'>
							Аренда гусеничного крана – актуальная услуга для многих строительных площадок.
							Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.
						</p>
						<button type='button' className='crane__link' href="/">Выбрать спецтехнику</button>
					</div>
				</div>

				<div className='crane__content'>
					<img className='crane__image' src={cranePhoto3} alt="" />
					<div className='crane__text'>
						<h3 className='crane__text-title'>
							Фронтальные погрузчики
						</h3>
						<p className='crane__text-subtitle'>
							Аренда гусеничного крана – актуальная услуга для многих строительных площадок.
							Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.
						</p>
						<button type='button' className='crane__link' href="/">Выбрать спецтехнику</button>
					</div>
				</div>

			</div>

			<div className='crane__slider-buttons'>
				<button className='crane__button' onClick={previousSlide}>
					&larr;
				</button>

				<button className='crane__button' onClick={nextSlide}>
					&rarr;
				</button>
			</div>



		</section >
	)
}

export default Crane;

/*

*/