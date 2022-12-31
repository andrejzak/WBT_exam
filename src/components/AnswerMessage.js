import React from 'react';
import { AnswerMessageType } from '../common/store.context';
import { RiCloseFill } from 'react-icons/ri';
import { RiCheckFill } from 'react-icons/ri';

const AnswerMessage = () => {
  return (
    <div>
      <div id={AnswerMessageType.Correct} className="hidden">
        <RiCheckFill className="w-16 h-16" />
      </div>
      <div id={AnswerMessageType.Incorrect} className="hidden">
        <RiCloseFill className='w-16 h-16'/>
      </div> 
    </div>
   
  );
}

export default AnswerMessage;