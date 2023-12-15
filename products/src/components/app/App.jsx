import PageWrapper from '../layout/page-wrapper/page-wrapper';
import mocks from '../../mocks/mocks';
import { GlobalStyle } from './styles';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<PageWrapper answers={mocks} />;
		</>
	);
};

export default App;
