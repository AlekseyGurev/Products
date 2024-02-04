import MainPage from '../../pages/main-page/main-page';
import Header from '../header/header';
import Footer from '../footer/footer';
import './style.css';
import { Order } from '../../pages/order/Order';

const PageWrapper = (props) => {
	return (
		<>
			<Header />
			<main className="page-wrapper__main">
				<Order {...props} />
				{/* <MainPage {...props} /> */}
			</main>
			<Footer />
		</>
	);
};

export default PageWrapper;
