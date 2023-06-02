import '../FeedbackForm/FeedbackForm.css';

function FeedbackForm(props) {

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

				<div className='feedback-form__form'>

					<h1 className='feedback-form__title'>Арендовать спецтехнику</h1>
					<p className='feedback-form__subtitle'>Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время</p>

					<form className='feedback-form__container' action="">

						<input className='feedback-form__name' type="text" />
						<input className='feedback-form__tel' type="tel" />
						<input className='feedback-form__email' type="email" />

						<div className='feedback-form__checkbox-container'>
							<input className='feedback-form__checkbox' type="checkbox" />
							<p className='feedback-form__checkbox-text'>Я согласен с условиями обработки и использования моих персональных данных</p>
						</div>

						<button className='feedback-form__submit' type='submit' >
							Оставить заявку
						</button>

					</form>

				</div>
			</div>

		</section>
	)
}

export default FeedbackForm;