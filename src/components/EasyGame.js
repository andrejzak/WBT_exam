import React from 'react';
import shuffleList from 'shuffle-list';
import easy from '../easy.json';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Option from './Option';

function EasyGame() {
  const data = easy;
  const shuffleLevels = (levels) => {
    return shuffleList(levels);
  }
  const levels = shuffleLevels(data);

  const onDropHandler = () => {
    console.log("correct")
  } 

  return (
    <div>
      <h1>levels[0].questions</h1>
      <Option name="Bratislava"/>

    </div>
  )
}

export default EasyGame;