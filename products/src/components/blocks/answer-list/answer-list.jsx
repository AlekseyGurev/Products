import Title from '../../ui/title/title';
import AnswerCard from '../../ui/answer-card/answer-card';
import Button from '../../ui/button/button';
import './style.css';

const AnswerList = (props) => {
	return (
		<section className="answer-list">
			{props.answers?.length ? (
				<>
					<Title>Почему фермерские продукты лучше?</Title>
					<ul className="answer-list__list">
						{props.answers.map((answer) => (
							<li className="answer-list__item" key={answer.id}>
								<AnswerCard {...answer} />
							</li>
						))}
					</ul>
					<Button>Купить</Button>
				</>
			) : null}
		</section>
	);
};

export default AnswerList;
