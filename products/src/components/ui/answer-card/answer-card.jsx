import Title, { TitleSize } from '../title/title';
import './style.css';

const AnswerCard = ({ title, about, image, feature }) => {
	const colorCard =
		feature === 'Магазинные продукты' ? 'answer-card--red' : 'answer-card--green';
	return (
		<article className={`answer-card ${colorCard}`}>
			<div className="answer-card__title">
				<div className="answer-card__title-wrapper">
					<img src={image} alt="картинка" width={52} height={52} />
					<div>
						<span className="answer-card__decription">{feature}</span>
						<Title size={TitleSize.SMALL}>{title}</Title>
					</div>
				</div>
			</div>
			<p>{about}</p>
		</article>
	);
};

export default AnswerCard;

//className="answer-card answer-card--red"
