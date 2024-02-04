import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { products, answers } from '../../mocks/index';
import './App.css';

const App = () => {
	return <PageWrapper mocks={answers} products={products} />;
};

export default App;
