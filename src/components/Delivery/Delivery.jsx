import { useState } from 'react';
import './Delivery.css';

function Delivery(props) {

	const [checkbox, setCheckbox] = useState(false);

	function handleChangeCheckbox(e) {
		const checkboxValue = e.target.checked;
		setCheckbox(checkboxValue);
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log("Что-то куда-то отправилось...")
	}


	return (
		<section className='delivery'>
			<div className='delivery__line'></div>

			<div className='delivery__container'>
				<h2 className='delivery__title-orange'>{props.phraseY} <span className='delivery__title-orange delivery__title-black'>{props.phraseW}</span></h2>
				<form className='delivery__form' onSubmit={handleSubmit}>
					<input className='delivery__form-name' type="text" placeholder='Ваше имя' />
					<input className='delivery__form-tel' type="tel" placeholder='Ваш телефон' />
					<button className={`delivery__form-submit-disabled ${checkbox ? 'delivery__form-submit' : ''}`} type='submit' disabled={!checkbox} onSubmit={handleSubmit}>
						Заказать звонок
					</button>
				</form>

				<div className='delivery__checkbox-container'>
					<input className='delivery__checkbox' checked={checkbox} onChange={handleChangeCheckbox} type="checkbox" />
					<label className='delivery__label'>
						Я согласен с условиями обработки и использования моих персональных данных
					</label>
				</div>

			</div>

			<div className='delivery__line'></div>
		</section >
	)
}

export default Delivery;