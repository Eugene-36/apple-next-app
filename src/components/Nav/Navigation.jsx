import { CartIcon, Logo, SearchIcon } from '../icons';
import style from './style.module.css';

const Navigation = () => {
	const navItems = [
		{ name: <Logo colorStyle={style.nav__icon} />, href: '#', id: 1 },
		{ name: 'Store', href: '#', id: 2 },
		{ name: 'Mac', href: '#', id: 3 },
		{ name: 'iPad', href: '#', id: 4 },
		{ name: 'iPhone', href: '#', id: 5 },
		{ name: 'Watch', href: '#', id: 6 },
		{ name: 'Vision', href: '#', id: 7 },
		{ name: 'AirPods', href: '#', id: 8 },
		{ name: 'TV & Home', href: '#', id: 9 },
		{ name: 'Entertainment', href: '#', id: 10 },
		{ name: 'Accessories', href: '#', id: 11 },
		{ name: 'Support', href: '#', id: 12 },
		{
			name: <SearchIcon colorStyle={style.nav__icon} />,
			href: '#',
			id: 13,
		},
		{ name: <CartIcon colorStyle={style.nav__icon} />, href: '#', id: 14 },
	];
	return (
		<>
			<nav className={style.nav}>
				<div className="container">
					<ul className={style.nav__links}>
						{navItems.map((item) => (
							<li
								key={item.id}
								className={style['nav__links-item']}
							>
								<a href={item.href} className={style.nav__link}>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
