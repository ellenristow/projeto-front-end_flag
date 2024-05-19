import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ChangeTheme from '../hooks/ChangeTheme';


const socialNetworks = [
	{ name: 'instagram', icon: <FaInstagram /> },
	{ name: 'tiktok', icon: <FaTiktok /> },
	{ name: 'facebook', icon: <FaFacebook /> },
];

const weatherDescriptions = {
	Thunderstorm: 'Tempestade',
	Drizzle: 'Garoa',
	Rain: 'Chuva',
	Snow: 'Neve',
	Mist: 'Neblina',
	Smoke: 'Fumaça',
	Haze: 'Nevoeiro',
	Dust: 'Poeira',
	Fog: 'Nevoeiro',
	Sand: 'Areia',
	Ash: 'Cinzas',
	Squall: 'Rajadas de Vento',
	Tornado: 'Tornado',
	Clear: 'Céu Limpo',
	Clouds: 'Nublado',
};

const Footer = () => {

	const [weather, setWeather] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=brusque&units=metric&appid=2c5131c26da11272018716e84632b1a0`);
				setWeather(response.data);
			} catch (error) {
				setError(error.response.data.message);
			}
		};

		fetchWeather();
	}, []);

	return (
		<section className='footer'>
			<div className='container'>
				<div>
					{weather && (
						<div className='container__tempo'>
							<div className='container__tempo-cidade'>
								<p>{weather.name}</p>
							</div>
							<div className='container__tempo-temp'>
								<h5>{Math.round(weather.main.temp)}ºC</h5>
							</div>
							<div className='container__tempo-icone'>
								<img id='wicon' src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt='Weather icon' />
							</div>
							<div className='container__tempo-descricao'>
								<p>{weatherDescriptions[weather.weather[0].main]}</p>
							</div>
						</div>
					)}
					{error && <p>{error}</p>}
				</div>

				<div className='container__info'>
					<h5>Sítio Vó Rosa</h5>
					<p>Estr. Geral da Limeira, 2320</p>
					<p>Limeira Alta, Brusque, SC</p>
					<p>Brasil</p>
				</div>
				<div className='container__icons'>
					<div className='container__icons__socialnetworks'>
						{socialNetworks.map(network => (
							<a href='#' className='social-btn' id={network.name} key={network.name}>
								{network.icon}
							</a>
						))}
					</div>
					<div className='container__icons__theme'>
						<ChangeTheme />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
