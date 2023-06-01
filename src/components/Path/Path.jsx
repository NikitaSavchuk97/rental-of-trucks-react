import './Path.css';

function Path(props) {
	return (
		<section className='path'>
			<div className='path__page-path'>

				<a className='path__to-main' href="/">
					Главная
				</a>

				{
					props.subPathName ?
						<a href={'/catalog'} className='path__this-path path__to-main'>
							{
								`- ${props.pathName}`
							}
						</a>
						:
						<p className='path__this-path'>
							{
								`- ${props.pathName}`
							}
						</p>
				}

				{
					props.subPathName ?
						<p className='path__this-path'>
							{
								`- ${props.subPathName}`
							}
						</p>
						:
						''
				}

			</div>
		</section >
	)
}

export default Path;