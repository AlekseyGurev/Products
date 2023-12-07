import Logo from '../../ui/logo/logo';
import Copyright from '../../ui/copyright/copyright';
import './style.css';

const Footer = () => {
	return (
		<footer className="footer">
			<Logo />
			<Copyright>2023</Copyright>
		</footer>
	);
};

export default Footer;
