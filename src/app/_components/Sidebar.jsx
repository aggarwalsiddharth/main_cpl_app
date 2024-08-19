import React from "react";

const Sidebar = () => {
  return (
    <aside className="flex h-full w-16 flex-col items-center space-y-4 bg-gray-200 p-2">
      <button className="mt-20 rounded p-2 text-white hover:bg-gray-700">
        <i className="fas fa-home">Hello</i>
      </button>
      <button className="rounded p-2 text-white hover:bg-gray-700">
        <i className="fas fa-tasks"></i>
      </button>
      <button className="rounded p-2 text-white hover:bg-gray-700">
        <i className="fas fa-cog"></i>
      </button>
    </aside>
  );
};

export default Sidebar;
