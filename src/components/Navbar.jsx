import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
	const [menuMobile, setMenuMobile] = useState(false);

	const openMenu = () => {
		setMenuMobile(prevState => !prevState);
	};

	const closeMenu = () => {
		setMenuMobile(false);
	};

	return (
		<header>
			<div className='nav'>
				<div className='container'>
					<div className='nav__wrapper'>
						<div>
							<Link to='/'>
								<img src='/02_logo_sitio.svg' alt='logotipo' />
							</Link>
						</div>
						<nav>
							<ul className={menuMobile ? 'nav__menu active' : 'nav__menu'}>
								<li>
									<NavLink to='/about' onClick={closeMenu}>
										sobre nós
									</NavLink>
								</li>
								<li>
									<NavLink to='/eventos' onClick={closeMenu}>
										eventos
									</NavLink>
								</li>
								<li>
									<NavLink to='/team' onClick={closeMenu}>
										Equipe
									</NavLink>
								</li>
								<li>
									<NavLink to='/contato' onClick={closeMenu}>
										contato
									</NavLink>
								</li>
								<li>
									<NavLink to='/blog' onClick={closeMenu}>
										blog
									</NavLink>
								</li>
							</ul>
						</nav>
						<button className='nav__hamburger' onClick={openMenu}>
							{menuMobile ? <RxCross2 /> : <FaBars />}
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
