import logo from '../../../assets/logo.svg';
import './style.css';

const Logo = () => {
	return (
		<a href="/" className="logo__link">
			<img src={logo} alt="логотип" />
			<span className="logo__text">Фермерские продукты</span>
		</a>
	);
};

export default Logo;
