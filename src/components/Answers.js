import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useStoreContext } from "../common/store.context";

const Answers = ({ initOptions }) => {
  const { setAnswer, isTimerActive } = useStoreContext();
  const [options, setOptions] = useState(initOptions);
  const [chooseOption, setChooseOption] = useState("");


  useEffect(() => {
    setOptions(initOptions);
  }, [initOptions]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.droppableId !== result.source.droppableId) {
      setChooseOption(result.draggableId);
      setAnswer(result.draggableId);
    } 
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="answerArea">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={snapshot.isDraggingOver ? "flex text-white bg-blue-200 h-14 items-center justify-center align-middle border-2 border-blue-400 rounded-md w-60 mb-4"
              : "flex text-white h-14 items-center justify-center align-middle border-2 border-dashed border-blue-300 rounded-md w-60 mb-4"}
          >
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              id="answerArea"
              className="hidden"
            >
              {chooseOption} 
            </div>
            {provided.placeholder}
            <div className="answerAreaText">
              {snapshot.isDraggingOver || isTimerActive ? "" : "Sem vlož odpoveď"}
            </div>
          </div>
        )}
      </Droppable>
      <Droppable droppableId="optionArea" isDropDisabled={true}>
        {(provided) => (
          <div
            id="optionArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="grid grid-flow-row"
          >
            {options.map((item, index) => (
              <Draggable key={item} draggableId={item} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={snapshot.isDragging ? "bg-purple-300 text-white border-2 border-purple-300 font-bold rounded-md flex items-center justify-center w-60 h-14"
                      : "bg-blue-400 text-white hover:bg-purple-300 border-2 hover:border-purple-300 border-blue-400 font-bold mb-5 rounded-md flex items-center justify-center w-60 h-14"}
                  >
                    {item}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Answers;
