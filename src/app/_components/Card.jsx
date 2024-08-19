// @ts-nocheck

import React from "react";

const Card = ({
  id,
  order_by,
  party_name,
  order_type,
  order_date,
  pi_file,
  etd,
  availability,
  priority,
}) => {
  return (
    <div className="mb-2 rounded bg-white p-4 shadow">
      <h3 className="text-gray-800">
        {"PI -"} {id}
      </h3>
      <p>
        {"Order By:"} {order_by}
        <br />
        {"Party Name:"} {party_name}
        <br />
        {"Order Type:"} {order_type}
        <br />
        {"Order Date:"} {order_date}
        <br />
        {"Order PI:"} {pi_file}
        <br />
        {"Order ETD:"} {etd}
        <br />
        {"Raw Material Availability:"} {availability}
        <br />
        {"Order Priority:"} {priority}
      </p>
    </div>
  );
};

export default Card;
