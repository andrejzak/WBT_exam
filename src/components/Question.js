import React from "react";

const Question = ( {question} ) => {
  return (
    <div className="flex justify-center text-red-300 text-lg font-bold mb-5">
      {question}
    </div>
  );
};

export default Question;
