import './style.css';
import Logo from '../../ui/logo/logo';
import Navigation from '../navigation/navigation';

const Header = () => {
	return (
		<header className="header">
			<Logo />
			<Navigation />
		</header>
	);
};

export default Header;
