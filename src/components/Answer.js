import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
  minHeight: 150,
});

const Answer = ({ initOptions }) => {
  const [options, setOptions] = useState();

  useEffect(() => {
    setOptions(initOptions);
  }, []);

  const onDragEnd = (result) => {
    // dropped outside the list
    console.log(result);
    if (!result.destination) {
      return;
    }

    if (result.destination.droppableId !== result.source.droppableId) {
      const newItems = options.filter(
        (item) => item.key === result.source.draggableId
      );
      setOptions(newItems);
      return;
    }

    const reorderedItems = reorder(
      options,
      result.source.index,
      result.destination.index
    );
    setOptions(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="answerArea">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              ...getListStyle(snapshot.isDraggingOver),
              minHeight: "200px",
              backgroundColor: "purple",
            }}
          >
            Mnam
          </div>
        )}
      </Droppable>
      <Droppable droppableId="optionArea">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {options.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {item.content}
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

export default Answer;
