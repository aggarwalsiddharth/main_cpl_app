import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <div
          className="mb-2 flex border-2 border-r-2 border-solid border-gray-800 p-8"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        >
          {props.task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
