import './Path.css';

function Path(props) {
	return (
		<section className='path'>
			<div className='path__page-path'>
				<a className='path__to-main' href="/">
					Главная -
				</a>
				<p className='path__this-path'>
					{
						props.pathName
					}
				</p>
			</div>
		</section>
	)
}

export default Path;