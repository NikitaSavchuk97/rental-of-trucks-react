import { useEffect, useState } from 'react';
import './Contacts.css';


function Contacts() {

	useEffect(() => {
		handleGetData()
	}, [])

	const [frnUsers, setFrnUsers] = useState([])

	const getApiUsers = async () => {
		return (await fetch('https://api-snv-project-movies.ru/frn-users')).json();
	}

	const handleGetData = async () => {
		const answerUsers = await getApiUsers();
		setFrnUsers(answerUsers)
		setTimeout(() => {
			handleGetData()
		}, 10000)
	}

	return (
		<section className='contacts'>
			<div className='contacts-wrapper'>
				<h1>FRN-link</h1>
				<p>Обновление раз в 10 секунд</p>
				<h4>Сейчас онлайн:</h4>
				<ul className='frn-users'>
					{
						frnUsers.map((item) => {
							return (
								<li key={item.user}>
									{
										item.user
									}
								</li>
							)
						})
					}
				</ul>

				<button onClick={handleGetData}>
					Ручное обновление списка участинков линка
				</button>
			</div>
		</section>
	)
}

export default Contacts;