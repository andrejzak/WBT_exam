import Answers from "./Answers";
import Question from "./Question";
import AnswerMessage from "./AnswerMessage";

const Card = ({ question, options }) => {
  return (
    <div className="grid justify-center relative">
      <AnswerMessage />
      <Question question={question} />
      <Answers initOptions={options} />
    </div>
  );
};

export default Card;
