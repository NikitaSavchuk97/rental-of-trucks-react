import './SliderArrows.css';

import logoArrowLeft from '../../images/logo-arrow-left.svg';
import logoArrowRight from '../../images/logo-arrow-right.svg';

function SliderArrows(props) {
	return (
		<div className='slider-arrows'>

			{
				props.currentIndex > props.indexForPrev ?
					<button className='slider-arrows__prev' onClick={props.prev}>
						<span className='slider-arrows__prev-box'></span>
						<img className='slider-arrows__prev-arrow' src={logoArrowLeft} alt="влево" />
					</button>
					:
					''
			}

			{
				props.currentIndex < (props.length - props.indexForNext) ?
					<button className='slider-arrows__next' onClick={props.next}>
						<img className='slider-arrows__prev-arrow' src={logoArrowRight} alt="вправо" />
						<span className='slider-arrows__next-box'></span>
					</button>
					:
					''
			}

		</div>
	)
}

export default SliderArrows;
