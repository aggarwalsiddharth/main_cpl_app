// @ts-nocheck
"use client";
import React from "react";
import initialData from "src/app/_components/initialData";
import Card from "src/app/_components/Card";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "src/app/_components/Column";

const Board = () => {
  const state = initialData;
  // console.log(state);
  const onDragEnd = (result) => {
    //TODO
  };
  return (
    // <div className="mt-20 flex justify-between space-x-1 p-4">
    //   <div className="h-screen w-1/5 rounded bg-gray-200 p-2">
    //     <h2 className="mb-2 text-lg font-bold">ORDER RECEIVED</h2>
    //     {/* <Column /> */}
    //     <Card
    //       id="1234"
    //       order_by="id_1234"
    //       party_name="ABC Traders"
    //       order_type="type_1"
    //       order_date="12-08-2024"
    //       pi_file="pi_1234.pdf"
    //       etd="2"
    //       availability="true"
    //       priority="Normal"
    //     />
    //   </div>
    //   <div className="h-screen w-1/5 rounded bg-gray-200 p-2">
    //     <h2 className="mb-2 text-lg font-bold">ORDER APPROVED</h2>
    //     {/* <Column /> */}
    //     {/* Cards will go here */}
    //   </div>
    //   <div className="h-screen w-1/5 rounded bg-gray-200 p-2">
    //     <h2 className="mb-2 text-lg font-bold">ORDER IN PRODUCTION</h2>
    //     {/* <Column /> */}
    //     {/* Cards will go here */}
    //   </div>
    //   <div className="h-screen w-1/5 rounded bg-gray-200 p-2">
    //     <h2 className="mb-2 text-lg font-bold">ORDER READY</h2>
    //     {/* <Column /> */}
    //     {/* Cards will go here */}
    //   </div>
    //   <div className="h-screen w-1/5 rounded bg-gray-200 p-2">
    //     <h2 className="mb-2 text-lg font-bold">ORDER DISPATCHED</h2>
    //     {/* <Column /> */}
    //     {/* Cards will go here */}
    //   </div>
    // </div>
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mt-20 flex justify-between space-x-1 p-4">
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    </DragDropContext>
  );
};

export default Board;
