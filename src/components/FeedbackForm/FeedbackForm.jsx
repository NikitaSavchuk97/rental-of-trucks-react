import '../FeedbackForm/FeedbackForm.css';
import { useState } from 'react';

function FeedbackForm(props) {

	const [checkbox, setCheckbox] = useState(false);

	function handleChangeCheckbox(e) {
		if (checkbox) {
			setCheckbox(false)
		} else {
			setCheckbox(true);
		}

	}


	if (props.feedbackForm) {
		document.body.style.overflow = "hidden"
	}

	function handleCloseFeedback() {
		document.body.style.overflow = "visible"
		props.setFeedbackForm(false)
	}

	return (
		<section className={`feedback-form ${props.feedbackForm ? 'feedback-form__active' : ''}`} >

			<div className='feedback-form__popup'>

				<button className='feedback-form__close-btn' onClick={handleCloseFeedback}></button>

				<form className='feedback-form__container' action="">

					<h1 className='feedback-form__title'>Арендовать спецтехнику</h1>
					<p className='feedback-form__subtitle'>Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время</p>

					<input className='feedback-form__name' type="text" placeholder='Ваше имя' required />
					<input className='feedback-form__tel' type="tel" placeholder='Ваш телефон' required />
					<input className='feedback-form__email' type="email" placeholder='Ваша почта' required />

					<div className='feedback-form__checkbox-container'>
						<input className='feedback-form__checkbox' type="checkbox" checked={checkbox} onChange={handleChangeCheckbox} />
						<p className='feedback-form__checkbox-text'>Я согласен с условиями обработки и использования моих персональных данных</p>
					</div>

					<button className={`feedback-form__submit-disabled ${checkbox ? 'feedback-form__submit-active' : ''}`} type='submit' disabled={!checkbox}>
						Оставить заявку
					</button>

				</form>


			</div>

		</section>
	)
}

export default FeedbackForm;