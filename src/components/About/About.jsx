import './About.css';


function About() {
	return (
		<section className='about'>

			<div className='about__container'>
				<h2 className='about__us'>О нас</h2>
				<div className='about__content'>
					<p className='about__paragraph'>
						Компания ЕвроКран – это команда специалистов,
						обеспечивающих эффективное использование высокопроизводительных немецких автокранов марки LIEBHERR.<br /><br />
						Мы работаем с 2000 года и за это время не раз доказали свой профессионализм и компетентность:
						сегодня нам доверяют крупнейшие предприятия России.<br /><br />
						Мы обладаем собственным парком с более чем 50 единицами техники и находимся в черте Москвы.
						Поэтому мы можем подать любую технику в любую точку города незамедлительно,
						что бывает весьма кстати в случае возникновения каких-либо непредвиденных ситуаций.<br /><br />
					</p>

					<iframe className='about__iframe' width='100%' height='100%' src="https://www.youtube.com/embed/kfm0b0k12b0?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

				</div>
			</div>
			
		</section >
	)
}

export default About;