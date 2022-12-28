import React from 'react';
import { AnswerMessageType } from '../common/store.context';

const AnswerMessage = () => {
  return (
    <div>
      <div id={AnswerMessageType.Correct} className="bg-green-600 hidden bg-opacity-60 answer-message">
        Správna odpoveď!
      </div>
      <div id={AnswerMessageType.Incorrect} className="bg-red-500 hidden bg-opacity-70 answer-message">
        Nesprávna odpoveď!
      </div> 
    </div>
   
  );
}

export default AnswerMessage;