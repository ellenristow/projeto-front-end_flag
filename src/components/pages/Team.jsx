import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../hooks/context/ThemeContext';

import '../../styles/layout/_changetheme.scss';
const Team = () => {
	const [teamData, setTeamData] = useState([]);

	useEffect(() => {
		const fetchTeamData = async () => {
			try {
				const response = await fetch('/src/data/team.json');
				if (!response.ok) {
					throw new Error('Erro ao carregar os dados da equipe');
				}
				const data = await response.json();
				setTeamData(data.team);
			} catch (error) {
				console.error(error);
			}
		};

		fetchTeamData();
	}, []);

	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<section className={`team ${theme === 'dark' ? 'dark-theme' : ''}`} onClick={toggleTheme}>
			<div className='container'>
				<div className='team__wrapper'>
					<div className='team__title'>
						<h2>Nossa Equipe</h2>
					</div>
					<div className='team__cards'>
						{teamData.map(member => (
							<div key={member.id} className='team__card'>
								<div className='team__card__image'>
									<img src={member.image} alt='foto aleatória do unsplash' />
								</div>
								<div className='team__card__description'>
									<h5>{member.name}</h5>
									<p>{member.role}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
