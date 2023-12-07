import MainPage from '../../pages/main-page';
import Header from '../header/header';
import Footer from '../footer/footer';
import './style.css';

const PageWrapper = (props) => {
	return (
		<>
			<Header />
			<main className="page-wrapper__main">
				<MainPage {...props} />
			</main>
			<Footer />
		</>
	);
};

export default PageWrapper;
