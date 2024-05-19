import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import '../styles/layout/_changetheme.scss';

const ChangeTheme = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	const handleClick = event => {
		event.stopPropagation();
		toggleTheme();
	};

	return (
		<div onClick={handleClick}>
			{theme === 'light' ? <MdOutlineLightMode className='light' /> : <MdOutlineDarkMode className='dark-theme' />}
		</div>
	);
};

export default ChangeTheme;
