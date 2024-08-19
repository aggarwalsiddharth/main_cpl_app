import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-white">CPL Production Chart</div>
        <div className="flex space-x-4">
          <button className="rounded px-3 py-2 text-white hover:bg-blue-700">
            Backlog
          </button>
          <button className="rounded px-3 py-2 text-white hover:bg-blue-700">
            Stock
          </button>
          <button className="rounded px-3 py-2 text-white hover:bg-blue-700">
            Dispatched
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
