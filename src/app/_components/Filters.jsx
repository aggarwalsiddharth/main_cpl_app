import React from "react";

const Filters = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-xl font-extrabold font-thin">CPL PRODUCTION BOARD</h1>
      <div className="flex space-x-6">
        <button className="rounded bg-gray-200 px-3 py-1">Board</button>
        <button className="rounded bg-gray-200 px-3 py-1">Time</button>
        <button className="rounded bg-gray-200 px-3 py-1">In Progress</button>
        <button className="rounded bg-gray-200 px-3 py-1">Done</button>
      </div>
    </div>
  );
};

export default Filters;
