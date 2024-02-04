import './style.css';

export const TitleSize = {
	BIG: 'big',
	SMALL: 'small',
	DEFAULT: '',
	EXTRA_SMALL: 'extra',
};

const Title = ({ children, size }) => {
	return (
		<>
			<h1 className={`title${size ? ` title_${size}` : ''}`}>{children}</h1>
		</>
	);
};

export default Title;
