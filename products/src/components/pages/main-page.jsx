import './style.css';
import About from '../blocks/about/about';
import AnswerList from '../blocks/answer-list/answer-list';

const MainPage = (props) => {
	return (
		<>
			<About />
			<AnswerList {...props} />
		</>
	);
};

export default MainPage;
