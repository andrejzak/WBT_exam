import Answers from "./Answers";
import Question from "./Question";

const Card = ({ question, options }) => {
  return (
    <div className="grid justify-center">
      <Question question={question} />
      <Answers initOptions={options} />
    </div>
  );
};

export default Card;
