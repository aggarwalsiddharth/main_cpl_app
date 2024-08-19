import React from "react";
import Column from "src/app/_components/Column";
import Card from "src/app/_components/Card";

const Board = () => {
  return (
    <div className="mt-20 flex justify-between space-x-1 p-4">
      <div className="h-screen w-1/5 rounded bg-gray-200 p-2">
        <h2 className="mb-2 text-lg font-bold">ORDER RECEIVED</h2>
        {/* <Column /> */}
        <Card
          id="1234"
          order_by="id_1234"
          party_name="ABC Traders"
          order_type="type_1"
          order_date="12-08-2024"
          pi_file="pi_1234.pdf"
          etd="2"
          availability="true"
          priority="Normal"
        />
      </div>
      <div className="h-screen w-1/5 rounded bg-gray-200 p-2">
        <h2 className="mb-2 text-lg font-bold">ORDER APPROVED</h2>
        {/* <Column /> */}
        {/* Cards will go here */}
      </div>
      <div className="h-screen w-1/5 rounded bg-gray-200 p-2">
        <h2 className="mb-2 text-lg font-bold">ORDER IN PRODUCTION</h2>
        {/* <Column /> */}
        {/* Cards will go here */}
      </div>
      <div className="h-screen w-1/5 rounded bg-gray-200 p-2">
        <h2 className="mb-2 text-lg font-bold">ORDER READY</h2>
        {/* <Column /> */}
        {/* Cards will go here */}
      </div>
      <div className="h-screen w-1/5 rounded bg-gray-200 p-2">
        <h2 className="mb-2 text-lg font-bold">ORDER DISPATCHED</h2>
        {/* <Column /> */}
        {/* Cards will go here */}
      </div>
    </div>
  );
};

export default Board;
