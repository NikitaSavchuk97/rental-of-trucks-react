import './About.css';


function About() {
	return (
		<section className='about'>
			<div className='about__container'>
				<div className='about__text'>
					<h2 className='about__us'>О нас</h2>
					<p className='about__paragraph'>
						Компания ЕвроКран – это команда специалистов,
						обеспечивающих эффективное использование высокопроизводительных немецких автокранов марки LIEBHERR.<br /><br />
						Мы работаем с 2000 года и за это время не раз доказали свой профессионализм и компетентность:
						сегодня нам доверяют крупнейшие предприятия России.<br /><br />
						Мы обладаем собственным парком с более чем 50 единицами техники и находимся в черте Москвы.
						Поэтому мы можем подать любую технику в любую точку города незамедлительно,
						что бывает весьма кстати в случае возникновения каких-либо непредвиденных ситуаций.<br /><br />
					</p>
				</div>
				<iframe width="760" height="425" src="https://www.youtube.com/embed/kfm0b0k12b0?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

			</div>
		</section >
	)
}

export default About;