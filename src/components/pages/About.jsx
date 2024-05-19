import { useContext } from 'react';
import { ThemeContext } from '../../hooks/context/ThemeContext';

import '../../styles/layout/_changetheme.scss';

const About = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<section className={`about ${theme === 'dark' ? 'dark-theme' : ''}`} onClick={toggleTheme}>
			<div className='container'>
				<div className='about__wrapper'>
					<div className='about__background'></div>
					<div className='about__title'>
						<h2>Sobre Nós</h2>
					</div>
					<div className='about__img1'>
						<img className='img-grid' src='/fazenda-1.jpeg' alt='imagem de fazenda' />
					</div>
					<div className='about__content'>
						<h3>Lorem</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti obcaecati omnis nemo quod, fugiat, iste molestiae modi velit rem odit pariatur temporibus sint. Deleniti libero nisi
							sunt perspiciatis praesentium debitis odio ratione quaerat eveniet cum ut, deserunt nostrum, amet et, doloribus animi voluptates asperiores id earum ex? Sed unde adipisci consectetur et
							inventore qui laudantium cum excepturi aut cumque odit veritatis maiores doloremque exercitationem enim aperiam beatae asperiores vel nemo iusto dicta, obcaecati esse ea delectus!
						</p>
					</div>
					<div className='about__img2'>
						<img className='img-grid' src='/fazenda-2.jpeg' alt='imagem de fazenda' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
