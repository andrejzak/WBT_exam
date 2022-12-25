import Answer from "./Answer";
import Question from "./Question";

const Card = ({ question, options }) => {
  return (
    <div>
      <Question />
      <Answer />
    </div>
  );
};

export default Card;
