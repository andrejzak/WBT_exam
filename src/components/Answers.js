import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useStoreContext } from "../common/store.context";

const Answers = ({ initOptions }) => {
  const { setAnswer } = useStoreContext();
  const [options, setOptions] = useState(initOptions);

  useEffect(() => {
    setOptions(initOptions);
  }, [initOptions]);

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    if (result.destination.droppableId !== result.source.droppableId) {
      setAnswer(result.draggableId);
      const newItems = options.filter(
        (item) => item.key === result.source.draggableId
      );
      setOptions(newItems);
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="answerArea">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={snapshot.isDraggingOver ? "flex text-white bg-blue-200 h-14 items-center justify-center align-middle border border-blue-400 rounded-md w-60 mb-4"
              : "flex text-white h-14 items-center justify-center align-middle border border-blue-400 rounded-md w-60 mb-4"}
          >
            {provided.placeholder}
            {snapshot.isDraggingOver ? "" : "Sem vlož odpoveď"}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="optionArea" isDropDisabled={true}>
        {(provided, snapshot) => (
          <div
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
                    className={snapshot.isDragging ? "bg-purple-300 text-white font-bold rounded-md flex items-center justify-center w-60 h-14"
                      : "bg-blue-400 hover:bg-purple-300 transform hover:translate-x-1 duration-75 ease-in text-white font-bold mb-5 rounded-md flex items-center justify-center w-60 h-14"}
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
