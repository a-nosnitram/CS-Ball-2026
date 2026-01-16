import React from "react";
import "./ProgramItem.css";

function ProgramItem({
  time,
  description,
  align = "right",
  offsetX = "10rem",
}) {
  const translateX = align === "right" ? offsetX : `-${offsetX}`;

  return (
    <div
      className={`program-item ${align}`}
      style={{ transform: `translateX(${translateX})` }}
    >
      <h2>{time}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProgramItem;
