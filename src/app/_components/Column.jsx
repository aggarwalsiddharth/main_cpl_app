// @ts-nocheck
import React from "react";
import Task from "src/app/_components/Task";
import { Droppable } from "react-beautiful-dnd";

const Column = (props) => {
  return (
    <div className="h-screen w-1/5 rounded bg-gray-200 p-2">
      <h2 className="mb-2 text-center text-lg font-bold">
        {props.column.title}
      </h2>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <div
            className="p-8"
            innerRef={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
