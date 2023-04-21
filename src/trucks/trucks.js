import cranePhoto1 from '../images/crane-photo-1.jpg';
import cranePhoto2 from '../images/crane-photo-2.jpg';
import cranePhoto3 from '../images/crane-photo-3.jpg';

import realizedPhoto1 from '../images/realized-photo-1.jpg';
import realizedPhoto2 from '../images/realized-photo-2.jpg';
import realizedPhoto3 from '../images/realized-photo-3.jpg';
import realizedPhoto4 from '../images/realized-photo-4.jpg';
import realizedPhoto5 from '../images/realized-photo-5.jpg';
import realizedPhoto6 from '../images/realized-photo-6.jpg';
import realizedPhoto7 from '../images/realized-photo-7.jpg';

import catalogPhoto1 from '../images/catalog-photo-1.jpg';
import catalogPhoto2 from '../images/catalog-photo-2.jpg';
import catalogPhoto3 from '../images/catalog-photo-3.jpg';
import catalogPhoto4 from '../images/catalog-photo-4.jpg';
import catalogPhoto5 from '../images/catalog-photo-5.jpg';
import catalogPhoto6 from '../images/catalog-photo-6.jpg';
import catalogPhoto7 from '../images/catalog-photo-7.jpg';
import catalogPhoto8 from '../images/catalog-photo-8.jpg';

import servicesPhoto1 from '../images/services-photo-1.jpg';
import servicesPhoto2 from '../images/services-photo-2.jpg';
import servicesPhoto3 from '../images/services-photo-3.jpg';
import servicesPhoto4 from '../images/services-photo-4.jpg';
import servicesPhoto5 from '../images/services-photo-5.jpg';
import servicesPhoto6 from '../images/services-photo-6.jpg';

export const trucksCrane = [
	{ id: 0, image: cranePhoto1, nameRU: 'Гусиничный кран', about: 'Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.', link: '/excavator' },
	{ id: 1, image: cranePhoto2, nameRU: 'Автомбильный кран', about: 'Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.', link: '/excavator' },
	{ id: 2, image: cranePhoto3, nameRU: 'Фронтальный погрузчик', about: 'Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.', link: '/excavator' },
]

export const trucksRealized = [
	{
		id: 0,
		image: realizedPhoto1,
		nameRU: 'Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750',
		addres: ' Калужская обл., Дзержинский район, пос. Полотняный завод',
		about: 'Монтаж вакуумных колонн К-201 и К-2 «Техническое перевооружение установки АТ-101»Монтаж произведен двумя гусеничными кранами LIEBHERR LR1300 и LIEBHERR LR1750.',
		link: '/excavator'
	},
	{
		id: 1,
		image: realizedPhoto2,
		nameRU: 'Монтаж сегментов моста автокраном LIEBHERR LTM1500',
		addres: '',
		about: 'Автокран LIEBHERR LTM1500 монтирует сегменты металлического пролетного строения моста.',
		link: '/excavator'
	},
	{
		id: 2,
		image: realizedPhoto3,
		nameRU: 'Перегрузка дизельного двигателя автокраном LIEBHERR LTM1250',
		addres: 'г.Жуковский',
		about: 'Перегрузка дизельного двигателя автокраном LIEBHERR LTM1250',
		link: '/excavator'
	},
	{
		id: 3,
		image: realizedPhoto4,
		nameRU: 'Разгрузка сухогруза кранами LIEBHERR LTM 1250 LIEBHERR LTM 1500',
		addres: 'Г. Кстово, причал «Логопром»',
		about: 'Разгрузка сухогруза на правом берегу р.Волга 933 км судового хода кранами LIEBHERR LTM 1250 LIEBHERR LTM 1500',
		link: '/excavator'
	},
	{
		id: 4,
		image: realizedPhoto5,
		nameRU: 'Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500',
		addres: 'г.Туапсе',
		about: 'Разгрузка и монтаж трансформатора ТРДН 80000-110 весом 90т автокраном LIEBHERR LTM1500 грузоподъемностью 500т.',
		link: '/excavator'
	},
	{
		id: 5,
		image: realizedPhoto6,
		nameRU: 'Погрузка, перевозка и разгрузка КТГ',
		addres: 'Москва-Сити',
		about: '',
		link: '/excavator'
	},
	{
		id: 6,
		image: realizedPhoto7,
		nameRU: 'Перегрузка дизельного двигателя автокраном LIEBHERR LTM1250',
		addres: 'порт Беседы',
		about: 'Два крана LIEBHERR LTM1500 и LIEBHERR LTM1400. Перевалка грузов максимальным весом 140 тонн в поту Беседы.',
		link: '/excavator'
	}
]

export const trucksCatalog = [
	{ id: 0, image: catalogPhoto1, type: 'automobileCrane', nameRU: 'LTM 1040', loadCapacity: 40, departureArrow: 35, liftingHeight: 30, link: '/excavator' },
	{ id: 1, image: catalogPhoto2, type: 'automobileCrane', nameRU: 'LTM 1120', loadCapacity: 120, departureArrow: 64, liftingHeight: 57, link: '/excavator' },
	{ id: 2, image: catalogPhoto3, type: 'automobileCrane', nameRU: 'LTM 1250', loadCapacity: 250, departureArrow: 70, liftingHeight: 62, link: '/excavator' },
	{ id: 3, image: catalogPhoto8, type: 'automobileCrane', nameRU: 'LTM 1400', loadCapacity: 400, departureArrow: 80, liftingHeight: 72, link: '/excavator' },
	{ id: 4, image: catalogPhoto4, type: 'crawlerCrane', nameRU: 'LR 1300', loadCapacity: 300, departureArrow: 90, liftingHeight: 83, link: '/excavator' },
	{ id: 5, image: catalogPhoto5, type: 'crawlerCrane', nameRU: 'LR 1750', loadCapacity: 750, departureArrow: 140, liftingHeight: 128, link: '/excavator' },
	{ id: 6, image: catalogPhoto6, type: 'lowFrameTrawl', nameRU: 'NOOTEBOOM OVB 102 06', loadCapacity: 131, link: '/excavator' },
	{ id: 7, image: catalogPhoto7, type: 'lowFrameTrawl', nameRU: 'ES-GE Esge 5 VON-25-50.4.H13', loadCapacity: 82, link: '/excavator' },
]

export const trucksServices = [
	{ id: 0, nameRU: 'Аренда', image: servicesPhoto1, title: 'Аренда мобильных автокранов Liebherr', link: '/excavator' },
	{ id: 1, nameRU: 'Аренда', image: servicesPhoto2, title: 'Аренда гусеничных кранов Liebherr', link: '/excavator' },
	{ id: 2, nameRU: 'Аренда', image: servicesPhoto3, title: 'Аренда низкорамных тралов', link: '/excavator' },
	{ id: 3, nameRU: 'Аренда', image: servicesPhoto4, title: 'Перевозка негабаритного и тяжеловесного груза', link: '/excavator' },
	{ id: 4, nameRU: 'Аренда', image: servicesPhoto5, title: 'Разработка ППРК', link: '/excavator' },
	{ id: 5, nameRU: 'Аренда', image: servicesPhoto6, title: 'Выезд специалиста на объект', link: '/excavator' },
]