import { useState } from 'react';
import './Questions.css';

import questionsImage from '../../images/questions-crane.svg';

function Questions() {


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
		<section className='questions'>

			<div className='questions__lines'></div>

			<div className='questions__container'>

				<form className='questions__form' onSubmit={handleSubmit}>

					<h2 className='questions__title'>
						Остались вопросы?
					</h2>

					<p className='questions__subtitle'>
						Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время
					</p>

					<input className='questions__form-input' type="name" placeholder='Ваше имя' />
					<input className='questions__form-input' type="tel" placeholder='Ваш телефон' />
					<input className='questions__form-input' type="email" placeholder='Ваш емайл' />
					<input className='questions__form-input' type="text" placeholder='Оставьте ваш вопрос' />

					<div className='questions__form-checkbox-container'>
						<input className='questions__form-checkbox' checked={checkbox} onChange={handleChangeCheckbox} type="checkbox" />
						<label className='questions__form-checkbox-subtitle'>
							Я согласен с условиями обработки и использования моих персональных данных
						</label>
					</div>

					<button className={`questions__submit-disabled ${checkbox ? 'questions__submit' : ''}`} disabled={!checkbox} >
						Заказать звонок
					</button>
				</form>

			</div>

			<img className='questions__image' src={questionsImage} alt="Кран" />


			<div className='questions__lines'></div>

		</section>
	)
}

export default Questions;