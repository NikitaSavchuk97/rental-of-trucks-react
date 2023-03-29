import './Map.css';

function Map() {
	return (
		<section className="map">

			<div className='map__childer'>
				<iframe src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.615840%2C55.756644&mode=whatshere&whatshere%5Bpoint%5D=37.615689%2C55.756730&whatshere%5Bzoom%5D=20.8&z=20.8" className='map__childer-link' >
				</iframe>
			</div>

		</section >
	)
}

export default Map;
